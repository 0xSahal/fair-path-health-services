import dns from 'dns'
import mongoose from 'mongoose'

// Helps MongoDB Atlas connections on some Windows/network setups
if (typeof dns.setDefaultResultOrder === 'function') {
  dns.setDefaultResultOrder('ipv4first')
}

interface MongooseCache {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

declare global {
  var mongoose: MongooseCache | undefined
}

const cached: MongooseCache = global.mongoose ?? { conn: null, promise: null }
global.mongoose = cached

function getMongoUri(): string {
  const uri = process.env.MONGODB_URI?.trim()
  if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable')
  }

  // mongodb+srv requires a DNS SRV lookup that often fails on Windows dev (ECONNREFUSED querySrv)
  if (
    process.env.NODE_ENV === 'development' &&
    process.platform === 'win32' &&
    uri.startsWith('mongodb+srv://')
  ) {
    throw new Error(
      'MONGODB_URI still uses mongodb+srv://. In Atlas: Connect → Drivers → choose ' +
        '"Standard connection string" (must start with mongodb://, include :27017 hostnames). ' +
        'Update .env.local and restart npm run dev.',
    )
  }

  return uri
}

function logConnectionHint(error: unknown) {
  const err = error as { code?: string; syscall?: string }
  if (err?.code === 'ECONNREFUSED' && err?.syscall === 'querySrv') {
    console.error(
      '[db] MongoDB SRV DNS lookup failed. In Atlas: Connect → Drivers → copy the ' +
        '"Standard connection string" (mongodb://..., not mongodb+srv://) into MONGODB_URI, ' +
        'or check VPN/firewall/DNS. Then restart the dev server.',
    )
  }
}

async function dbConnect() {
  const mongoUri = getMongoUri()

  if (cached.conn) return cached.conn

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 15000,
      dbName: process.env.MONGODB_DB_NAME?.trim() || 'fairpath',
    }
    cached.promise = mongoose.connect(mongoUri, opts).then((mongooseInstance) => mongooseInstance)
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    logConnectionHint(e)
    throw e
  }

  return cached.conn
}

export default dbConnect

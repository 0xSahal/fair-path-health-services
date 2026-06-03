import mongoose from 'mongoose'

const ContactPageInquirySchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
      maxlength: 50,
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
      maxlength: 50,
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    iAm: {
      type: String,
      trim: true,
      default: null,
    },
    servicesInterested: {
      type: [String],
      default: [],
    },
    county: {
      type: String,
      required: [true, 'County is required'],
      trim: true,
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      maxlength: 2000,
    },
  },
  { timestamps: true },
)

const ContactPageInquiry =
  mongoose.models.ContactPageInquiry ||
  mongoose.model('ContactPageInquiry', ContactPageInquirySchema, 'contact_page_inquiries')

export default ContactPageInquiry

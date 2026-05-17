export type CountyArea = {
  county: string
  cities: string[]
  note: string
}

export const SERVICE_AREAS: CountyArea[] = [
  {
    county: 'Carroll',
    cities: ['Carrollton', 'Villa Rica', 'Bremen'],
    note: 'Availability varies by schedule and care level.',
  },
  {
    county: 'Cobb',
    cities: ['Marietta', 'Smyrna', 'Kennesaw'],
    note: 'Flexible care hours offered based on needs.',
  },
  {
    county: 'Coweta',
    cities: ['Newnan', 'Senoia', 'Peachtree City'],
    note: 'Ask about personal care and transportation availability.',
  },
  {
    county: 'DeKalb',
    cities: ['Decatur', 'Tucker', 'Stone Mountain'],
    note: 'Support for daily care, coordination, and specialized programs.',
  },
  {
    county: 'Douglas',
    cities: ['Douglasville', 'Villa Rica', 'Austell'],
    note: 'Care options available for seniors and medically fragile clients.',
  },
  {
    county: 'Fayette',
    cities: ['Fayetteville', 'Peachtree City', 'Tyrone'],
    note: 'Request a free assessment to confirm the best schedule.',
  },
  {
    county: 'Forsyth',
    cities: ['Cumming', 'Suwanee', 'Johns Creek'],
    note: 'Coverage depends on caregiver availability and hours.',
  },
  {
    county: 'Fulton',
    cities: ['Atlanta', 'Alpharetta', 'Sandy Springs', 'Roswell'],
    note: 'Serving a wide range of neighborhoods and schedules.',
  },
  {
    county: 'Gwinnett',
    cities: ['Lawrenceville', 'Duluth', 'Norcross', 'Lilburn'],
    note: 'Care plans tailored by neighborhood and care level.',
  },
  {
    county: 'Paulding',
    cities: ['Dallas', 'Hiram', 'Powder Springs'],
    note: 'Ask about personal care, respite, and transportation options.',
  },
]


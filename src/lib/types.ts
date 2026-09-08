export type TourType = 'classic' | 'private' | 'sunset' | 'unsure'

export interface Enquiry {
  id: string
  createdAt: string
  name: string
  email: string
  phone: string
  date: string
  guests: number
  tourType: TourType
  message: string
}

export interface EnquiryInput {
  name: string
  email: string
  phone: string
  date: string
  guests: number
  tourType: TourType
  message: string
}

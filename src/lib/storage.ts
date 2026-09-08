import type { Enquiry, EnquiryInput } from './types'

export const ENQUIRIES_KEY = 'jcwine-enquiries-v1'

export function uid(prefix = 'enq'): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

export function loadEnquiries(): Enquiry[] {
  try {
    const raw = localStorage.getItem(ENQUIRIES_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as Enquiry[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveEnquiry(input: EnquiryInput): Enquiry {
  const enquiry: Enquiry = {
    id: uid(),
    createdAt: new Date().toISOString(),
    ...input,
  }
  const all = [enquiry, ...loadEnquiries()]
  localStorage.setItem(ENQUIRIES_KEY, JSON.stringify(all))
  return enquiry
}

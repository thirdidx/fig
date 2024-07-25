import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function scrolltoHash(evt?: React.MouseEvent, element_id?: string) {
  evt?.preventDefault()

  const element = document.getElementById(element_id)
  element?.scrollIntoView({
    behavior: 'smooth',
    // block: 'center',
    // inline: 'nearest',
  })
}

import { type ClassValue, clsx } from 'clsx'
import { useRouter } from 'next/router'
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

export const scrolltoHash = function (element_id: string) {
  const element = document.getElementById(element_id)
  element?.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: 'nearest',
  })
}

export function scrollToTickets(evt?: React.MouseEvent) {
  evt?.preventDefault()

  const element = document.getElementById('tickets')
  console.log('element', element)
  element?.scrollIntoView({
    behavior: 'smooth',
  })
}

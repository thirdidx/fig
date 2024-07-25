'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'

import { cn, scrollToTickets } from '~/lib/utils'
import { scrolltoHash } from '~/lib/utils'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export default function MenuItem({
  i,
  name,
  href,
  isPrimary,
  isButton,
  toggleOpen,
}) {
  const router = useRouter()

  const handleBuyTicketsClick = () => {
    router.push('/', '/', { scroll: false }).then(() => {
      setTimeout(() => {
        // toggleOpen(false)
        scrollToTickets()
      }, 400)
    })
  }

  const renderLinkText = () => {
    if (href === '/contact') {
      return <Link href={href}>{name}</Link>
    }

    if (href === '/#tickets') {
      if (router.pathname === '/')
        return (
          <a href="#tickets" onClick={scrollToTickets}>
            {name}
          </a>
        )
      return <div onClick={() => handleBuyTicketsClick()}>{name}</div>
    }

    return name
  }
  return (
    <motion.li
      onClick={() => toggleOpen(false)}
      className={cn(
        'text-white text-[18px] md:text-[26px] leading-none vaneer cursor-pointer underline mb-4',
        {
          'text-[24px] md:text-[56px] no-underline !mb-0': isPrimary,
          'btn mt-2 max-w-[256px] text-[24px] md:text-[33px] no-underline flex items-center justify-center':
            isButton,
        },
      )}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {renderLinkText()}
    </motion.li>
  )
}

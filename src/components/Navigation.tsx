import { motion } from 'framer-motion'
import * as React from 'react'

import { MenuItem } from './'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const items = [
  { name: 'HOME', href: '/', isPrimary: true },
  { name: 'THE FIG STORY', href: '/about', isPrimary: true },
  { name: 'DESIGNER SHOWCASE', href: '/designers', isPrimary: true },
  { name: 'SPONSORS', href: '/sponsors', isPrimary: true },
  // { name: 'GET INVOLVED', href: '/', isPrimary: true },
  // { name: 'STORE', href: '/', isPrimary: true },
  // { name: 'Stitch Buffalo', href: '/', isPrimary: false },
  { name: 'Contact us', href: '/contact', isPrimary: true },
  { name: 'Buy Tickets', href: '/#tickets', isPrimary: false, isButton: true },
]

export default function Navigation({ toggleOpen }: { toggleOpen: () => void }) {
  return (
    <motion.ul
      variants={variants}
      className="flex flex-col z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max"
    >
      {items.map(({ name, href, isPrimary, isButton }, i) => (
        <MenuItem
          key={i}
          i={i}
          name={name}
          href={href}
          isPrimary={isPrimary}
          isButton={isButton}
          toggleOpen={toggleOpen}
        />
      ))}
    </motion.ul>
  )
}

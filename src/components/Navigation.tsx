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
  { name: 'THE FIG STORY', href: '/', isPrimary: true },
  { name: 'DESIGNER SHOWCASE', href: '/', isPrimary: true },
  { name: 'SPONSORS', href: '/', isPrimary: true },
  { name: 'GET INVOLVED', href: '/', isPrimary: true },
  // { name: 'STORE', href: '/', isPrimary: true },
  { name: 'Stitch Buffalo', href: '/', isPrimary: false },
  { name: 'Contact us', href: '/', isPrimary: false },
  { name: 'Buy Tickets', href: '/', isPrimary: false, isButton: true },
]

export default function Navigation() {
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
          isPrimary={isPrimary}
          isButton={isButton}
        />
      ))}
    </motion.ul>
  )
}

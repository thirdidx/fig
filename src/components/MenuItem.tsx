import { motion } from 'framer-motion'
import * as React from 'react'

import { cn } from '~/lib/utils'

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

export const MenuItem = ({ i, name, isPrimary, isButton }) => {
  return (
    <motion.li
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
      {name}
    </motion.li>
  )
}

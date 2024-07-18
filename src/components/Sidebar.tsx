'use client'

import { motion, useCycle } from 'framer-motion'
import * as React from 'react'
import { useRef } from 'react'

import { MenuToggle } from '~/components/MenuToggle'
import { Navigation } from '~/components/Navigation'
import { useDimensions } from '~/lib/use-dimensions'

const drawer = {
  open: {
    opacity: 1,
    right: 0,
    // transition: {
    //   type: 'spring',
    //   stiffness: 100,
    //   restDelta: 2,
    // },
  },
  closed: {
    opacity: 0,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },

  // open: (height = 1000) => ({
  //   clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
  //   transition: {
  //     type: 'spring',
  //     stiffness: 20,
  //     restDelta: 2,
  //   },
  // }),
  // closed: {
  //   clipPath: 'circle(30px at 40px 40px)',
  //   transition: {
  //     delay: 0.5,
  //     type: 'spring',
  //     stiffness: 400,
  //     damping: 40,
  //   },
  // },
}

export const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
      >
        <motion.div
          className="fixed top-0 -right-[100%] bottom-0 h-screen bg-accent w-full max-w-[900px] z-20"
          variants={drawer}
        >
          <div className="relative w-full h-screen max-w-[900px]">
            <Navigation />
          </div>
        </motion.div>

        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 right-0 w-full h-screen bg-black/[.75] z-10"
          onClick={() => toggleOpen()}
        />
      )}
    </>
  )
}

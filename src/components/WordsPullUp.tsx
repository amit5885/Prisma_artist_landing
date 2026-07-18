import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface WordsPullUpProps {
  text: string
  className?: string
  showAsterisk?: boolean
  once?: boolean
}

export function WordsPullUp({
  text,
  className = '',
  showAsterisk = false,
  once = true,
}: WordsPullUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once, margin: '-50px' })
  const words = text.split(' ')

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
        transition: {
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1] as const,
        },
    },
  }

  return (
    <motion.span
      ref={ref}
      className={`inline-flex flex-wrap items-baseline ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      aria-label={text}
    >
      {words.map((word, i) => {
        const isLast = i === words.length - 1
        const showStar = showAsterisk && isLast && /a$/i.test(word)
        return (
          <span
            key={i}
            className={`mr-[0.25em] inline-block ${showStar ? 'relative' : ''}`}
          >
            <motion.span className="inline-block" variants={wordVariants}>
              {word.replace(/\*$/, '')}
            </motion.span>
            {showStar && (
              <motion.sup
                className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]"
                variants={wordVariants}
              >
                *
              </motion.sup>
            )}
          </span>
        )
      })}
    </motion.span>
  )
}

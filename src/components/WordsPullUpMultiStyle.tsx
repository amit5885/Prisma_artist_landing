import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Segment {
  text: string
  className?: string
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[]
  className?: string
  once?: boolean
}

export function WordsPullUpMultiStyle({
  segments,
  className = '',
  once = true,
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once, margin: '-50px' })

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

  const wordNodes: { word: string; className?: string; key: string }[] = []
  segments.forEach((segment, segmentIndex) => {
    segment.text.split(' ').forEach((word, wordIndex) => {
      wordNodes.push({
        word,
        className: segment.className,
        key: `${segmentIndex}-${wordIndex}`,
      })
    })
  })

  return (
    <motion.span
      ref={ref}
      className={`inline-flex flex-wrap items-baseline justify-center ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {wordNodes.map((node, i) => (
        <span
          key={node.key}
          className={`mr-[0.25em] inline-block ${i === wordNodes.length - 1 ? 'last:mr-0' : ''}`}
        >
          <motion.span
            className={`inline-block ${node.className || ''}`}
            variants={wordVariants}
          >
            {node.word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

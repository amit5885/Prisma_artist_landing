import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle'

const FEATURE_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4'

const ICON_STORYBOARD =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85'
const ICON_CRITIQUES =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85'
const ICON_IMMERSION =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85'

interface ListCard {
  type: 'list'
  title: string
  number: string
  icon: string
  items: string[]
}

interface VideoCard {
  type: 'video'
  video: string
  caption: string
}

type Card = ListCard | VideoCard

const CARDS: Card[] = [
  {
    type: 'video',
    video: FEATURE_VIDEO,
    caption: 'Your creative canvas.',
  },
  {
    type: 'list',
    title: 'Project Storyboard.',
    number: '01',
    icon: ICON_STORYBOARD,
    items: [
      'Frame-by-frame visual breakdowns',
      'Annotated shot lists and notes',
      'Version history and comparisons',
      'One-click exports to any format',
    ],
  },
  {
    type: 'list',
    title: 'Smart Critiques.',
    number: '02',
    icon: ICON_CRITIQUES,
    items: [
      'AI-driven analysis of your cuts',
      'Creative notes from the collective',
      'Integrations with your favorite tools',
    ],
  },
  {
    type: 'list',
    title: 'Immersion Capsule.',
    number: '03',
    icon: ICON_IMMERSION,
    items: [
      'Silence notifications while in flow',
      'Ambient soundscapes for focus',
      'Sync with your calendar schedule',
    ],
  },
]

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Features() {
  const gridRef = useRef<HTMLDivElement>(null)
  const inView = useInView(gridRef, { once: true, margin: '-100px' })

  return (
    <section className="relative min-h-screen bg-black px-4 py-24 md:px-6 md:py-32">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />

      <div className="relative mx-auto max-w-7xl">
        <header className="mb-12 text-center md:mb-16">
          <WordsPullUpMultiStyle
            segments={[
              {
                text: "Studio-grade workflows for visionary creators.",
                className: 'text-primary',
              },
            ]}
            className="block text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl"
          />
          <WordsPullUpMultiStyle
            segments={[
              {
                text: 'Built for pure vision. Powered by art.',
                className: 'text-gray-500',
              },
            ]}
            className="mt-2 block text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl"
          />
        </header>

        <motion.div
          ref={gridRef}
          variants={gridVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-3 sm:gap-2 md:grid-cols-2 md:gap-1 lg:h-[480px] lg:grid-cols-4"
        >
          {CARDS.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={`h-[320px] overflow-hidden rounded-2xl lg:h-full ${
                card.type === 'video'
                  ? 'relative'
                  : 'flex flex-col bg-[#212121] p-5 sm:p-6'
              }`}
            >
              {card.type === 'video' ? (
                <>
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={card.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-4 text-sm text-[#E1E0CC] sm:text-base">
                    {card.caption}
                  </p>
                </>
              ) : (
                <>
                  <div className="flex items-start justify-between">
                    <img
                      src={card.icon}
                      alt=""
                      className="h-[10px] w-[10px] rounded sm:h-3 sm:w-3"
                    />
                    <span className="text-xs text-gray-500">
                      ({card.number})
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg text-primary sm:text-xl">
                    {card.title}
                  </h3>

                  <ul className="mt-4 flex flex-col gap-2">
                    {card.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-400"
                      >
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-xs sm:text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#"
                    className="mt-auto flex items-center gap-2 pt-6 text-sm text-primary"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 rotate-[-45deg]" />
                  </a>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle'
import { ScrollRevealText } from '../components/ScrollRevealText'

const BODY_TEXT =
  'Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.'

export function About() {
  return (
    <section className="bg-black px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#101010] px-6 py-16 text-center md:px-10 md:py-24">
        <p className="mb-10 text-[10px] text-primary uppercase tracking-[0.3em] sm:text-xs">
          Visual arts
        </p>

        <WordsPullUpMultiStyle
          segments={[
            { text: 'I am Marcus Chen,' },
            { text: 'a self-taught director.', className: 'italic font-serif' },
            {
              text: 'I have skills in color grading, visual effects, and narrative design.',
            },
          ]}
          className="text-3xl text-primary leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto"
        />

        <ScrollRevealText
          text={BODY_TEXT}
          className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-[#DEDBC8] sm:text-sm md:text-base"
        />
      </div>
    </section>
  )
}

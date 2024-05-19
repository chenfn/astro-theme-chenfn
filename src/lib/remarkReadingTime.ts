// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import { toString } from 'mdast-util-to-string'
import { readingTime } from 'reading-time-estimator'

export function remarkReadingTime() {
  // @ts-expect-error:next-line
  return (tree, { data }) => {
    const textOnPage = toString(tree)
    const readTime = readingTime(textOnPage, 10, 'cn')
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    data.astro.frontmatter.minutesRead = readTime.text
  }
}

import CustomHead from '#components/custom-head'
import Link from 'next/link'
import { FaPaperclip, FaRss, FaMailBulk } from 'react-icons/fa'

// Fixed name and paths

// Year
const YEAR = new Date().getFullYear()

// Nextra blog theme config
const NextraThemeConfig = {
  // <Head>
  head: CustomHead,

  // Date format
  dateFormatter: (date: Date) => `${date.toDateString()}`,

  // <Footer/>
  footer: (
    <div>
      <hr />
      <div className="grid auto-cols-min grid-flow-col gap-8 text-xl ss:gap-4">
        <Link
          href="https://www.zstatic.net/?utm_source=www.princewen.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Paperclip"
          className=""
        >
          <FaPaperclip />
        </Link>
        <Link
          href="mailto:admin@princewen.com"
          target="_blank"
          rel="noreferrer"
          aria-label="MailBulk"
          className=""
        >
          <FaMailBulk />
        </Link>
        <Link href="/feed.xml" target="_blank" rel="noreferrer" aria-label="RSS" className="">
          <FaRss />
        </Link>
      </div>
      <small className="mt-32 block text-p-light dark:text-inherit">
        <abbr
          title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
          className="cursor-help"
        >
          CC BY-NC 4.0
        </abbr>{' '}
      <div className="float-right">© Princewen.com</div>
      <p></p>
      </small>
    </div>
  ),
}

export default NextraThemeConfig

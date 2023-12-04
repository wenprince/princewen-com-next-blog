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
          href="https://www.zstatic.net/?utm_source=www.princewen.cn"
          target="_blank"
          rel="noreferrer"
          aria-label="Paperclip"
          className=""
        >
          <FaPaperclip />
        </Link>
        <Link
          href="mailto:admin@princewen.cn"
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
      <div className="float-left">
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
          京ICP备2023007558号-1
        </a>
      </div>{' '}
      <div className="float-right"> © Princewen.cn</div>
      <p></p>
      </small>
    </div>
  ),
}

export default NextraThemeConfig

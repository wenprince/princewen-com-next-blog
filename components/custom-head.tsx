import { useRouter } from 'next/router'

const Head = ({ meta }: { meta: { title: string; description: string; image: string } }) => {
  // Site info
  const Site = `普林斯 Princewen.cn`
  const twitterCard = `https://s3.zstatic.net/images/2023/12/04-e9b0de701bbee56d7a95a81dcebdecc6.png!style:auto`

  // Get router
  const router = useRouter()
  const canonicalUrl = (
    `https://www.princewen.cn` + (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0]

  // Get Current Title
  const currentTitle = meta.title === `About` ? Site : `${meta.title} - ${Site}`

  return (
    <>
      {/* SEO : Traditional */}
      <meta name="robots" content="noodp" />
      <title>{currentTitle}</title>
      <meta name="title" content={currentTitle} />
      <meta name="author" content="Princewen.cn" />
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* SEO : Opengraph */}
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={meta.image || twitterCard} />
      <meta name="og:site_name" content={Site} />

      {/* SEO : Twitter Card */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content={meta.image || twitterCard} />
      <meta property="twitter:title" content={currentTitle} />
      <meta property="twitter:description" content={meta.description} />
      <meta property="twitter:url" content={canonicalUrl} />

      {/* SEO : PWA realted */}
      <meta name="application-name" content={Site} />
      <meta name="apple-mobile-web-app-title" content={Site} />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#6fa8dc" />

      {/* SEO : RSS */}
      <link rel="feed" href="/index.xml" type="application/rss+xml" title={Site} />
    </>
  )
}

export default Head

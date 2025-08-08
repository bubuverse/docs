import { useTheme } from 'next-themes'

function Logo() {
  const { theme } = useTheme()
  
  return (
    <>
      <img 
        src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
        alt="BubuVerse" 
        width="32" 
        height="32"
      />
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        BubuVerse Docs
      </span>
    </>
  )
}

export default {
  logo: <Logo />,
  project: {
    link: 'https://github.com/bubuverse/docs'
  },
  docsRepositoryBase: 'https://github.com/bubuverse/docs/tree/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – BubuVerse'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="BubuVerse Documentation" />
      <meta property="og:description" content="The official documentation for BubuVerse - Labubu's Web3 Multiverse" />
      <meta property="og:image" content="/og-image.png" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
    toggleButton: true
  },
  toc: {
    backToTop: true
  },
  footer: {
    component: null
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  search: {
    placeholder: 'Search documentation...'
  },
  primaryHue: 50,
  primarySaturation: 95
}
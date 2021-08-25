import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import TemplateWrapper from 'Template/TemplateWrapper'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>First Next Blog</title>
        <link rel="shortcut icon" href="/img/brain-logo.png" />
        <link rel="apple-touch-icon" href="/img/brain-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <TemplateWrapper {...pageProps}>
        <Component {...pageProps} />
      </TemplateWrapper>
    </>
  )
}

export default App

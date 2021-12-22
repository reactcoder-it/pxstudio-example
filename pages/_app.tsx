import { useEffect } from "react"
import Head from "next/head"
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import { CacheProvider, EmotionCache } from '@emotion/react'
import { ApolloProvider } from "@apollo/client"
import { useApollo } from "../lib/apolloClient"
import theme from "../styles/theme"
import createEmotionCache from '../utils/createEmotionCache'
import { AppProps } from "next/app"

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) {
  const apolloClient = useApollo(pageProps)

  useEffect(() => {
    const jssStyles: any = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <ApolloProvider client={apolloClient}>
        <Head>
          <title>PXSTUDIO</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </CacheProvider>
  )
}

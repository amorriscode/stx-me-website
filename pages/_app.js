import { DefaultSeo } from 'next-seo'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://getstx.me',
          site_name: 'stx.me',
          title: 'stx.me',
          description: 'Hassle-free STX donations for any website',
          images: [
            {
              url: 'https://getstx.me/og.png',
              alt: 'Hassle-free STX donations for any website',
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alata&display=swap" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@600;700;800&family=Lato:wght@300;400;500;600&family=Mukta:wght@300;400;500;600&display=swap"
          rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Cabin&family=Josefin+Sans:wght@300;400;500;600;800&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="/FAVICON.png" type="image/x-icon" />
      </Head>

      <body className='font-josefin-sans'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
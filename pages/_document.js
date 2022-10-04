import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
   return (
      <Html>
         <Head>
            <link rel="shortcut icon" href="/favicon.png" />
         </Head>

         <body className='font-josefin-sans'>
            <Main />
            <NextScript />

         </body>

      </Html>
   )

}
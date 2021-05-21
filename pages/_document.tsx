/**
 * this file is created to add `lang` to html tag for a11y reason
 */
import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render () {
    return (
      <Html lang="zh-CN">
        <Head>
          <title>文章收藏 - next</title>
          <link rel="icon" href="./favicon.ico"/>
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    )
  }
}

export default MyDocument
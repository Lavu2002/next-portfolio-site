import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
          
          {/* Meta tags */}
          <meta charSet="utf-8" />
          <meta name="description" content="Lavanya Patial - Software Development Engineer Portfolio" />
          <meta name="keywords" content="software engineer, web developer, node.js, vue.js, next.js, typescript" />
          <meta name="author" content="Lavanya Patial" />
          
          {/* Open Graph / Social Media Meta Tags */}
          <meta property="og:title" content="Lavanya Patial - Software Development Engineer" />
          <meta property="og:description" content="Portfolio website showcasing my projects and experience" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://lavanyapatial.com" />
          <meta property="og:image" content="https://lavanyapatial.com/images/profile.jpg" />
          
          {/* Google Fonts */}
          <link 
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" 
            rel="stylesheet"
          />
          
          {/* Font Awesome */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
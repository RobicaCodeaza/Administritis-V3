// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      // Collect styles from `styled-components`
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      // Get initial props for the document
      const initialProps = await Document.getInitialProps(ctx);

      // Return the initial props with the collected styles
      return {
        ...initialProps,
        styles: [...initialProps.styles, ...sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
       <Head>
       <meta charset="UTF-8" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
    href="https://fonts.googleapis.com/css2?family=K2D:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&display=swap"
    rel="stylesheet"
/>

<meta
    name="description"
    content="Administrare imobile | Servicii de Administrare a Blocurilor | Soluții Prompte și Transparente | Contabilitate, casierie si administrare tehnica | Administrare completa"
/>
<meta name="robots" content="index, follow" />

<meta
    property="og:title"
    content="Administrare Imobile | Servicii Complete de administrare a Blocurilor"
/>
<meta
    property="og:description"
    content="Administrare imobile | Servicii de Administrare a Blocurilor | Soluții Prompte și Transparente | Contabilitate, casierie si administrare tehnica | Administrare completa"
/>
<meta
    property="og:image"
    content="https://administritis.com/logo.webp"
/>
<meta property="og:url" content="https://administritis.com" />
<meta property="og:type" content="website" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<link rel="manifest" href="/manifest.webmanifest" />
<link rel="shortcut icon" type="image/png" href="assets/favicon.ico" />
<link rel="icon" type="image/png" href="assets/favicon.ico" />
<link
    rel="icon"
    type="image/x-icon"
    href="./public/assets//favicon.ico"
/>
<link rel="apple-touch-icon" href="assets/apple-touch-icon.png" />


<script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-3S6VF6N8EW"
></script>
<script dangerouslySetInnerHTML={{__html:`  
window.dataLayer = window.dataLayer || []
    function gtag() {
        dataLayer.push(arguments)
    }
    gtag('js', new Date())

    gtag('config', 'G-3S6VF6N8EW')`}}>
  
</script>

<script type="application/ld+json" dangerouslySetInnerHTML={{__html:` {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Administrare Imobile",
        "description": "Administrare imobile | Servicii de Administrare a Blocurilor | Soluții Prompte și Transparente | Contabilitate, casierie si administrare tehnica | Administrare completa",
        "url": "https://www.administritis.com",
        "logo": "https://www.administritis.com/logo.webp", // Replace with actual logo URL
        "sameAs": [
            "https://www.facebook.com/administritis", // Replace with actual social media URLs
            "https://www.linkedin.com/company/administritis"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+40-760-956-918", // Replace with actual phone number
            "contactType": "Serviciu Clienti",
            "availableLanguage": "Romanian"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Strada Vlahita, Nr. 1, Sector 3", // Replace with actual address
            "addressLocality": "Bucuresti",
            "postalCode": "032271",
            "addressCountry": "RO"
        }
    }`}}>
   
</script>

<title>Administritis | Servicii de Administrare</title>

       </Head>
        <body>
          <Main />
          <NextScript />
          <div id="fb-root"></div>
<script
    async
    defer
    crossOrigin="anonymous"
    src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v20.0"
    nonce="1pGywvYy"
></script>
        </body>
      </Html>
    );
  }
}



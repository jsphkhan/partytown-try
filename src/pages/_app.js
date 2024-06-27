import Head from 'next/head';
import { Partytown } from '@builder.io/partytown/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Partytown Try</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Partytown debug={false} forward={['dataLayer.push']} />

        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
              document.getElementById('output-script').textContent = 'hello';
              document.body.classList.add('completed');
              console.log('hello from partytown');
              console.log('window: ', window.location.href);
            `,
          }}
        />

        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
                (function (window, document, dataLayerName, i) {
                  window[dataLayerName] = window[dataLayerName] || [];

                  window[dataLayerName].push({ 'gtm.start': new Date().getTime(), 'event': 'gtm.js' });

                  var firstScript = document.getElementsByTagName('script')[0];
                  var gtmScript = document.createElement('script');
                  var dataLayerParam = dataLayerName != 'dataLayer' ? '&l=' + dataLayerName : '';

                  gtmScript.async = true;

                  // ORIGINAL
                  gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dataLayerParam;

                  // HACK
                  // gtmScript.src = './gtm.js?id=' + i + dataLayerParam;

                  firstScript.parentNode.insertBefore(gtmScript, firstScript);
                })(window, document, 'dataLayer', 'GTM-P2SJ37K8');
              `,
          }}
        />
        {/* <script type="text/partytown" src="https://www.googletagmanager.com/gtm.js?id=GTM-P2SJ37K8"></script> */}

      </Head>
      <Component {...pageProps} />
    </>
  );
}

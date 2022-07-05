import Script from 'next/script';
import appContext from '@context/appContext';
import useInitailState from '@hooks/useInitialState';
import Header from '@components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitailState();
  return (
    <appContext.Provider value={initialState}>
      <Script 
      src="https://www.googletagmanager.com/gtag/js?id=G-YQ8P6VXN0L" 
      strategy='afterInteractive'
      />
      <Script id="google-analytics" strategy="afterInteractive" >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YQ8P6VXN0L');
        `}
      </Script>
      <Header />
      <Component {...pageProps} /> {/* Dejo encapsulado de esta forma para luego poder pasarle otras propiedades */}
    </appContext.Provider>
  );
}

export default MyApp;

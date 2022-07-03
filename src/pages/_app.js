import '../styles/globals.css';
import appContext from '@context/appContext';
import useInitailState from '@hooks/useInitialState';
import Header from "@components/Header";

function MyApp({ Component, pageProps }) {
  const initialState = useInitailState();
  return (
    <appContext.Provider value={initialState}>
      <Header />
      <Component {...pageProps} /> {/* Dejo encapsulado de esta forma para luego poder pasarle otras propiedades */}
    </appContext.Provider>
  )
}

export default MyApp

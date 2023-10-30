
import { CityProvider } from "../contexts/CityContext";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <CityProvider>
      <Component {...pageProps} />
    </CityProvider>
  );
}

export default App;

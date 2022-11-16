import Layout from "../components/Layout/Layout";
import MainProvider from "../store/MainContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MainProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MainProvider>
  );
}

export default MyApp;

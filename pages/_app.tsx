import "../styles/globals.scss";
import { AppProps } from "next/app";
import Layout from "../Components/Layout/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;

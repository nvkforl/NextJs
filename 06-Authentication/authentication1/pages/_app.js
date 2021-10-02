import Header from "../components/layouts/Header";
import "../styles/globals.css";
import Router from "next/router";
import Link from "next/link";
import Head from "next/head";
import NProgress from "nprogress";
import { Provider } from "next-auth/client";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Head>
        {/* Import CSS for nprogress */}
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

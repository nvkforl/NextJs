import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import "styles/globals.css";
import "styles/layout.css";

function MyApp({ Component, pageProps }) {
  // This Function will be called from the about page
  // As it contains PageLayout function
  // This is called as Single layout for a specific page - Example About page
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  // This is called for all pages which does not contain PageLayout function
  return (
    //All pages contains Header, Content and footer componenets
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

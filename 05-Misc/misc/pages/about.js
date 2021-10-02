import Footer from "@/layout/Footer";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>Tile of the page used for SEO</title>
        <meta name="description" content="learning NEXT JS by the tutorial" />
      </Head>
      <h1 className="content">About</h1>
    </>
  );
}

export default About;

// This  include Page and footer only
// by excluding Header in the component
About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};

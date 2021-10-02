import Head from "next/head";

function BlogId({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="content">Article</div>
      <div className="content">
        public ENV variable display:: {process.env.NEXT_PUBLIC_VIEW}
      </div>
    </>
  );
}

export default BlogId;

//Generating dynamic data for title and description for SEO for Head learning purpose
export async function getServerSideProps() {
  const user = process.env.DB_USERNAME;
  const password = process.env.DB_PASSWORD;

  console.log(`using process env user=${user} and password=${password}`);

  return {
    props: {
      title: "Article Blog",
      description: "Article Description",
    },
  };
}

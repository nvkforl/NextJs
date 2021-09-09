function NewsArticle({ articles }) {
  return (
    <>
      <h3>List of news article</h3>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} {article.title} || {article.category}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export default NewsArticle;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
}

function singleCategory({ articles, category }) {
  return (
    <>
      <h1>
        showing the news for the category : <i>{category}</i>
      </h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>Id: {article.id}</h2>
            <h2>Title :{article.title}</h2>
            <h2>Description :{article.description}</h2>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default singleCategory;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  //you can get and set the cookies from request anmd response objects
  console.log(req.headers.cookie);
  console.log(query);
  res.setHeader("set-cookie", ["name=nitzz"]);
  const { category } = params;

  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );

  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}

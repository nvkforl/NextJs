import Link from "next/link";

function PostLists({ posts }) {
  return (
    <>
      <h1>list of Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              <h2>
                {post.id} {post.title}
              </h2>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default PostLists;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  //This is used of hardcoded values
  return {
    props: {
      posts: data.slice(0, 3),
    },
    revalidate: 10,
  };

  //This is used for Dynamic values like 100 posts
  /*return {
    props: {
      posts: data,
    },
  };*/
}

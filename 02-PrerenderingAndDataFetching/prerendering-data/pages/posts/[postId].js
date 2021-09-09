function Post({ post }) {
  //commented the piece of code for fallback: "blocking"
  //and also removing import { useRouter } from "next/router";
  /* const router = useRouter();

  if (router.isFallback) {
    return <h2>Loading...</h2>;
  } */

  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
}

export default Post;

//why only 1 to 3 --- because in /post/index.js has has slice(0,3) data which returns 3 parameters
//This for Static site generation where you the number of hardcoded values are retured
export async function getStaticPaths() {
  //fallback: false then postId = 4 returns 404 error
  /*return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: false,
  };*/

  //fallback: true, when postId = 4 then it returns the path and page at the runtime
  /*return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: true,
  };*/

  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: "blocking",
  };
}

//This is for Dynamic posts
/*export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}*/

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
}

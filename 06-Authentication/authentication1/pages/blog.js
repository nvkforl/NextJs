import { getSession } from "next-auth/client";

function Blog({ data }) {
  return <div>Blog Page - {data}</div>;
}

export default Blog;

//This code make each time to hit the session every time
/*export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      data: session ? "List of 100 personalized blogs" : "List of free Blogs",
    },
  };
} */

//This code make each time to hit the session only once
export async function getServerSideProps(context) {
  const session = await getSession(context);

  //if session does not exist then redirect to login page
  //permanent: false -> refers to this url redirect is not
  //permanent and is applicable only of user is not logged in
  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
        permanent: false,
      },
    };
  }

  //if session exists the return this
  return {
    props: {
      session,
      data: session ? "List of 100 personalized blogs" : "List of free Blogs",
    },
  };
}

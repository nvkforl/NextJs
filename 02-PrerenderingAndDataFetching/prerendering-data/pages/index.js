import Link from "next/link";

function Home() {
  return (
    <>
      <h1>NextJs Pre-Rendering</h1>
      <h6>
        <Link href="/userList">user list</Link>
      </h6>
      <h6>
        <Link href="/posts">Posts</Link>
      </h6>
      <h6>
        <Link href="/news">News</Link>
      </h6>
    </>
  );
}

export default Home;

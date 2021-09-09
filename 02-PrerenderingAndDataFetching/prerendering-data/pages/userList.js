import User from "../components/user";

function userList({ users }) {
  return (
    <>
      <h3>list of users</h3>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}
    </>
  );
}

export default userList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  //console.log(data);

  return {
    props: {
      users: data,
    },
  };
}

function userList({ users }) {
  return (
    <>
      <h3>list of users</h3>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </>
  );
}

export default userList;

export async function getStaticProps() {
  const responce = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await responce.json();
  //console.log(data);

  return {
    props: {
      users: data,
    },
  };
}

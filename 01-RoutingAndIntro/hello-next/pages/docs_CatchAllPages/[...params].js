import { useRouter } from "next/router";

function docsParms() {
  const myRouter = useRouter();
  const { params = [] } = myRouter.query;

  console.log(params);
  if (params.length === 2) {
    return (
      <div>
        viewing docs feature : {params[0]} and concept : {params[1]}
      </div>
    );
  } else if (params.length === 1) {
    return <div>viewing docs feature : {params[0]}</div>;
  }

  return <div>Docs Home page</div>;
}

export default docsParms;

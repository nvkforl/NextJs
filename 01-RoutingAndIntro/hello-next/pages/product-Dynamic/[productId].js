import { useRouter } from "next/router";

function productDynamic() {
  const myRouter = useRouter();
  const myProductId = myRouter.query.productId;
  return (
    <div>
      <h1>Dynamic page : {myProductId} </h1>
    </div>
  );
}

export default productDynamic;

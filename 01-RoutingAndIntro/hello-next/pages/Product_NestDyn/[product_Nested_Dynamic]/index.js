import { useRouter } from "next/router";

function productNestedDynamic() {
  const myRouter = useRouter();
  const myProductNestDynamic = myRouter.query.product_Nested_Dynamic;
  return (
    <div>
      <h1>Nested Dynamic page : {myProductNestDynamic} </h1>
    </div>
  );
}

export default productNestedDynamic;

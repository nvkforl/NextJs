import { useRouter } from "next/router";

//http://localhost:3000/Product_NestDyn/100

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

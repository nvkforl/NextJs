import { useRouter } from "next/router";

//http://localhost:3000/Product_NestDyn/1/reviews/100

function review() {
  const myRouter = useRouter();
  const { product_Nested_Dynamic, reviewId } = myRouter.query;
  return (
    <div>
      <h1>
        review of the product id : {product_Nested_Dynamic} and review is{" "}
        {reviewId}
      </h1>
    </div>
  );
}

export default review;

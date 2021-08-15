import Link from "next/link";
import { useRouter } from "next/router";

function index() {
  const myRouter = useRouter();

  const handleClick = () => {
    myRouter.push("/product-Dynamic");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/product-Dynamic">
        <a>Product</a>
      </Link>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}

export default index;

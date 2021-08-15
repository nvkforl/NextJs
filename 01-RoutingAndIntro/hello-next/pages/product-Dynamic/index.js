import Link from "next/link";

function product({ productId = 100 }) {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>
        <Link href="/product-Dynamic/1">
          <a>Product 1</a>
        </Link>
      </h1>
      <h1>
        <Link href="/product-Dynamic/2">
          <a>Product 2</a>
        </Link>
      </h1>
      <h1>
        <Link href="/product-Dynamic/3" replace>
          <a>Product 3</a>
        </Link>
      </h1>
      <h1>
        <Link href={`/product-Dynamic/${productId}`}>
          <a>Product {productId}</a>
        </Link>
      </h1>
    </div>
  );
}

export default product;

import ProductList from "@/src/components/Product/productList";

async function getProducts() {
  //mock api only for get products
  const res = await fetch(
    "https://661fd0e416358961cd9594c1.mockapi.io/tostbang/products"
  );
  // makng delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await res.json();
  return data;
}

export default async function Home() {
  const products = await getProducts();

  return <ProductList products={products} />;
}

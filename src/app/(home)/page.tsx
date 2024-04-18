import ProductList from "@/src/components/Product/productList";

async function getProducts() {
  //mock api only for get products
  const res = await fetch(
    "https://6620ddef3bf790e070b0feee.mockapi.io/products"
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

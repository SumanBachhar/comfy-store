import { Filters } from "../components/Filters";
import { ProductsContainer } from "../components/ProductsContainer";
import { PaginationContainer } from "../components/PaginationContainer";
import { customFetch } from "../utils";
const url = "/products";

export const loader = async ({ request }) => {
  const response = await customFetch(url);
  console.log(response);
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
};

export const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

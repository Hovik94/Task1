import { useContext, useEffect } from "react";
import { FilterContext } from "../context/FilterContext";
import ProductCard from "./ProductCard";
import FilterPanel from "./FilterPanel";
import SortOptions from "./SortOptions";
import { fetchProducts } from "../lib/api";
import { ActionTypes } from "../lib/reducer";

const ProductCatalog = () => {
  const { state, dispatch } = useContext(FilterContext);

  useEffect(() => {
    fetchProducts(state.filters).then((products) => {
      dispatch({ type: ActionTypes.SET_PRODUCTS, payload: products });
    });
  }, [state.filters]);

  return (
    <div className="product-catalog">
      <FilterPanel />
      <SortOptions />
      <div className="product-list">
        {state.products.length ? (
          state.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCatalog;

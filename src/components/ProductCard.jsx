/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => (
  <div className="product-card">
    <h4>{product.name}</h4>
    <p>Price: ${product.price}</p>
    <p>Category: {product.category}</p>
  </div>
);

export default ProductCard;

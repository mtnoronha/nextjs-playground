import { Product } from "@/types";

interface ProductProps {
  product: Product;
}

const ProductComponent = ({ product }: ProductProps) => {
  return (
    <div style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
      <h2>{ product.title }</h2>
      <p>{ product.description }</p>
      <p>Price: { product.price }</p>
    </div>
  );
}

export default ProductComponent;
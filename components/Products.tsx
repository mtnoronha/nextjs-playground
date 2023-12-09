import { Product } from '@/services/ProductService';
import ProductComponent from './Product';

interface ProductsProps {
  products: Product[];
}

const ProductsComponent = ({ products }: ProductsProps) => {
  return (
    <div>
      {products.map((product) => (
        <ProductComponent key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsComponent;
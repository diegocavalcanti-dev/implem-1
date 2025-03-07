
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  originalPrice?: number;
  price: number;
  image: string;
  discount?: boolean;
}

interface ProductGridProps {
  title: string;
  products: Product[];
}

const ProductGrid = ({ title, products }: ProductGridProps) => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-medium text-center mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            originalPrice={product.originalPrice}
            price={product.price}
            image={product.image}
            discount={product.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;

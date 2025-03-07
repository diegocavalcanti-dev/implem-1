import { FC } from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  originalPrice?: number;
  price: number;
  image: string;
  discount?: boolean;
}

const ProductCard: FC<ProductCardProps> = ({
  id,
  name,
  originalPrice,
  price,
  image,
  discount = false
}) => {
  return (
    <div className="relative">
      {discount && (
        <div className="absolute top-2 right-2 bg-photolab-green text-white text-xs px-2 py-0.5 rounded z-10">
          -XX%OFF
        </div>
      )}
      <Link to={`/produtos/${id}`} className="block">
        <div className="bg-gray-200 rounded-lg aspect-square mb-2 overflow-hidden">
          {image && (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          )}
        </div>
        <h3 className="text-sm font-medium truncate">{name}</h3>
        <div className="flex flex-col">
          {originalPrice && (
            <span className="text-xs text-gray-500 line-through">
              De R$ {originalPrice.toFixed(2).replace(".", ",")}
            </span>
          )}
          <div className="flex items-center">
            <span className="text-xs text-gray-500 mr-1">Por</span>
            <span className="text-photolab-green font-bold">
              R$ {price.toFixed(2).replace(".", ",")}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

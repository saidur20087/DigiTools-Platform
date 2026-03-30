
import { toast } from 'react-toastify';

import { useState } from 'react';

const ProductCard = ({ product, onAddToCart, isAlreadyInCart }) => {
  
  const [isAdded, setIsAdded] = useState(isAlreadyInCart);

  const handleAddToCart = () => {
    if (isAdded) return; 

    onAddToCart(product);
    setIsAdded(true);

    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all border border-purple-200 h-full">
      <figure className="px-6 pt-6">
        <img
          src={product.icon}
          alt={product.name}
          className="w-20 h-20 object-contain"
        />
      </figure>

      <div className="card-body">
        <div className="flex justify-between items-start">
          <h2 className="card-title text-lg">{product.name}</h2>
          {product.tag && (
            <div className={`badge badge-sm ${
              product.tagType === 'popular' ? 'badge-warning' : 
              product.tagType === 'new' ? 'badge-info' : 
              'badge-success'
            }`}>
              {product.tag.toUpperCase()}
            </div>
          )}
        </div>

        <p className="text-sm text-gray-600 line-clamp-2 mt-2">
          {product.description}
        </p>

        <div className="mt-4">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-purple-600">${product.price}</span>
            <span className="text-sm text-gray-500">/{product.period}</span>
          </div>
        </div>

        <ul className="mt-4 space-y-1 text-sm">
          {product.features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-600">
              <span className="text-green-500">✓</span> {feature}
            </li>
          ))}
        </ul>

        <div className="card-actions mt-auto pt-6">
          <button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`btn btn-block text-base font-medium ${
              isAdded 
                ? 'btn-success cursor-not-allowed' 
                : 'btn-primary hover:btn-primary'
            }`}
          >
            {isAdded ? '✓ Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
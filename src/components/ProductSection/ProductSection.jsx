
import products from '../../data/products.json';

import ProductCard from '../ProductCard/ProductCard';

const ProductSection = ({ cart, setCart }) => {
  const addToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      return; 
    }
    setCart([...cart, product]);
  };

  return (
    <div className="max-w-11/12 mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
            isAlreadyInCart={cart.some(item => item.id === product.id)}   
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
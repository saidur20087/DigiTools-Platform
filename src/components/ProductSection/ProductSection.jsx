// src/components/ProductSection/ProductSection.jsx
import products from '../../data/products.json';
import ProductCard from '../ProductCard/ProductCard';

const ProductSection = ({ cart, setCart }) => {
  const addToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      return; // duplicate prevent
    }
    setCart([...cart, product]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-4">Premium Digital Tools</h2>
      <p className="text-center text-gray-600 mb-12">Supercharge your digital workflow with AI-powered tools</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
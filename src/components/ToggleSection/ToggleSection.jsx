// src/components/ToggleSection/ToggleSection.jsx
const ToggleSection = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center my-12">
      <div className="btn-group">
        <button
          onClick={() => setActiveTab('product')}
          className={`btn btn-lg ${activeTab === 'product' ? 'btn-primary' : 'btn-outline'}`}
        >
          🛍️ Browse Products
        </button>
        <button
          onClick={() => setActiveTab('cart')}
          className={`btn btn-lg ${activeTab === 'cart' ? 'btn-primary' : 'btn-outline'}`}
        >
          🛒 My Cart ({activeTab === 'cart' ? 'Active' : ''})
        </button>
      </div>
    </div>
  );
};

export default ToggleSection;
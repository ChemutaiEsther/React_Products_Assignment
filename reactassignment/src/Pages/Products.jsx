import "../App.css";

function Products() {
  const products = [
    { id: 1, name: "Laptop", price: "$999", image: "🖥️" },
    { id: 2, name: "Phone", price: "$699", image: "📱" },
    { id: 3, name: "Tablet", price: "$499", image: "📱" },
    { id: 4, name: "Headphones", price: "$199", image: "🎧" },
    { id: 5, name: "Watch", price: "$299", image: "⌚" },
    { id: 6, name: "Camera", price: "$1299", image: "📷" },
  ];

  return (
    <div className="products-page">
      <h1>Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">{product.image}</div>
            <h3>{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
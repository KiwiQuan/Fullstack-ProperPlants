import "./CartSection.css";

export default function CartQuantity({ plant, addToCart, removeFromCart }) {
  return (
    <div className="cart-item-quantity">
      <button
        onClick={() => {
          removeFromCart(plant);
        }}
      >
        -
      </button>
      <span>{plant.quantity}</span>
      <button
        onClick={() => {
          addToCart(plant);
        }}
      >
        +
      </button>
    </div>
  );
}

import "./CartSection.css";
import CartQuantity from "./CartQuantity";

export default function CartCard({ plant, addToCart, removeFromCart }) {
  return (
    <li className="cart-item">
      <div>
        {plant.image} {plant.name}
      </div>
      <CartQuantity
        plant={plant}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </li>
  );
}

import "./CartSection.css";
import CartCard from "./CartCard";
export default function CartSection({ cart, removeFromCart, addToCart }) {
  return (
    <section className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((plant, index) => (
            <CartCard
              key={`${plant.id}-${index} ${Date.now()}`}
              plant={plant}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

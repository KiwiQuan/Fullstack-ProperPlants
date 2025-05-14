import { use, useState } from "react";
import PlantSection from "./components/PlantSection/PlantSection";
import CartSection from "./components/CartSection/CartSection";
import PLANTS from "./data";
export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    const existingPlant = cart.find((p) => p.id === plant.id);
    if (existingPlant) {
      setCart(
        cart.map((p) =>
          p.id === plant.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  }

  function removeFromCart(plant) {
    const existingPlant = cart.find((p) => p.id === plant.id);
    if (existingPlant.quantity > 1) {
      setCart(
        cart.map((p) =>
          p.id === plant.id ? { ...p, quantity: p.quantity - 1 } : p
        )
      );
    } else {
      setCart(cart.filter((p) => p.id !== plant.id));
    }
  }

  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <PlantSection
          plants={PLANTS}
          setCart={setCart}
          cart={cart}
          addToCart={addToCart}
        />
        <CartSection
          cart={cart}
          setCart={setCart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </main>
    </>
  );
}

import "./PlantCard.css";

export default function PlantAdd({
  plant,

  addToCart,
}) {
  return (
    <button
      onClick={() => {
        addToCart(plant);
      }}
    >
      Add to Cart
    </button>
  );
}

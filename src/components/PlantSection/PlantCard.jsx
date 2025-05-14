import "./PlantCard.css";
import PlantAdd from "./PlantAdd";

export default function PlantCard({ plant, addToCart }) {
  return (
    <li className="plant">
      <figure>{plant.image}</figure>
      <h3>{plant.name}</h3>
      <PlantAdd plant={plant} addToCart={addToCart} />
    </li>
  );
}

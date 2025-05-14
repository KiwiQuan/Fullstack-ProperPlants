import React from "react";
import "./PlantSection.css";
import PlantCard from "./PlantCard";

export default function PlantSection({ plants, addToCart }) {
  return (
    <section className="plants">
      <h2>Plants</h2>
      <ul>
        {plants.map((plant, index) => (
          <PlantCard
            key={`${plant.id}-${index} ${Date.now()}`}
            plant={plant}
            addToCart={addToCart}
          />
        ))}
      </ul>
    </section>
  );
}

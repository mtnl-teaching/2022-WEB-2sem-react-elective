import { useState } from "react";

export default function Modal({ data }) {
  const [ingredients, setIngredients] = useState(data.ingredients.join(","));

    function gem() {
        // Alt mulig andet kode
        const data = {
            ingredients: ingredients.split(',')
        }
        saveDocument(data)
    }

  return (
    <>
      <textarea
        value={ingredients}
        cols={50}
        rows={8}
        onChange={(e) => setIngredients(e.target.value)}
      />
    </>
  );
}

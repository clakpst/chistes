import { useEffect, useState } from "react";
import { getCategories, getJokeFromCategory } from "./Api";

export default function App() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategories().then((res) => setCategory(res.data));
  }, []);

  return (
    <div>
      <ul>
        {category.map((cat, index) => (
          <li key={index}>{cat}</li>
        ))}
      </ul>
    </div>
  );
}

import { useEffect, useState } from "react";
import { getCategories } from "./Api";

export default function App() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategories().then((res) => setCategory(res.data));
  }, []);

  return (
    <div>
      <ul>
        {category.map((cat) => (
          <li>{cat}</li>
        ))}
      </ul>
    </div>
  );
}

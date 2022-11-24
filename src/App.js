import { useEffect, useState } from "react";
import { getCategories, getJokeFromCategory } from "./Api";

export default function App() {
  const [category, setCategory] = useState([]);
  const [currentCat, setCurrentCat] = useState();
  const [joke, setJoke] = useState();

  useEffect(() => {
    getCategories().then((res) => setCategory(res.data));
  }, []);

  useEffect(() => {
    getJokeFromCategory(currentCat).then((res) => setJoke(res.data));
  }, [currentCat]);

  const manejadorClick = (e, cat) => {
    e.preventDefault();
    setCurrentCat(cat);
    console.log(cat);
  };

  return (
    <div>
      <ul>
        {category.map((cat, index) => (
          <li key={index}>
            <a href="/#" onClick={(e) => manejadorClick(e, cat)}>
              {cat}
            </a>
          </li>
        ))}
      </ul>
      <p>{joke && joke.value}</p>
    </div>
  );
}

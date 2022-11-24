import axios from "axios";

export const getCategories = () =>
  axios.get("https://api.chucknorris.io/jokes/categories");

export const getJokeFromCategory = (category) =>
  axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);

import React, { useEffect, useState } from "react";
import SearchFood from "./SearchFood";

const SearchProduct = () => {
  const [searchFoods, setSearchFoods] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFoods}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchFoods]);

  const searchData = (e) => {
    setSearchFoods(e.target.value);
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 place-items-center">
        <input
          type="text"
          name="searchFood"
          onChange={searchData}
          placeholder="Search food"
          className="input input-bordered w-full max-w-xs mt-14"
        />
      <h1>Search Foods : {meals?.length ? meals.length:'not found'}</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 p-14">
        {meals?.map((meal) => (
          <SearchFood key={meal.idMeal} meal={meal}></SearchFood>
        ))}
      </div>
    </div>
  );
};

export default SearchProduct;

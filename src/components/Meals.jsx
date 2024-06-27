"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const loadData = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_MEALS_SEARCH_API_URL}=${search}`
    );
    const data = await res.json();

    setMeals(data.meals === null ? [] : data);
  };

  useEffect(() => {
    loadData();
  }, [search]);

  return (
    <>
      <form class="flex  mx-10 rounded bg-white border box-border">
        <input
          onChange={handleSearch}
          class=" w-full border-none bg-transparent px-4 py-1 text-gray-400 outline-none focus:outline-none "
          type="search"
          name="search"
          placeholder="Search..."
        />
        <button
          type="submit"
          class="m-2 rounded bg-blue-600 px-4 py-2 text-white"
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-6 gap-4 mt-8">
        {meals.meals?.map((meal) => (
          <Link key={meal.idMeal} href={`/meals/${meal?.idMeal}`}>
            {" "}
            <article className="border p-2">
              <Image
                width="1000"
                height="1000"
                src={meal?.strMealThumb}
                alt="meal"
              />
              <h3 className="font-bold ">{meal?.strMeal}</h3>
              <p className="text-gray-500">
                {meal?.strInstructions.slice(0, 70)}...
              </p>
            </article>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Meals;

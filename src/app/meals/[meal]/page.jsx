import Image from "next/image";
import React from "react";

const getMealData = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_MEALS_SINGLE_API_URL}=${id}`
  );
  const data = await res.json();
  console.log(data.meals[0]);
  return data.meals[0];
};

// meta
export const generateMetadata = async ({ params }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_MEALS_SINGLE_API_URL}=${params.meal}`
  );
  const data = await res.json();
  console.log(data.meals[0]);

  return {
    title: data?.meals[0]?.strMeal,
    description: data?.meals[0]?.strInstructions,
    keywords: data?.meals[0]?.strInstructions.split(" "),
  };
};

const page = async ({ params }) => {
  const meal = await getMealData(params.meal);

  return (
    <article className="border p-2 flex gap-2">
      <Image
        className="object-contain"
        width="500"
        height="500"
        src={meal?.strMealThumb}
        alt="meal"
      />
      <div>
        <h3 className="font-bold ">{meal?.strMeal}</h3>
        <p className="text-gray-500">{meal?.strInstructions}</p>
      </div>
    </article>
  );
};

export default page;

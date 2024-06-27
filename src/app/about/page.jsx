import React from "react";

const getTime = async () => {
  const res = await fetch("http://localhost:3000/time", {
    next: { revalidate: 5 },
  });
  const data = await res.json();
  return data.currentTime;
};

const page = async () => {
  const currentTime = await getTime();

  return (
    <div>
      <h6 className="text-3xl">About Page</h6>
      <h3 className="text-3xl text-red-400">Time: {currentTime}</h3>
    </div>
  );
};

export default page;

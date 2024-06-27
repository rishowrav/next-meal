import React from "react";

const getPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

export const generateMetadata = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const postData = await res.json();

  return {
    title: `${postData.title}`,
    description: `${postData.body}`,
    keywords: postData.body.split(" "),
  };
};

const page = async ({ params }) => {
  const post = await getPost(params.id);

  return (
    <div className="border p-3 w-3/5 mx-auto mt-10 border-orange-600">
      <h3 className="text-sm font-bold">{post.title}</h3>
      <p className="text-xs">{post.body}</p>
    </div>
  );
};

export default page;

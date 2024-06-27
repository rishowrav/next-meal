import Link from "next/link";
import React from "react";

const Navigation = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    { title: "About", path: "/about" },
    { title: "Post", path: "/post" },
    { title: "Meals", path: "/meals" },
    { title: "Gallery", path: "/gallery" },
  ];

  return (
    <div>
      <nav
        class="flex h-auto w-auto bg-white shadow-lg rounded-lg justify-evenly
      md:h-16"
      >
        <div class="flex w-full justify-between ">
          {/* logo */}
          <div
            class="flex px-6 w-1/2 items-center font-semibold
          md:w-1/5 md:px-1 md:flex md:items-center md:justify-center"
          >
            <Link href="/">NextMeal</Link>
          </div>

          {/* menu */}
          <div
            class="hidden w-3/5 items-center justify-center gap-10 font-semibold
          md:flex"
          >
            {links.map((data) => (
              <Link key={data.path} href={data.path}>
                {data.title}
              </Link>
            ))}
          </div>

          {/* Login */}
          <div
            class="hidden w-1/5 items-center justify-center gap-8 font-semibold
          md:flex"
          >
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

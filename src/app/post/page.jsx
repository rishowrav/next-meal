import { getPosts } from "@/services/postApi";
import Link from "next/link";
import { Roboto_Slab } from "next/font/google";
// import { redirect } from "next/navigation";

const robotoSlab = Roboto_Slab({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
  title: {
    absolute: "About",
  },
  description: "About Pages with showrav",
  keywords: ["about", "about pages"],
};

const PostPage = async () => {
  const posts = await getPosts();
  // if (posts) {
  //   redirect("/meals");
  // }

  return (
    <div className="h-[calc(100vh-64px)]">
      <div className="grid grid-cols-4 gap-2">
        {posts.slice(0, 20).map((post) => (
          <div key={post.title} className="border p-3 border-orange-600">
            <h3 className={`text-sm font-bold ${robotoSlab.className}`}>
              {post.title}
            </h3>
            <p className="text-xs">{post.body}</p>
            <Link href={`/post/${post.id}`}>
              <button className="bg-orange-400 px-2 py-1 text-xs">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;

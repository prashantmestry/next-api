import { notFound } from "next/navigation";
import React from "react";
import GetComments from "./GetComments";
//
interface PostProps {
  id: number;
  title: string;
  body: string;
}

async function getPost(section: string | number): Promise<PostProps | null> {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${section}`
      // {
      //   next: { revalidate: 10 },
      // }
    );
    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch (err) {
    console.error("Error fetching post:", err);
    return null;
  }
}

type Params = Promise<{ section: number }>;

const DashPage = async ({ params }: { params: Params }) => {
  const { section } = await params;

  if (!section) {
    return notFound();
  }

  let post = await getPost(section);

  if (!post) {
    return <div className="text-red-500">Post not found!</div>;
  }

  return (
    <>
      <div>
        <div className="text-blue-700 mb-2 text-md uppercase">
          {`Post ${section} ${post.title}`}
        </div>
        <div>{post.body}</div>

        <GetComments postId={section} />
      </div>
    </>
  );
};

export default DashPage;

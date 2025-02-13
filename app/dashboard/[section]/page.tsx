import axios from "axios";
import { notFound } from "next/navigation";
import React from "react";
import GetComments from "./GetComments";
//
interface PostProps {
  params: { section: string | number };
}

async function getPost(section: string | number) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${section}`
    );
    return response.data || null;
  } catch (err) {
    console.error("Error fetching post:", err);
    return null;
  }
}

const DashPage = async ({ params }: PostProps) => {
  if (!params.section) {
    return notFound();
  }

  let sectionData = await getPost(params.section);

  if (!sectionData) {
    return <div className="text-red-500">Post not found!</div>;
  }

  return (
    <div>
      <div className="text-blue-700 mb-2 text-md uppercase">
        {`Post ${params.section} ${sectionData?.title}`}
      </div>
      <div>{sectionData?.body}</div>

      <GetComments postId={params.section} />
    </div>
  );
};

export default DashPage;

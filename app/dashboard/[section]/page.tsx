import axios from "axios";
import { notFound } from "next/navigation";
import React from "react";
import GetComments from "./GetComments";
//
interface PageProps {
  params: { section: string };
}

async function getPost(section: string) {
  const posts = await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${section}`)
    .then((res) => {
      return res.data;
    });
  return posts ? posts : null;
}

const DashPage = async ({ params }: PageProps) => {
  if (!params.section) {
    return notFound();
  }

  let sectionData = await getPost(params.section);

  return (
    <div>
      <div className="text-blue-700 mb-2 text-md uppercase">
        {`Post ${params.section} ${sectionData.title}`} {}
      </div>
      <div>{sectionData.body}</div>

      <GetComments postId={params.section} />
    </div>
  );
};

export default DashPage;

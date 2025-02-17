"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { notFound } from "next/navigation";
import { IoEye } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";

interface ResTypes {
  id: number;
  name: string;
  email: string;
  body: string;
}

const GetComments = ({ postId }: { postId: number | string }) => {
  //
  const [flag, setFlag] = useState(false);
  const [comments, setComments] = useState([]);
  //
  useEffect(() => {
    if (flag && comments.length === 0) {
      getComments(postId);
    }
  }, [flag, comments, postId]);

  if (!postId) {
    return notFound();
  }

  async function getComments(section: string | number) {
    const postComments = await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${section}/comments`)
      .then((res) => {
        console.log("test console");
        setComments(res.data);
      });
    return postComments;
  }

  return (
    <div>
      <div className="flex justify-center">
        <button
          className="w-[200px] mt-4 py-1 bg-slate-300 dark:bg-slate-800 flex justify-center items-center text-center rounded-2xl "
          onClick={() => setFlag((prev) => !prev)}
        >
          Get Comments
          <span className="ml-4 text-2xl">
            {flag ? <IoEye /> : <IoEyeOffSharp />}
          </span>
        </button>
      </div>
      {comments?.length > 0 && flag && (
        <div className="flex flex-wrap justify-center mt-6 gap-4">
          {comments.map((item: ResTypes) => {
            return (
              <div
                className="p-2 bg-slate-200 dark:bg-gray-800 rounded-tl-2xl rounded-br-2xl  w-[30%]"
                key={item.id}
              >
                <div className=" pb-2 border-b font-semibold">{item.name}</div>
                <div className="mt-2">{item.body}</div>
                <div className="text-sm  mt-3 ">{item.email}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GetComments;

"use client";
const PostError = ({ error }: { error: Error }) => {
  return <div>Error : {error.message}</div>;
};

export default PostError;

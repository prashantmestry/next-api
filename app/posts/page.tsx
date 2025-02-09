import React from "react";
//

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Posts = async () => {
  const postsList = await getData();
  //   const [open, setOpen] = useState(false);
  //
  return (
    <div className="flex flex-wrap">
      {postsList.map((item: any) => {
        return (
          <div
            key={item.id}
            className="border py-2 px-2 mx-2 my-2 min-w-[400px] w-[420px] cursor-pointer hover:shadow-inner"
          >
            <h2 className="font-semibold mb-2">
              {item.id} - {item.title}
            </h2>
            <div className="pl-2">{item.body}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;

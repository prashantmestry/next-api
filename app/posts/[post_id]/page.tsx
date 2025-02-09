import React from "react";
//

const Comments = async () => {
  return (
    <div className="flex flex-wrap">
      {[].map((item: any) => {
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

export default Comments;

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
    <div className="flex flex-wrap gap-4">
      {postsList.map((item: any) => {
        return (
          <div
            key={item.id}
            className="border bg-slate-50 dark:border-zinc-600  dark:bg-zinc-800 p-2 w-1/4 cursor-pointer flex-grow"
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

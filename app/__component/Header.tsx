import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-row list-none p-2 bg-slate-300">
      <li className="mr-2">
        <Link href="/users">User Detail</Link>
      </li>
      <li className="mr-2">
        <Link href="/">Home</Link>
      </li>
      <div>
        Environment : {process.env.NODE_ENV} = {process.env.API_DOMAIN}
      </div>
    </div>
  );
};

export default Header;

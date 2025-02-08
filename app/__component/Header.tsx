"use client";
import { useTheme } from "next-themes";
import Link from "next/link";

const Header = () => {
  const { setTheme } = useTheme();

  return (
    <div className="flex flex-row justify-between list-none p-2 bg-slate-300">
      <div className="flex">
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
      <div>
        <span className="mr-2 cursor-pointer " onClick={() => setTheme("dark")}>
          Dark
        </span>
        <span className="mr-2 cursor-pointer" onClick={() => setTheme("light")}>
          Light
        </span>
      </div>
    </div>
  );
};

export default Header;

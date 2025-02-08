"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import docker_logo from "../../public/images/docker_logo.svg";
//
const Header = () => {
  const { setTheme } = useTheme();

  return (
    <div className="flex flex-row justify-between list-none p-2 bg-slate-300 ">
      <div className="flex items-center">
        <li className="mr-8">
          <Image src={docker_logo} alt="Docker logo" width={50} />
        </li>
        <li className="mr-2">
          <Link href="/">Home</Link>
        </li>
      </div>
      <div className="flex items-center">
        <div className="mr-2 cursor-pointer " onClick={() => setTheme("dark")}>
          Dark
        </div>
        <div className="mr-2 cursor-pointer" onClick={() => setTheme("light")}>
          Light
        </div>
      </div>
    </div>
  );
};

export default Header;

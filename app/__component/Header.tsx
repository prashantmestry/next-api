"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import docker_logo from "../../public/images/docker_logo.svg";
//
const Header = () => {
  const { setTheme } = useTheme();

  return (
    <div className="flex flex-row justify-between list-none p-2 border-b">
      <ul className="flex items-center">
        <li className="mr-8">
          <Link href="/">
            <Image src={docker_logo} alt="Docker logo" width={50} />
          </Link>
        </li>
        <li className="mr-4 font-semibold  hover:text-gray-950">
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li className="mr-4 font-semibold  hover:text-gray-950">
          <Link href="/users">Users</Link>
        </li>
        <li className="mr-4 font-semibold  hover:text-gray-950">
          <Link href="/gallery">Gallery</Link>
        </li>
        <li className="mr-4 font-semibold  hover:text-gray-950">
          <Link href="/charts">Charts</Link>
        </li>
        <li className="mr-4 font-semibold  hover:text-gray-950">
          <Link href="/shopping">Shopping</Link>
        </li>
      </ul>
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

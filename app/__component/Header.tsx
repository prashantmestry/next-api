"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import docker_logo from "../../public/images/docker_logo.svg";
import { ChangeEvent } from "react";
//
const Header = () => {
  const { setTheme } = useTheme();

  let pageLinks = [
    {
      link: "/",
      name: "",
    },
    {
      link: "/dashboard",
      name: "Dashboard",
    },
    {
      link: "/users",
      name: "Users",
    },
    {
      link: "/gallery",
      name: "Gallery",
    },
    {
      link: "/charts",
      name: "Charts",
    },
    {
      link: "/shopping",
      name: "Shopping",
    },
    {
      link: "/posts",
      name: "Posts",
    },
  ];

  const toggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="flex flex-row justify-between list-none p-2">
      <ul className="flex items-center">
        <li className="mr-8">
          <Link href="/">
            <Image src={docker_logo} alt="Docker logo" width={50} />
          </Link>
        </li>
        {pageLinks.map((item) => {
          return (
            <li
              key={item.name}
              className="mr-4 font-semibold  hover:text-gray-950"
            >
              <Link href={`${item.link}`}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            // value="dark"
            onChange={toggleTheme}
            className="sr-only peer "
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Toggle me
          </span>
        </label>
      </div>
    </div>
  );
};

export default Header;

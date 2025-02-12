"use client";

import React from "react";
import Link from "next/link";
import { GrBarChart } from "react-icons/gr";
import { GrDatabase } from "react-icons/gr";
import { GrCycle } from "react-icons/gr";
import { GrCar } from "react-icons/gr";
import { usePathname } from "next/navigation";

const dashboardLinks = [
  {
    link: "charts",
    name: "Charts",
    icon: "GrBarChart",
    id: 1,
  },
  {
    link: "table",
    name: "Table",
    icon: "GrDatabase",
    id: 2,
  },
  {
    link: "analysis",
    name: "Analysis",
    icon: "GrCycle",
    id: 3,
  },
  {
    link: "charts",
    name: "Charts",
    icon: "GrBarChart",
    id: 4,
  },
  {
    link: "table",
    name: "Table",
    icon: "GrDatabase",
    id: 5,
  },
  {
    link: "analysis",
    name: "Analysis",
    icon: "GrCycle",
    id: 6,
  },
  {
    link: "charts",
    name: "Charts",
    icon: "GrBarChart",
    id: 7,
  },
  {
    link: "table",
    name: "Table",
    icon: "GrDatabase",
    id: 8,
  },
  {
    link: "analysis",
    name: "Analysis",
    icon: "GrCycle",
    id: 9,
  },
];
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();

  // get Icon component.
  const getIcons = (ico: string) => {
    switch (ico) {
      case "GrBarChart":
        return <GrBarChart />;
      case "GrDatabase":
        return <GrDatabase />;
      case "GrCycle":
        return <GrCycle />;
      default:
        <GrCar />;
    }
  };

  return (
    <div className="flex justify-start gap-2">
      <div className="flex flex-col w-1/8 bg-slate-300 dark:bg-gray-800 px-2 relative ml-[-16px] mt-[-10px]">
        {dashboardLinks.map((item) => {
          return (
            <Link
              href={`/dashboard/${item.id}`}
              key={item.id}
              className={`flex items-center py-2 px-2 border-b hover:border-slate-100 last:border-none ${
                item.id > 3 && "pointer-events-none text-gray-500"
              } `}
            >
              <span className="mr-4">{getIcons(item.icon)}</span>
              {item.name}
            </Link>
          );
        })}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;

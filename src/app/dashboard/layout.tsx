import { Slot } from "next";
import Link from "next/link";
import * as React from "react";

export default function Layout(
  props: {
    children: React.ReactNode,
  }
) {
  const navItems = [
    {
      "name": "Home",
      "link": "/dashboard/home"
    },
    {
      name: "Servers",
      link: "/dashboard/servers/list",
      subitems: [
        {
          name: "List",
          link: "/dashboard/servers/list"
        },
        {
          name: "Add New",
          link: "/dashboard/servers/add"
        }
      ]
    }
  ];

  return (
    <div className="flex h-screen">
      <div className="w-80 bg-zinc-900 p-8 h-full flex flex-col gap-8">
        <h1 className="text-3xl text-center font-black italic tracking-tighter">Gamewarden</h1>

        <nav>
          <ul className="flex flex-col gap-6">
            {navItems.map((val) => {
              return (
                <li key={val.name} className="flex flex-col gap-3">
                  <Link href={val.link} className="text-xl font-bold text-white hover:text-zinc-300 transition-colors">
                    {val.name}
                  </Link>
                  {val.subitems && val.subitems.length > 0 && (
                    <ul className="flex flex-col gap-3 border-l-2 border-zinc-800 ml-2 pl-4">
                      {val.subitems.map((sub) => (
                        <li key={sub.name}>
                          <Link href={sub.link} className="text-zinc-400 hover:text-white transition-colors">
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
      {props.children}
    </div>
  )
}

'use client'
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";


export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [selected, setSelected] = useState(pathname);

  const tabs = [
    {
      key: "/",
      content: "Home"
    },
    {
      key: "/about",
      content: "About"
    },
    {
      key: "/projects",
      content: "Projects"
    },
    {
      key: "/contact",
      content: "Contact"
    },
  ]

  function handleClick(destination: string) {
    setSelected(destination);
    router.push(`${destination}`);
  }

  return (
    <ul 
      className="flex w-full justify-between
                 md:gap-unit-md md:justify-center"
    
    >
      {tabs.map((tab) => (
        <li 
          key={tab.key} 
          className="w-1/5
                     md:w-1/12"
        >
          <button
            className={`text-text font-semibold w-full 
                        text-sm pb-unit
                        md:text-xl
                        ${selected === tab.key ? " border-b-accent border-b-2 md:border-b-4" : ""}`}
            onClick={() => handleClick(tab.key)}
          >
            {tab.content}
          </button>
        </li>
      ))}
    </ul>
  )
}

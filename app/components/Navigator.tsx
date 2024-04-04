'use client';
import React, { useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import Home from "./Home";


export default function Navigator({ children }: { children: React.ReactNode }) {
  const pageNames = ["Home", "About", "Projects", "Contact"];
  const [selected, setSelected] = useState<string | number>(pageNames[0]);

  return (

    <Tabs
      selectedKey={selected}
      onSelectionChange={(key) => setSelected(key)}
      variant="underlined"
      size="lg"
      className="flex justify-center items-center text-text font-bold fixed bg-background w-full
                  py-unit-xs" 
      classNames={{
        tabList: "bg-background",
        tab: "max-w-fit px-unit-xs md:px-unit-xl md:text-xl",
        cursor: "bg-accent w-full"
      }}
    >
      {React.Children.map(children, (child, index) => (
        <Tab key={pageNames[index]} title={pageNames[index]} className="h-full flex-1 flex flex-col data-selected:accent">
          {child}
        </Tab>
      ))}
    </Tabs>
  );
}



"use client";
import { useState } from "react";
import Location from "./header/location";
import Logo from "./header/logo";
import Seach from "./header/seach";
import LeftMain from "./main/LeftMain";


export default function Main() {
  const [active, setActive] = useState("Home");

  return (
    <>
      <div className=" flex flex-col ">
        <header  className="pt-2 pb-2 top-0 left-0 right-0 flex fixed flex-row justify-around bg-stone-50">
          <Logo />
          <Seach />
          <Location />
        </header>

        <main className=" pt-16 ">
          <LeftMain/>
        </main>
      </div>
    </>
  );
}

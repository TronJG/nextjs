"use client"

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./sidebar";
import InstacartSidebar from "./sidebar";

export default function Logo() {
  return (
    <>
      <div className=" flex items-center space-x-5">
        <InstacartSidebar/>
        <div className="flex items-center text-3xl font-bold">
          <img className="w-40" src="./logo.webp" alt="" />
        </div>
      </div>
    </>
  );
}

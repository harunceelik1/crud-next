"use client";
import Link from "next/link";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const currentPath = usePathname();
  console.log("xcz", currentPath);
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link href="/" className="text-white font-bold">
        CODE.
      </Link>

      {currentPath === "/" && (
        <Link href="/addTopic" className="bg-white p-2">
          Add Topic
        </Link>
      )}
    </nav>
  );
}

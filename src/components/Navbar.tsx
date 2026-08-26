import Link from "next/link";
import React from "react";
import { ArrowDownToLine } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="px-5 py-7  sm:py-12">
      {/* mobile and smaller screens nav */}
      <div className="smaller-screens-nav flex font-sans justify-between items-center sm:hidden">
        <Link href="/" className="font-semibold ">
          sp
        </Link>
        <ul className="flex items-center gap-3 text-sm text-grayish-dark">
          <li>
            <Link href="/about" className="text-grayish-dark">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>{" "}
          <li className="">
            <a
              href="/resume.pdf"
              download="sushant-resume.pdf"
              className="flex items-center"
            >
              <span> Resume </span> <ArrowDownToLine className="h-3.5" />
            </a>
          </li>
        </ul>
      </div>
      {/* tablets and larger screens */}
      <div className="hidden sm:max-w-xl sm:flex font-sans sm:justify-between sm:items-center sm:mx-auto">
        <Link href="/" className="font-semibold ">
          sp
        </Link>
        <ul className="flex items-center gap-3 text-sm text-grayish-dark">
          <li>
            <Link href="/about" className="text-grayish-dark">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li className="">
            <a
              href="/resume.pdf"
              download="sushant-resume.pdf"
              className="flex items-center"
            >
              <span> Resume </span> <ArrowDownToLine className="h-3.5" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

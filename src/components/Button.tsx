import Link from "next/link";
import React from "react";
type ButtonProps = {
  children: React.ReactNode;
  href:string
};
export default function Button({ children,href }: ButtonProps) {
  return (
    <Link
      href={href}
      className="rounded-full whitespace-nowrap inline-block font-light text-xs bg-bg-btn text-txt-btn py-3 px-9 hover:bg-slate-800 transition-all"
    >
      {children}
    </Link>
  );
}

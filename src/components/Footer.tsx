import React from "react";

export default function Footer() {
  return (
    <>
      {/* small screen footer */}
      <footer className="px-5 sm:hidden py-7 border-t border-gray-200 font-sans">
        <p className="text-normal-para text-sm">
          {" "}
          © {new Date().getFullYear()} {"/"} Sushant Pokhrel.
        </p>
      </footer>
      {/* larger screen footer  */}
      <footer className="hidden sm:block w-full sm:max-w-xl mx-auto px-5 py-7 border-t  border-gray-200 font-sans">
        <p className="text-normal-para text-sm">
          © {new Date().getFullYear()} {"/"} Sushant Pokhrel.
        </p>
      </footer>
    </>
  );
}

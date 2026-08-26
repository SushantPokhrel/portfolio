import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main className="font-sans py-7 px-5 sm:px-0 max-w-xl sm:mx-auto">
      <h1 className="text-3xl font-semibold ">About</h1>
      <div className="border-t border-gray-200 mt-6 py-6">
        {" "}
        <p className="text-lg text-normal-para mb-8">
          Hi there, I'm Sushant Pokhrel. I build custom web applications, along
          side working on some fun projects of my own. I work on both frontend
          and backend of a project but recently I've been leaning more towards
          the backend part. <br />
          <br />
          I use MERN or NextJs for my projects. I'm also learning Mobile App
          development to expand my knowledge. I'm also doing my bachelors in
          computer science and information technology from Central Campus of
          Technology.
          <br />
          <br />
          I'm open to freelance work or full time jobs, feel free to reach me
          here:{" "}
          <Link
            href="mailto:sushant.805421@cct.tu.edu.np"
            className="text-base underline text-normal-para hover:text-blue-400 transition-colors"
          >
            sushant.805421@cct.tu.edu.np
          </Link>
        </p>
      </div>
    </main>
  );
}

import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <main className="font-sans py-7 px-5 sm:px-0 max-w-xl sm:mx-auto">
      <h1 className="text-3xl font-semibold ">Contact</h1>
      <div className="border-t border-gray-200 mt-6 py-6">
        <p className="text-lg text-normal-para mb-8">
          If you'd like to get in touch or have a project, you can reach me by
          the following methods. I'm available for freelance remote work or onsite
           jobs.
        </p>

        {/* Consistent, scannable contact list matching the image layout */}
        <ul className="space-y-6">
          <li>
            <strong className="block text-xl font-semibold">Email</strong>
            <Link
              href="mailto:sushant.805421@cct.tu.edu.np"
              className="text-base text-normal-para hover:text-blue-400 transition-colors"
            >
              sushant.805421@cct.tu.edu.np
            </Link>
          </li>

          <li>
            <strong className="block text-xl font-semibold ">GitHub</strong>
            <Link
              href="https://github.com/SushantPokhrel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-normal-para hover:text-blue-400 transition-colors"
            >
              github.com/SushantPokhrel
            </Link>
          </li>

          <li>
            <strong className="block text-xl font-semibold ">LinkedIn</strong>
            <Link
              href="https://www.linkedin.com/in/sushant-pokhrel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-normal-para hover:text-blue-400 transition-colors"
            >
              linkedin.com/in/sushant-pokhrel
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

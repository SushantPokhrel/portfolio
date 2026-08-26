import React from "react";
import Button from "./Button";

export default function Landing() {
  return (
    <main className="py-8 font-sans border-b border-gray-200 sm:max-w-xl sm:mx-auto">
      <h1 className="font-semibold text-3xl">Namaste, I'm Sushant.</h1>
      <p className="text-2xl text-grayish-dark">
        A Web Developer from Dharan, Nepal.
      </p>
      <div className="py-3">
        <p className="text-xl text-normal-para">
          I work with clients to bring unique digital products to life. Most
          recently, I've been building custom software systems while expanding
          into app development and  fun personal projects.
        </p>
      </div>
      <div className="my-4">
        <Button children="More Information" href="/about"/>
      </div>
    </main>
  );
}

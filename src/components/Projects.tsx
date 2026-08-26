import React from "react";
import { Projects as ProjectData } from "@/content/Projects";
import Image from "next/image";
import Button from "./Button";
export default function Projects() {
  return (
    <main className="py-13 font-sans sm:max-w-5xl sm:mx-auto">
      <div className="sm:max-w-xl sm:mx-auto">
        
        <h1 className="text-2xl font-semibold">Projects</h1>
        <p className="py-3 text-lg text-normal-para">
          Below is the selection of client and personal projects that I've
          worked on.
        </p>
      </div>
      <div className="sm:flex gap-10">
        {ProjectData.map((project, key) => (
          <div
            key={key}
            className="bg-card-bg p-8 rounded-2xl my-8  hover:bg-card-bg-hover transition-all max-w-lg"
          >
            <div className="relative rounded-2xl aspect-video w-full shadow-xl shadow-slate-400/30">
              <Image
                src={project.preview_img}
                fill
                alt={project.project_name}
                className="rounded-2xl"
              />
            </div>
            <div className="mt-5">
              <h1 className="font-semibold text-lg">{project.project_name}</h1>
              <p className="text-normal-para mt-1.5 leading-5">
                {project.details}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <Button children="Live View" href={project.live_view} />
                <Button children="Learn More" href="/" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

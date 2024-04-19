'use client';
import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects({ pinnedRepos, otherRepos }: {
  pinnedRepos: any[],
  otherRepos: any[],
}) {
  const [showAll, setShowAll] = useState(false);
  const [showText, setShowText] = useState<string>("Show More");

  function handleShowText() {
    if (showText === "Show More") {
      setShowText("Show Less");
      setShowAll(true);
    } else {
      setShowText("Show More");
      setShowAll(false);
    }
  }

  return (
    <main
      className="flex-1 flex flex-col justify-center items-center
                py-unit-3xl px-unit-lg gap-unit-md
                md:pt-unit-3xl md:pb-unit-2xl md:px-unit-4xl"
    >
      <ul
        className="flex justify-center items-stretch
                  flex-col gap-unit-xl
                  md:flex-row md:flex-wrap md:w-full md:gap-unit-2xl"
      >
        {pinnedRepos.map((pinnedRepo, index) => (
          <li
            key={index}
            className="md:w-1/4 md:h-unit-6xl"
          >
            <ProjectCard
              projectTitle={pinnedRepo.node.name}
              projectDescription={pinnedRepo.node.description}
              githubUrl={pinnedRepo.node.url}
              demoUrl={pinnedRepo.node.homepageUrl}
            />
          </li>
        ))}



        {(showAll) && (
          otherRepos.map((otherRepo, index) => (
            <li
              key={index}
              className="md:w-1/4 md:h-unit-6xl"
            >
              <ProjectCard
                projectTitle={otherRepo.name}
                projectDescription={otherRepo.description}
                githubUrl={otherRepo.url}
                demoUrl={otherRepo.homepageUrl}
              />
            </li>
          )))}
      </ul>
      <button
        className="self-end"
        onClick={handleShowText}
      >
        <p
          className="text-text md:text-sm font-extralight hover:font-light"
        >
          {showText}
        </p>
      </button>
    </main>
  )
}

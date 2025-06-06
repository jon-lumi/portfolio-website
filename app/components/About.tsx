import { workExperienceData, extracurricularActivitiesData, SkillsIcons } from "../data";
import GitHubCalendar, { ThemeInput } from 'react-github-calendar';
import ExperienceCard from "./ExperienceCard";

const contributionsCalendarTheme: ThemeInput = {
  light: [
    "rgba(203, 151, 218, 0.03)",
    "rgba(203, 151, 218, 0.25)",
    "rgba(203, 151, 218, 0.50)",
    "rgba(203, 151, 218, 0.75)", 
    "rgba(203, 151, 218, 1.0)"
  ]
  ,
  dark: [
    "rgba(203, 151, 218, 0.03)",
    "rgba(203, 151, 218, 0.25)",
    "rgba(203, 151, 218, 0.50)",
    "rgba(203, 151, 218, 0.75)", 
    "rgba(203, 151, 218, 1.0)"
  ]
};

export default function About() {
  return (
    <main className="
                     py-unit-3xl px-unit-md
                     md:py-unit-3xl md:px-unit-4xl"
    >
      <h1
        className="text-text
                   text-lg font-bold
                   md:text-2xl md:font-extrabold"
      >
        Work Experience:
      </h1>

      <ul className="flex flex-col 
                     mt-unit-md mb-unit-2xl gap-unit-md
                     md:mt-unit-lg md:mb-unit-3xl md:gap-unit-lg">
        {workExperienceData.map((experience, index) => (
          <li
            key={index}
            className="w-full bg-secondary bg-opacity-25 rounded-2xl flex flex-col
                       p-unit-lg gap-unit-sm focus:bg-opacity-50 active:bg-opacity-50
                       md:p-unit-xl hover:bg-opacity-50"
          >
            <ExperienceCard 
              position={experience.position}
              company={experience.company}
              duration={experience.duration}
              description={experience.description}
            />
          </li>
        ))}
      </ul>

      <h1
        className="text-text
                   text-lg font-bold
                   md:text-2xl md:font-extrabold"
      >
        Extracurricular Activites:
      </h1>

      <ul className="flex flex-col 
                     mt-unit-md mb-unit-2xl gap-unit-md
                     md:mt-unit-lg md:mb-unit-3xl md:gap-unit-lg">
        {extracurricularActivitiesData.map((experience, index) => (
          <li
            key={index}
            className="w-full bg-secondary bg-opacity-25 rounded-2xl flex flex-col
                       p-unit-lg gap-unit-sm focus:bg-opacity-50 active:bg-opacity-50
                       md:p-unit-xl hover:bg-opacity-50"
          >
            <ExperienceCard 
              position={experience.position}
              company={experience.company}
              duration={experience.duration}
              description={experience.description}
            />
          </li>
        ))}
      </ul>

      <h1
        className="text-text font-extrabold
                   text-lg
                   md:text-2xl"
      >
        Skills:
      </h1>

      <ul className="flex flex-wrap justify-center
                     mt-unit-md mb-unit-2xl gap-unit-md
                     md:mt-unit-lg md:mb-unit-3xl md:gap-unit-xl">
        {SkillsIcons.map((SkillIcon, index) => (
          <li
            key={index}
            className="border-primary bg-secondary-500/5 rounded-full flex justify-center items-center border-1
                       p-unit-md active:bg-secondary-500/15
                       md:p-unit-xl hover:bg-secondary-500/15"
          >
            <div className="flex flex-col justify-center items-center
                            md:gap-unit-sm"
            >
              <SkillIcon className="text-text 
                                     size-unit-md
                                     md:size-unit-xl"
              />
            </div>
          </li>
        ))}
      </ul>

      

      <h1
        className="text-text font-extrabold
                   text-lg
                   md:text-2xl"
      >
        Contributions:
      </h1>
      <div className="flex justify-center items-center
                       mt-unit-md mb-unit-2xl
                       md:mt-unit-lg">
        <GitHubCalendar username="jon-lumi" 
                        theme={contributionsCalendarTheme} 
                        weekStart={1}
                        showWeekdayLabels={true}
                        blockSize={13}
                        fontSize={15}
        />
      </div>
    </main>
  )
}

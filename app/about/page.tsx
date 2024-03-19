import { workExperienceData, skillsData } from "./data";
import { FaBuilding, FaCalendar } from 'react-icons/fa'

export default function About() {

  return (
    <main className="flex-1 py-unit-xl">
      <h1
        className="text-text
                   text-lg font-bold
                   md:text-2xl md:font-extrabold"
      >
        My Work Experience:
      </h1>

      <ul className="flex flex-col 
                     mt-unit-md mb-unit-2xl gap-unit-md
                     md:mt-unit-lg md:mb-unit-3xl md:gap-unit-lg">
        {workExperienceData.map((experience, index) => (
          <li
            key={index}
            className="w-full bg-secondary-500/5 rounded-2xl flex flex-col border-primary
                       p-unit-lg gap-unit-sm border-1 focus:bg-secondary-500/15 active:bg-secondary-500/15
                       md:p-unit-xl md:border-2 hover:bg-secondary-500/15"
          >
            <h1
              className="text-text 
                         text-sm font-semibold
                         md:text-xl md:font-bold"
            >{experience.position}</h1>
            <div
              className="flex 
                         flex-col gap-unit-xs
                         md:flex-row md:gap-unit-lg md:items-center"
            >
              <div className="flex gap-unit-xs 
                              md:items-center">
                <FaBuilding className="text-primary
                                       md:size-unit-lg"/>
                <p
                  className="text-primary 
                             text-xs font-medium
                             md:text-lg md:font-semibold"
                >
                  {experience.company}
                </p>
              </div>

              <div className="flex gap-unit-xs 
                              md:items-center">
                <FaCalendar className="text-primary 
                                       md:size-unit-lg"/>
                <p
                  className="text-primary 
                             text-xs font-medium
                             md:text-lg md:font-semibold"
                >
                  {experience.duration}
                </p>
              </div>
            </div>

            <ul className="flex flex-col gap-1">
              {experience.description.map((bulletPoint, index) => (
                <li key={index}>
                  <p
                    className="text-text 
                                 text-xs font-light
                                 md:text-base md:font-normal"
                  >
                    • {bulletPoint}
                  </p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h1
        className="text-text font-extrabold
                   text-lg
                   md:text-2xl"
      >
        My Skills:
      </h1>

      <ul className="flex flex-wrap justify-center
                     mt-unit-md mb-unit-2xl gap-unit-md
                     md:mt-unit-lg md:mb-unit-3xl md:gap-unit-xl">
        {skillsData.map((skill, index) => (
          <li 
            key={index}
            className="border-primary bg-secondary-500/5 rounded-full flex justify-center items-center
                       p-unit-md border-1 active:bg-secondary-500/15
                       md:p-unit-xl md:border-2 hover:bg-secondary-500/15"
          >
            <div className="flex flex-col justify-center items-center
                            md:gap-unit-sm">
              <skill.icon className="text-text 
                                     size-unit-md
                                     md:size-unit-xl"/>
              <p
                className="text-center text-text
                           hidden
                           md:font-medium"
              >
                {skill.skillName}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <h1
        className="text-text font-extrabold
                   text-lg
                   md:text-2xl"
      >
        My Activity:
      </h1>
      <div>

      </div>
      <img src="https://ghchart.rshah.org/c648ea/jonn-L" alt="github contributions" />
    </main>
  )
}

import { workExperienceData, skillsData } from "./data";
import { FaBuilding, FaCalendar } from 'react-icons/fa'

export default function About() {

  return (
    <main className="flex-1 py-unit-xl">
      <h1
        className="text-text
                   text-lg mb-unit-md font-bold
                   md:text-2xl md:font-extrabold"
      >
        My Work Experience:
      </h1>

      <ul className="flex flex-col gap-unit-md">
        {workExperienceData.map((experience, index) => (
          <li
            key={index}
            className="w-full bg-secondary-500/15 rounded-2xl flex flex-col 
                       p-unit-lg gap-unit-sm
                       md:p-unit-xl"
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
                   text-lg mt-unit-2xl
                   md:text-2xl md:mb-unit-xl"
      >
        My Skills:
      </h1>

      <ul className="flex flex-wrap justify-center
                     gap-unit-md p-unit-md
                     md:gap-unit-2xl md:p-unit-md">
        {skillsData.map((skill, index) => (
          <li key={index}>
            <div className="flex flex-col justify-center items-center
                            md:gap-unit-sm">
              <skill.icon className="size-unit-lg text-text
                              md:size-unit-2xl"/>
              <p
                className="text-center text-text
                           hidden
                           md:font-medium md:block"
              >
                {skill.skillName}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <h1
        className="text-text font-extrabold
                   text-lg mt-unit-2xl
                   md:text-2xl md:mb-unit-xl"
      >
        My Activity:
      </h1>
      <div
        className=""
      >

      </div>
    </main>
  )
}

import { SiGithub } from "react-icons/si";
import { MdLiveTv } from "react-icons/md";
import Highlighter from "react-highlight-words"; 
import { skillsNames } from "../data";

export default function ProjectCard({ projectTitle, projectDescription, githubUrl, demoUrl }: {
	projectTitle: string,
	projectDescription: string,
	githubUrl: string,
	demoUrl: string
}) {
	

	return (
		<div className="bg-background w-full flex flex-col items-center
						 				shadow-[0_2px_2px_2.5px_rgba(198,72,234,0.25)] rounded-xl p-unit-sm gap-unit-lg
										md:w-full md:h-full md:p-unit-lg md:gap-unit-xl md:hover:shadow-[0_2px_2px_2.5px_rgba(198,72,234,0.65)]"
		>
			<div className="flex flex-col flex-1 w-full
											gap-unit-xs
											md:gap-unit-sm"
			>
				<h1
					className="text-text 
										font-semibold text-lg
										md:font-bold md:text-xl"
				>
					{projectTitle}
				</h1>

				<Highlighter 
					className="text-text md:text-lg text-sm font-base"
					highlightClassName="text-accent selection:bg-background"
					searchWords={skillsNames}
					autoEscape={true}
					caseSensitive={true}
					textToHighlight={projectDescription}
					highlightStyle={{ backgroundColor: "transparent" }}
				/>
			</div>

			<ul
				className="flex w-full justify-center items-center
									 gap-unit-sm
									 md:gap-unit-md md:self-end md:justify-self-end"
			>
				<li>
					<a href={githubUrl} target="_blank">
						<SiGithub
							className="size-unit-lg
												md:size-unit-xl"
						/>
					</a>
				</li>

				{(demoUrl != "") && (
					<li>
						<a href={demoUrl} target="_blank">
							<MdLiveTv
								className="size-unit-lg
													md:size-unit-xl"							
							/>
						</a>
					</li>
				)}
			</ul>
		</div>
	)
}

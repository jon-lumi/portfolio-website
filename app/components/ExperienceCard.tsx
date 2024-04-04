import { FaBuilding, FaCalendar } from 'react-icons/fa';

export default function ExperienceCard({ position, company, duration, description }: {
	position: string,
	company: string,
	duration: string,
	description: string[]
}) {
	return (
		<>
			<h1
				className="text-text 
                    text-sm font-semibold
                  	md:text-xl md:font-bold"
			>{position}</h1>
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
						{company}
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
						{duration}
					</p>
				</div>
			</div>

			<ul className="flex flex-col gap-1">
				{description.map((bulletPoint, index) => (
					<li key={index}>
						<p
							className="text-text 
                          text-xs font-light
                          md:text-base md:font-normal"
						>
							{bulletPoint}
						</p>
					</li>
				))}
			</ul>
		</>
	)
}

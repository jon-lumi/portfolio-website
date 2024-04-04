import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { socialLinks } from "../data";

export default function Footer() {
	return (
		<div className="flex justify-between w-full items-center
										px-unit-md pb-unit-xs">
			<p 
				className="text-text opacity-80 
									 text-xs
									 md:text-sm"
			>
				Made by Jon Lumi @ 2024
			</p>
			<ul className="flex-end flex
										 gap-unit-sm
										 md:gap-unit-md
										 ">
				<li>
					<a href={socialLinks.githubUrl} target="_blank">
						<FaGithub className="text-primary md:size-unit-xl"/>
					</a>
				</li>

				<li>
					<a href={socialLinks.linkedInUrl} target="_blank">
						<FaLinkedin className="text-primary md:size-unit-xl"/>
					</a>
				</li>

				<li>
					<a href={socialLinks.email} target="_blank">
						<MdEmail className="text-primary md:size-unit-xl"/>
					</a>
				</li>
			</ul>
		</div>
	)
}

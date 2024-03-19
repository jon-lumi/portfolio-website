import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
	return (
		<div className="flex justify-between w-full items-center">
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
					<button>
						<FaGithub className="text-primary md:size-unit-xl"/>
					</button>
				</li>

				<li>
					<button>
						<FaLinkedin className="text-primary md:size-unit-xl"/>
					</button>
				</li>

				<li>
					<button>
						<MdEmail className="text-primary md:size-unit-xl"/>
					</button>
				</li>
			</ul>
		</div>
	)
}

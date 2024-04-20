import Image from "next/image";
import me from "./../images/me.png"
import { description } from "../data";

export default function Home() {
	return (
		<main 
			className="flex-1 flex justify-center items-center
								flex-col-reverse gap-unit-lg
								md:flex-row md:gap-unit-3xl"
			
		>
			<div
				className="flex flex-col justify-center
									w-full p-unit-lg items-center
									gap-unit-xs md:w-2/5 md:items-start"
			>
				<h1
					className="text-text font-bold w-fit
											text-4xl
											md:text-7xl"
				>
					Jon Lumi
				</h1>
				<div
					className="flex flex-col gap-unit-xs"
				>
					{description.split("\n").map((line, index) => (
						<p key={index} className="text-primary 
																			text-sm leading-6
																			md:text-lg md:leading-7">
							{line}
						</p>
					))}
				</div>
			</div>

			<img
				src={me.src}
				className="size-unit-5xl md:size-unit-6xl"
			/>
		</main>
	)
}

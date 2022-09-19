import React from "react";
import heroBg from "../assets/nature-4.jpg";
const HeroSection = () => {
	return (
		<>
			<div className="w-full h-screen bg-zinc-200 flex flex-col">
				<div
					style={{ backgroundImage: `url(${heroBg})` }}
					className="w-full h-screen bg-no-repeat bg-cover bg-center"
				>
					<div className="grid justify-center mt-10">
						{/* <img className="w-full" src={heroBg} alt="/" /> */}
						<div className="flex flex-col items-center gap-y-10 mt-10">
							<h2 className="text-xl md:text-2xl font-semibold text tracking-wider uppercase">
								In Nature, Nothing is Perfect
							</h2>
							<h2 className="text-3xl font-extrabold md:text-5xl font-merriweather">
								and everything is perfect
							</h2>
							<button className="p-2 tracking-wider">read more</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroSection;

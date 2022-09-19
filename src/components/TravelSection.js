import React from "react";
import heroBg from "../assets/nature-4.jpg";

const TravelSection = () => {
	return (
		<div className="w-full h-auto bg-slate-300 pb-10">
			<div className="flex flex-col md:flex-row justify-center items-center py-32">
				<div className="hidden md:block relative">
					<div
						style={{ backgroundImage: `url(${heroBg})` }}
						className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-no-repeat bg-cover bg-center rounded-full absolute z-10 -left-[150px] -top-[100px]"
					></div>
					<div className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] bg-red-400 rounded-full absolute z-20 left-[150px] top-[220px]"></div>
				</div>
				<div className="w-1/2 h-auto py-10 px-10 bg-white rounded-3xl  drop-shadow-xl grid grid-cols-1 md:grid-cols-2">
					<div></div>
					<div className="space-y-4">
						<h2 className="text-5xl font-merriweather font-bold">
							Travel with us
						</h2>
						<p className="text-l font-semibold">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsum
							mollitia cupiditate culpa et, fugiat possimus accusamus iste in
							atque aliquam nostrum aperiam deleniti doloribus eius quam quod
							sit sequi.
						</p>
						<button className="p-2 tracking-wider">learn more</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TravelSection;

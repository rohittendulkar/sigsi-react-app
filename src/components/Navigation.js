import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Navigation = () => {
	return (
		<>
			<div className="w-full flex flex-row justify-between bg-white drop-shadow-md md:text-4xl">
				<div className="m-3">
					<h2 className="font-oxygen font-extrabold ml-5 text-gray-400">
						<a href="#">logo</a>
					</h2>
				</div>
				<div className="m-3">
					<Bars3Icon className="block mr-5 h-6 w-6 md:h-9 md:w-9 transition ease-in-out duration-250 hover:cursor-pointer hover:bg-slate-300 hover:bg-opacity-50 hover:rounded-lg" />
				</div>
			</div>
		</>
	);
};

export default Navigation;

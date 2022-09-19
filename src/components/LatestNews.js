import { Popover, Transition } from "@headlessui/react";

import { React } from "react";
import nature1 from "../assets/nature-1.jpg";
import nature2 from "../assets/nature-2.jpg";
import nature3 from "../assets/nature-3.jpg";

const news = [
	{
		id: 1,
		name: "Location 1",
		title: "Location 1 Title",
		population: "1001510",
		caption: "Sun Sept 19 2022 | Comments (0)",
		source: nature1,
		details:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime dolores eos? Voluptatibus mollitia eum autem similique sint, ipsam quisquam vitae praesentium quia obcaecati rem consequatur labore ad suscipit harum!",
	},
	{
		id: 2,
		name: "Location 2",
		title: "Location 2 Title",
		population: "2315050",
		caption: "Sun Sept 19 2022 | Comments (0)",
		source: nature2,
		details:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime dolores eos? Voluptatibus mollitia eum autem similique sint, ipsam quisquam vitae praesentium quia obcaecati rem consequatur labore ad suscipit harum!",
	},
	{
		id: 3,
		name: "Location 3",
		title: "Location 3 Title",
		population: "23150531",
		caption: "Sun Sept 19 2022 | Comments (0)",
		source: nature3,
		details:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime dolores eos? Voluptatibus mollitia eum autem similique sint, ipsam quisquam vitae praesentium quia obcaecati rem consequatur labore ad suscipit harum!",
	},
];

const LatestNews = () => {
	return (
		<div className="w-full h-auto bg-red-400 flex flex-col flex-auto items-center">
			<div className="mt-10">
				<h2 className="text-white text-3xl font-extrabold md:text-5xl font-merriweather">
					Latest News
				</h2>
			</div>

			<div className="mt-10 flex flex-auto flex-col md:flex-row flex-wrap gap-8 justify-center mb-10">
				{news.map((item) => (
					<div
						key={item.id}
						className="w-[300px] h-[300px] bg-white rounded-lg drop-shadow-md transition hover:scale-105 ease-in-out"
					>
						<img
							src={item.source}
							alt="nature1"
							className="w-64 mt-5 mb-5 ml-5 mr-5"
						/>
						<p className="text-xl font-semibold uppercase tracking-wider ml-5">
							{item.title}
						</p>
						<p className="text-sm ml-5 text-slate-500 mb-2">{item.caption}</p>
						<Popover>
							<Popover.Button className="relative px-2 ml-5 text-white border bg-red-400 border-red-400 rounded-lg">
								View Details
							</Popover.Button>
							<Transition
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<Popover.Panel className="absolute left-1/2 z-10 sm:z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
									<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
										<div className="relative grid gap-8 bg-white p-7 md:flex-col">
											<p>Location: {item.name}</p>
											<p>Description: {item.details}</p>
											<p>Population: {item.population}</p>
										</div>
									</div>
								</Popover.Panel>
							</Transition>
						</Popover>
					</div>
				))}
			</div>

			<button className="p-2 tracking-wider border-white mb-10">
				learn more
			</button>
		</div>
	);
};

export default LatestNews;

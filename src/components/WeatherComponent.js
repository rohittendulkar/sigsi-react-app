import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import React, { Fragment } from "react";
import { useState } from "react";
import bgImg from "../assets/nature-3.jpg";

const WeatherComponent = () => {
	console.log(process.env);
	const stateData = [
		{ name: "Uttar Pradesh", id: 1 },
		{ name: "Maharashtra", id: 2 },
		{ name: "Karnataka", id: 3 },
		{ name: "Kerala", id: 4 },
		{ name: "Rajasthan", id: 5 },
		{ name: "Goa", id: 6 },
		{ name: "Punjab", id: 7 },
		{ name: "Assam", id: 8 },
		{ name: "Gujarat", id: 9 },
	];
	const [data, setData] = useState({});
	const [location, setLocation] = useState("");
	console.log(location);

	const finalHandler = (location) => {
		setLocation(location);
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
			)
			.then((response) => {
				setData(response.data);
				console.log(response.data);
				openModal();
			});
	};

	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<div
			style={{ backgroundImage: `url(${bgImg})` }}
			className="w-full h-auto bg-no-repeat bg-cover bg-center"
		>
			<div className=" flex flex-row justify-center items-center py-16">
				<div className=" hidden md:block absolute left-24 w-[600px] h-[600px] bg-slate-400 rounded-full opacity-40 z-0" />
				<div className=" relative grid md:grid-cols-3 gap-4 z-10">
					{stateData.map((item) => (
						<div
							key={item.id}
							className="bg-white w-48 h-48 flex flex-col justify-center items-center rounded-xl hover:cursor-pointer space-y-3"
						>
							<p className="text-xl font-oxygen font-medium tracking-wider">
								{item.name}
							</p>
							<button
								type="button"
								onClick={() => finalHandler(item.name)}
								className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
							>
								Check Weather
							</button>
						</div>
					))}

					<Transition as={Fragment} appear show={isOpen}>
						<Dialog as="div" className="relative z-30" onClose={closeModal}>
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0"
								enterTo="opacity-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<div className="fixed inset-0 bg-slate-800 bg-opacity-25" />
							</Transition.Child>

							<div className="fixed inset-0 overflow-y-auto">
								<div className="flex min-h-full items-center justify-center p-4 text-center">
									<Transition.Child
										as={Fragment}
										enter="ease-out duration-300"
										enterFrom="opacity-0 scale-95"
										enterTo="opacity-100 scale-100"
										leave="ease-in duration-200"
										leaveFrom="opacity-100 scale-100"
										leaveTo="opacity-0 scale-95"
									>
										<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
											<Dialog.Title
												as="h3"
												className="text-lg font-medium leading-6 text-gray-900"
											>
												Hello {data.name}, here is your weather forecast.
											</Dialog.Title>
											<div className="mt-2 grid grid-cols-3 gap-4">
												<p className="text-sm text-gray-500 font-medium">
													Weather
												</p>
												<p className="text-sm text-gray-500 font-medium">
													Temperature
												</p>
												<p className="text-sm text-gray-500 font-medium">
													Humidity
												</p>
												{data.weather && (
													<p className="text-sm text-gray-500">
														{data.weather.map((item) => (
															<>{item.main}</>
														))}
													</p>
												)}
												{data.main && (
													<>
														<p className="text-sm text-gray-500">
															{data.main.temp}°C
														</p>
														<p className="text-sm text-gray-500">
															{data.main.humidity}%
														</p>
													</>
												)}
											</div>

											<div className="mt-4">
												<button
													type="button"
													className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
													onClick={closeModal}
												>
													Close
												</button>
											</div>
										</Dialog.Panel>
									</Transition.Child>
								</div>
							</div>
						</Dialog>
					</Transition>
				</div>
			</div>
		</div>
	);
};

export default WeatherComponent;

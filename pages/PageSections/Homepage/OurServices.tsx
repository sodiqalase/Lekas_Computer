/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../../../components/Button/Button";

const serviceList = [
	{
		title: "General Repair",
		icon: "stethoscope.gif",
	},
	{
		title: "Screen Replacement",
		icon: "cream.gif",
	},
	{
		title: "Networking",
		icon: "network.gif",
	},
	{
		title: "Keyboard Replacement",
		icon: "arrow.gif",
	},
	{
		title: "Memory Upgrade",
		icon: "rocket.gif",
	},
	{
		title: "Antivirus Installation",
		icon: "virus.gif",
	},
	{
		title: "Battery Replacement",
		icon: "arrow.gif",
	},
	{
		title: "Hard Drive Replacement",
		icon: "arrow.gif",
	},
	{
		title: "Printer Repair & Sales",
		icon: "internet.gif",
	},
	{
		title: "Laptop Sales",
		icon: "padlock.gif",
	},
	{
		title: "Software Installation",
		icon: "usb.gif",
	},
	{
		title: "Data Transfer",
		icon: "copy.gif",
	},
];

const OurServices = () => {
	return (
		<section id="servicesSection" className="bg-white py-24">
			<div className="global-container">
				<div className="flex">
					<div className="w-[40%] mr-3">
						<p className="text-lk-pink mb-5">Our Services</p>
						<h5 className="text-lk-heading text-[30px] mb-3">
							We are your No.1 Computer Expert and e-Solution Plug
						</h5>
						<p className="text-lk-grey mb-6">
							We provides comprehensive on-site & off-site repair, maintenance
							and pick-up services for Computer Desktop, Laptops, Workstation,
							Printer and Server repairs and maintenance.
						</p>
						<Button text="Let's Talk" href="https://wa.me/2348030492803" />
					</div>
					<div className="w-[60%] grid grid-cols-3 ml-5 items-start !gap-6">
						{serviceList.map((service, index) => (
							<div
								key={`serviceList${index}`}
								className="p-4 py-7 text-center h-[170px] rounded-lg shadow-elevation2"
							>
								<img
									src={`images/${service.icon}`}
									className="block h-12 mx-auto"
									alt=""
								/>
								<p className="text-lk-heading mt-3">{service.title}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurServices;

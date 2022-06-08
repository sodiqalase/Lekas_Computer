/* eslint-disable @next/next/no-img-element */
import { list } from "postcss";
import React from "react";

const Footer = () => {
	const _handleScroll1 = () => {
		const el = document.getElementById("servicesSection");
		if (el) {
			const y = el.getBoundingClientRect().top + window.pageYOffset + 10;
			window.scrollTo({ top: y, behavior: "smooth" });
		}
	};
	const _handleScroll2 = () => {
		const el = document.getElementById("aboutUsSection");
		if (el) {
			const y = el.getBoundingClientRect().top + window.pageYOffset + 10;
			window.scrollTo({ top: y, behavior: "smooth" });
		}
	};
	const _handleScroll3 = () => {
		const el = document.getElementById("testimonialSection");
		if (el) {
			const y = el.getBoundingClientRect().top + window.pageYOffset + 10;
			window.scrollTo({ top: y, behavior: "smooth" });
		}
	};

	return (
		<footer className="bg-[#040844]">
			<section className="border-t pt-16 border-white">
				<div className="global-container">
					<div className="grid grid-cols-4 medium:grid-cols-1 !gap-10">
						<div className="">
							<p className="text-lk-pink text-xl">
								Lekas Global Computer Service
							</p>
							<p className="mt-3 text-gray-300">
								Your one-stop shop for all computer repair and sales
							</p>
						</div>
						<div>
							<p className="mb-3 text-xl font-semibold text-lk-pink ">
								Contact
							</p>
							<ul>
								<li
									className={`mb-3
														`}
								>
									<span className="inline-block leading-loose max-w-[247px] font-normal text-gray-300">
										13a, Oremeji Street, Computer Village, Ikeja lagaos.
									</span>
								</li>
								<li className="mb-3 text-gray-300">+234 803 049 2803</li>
								<li className="mb-3 text-gray-300">+234 805 894 8067</li>
							</ul>
						</div>
						<div>
							<p className="mb-3 text-xl font-semibold text-lk-pink ">Links</p>
							<ul>
								<li
									className={`mb-3 cursor-pointer
														`}
									onClick={_handleScroll2}
								>
									<a className="inline-block font-normal text-gray-300">
										About Us
									</a>
								</li>
								<li
									onClick={_handleScroll1}
									className="flex cursor-pointer items-center mb-3 text-gray-300"
								>
									<a>Services</a>
								</li>
								<li
									onClick={_handleScroll3}
									className="flex items-center cursor-pointer text-gray-300"
								>
									<a>Testimonials</a>
								</li>
							</ul>
						</div>

						<div>
							<p className="mb-3 text-xl font-semibold text-lk-pink ">
								Social Media
							</p>
							<ul className="flex items-center">
								<li className="cursor-pointer">
									<a
										href="https://www.instagram.com/_u/officallekasglobal"
										target="_blank"
										rel="noreferrer"
									>
										<img src="/images/instagram.png" className="h-6" alt="" />
									</a>
								</li>
								<li className="ml-4 cursor-pointer">
									<a
										href="hthttps://twitter.com/Lekas_Global?s=09"
										target="_blank"
										rel="noreferrer"
									>
										<img src="/images/twitter.png" className="h-6" alt="" />
									</a>
								</li>
								<li className="ml-4 cursor-pointer">
									<a
										href="https://www.facebook.com/olamilekan0211/"
										target="_blank"
										rel="noreferrer"
									>
										<img src="/images/facebook.png" className="h-6" alt="" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className="py-7 mt-20 flex items-center">
				<div className="global-container">
					<div className="flex justify-center">
						<p className="text-white text-lg">
							&copy; {`${new Date().getFullYear()}`} Lekas Global Computer
							Repair
						</p>
					</div>
				</div>
			</section>
		</footer>
	);
};

export default Footer;

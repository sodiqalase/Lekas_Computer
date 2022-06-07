/* eslint-disable @next/next/no-img-element */
import React from "react";

const AboutUs = () => {
	return (
		<section id="aboutUsSection" className="py-24 bg-[#F7F7FA]">
			<div className="global-container">
				<div className="grid grid-cols-2 !gap-5">
					<div>
						<p className="text-lk-pink mb-3">About Us</p>
						<h5 className="text-lk-heading text-[30px] mb-3">
							We are your No.1 Computer Expert and e-Solution Plug
						</h5>
						<p className="text-lk-grey">
							We provides comprehensive on-site & off-site repair, maintenance
							and pick-up services for Computer Desktop, Laptops, Workstation,
							Printer and Server repairs and maintenance.
						</p>
						<img
							src="/images/image5.jpg"
							className="h-[222px] w-full rounded-lg object-cover block mt-3"
							alt=""
						/>
					</div>
					<div className="relative">
						<img
							src="/images/image4.jpg"
							className="w-[90%] mx-auto rounded-lg object-cover block mt-3"
							alt=""
						/>
						<div className="max-w-[344px] rounded shadow-elevation1 text-white absolute top-[70%] left-[20%] bg-lk-blue p-4">
							<h6>We repair with Genuine parts only.</h6>
							<p className="mt-3">
								We are know especially for the Use of high quality parts in our
								repair services. We are unparalleled
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;

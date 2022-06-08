/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../../../components/Button/Button";

const whyList = [
	"Our Engineers have over 10 years of experience with repair.",
	"We Provide affordable and reliable services.",
	"We are know especially for the Use of high quality parts in our repair services.",
	"We are unmatched in quality and service.",
	"We have an onsite repair facility in Computer Village.",
];

const WhyTrustUs = () => {
	return (
		<section className="py-24 bg-[#F7F7FA]">
			<div className="global-container">
				<div className="grid grid-cols-2 medium:grid-cols-1 !gap-5">
					<div className="relative">
						<img
							src="/images/Trust-image.jpg"
							className="w-[90%] medium:w-full mx-auto rounded-lg object-cover block mt-3"
							alt=""
						/>
					</div>
					<div>
						<p className="text-lk-pink mb-3">Why Trust Us?</p>
						<h5 className="text-lk-heading text-[30px] mb-3">
							The thing about us is that
						</h5>

						<ul className="mt-6 mb-10">
							{whyList.map((item, index) => (
								<li key={`whyList${index}`} className="flex mb-6 items-center">
									<img src="/images/check.png" className="w-6" alt="" />
									<p className="flex-1 ml-3">{item}</p>
								</li>
							))}
						</ul>

						<Button href="https://wa.me/2348030492803" text="Hire Us Now" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyTrustUs;

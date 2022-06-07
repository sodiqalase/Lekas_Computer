/* eslint-disable @next/next/no-img-element */
import React from "react";

const WhatWeDo = () => {
	return (
		<section className="py-12 bg-white">
			<div className="global-container">
				<img src="/images/laptop.gif" className="w-20 mx-auto block" alt="" />
				<h4 className="text-esl-h3-desktop text-center">What we do?</h4>
				<p className="mt-3 max-w-[600px] mx-auto text-center">
					{" "}
					We provides comprehensive on-site & off-site repair, maintenance and
					pick-up services for Computer Desktop, Laptops, Workstation, Printer
					and Server repairs and maintenance.
				</p>
			</div>
		</section>
	);
};

export default WhatWeDo;

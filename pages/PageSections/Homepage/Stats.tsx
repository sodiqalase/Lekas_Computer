import React from "react";

const Stats = () => {
	return (
		<section className="mb-12">
			<div className="global-container">
				<div className="border border-gray-200 rounded-[20px] flex medium:flex-col items-center p-6">
					<div className="flex-1 flex justify-center medium:mb-4 items-center">
						<div className="text-center">
							<h6 className="text-[40px] text-lk-heading">100+</h6>
							<p className="text-sm text-lk-grey">Trusted Customers</p>
						</div>
					</div>
					<span className="w-[20px] h-[20px] medium:mb-4 rounded-full bg-[#E59AFF]"></span>
					<div className="flex-1 flex justify-center medium:mb-4 items-center">
						<div className="text-center">
							<h6 className="text-[40px] text-lk-heading">99%</h6>
							<p className="text-sm text-lk-grey">Repair Rate</p>
						</div>
					</div>
					<span className="w-[20px] h-[20px] medium:mb-4 rounded-full bg-[#9AFFC2]"></span>
					<div className="flex-1 flex justify-center medium:mb-4 items-center">
						<div className="text-center">
							<h6 className="text-[40px] text-lk-heading">700+</h6>
							<p className="text-sm text-lk-grey">Total Repairs</p>
						</div>
					</div>
					<span className="w-[20px] h-[20px] medium:mb-4 rounded-full bg-[#FF9A9A]"></span>
					<div className="flex-1 flex justify-center items-center">
						<div className="text-center">
							<h6 className="text-[40px] text-lk-heading">1%</h6>
							<p className="text-sm text-lk-grey">Return Jobs</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Stats;

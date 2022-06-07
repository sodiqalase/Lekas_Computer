/* eslint-disable @next/next/no-img-element */
import React from "react";

const Stars = ({ rating }: { rating: number }) => {
	const width = (rating * 100) / 5;

	return (
		<div className="flex relative">
			<img src="/images/star2.svg" className="w-[20px]" alt="" />
			<img src="/images/star2.svg" className="w-[20px]" alt="" />
			<img src="/images/star2.svg" className="w-[20px]" alt="" />
			<img src="/images/star2.svg" className="w-[20px]" alt="" />
			<img src="/images/star2.svg" className="w-[20px]" alt="" />

			<div
				style={{ width: `${width}%` }}
				className={`absolute top-0 left-0 right-0 bottom-0 overflow-x-hidden flex`}
			>
				<img src="/images/star.svg" className="w-[20px]" alt="" />
				<img src="/images/star.svg" className="w-[20px]" alt="" />
				<img src="/images/star.svg" className="w-[20px]" alt="" />
				<img src="/images/star.svg" className="w-[20px]" alt="" />
				<img src="/images/star.svg" className="w-[20px]" alt="" />
			</div>
		</div>
	);
};

export default Stars;

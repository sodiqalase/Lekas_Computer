import React from "react";

const Button = ({ text, href }: { text: string; href: string }) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="flex justify-center bg-lk-blue shadow-elevation1 items-center rounded-[7px] text-white w-[218px] h-[57px]"
		>
			{text}
		</a>
	);
};

export default Button;

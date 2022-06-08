/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Stars from "../../../components/Stars/Stars";

const testimonialList = [
	{
		description:
			"The quality of service rendered by their engineers is top-notch. I was very satisfied with their delivery.",
		name: "Alase Sodiq",
		rating: 4.9,
		position: "Frontend Engineer",
	},
	{
		description:
			"Their Engineers helped me with procuring a quality laptop and were also very helpful in the process of repair when faulty.",
		name: "Ameerah Yaqub",
		rating: 4.9,
		position: "Content Creator",
	},
	{
		description:
			"Their Engineers helped me with procuring a quality laptop and were also very helpful in the process of repair when faulty.",
		name: "Ameerah Yaqub",
		rating: 4.9,
		position: "Content Creator",
	},
	{
		description:
			"Their Engineers helped me with procuring a quality laptop and were also very helpful in the process of repair when faulty.",
		name: "Ameerah Yaqub",
		rating: 4.9,
		position: "Content Creator",
	},
	{
		description:
			"Their Engineers helped me with procuring a quality laptop and were also very helpful in the process of repair when faulty.",
		name: "Ameerah Yaqub",
		rating: 4.9,
		position: "Content Creator",
	},
	{
		description:
			"Their Engineers helped me with procuring a quality laptop and were also very helpful in the process of repair when faulty.",
		name: "Ameerah Yaqub",
		rating: 4.9,
		position: "Content Creator",
	},
];

const Testimonial = () => {
	const [isMobile, setIsMobile] = useState<boolean>(() => {
		return window.innerWidth < 550 ? true : false;
	});
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: isMobile ? 1 : 3,
		slidesToScroll: 1,
		customPaging: function () {
			return <SliderDot />;
		},
		dotsClass: "slick-dots slick-thumb",
		arrows: isMobile ? false : true,
		autoplay: true,
		nextArrow: <NextButton />,
		prevArrow: <PrevButton />,
		pauseOnHover: false,
		pauseOnFocus: false,
	};

	useEffect(() => {
		window.addEventListener("resize", () => {
			if (window.innerWidth < 550) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		});
		return () => {
			window.removeEventListener("resize", () => {});
		};
	}, []);

	return (
		<section id="testimonialSection" className="py-24 bg-[#F5F6FF]">
			<div className="global-container">
				<p className="text-lk-pink mb-5">Testimonials</p>
				<h5 className="text-lk-heading max-w-[310px] text-[30px] mb-3">
					What customers say about us.
				</h5>
				<Slider {...settings} className="w-full py-5 relative">
					{testimonialList.map((testimonial, index) => (
						<div key={`testimonialList${index}`} className="px-2">
							<div className="bg-white h-[300px] rounded p-4">
								<span className="block text-lk-heading text-[60px]">
									&#8221;
								</span>
								<p className="h-[55px] text-lk-grey">
									{testimonial.description}
								</p>
								<div className="mt-12 flex justify-between">
									<div className="flex items-center">
										<span className="bg-[#e7e9eb] rounded-full w-[53px] h-[53px]"></span>
										<div className="ml-2">
											<p className="text-lk-heading">{testimonial.name}</p>
											<p className="text-lk-grey text-xs">
												{testimonial.position}
											</p>
										</div>
									</div>
									<div className="flex items-center">
										<Stars rating={testimonial.rating} />
										<p className="ml-2">{`${testimonial.rating}`}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
};

export default Testimonial;

const NextButton = (props: any) => {
	const { style, onClick } = props;
	return (
		<button
			style={{
				...style,
				top: "50%",
				transform: "translateY(-50%)",
				right: "-5%",
				zIndex: 900,
			}}
			onClick={onClick}
			aria-label="Next"
			className="absolute focus:outline-none"
		>
			<span className="bg-white shadow-elevation4 w-12 h-12 rounded-full flex justify-center items-center">
				<img src="images/arrow3.svg" className="w-4" alt="next-icon" />
			</span>
		</button>
	);
};
const PrevButton = (props: any) => {
	const { style, onClick } = props;
	return (
		<button
			style={{
				...style,
				top: "50%",
				transform: "translateY(-50%)",
				left: "-5%",
				zIndex: 900,
			}}
			onClick={onClick}
			aria-label="Next"
			className="absolute focus:outline-none"
		>
			<span className="bg-white shadow-elevation4 w-12 h-12 rounded-full flex justify-center items-center">
				<img
					src="images/arrow3.svg"
					className="w-4 transform rotate-180"
					alt="next-icon"
				/>
			</span>
		</button>
	);
};

const SliderDot = () => {
	return <span className="h-2 w-3 inline-block rounded"></span>;
};

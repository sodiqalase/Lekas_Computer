/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Stars from "../../../components/Stars/Stars";

const testimonialList = [
	{
		description:
			"The quality of service provided by their engineers was top-notch. I was very satisfied with their delivery and Pricing. You can trust them.",
		name: "Alase Sodiq",
		rating: 4.9,
		position: "Software Engineer",
	},
	{
		description:
			"Their Engineers helped me with procuring a quality laptop and were also very helpful during maintenance and repair when faulty.",
		name: "Ameerah Yaqub",
		rating: 5.0,
		position: "Content Creator/ Voice Over Artist",
	},
	{
		description:
			"A friend recommended their service to me when i had issues with my laptop and i must say that, i wasn't disappointed. They were exceptional and i highly recommend them.",
		name: "Alim Ajenifuja",
		rating: 5.0,
		position: "UI/UX Designer",
	},
	{
		description:
			"Had my laptop fixed by their engineer very professional , very cost effective and all done very quickly. Would not hesitate to recommend this person .",
		name: "Ariyo Olasukanmi",
		rating: 5.0,
		position: "Insurance Agent",
	},
	{
		description:
			"Went to their office for software installation and minor fixes on some of the my hardwares. I was satisfied with the service delivery and the price. Super Friendly people.",
		rating: 4.9,
		name: "Seyi Jackson",
		position: "Student/Data Analyst",
	},
	{
		description:
			"I need a laptop for my work and i reached out to them for help. I was glad i did. They were very helpful and quick to respond to my queries. I would highly recommend them.",
		name: "Tosin Ajibulu",
		rating: 5.0,
		position: "Quality Assurance Expert",
	},
];

const Testimonial = () => {
	const [isMobile, setIsMobile] = useState<boolean>(false);
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
		setIsMobile(window?.innerWidth < 550 ? true : false);
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
		<section
			id="testimonialSection"
			className="py-24 medium:py-16 medium:pb-20 bg-[#F5F6FF]"
		>
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
								<div className="mt-16 flex justify-between">
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

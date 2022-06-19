/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
	const navRef = useRef(null);
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

	useEffect(() => {
		window.addEventListener("scroll", () => {
			const _navbar = document.querySelector(".navbar");
			if (window.scrollY > 50 && _navbar) {
				_navbar.classList.add("bg-white", "shadow-md");
			} else {
				_navbar?.classList.remove("bg-white", "shadow-md");
			}
		});
	}, []);

	return (
		<nav
			ref={navRef}
			className="h-[70px] z-[1000] navbar transition fixed top-0 left-0 right-0"
		>
			<div className="global-container h-full flex justify-between items-center">
				<Link href="/">
					<img
						src="/images/Lekas-Logo.png"
						className="w-40 medium:w-32 inline-block"
						alt=""
					/>
				</Link>
				<ul className="flex h-full items-center">
					<li className="mr-8 medium:hidden">
						<a
							// href="#"
							onClick={_handleScroll1}
							className="inline-block cursor-pointer text-lk-grey"
						>
							Services
						</a>
					</li>
					<li className="mr-8 medium:hidden">
						<a
							// href="#"
							onClick={_handleScroll2}
							className="inline-block cursor-pointer text-lk-grey"
						>
							About Us
						</a>
					</li>
					<li className="mr-8 medium:hidden">
						<a
							// href="#"
							onClick={_handleScroll3}
							className="inline-block cursor-pointer text-lk-grey"
						>
							Testimonials
						</a>
					</li>
					<li className="mr-8 medium:mr-0">
						<a
							href="https://wa.me/2348030492803"
							className="inline-block py-2 px-5 medium:text-sm medium:py-1 medium:px-3 border border-gray-500 rounded-2xl cursor-pointer text-black"
						>
							Lets Talk
						</a>
					</li>

					{/* <div className="">
						<Button
							type="anchor"
							size="big"
							label="Join Our Team"
							styles="border-esl-red bg-transparent text-esl-red"
						/>
					</div> */}
					{/* <div>
						<Button
							type="anchor"
							label="Create Account"
							styles="border-esl-blue bg-esl-blue text-white"
						/>
					</div> */}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;

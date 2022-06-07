/* eslint-disable @next/next/no-img-element */
import Button from "../../../components/Button/Button";

const Hero = () => {
	return (
		<section className="h-[90vh] flex items-center w-screen bg-white">
			<div className="global-container">
				<div className="grid grid-cols-2 items-center">
					<div>
						<h3 className="text-[40px] leading-normal text-lk-heading">
							We deliver Professional Repair Services on your computers and
							electronic gadgets.
						</h3>
						<p className="my-4 text-lk-grey mb-6">
							Known for unparalleled laptop repair guides, troubleshooting,
							service manual for all kinds of laptops, computers, and
							ultrabooks. We also provide top IT and computer related services
						</p>
						<Button text="Let's Talk" href="https://wa.me/2348030492803" />
					</div>
					<div>
						<img
							src="/images/Laptop-image.svg"
							className="block w-[85%] ml-auto"
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

{
	/* <p className="mt-3 text-white max-w-[550px] text-center mx-auto">
						We provides comprehensive on-site & off-site repair, maintenance and
						pick-up services for Computer Desktop, Laptops, Workstation, Printer
						and Server repairs and maintenance.
					</p> */
}

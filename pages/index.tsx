import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AboutUs from "./PageSections/Homepage/AboutUs";
import Hero from "./PageSections/Homepage/Hero";
import OurServices from "./PageSections/Homepage/OurServices";
import Stats from "./PageSections/Homepage/Stats";
import Testimonial from "./PageSections/Homepage/Testimonial";

import WhyTrustUs from "./PageSections/Homepage/WhyTrustUs";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Lekas Global Computer Services</title>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				<meta name="title" content="Lekas Global Computer Services" />
				<meta
					name="description"
					content="We provides comprehensive on-site & off-site repair, maintenance and pick-up services for Computer Desktop, Laptops, Workstation, Printer and Server repairs and maintenance."
				/>
				<meta
					name="keywords"
					content="Computer repair, Computer sale, Printer sale, printer repair, screen replacement, laptop battery, Laptop screen, Computer repair in lagos, Computer repair in Ikeja, Computer Repair in Lagos"
				/>
				<meta name="author" content="Lekan Olanrewaju" />
				<meta name="robots" content="all" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, minimum-scale=1"
				/>
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:title" content="Lekas Global Computer Services" />
				{/* <meta property='og:url' content='http://www.hsquareweb.com'/> */}
				<meta
					property="og:site_name"
					content="Lekas Global Computer Services"
				/>
				<meta property="og:type" content="website" />
				=
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="">
				<Hero />
				<AboutUs />
				<OurServices />
				<Stats />
				<WhyTrustUs />
				<Testimonial />
			</main>
		</>
	);
};

export default Home

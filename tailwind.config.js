module.exports = {
	mode: "jit",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			laptops: { max: "1440px" },
			// => @media (max-width: 1440px) { ... }

			tablets: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			medium: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			mobiles: { max: "500px" },
			// => @media (max-width: 500px) { ... }
			smallmobiles: { max: "420px" },
			// => @media (max-width: 420px) { ... }
		},
		extend: {
			colors: {
				"lk-blue": "#282C6D",
				"lk-heading": "#022b69",
				"lk-grey": "#6a6a6a",
				"lk-grey2": "#ECECEC",
				"lk-pink": "#EB506E",
			},
			// padding: {
			// 	"pc-8": "8px",
			// 	"pc-16": "16px",
			// 	"pc-24": "24px",
			// 	"pc-32": "32px",
			// 	"pc-40": "40px",
			// 	"pc-56": "56px",
			// 	"pc-72": "72px",
			// 	"pc-80": "80px",
			// 	"pc-96": "96px",
			// 	"pc-120": "120px",
			// },
			height: {
				"pc-nav": "80px",
				"pc-height-80": "95vh",
			},
			width: {
				"pc-nav-width": "170px",
			},
			// margin: {
			// 	"pc-8": "8px",
			// 	"pc-16": "16px",
			// 	"pc-24": "24px",
			// 	"pc-32": "32px",
			// 	"pc-40": "40px",
			// 	"pc-56": "56px",
			// 	"pc-72": "72px",
			// 	"pc-80": "80px",
			// 	"pc-96": "96px",
			// 	"pc-120": "120px",
			// },
			boxShadow: {
				elevation1: "0px 8px 34px rgba(40, 44, 109, 0.31)",
				elevation2: "0 0 25px rgb(0 0 0 / 6%)",
				// elevation2: "14px 22px 52px -12px rgba(127, 127, 127, 0.13)",
				// elevation3:
				// 	"0px 2px 4px rgba(28, 5, 77, 0.1), 0px 12px 32px rgba(0, 0, 0, 0.05);",
				// elevation4: "0px 10px 22px -6px rgba(33, 123, 244, 0.26);",
				// elevation5:
				// 	"0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);",
				// elevation6: "0px 25px 40px rgba(59, 80, 90, 0.05);",
			},

			fontSize: {
				"lk-h1-desktop": [
					"64px",
					{
						letterSpacing: "0px",
						lineHeight: "72px",
					},
				],
				"lk-h2-desktop": [
					"44px",
					{
						letterSpacing: "0px",
						lineHeight: "54px",
					},
				],
				"lk-h3-desktop": [
					"35px",
					{
						letterSpacing: "0px",
						lineHeight: "40px",
					},
				],
				"lk-h4-desktop": [
					"28px",
					{
						letterSpacing: "0px",
						lineHeight: "32px",
					},
				],
				"lk-h5-desktop": [
					"23px",
					{
						letterSpacing: "0px",
						lineHeight: "32px",
					},
				],
				"lk-h6-desktop": [
					"19px",
					{
						letterSpacing: "2.25px",
						lineHeight: "24px",
					},
				],
				"lk-df-desktop": [
					"16px",
					{
						letterSpacing: "0px",
						lineHeight: "24px",
					},
				],
				// "esl-df2-desktop": [
				// 	"20px",
				// 	{
				// 		letterSpacing: "0px",
				// 		lineHeight: "32px",
				// 	},
				// ],
				// "pc-sm-desktop": [
				// 	"13px",
				// 	{
				// 		letterSpacing: "-0.25px",
				// 		lineHeight: "24px",
				// 	},
				// ],
				// "pc-h1-mobile": [
				// 	"33px",
				// 	{
				// 		letterSpacing: "0px",
				// 		lineHeight: "40px",
				// 	},
				// ],
				// "pc-h2-mobile": [
				// 	"28px",
				// 	{
				// 		letterSpacing: "0px",
				// 		lineHeight: "32px",
				// 	},
				// ],
				// "pc-h3-mobile": [
				// 	"28px",
				// 	{
				// 		letterSpacing: "0px",
				// 		lineHeight: "32px",
				// 	},
				// ],
				// "pc-h4-mobile": [
				// 	"23px",
				// 	{
				// 		letterSpacing: "0px",
				// 		lineHeight: "32px",
				// 	},
				// ],
				// "pc-h5-mobile": [
				// 	"19px",
				// 	{
				// 		letterSpacing: "0px",
				// 		lineHeight: "24px",
				// 	},
				// ],
				// "pc-h6-mobile": [
				// 	"16px",
				// 	{
				// 		letterSpacing: "2.25px",
				// 		lineHeight: "24px",
				// 	},
				// ],
				// "pc-df-mobile": [
				// 	"16px",
				// 	{
				// 		letterSpacing: "0px",
				// 		lineHeight: "24px",
				// 	},
				// ],
				// "pc-sm-mobile": [
				// 	"13px",
				// 	{
				// 		letterSpacing: "-0.25px",
				// 		lineHeight: "24px",
				// 	},
				// ],
				// "pc-fn-mobile": [
				// 	"13px",
				// 	{
				// 		letterSpacing: "-0.25px",
				// 		lineHeight: "16px",
				// 	},
				// ],
				// "pc-btn-mobile": [
				// 	"14px",
				// 	{
				// 		letterSpacing: "0px",
				// 		lineHeight: "24px",
				// 	},
				// ],
				// "pc-btn2-mobile": [
				// 	"11px",
				// 	{
				// 		letterSpacing: "0px",
				// 		lineHeight: "24px",
				// 	},
				// ],
			},
		},
	},
	plugins: [],
};

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config();

module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: `Pandas eating loooooots`,
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`,
			},
		},
		`gatsby-transformer-remark`,
		`gatsby-plugin-emotion`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		{
			resolve: `gatsby-plugin-netlify-cms`,
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`,
			},
		},
		{
			resolve: `gatsby-source-cloudinary`,
			options: {
				cloudName: process.env.CLOUDINARY_API_CLOUD_NAME,
				apiKey: process.env.CLOUDINARY_API_KEY,
				apiSecret: process.env.CLOUDINARY_API_SECRET,
				resourceType: `image`,
				prefix: `samples/`,
			},
		},
	],
};

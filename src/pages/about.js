import React from 'react';
import { Link, graphql } from 'gatsby';

import Header from '../components/header';
import Layout from '../components/layout';

export default function About({ data }) {
	return (
		<>
			<Header headerText="Abouuuuuuut" />
			<Layout>
				{/* <h1>About Gatsby</h1>
				<p>Such now. Very React.</p> */}
				<h1>About {data.site.siteMetadata.title}</h1>
				<p>
					We're the only site running on your computer dedicated to
					showing the best photos and videos of pandas eating lots of
					food.
				</p>
			</Layout>
		</>
	);
}

export const query = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`;

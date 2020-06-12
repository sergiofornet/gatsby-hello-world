import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';
import Layout from '../components/layout';

export default function Contact() {
	return (
		<div style={{ color: `teal` }}>
			<Header headerText="Contact" />
			<Layout>
				<p>Send us a message!</p>
			</Layout>
		</div>
	);
}

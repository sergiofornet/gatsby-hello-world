import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';
import { rhythm } from '../utils/typography';
// import Header from '../components/header';
import Layout from '../components/layout';

export default function Home({ data }) {
	// console.log(data);
	return (
		<Layout>
			<div>
				{/* <h1>
						Hi! I'm building a fake Gatsby site as part of a
						tutorial!
					</h1>
					<p>
						What do I like to do? Lots of course but definitely
						enjoy building websites.
					</p>
					<img
						src="https://source.unsplash.com/random/400x200"
						alt=""
					/> */}
				<h1
					css={css`
						display: inline-block;
						border-bottom: 1px solid;
					`}
				>
					Amazing pandas eating things
				</h1>
				<h4>{data.allMarkdownRemark.totalCount} posts</h4>
				{data.allMarkdownRemark.edges.map(({ node }) => (
					<div key={node.id}>
						<Link
							to={node.fields.slug}
							css={css`
								text-decoration: none;
								color: inherit;
							`}
						>
							<h3
								css={css`
									margin-bottom: $rhythm(1 / 4);
								`}
							>
								{node.frontmatter.title}{' '}
								<span
									css={css`
										color: #bbb;
									`}
								>
									- {node.frontmatter.date}
								</span>
							</h3>
						</Link>
						<p>{node.excerpt}</p>
					</div>
				))}
				{/* <div>
					<img
						src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
						alt="Gorup of pandas eating bamboo"
					/>
				</div> */}
			</div>
		</Layout>
	);
}

export const query = graphql`
	query {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
					}
					fields {
						slug
					}
					excerpt
				}
			}
		}
	}
`;

'use client';

import Link from 'next/link';
import styled from 'styled-components';

const Project = styled.div`
	width: 70vw;
	height: fit-content;
	padding: 10px 0;
	border-radius: 0 0 5px 5px;
	background-color: #0f1117;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	position: relative;
	
	
	@media (min-width: 768px) {
		width: 40vw;
		height: 27vh;
		max-height: 230px;
	}
	
	@media (min-width: 1024px){
		width: 35vw;
		max-width: 350px;
		flex: 1 1 50%;
	}

	@media (max-width: 375px) {
		width: 85vw;
	}

`;

const ProjectsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	margin: 20px 0;

	@media (min-width: 768px){
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
`;

const ProjectLine = styled.div`
	width: 100%;
	height: 2px;
	top: 0;
	position: absolute;

`;

const ProjectTitle = styled.p`
	text-align: center;
	font-size: 1.2rem;
	font-weight: 400;
	margin-top: 5px;
`;
const ProjectDesc = styled.p`
	text-align: center;
	margin: 0.5rem 1rem;
`;
const UL = styled.ul`
	display: flex;
	gap: 10px;
	margin: 10px;
	flex-wrap: wrap;
	justify-content: center;
`;

const LI = styled.li`
	list-style: none;
	padding: 1px 10px;
	border: 1px solid;
	border-radius: 10px;
	font-size: 15px;
`;
const projectsArr = [
	{
		name: 'Interior Design Website',
		desc: 'Fully integrated website for an Interior Designer, using WordPress as a headless CMS.',
		stack: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
		color: '#df850f',
	},
	{
		name: 'To-Do App',
		desc: "The project is a task management app that uses authenthication. It's purpose is to help users stay organized and manage tasks.",
		stack: ['HTML', 'CSS', 'JavaScript', 'SQL', 'Express', 'AWS'],
		color: '#d20fdf',
	},
	{
		name: 'Foodista',
		desc: 'Foodista is a website where individuals may not only exchange tasty recipes but also get inspired by cooking one.',
		stack: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
		color: '#5bdf0f',
	},
	{
		name: 'Next.Js TypeScript',
		desc: 'UI for NFT unpacking system built with React, Next.Js, TypeScript, and Styled Components.',
		stack: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.Js'],
		color: '#0fd9df',
	},
];

const SectionHeader = styled.h3`
	width: 70vw;
	text-align: center;
	margin: auto;
`

const Section = styled.section`
	
`
export default function Projects() {
	return (
		<Section>
			<SectionHeader>Let me show you on what i've been working lately...</SectionHeader>
			<ProjectsWrapper>
				{projectsArr.map((project) => (
					<Link href={`/${project.name.replaceAll(` `, ``)}`} key={project.name}>
					<Project>
						<ProjectLine style={{ background: project.color }}></ProjectLine>
						<ProjectTitle style={{ color: project.color }}>
							{project.name.toUpperCase()}
						</ProjectTitle>
						<ProjectDesc>{project.desc}</ProjectDesc>
						<UL>
							{project.stack.map((tech) => (
								<LI key={tech} style={{ color: project.color }}>
									{tech}
								</LI>
							))}
						</UL>
					</Project>
				</Link>
				))}
			</ProjectsWrapper>
		</Section>
	);
}

'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SectionHeader } from './projects';
import CardLine from './CardLine';
import { text } from 'stream/consumers';

const SkillsCard = styled.div`
	background-color: #0f1117;
	border-radius: 0 0 5px 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	justify-content: space-between;
	width: 100%;
	transition: height 0.5s, width 0.5s;
	max-width: 340px;

	&:nth-child(1) {
		height: 50vh;
		width: 300px;
	}

	&.active {
		height: 82vh;
		width: 100vh;
	}

	@media (min-width: 375px) {
		&:nth-child(1) {
			&.active {
				height: 75vh !important;
			}
		}
	}

	@media (min-width: 768px) {
		width: 48%;
		&:nth-child(1) {
			max-width: 700px;
			order: 1;
			&.active {
				/* add initial min-height for smooth transition */
				height: 60vh!important;
				width: 100vh;
			}
		}

	}
	@media (min-width: 1024px) {
		transition: width 0.7s;
		&:nth-child(1) {
			max-height: 475px;
			&.active {
				/* add initial min-height for smooth transition */
				height: 52vh!important;
				width: 100vh;
			}
		}
	}
`;

const CardTitle = styled.p`
	font-size: 1.8rem;
	margin-top: 1rem;
	text-align: center;
`;

const SkillsWrapper = styled.div`
	display: flex;
	/* width: 70%; */
	flex-wrap: wrap;
	justify-content: center;
	margin: 0 0.5rem 1rem 0.5rem;
	gap: 0.5rem;

	@media (min-width: 483px) {
		width: 300px;
	}
	/* @media (min-width: 661px) {
		width: 70%;
	} */
	/* @media (min-width: 768px) {
		width: auto;
	} */
	@media (min-width: 1024px) {
		gap: 0;
	}
`;

const CardsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
	margin: 20px 0;

	@media (min-width: 768px) {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		gap: 20px;
	}
`;
const SkillWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const LI = styled.li`
	list-style: none;
	text-align: center;
`;

const WhoLI = styled.li`
	list-style: none;
	margin: 0.5rem;
`;

const WhoP = styled.p`
	width: 95%;
`;

const Img = styled.img`
	@media (min-width: 1024px) {
		width: 75%;
	}
`;

const Button = styled.button`
	padding: 5px 30px;
	margin: 1rem 0;
	background-color: transparent;
	border: 1px solid #bcbcbc;
	border-radius: 5px;
	cursor: pointer;
`;

const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const aboutMePoints = [
	'- Student at UCN | Multimedia Design',
	"- I'm based in Aalborg, Denmark",
	'- Programming enthusiast',
	'- I like to experiment new concepts',
	'- Able to work independently',
	'- Team Player',
	'- Self-motivated',
];

const Span = styled.span`
	&:nth-child(1) {
		font-size: 0.8rem;
		/* text-decoration: underline #10e2e9; */
		line-height: px;
		color: #10e2e9;
	}
`;

interface ISkillCard {
	title: string;
	skillsArr?: string[];
	isSkillCard: boolean;
	whoArr?: string[];
	setIsWhoCardOpen?: any;
	isWhoCardOpen?: boolean;
	isWhoCardDelayDone?: boolean;
	setIsWhoCardDelayDone?: any;
	textOpacity?: string;
}

const WhoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem 0;
	align-items: center;
	transition: opacity 0.2s;
	max-width: 550px;
	@media (min-width: 768px) {
		max-width: 95% ;
	}
`;

const SkillCard = ({
	title,
	skillsArr,
	isSkillCard,
	whoArr,
	isWhoCardOpen,
	setIsWhoCardOpen,
	isWhoCardDelayDone,
	setIsWhoCardDelayDone,
	textOpacity,
}: ISkillCard) => (
	<SkillsCard className={isWhoCardOpen ? 'active' : ''}>
		<CardLine lineColor='linear-gradient(0.25turn, #a9650f, #9f0dab, #5bdf0f, #0ec8cd)' />
		<CardWrapper>
			<CardTitle>{title}</CardTitle>
			{isSkillCard && skillsArr ? (
				<SkillsWrapper>
					{skillsArr.map((skill) => (
						<SkillWrapper key={skill}>
							<Img src={`/${skill}.svg`} alt={skill} />
							<LI>{skill}</LI>
						</SkillWrapper>
					))}
				</SkillsWrapper>
			) : (
				<>
					<WhoWrapper style={{ opacity: textOpacity }}>
						{isWhoCardOpen && isWhoCardDelayDone ? (
							<>
								<WhoP>
									I am a 20 year old student (based in Aalborg, Denmark),
									currently studying Multimedia Design at UCN. I have a great
									interest in programming and I enjoy experimenting with
									different technologies, concepts and programming languages.
								</WhoP>
								<br />
								<WhoP>
									I strive for clean code and up-to-date knowledge. Thus, I am
									looking for an opportunity to kick-start my career, where I
									could grow professionally and eventually I would love to
									become a valuable asset to the growth of a product. I like to
									play Chess and listen to oldschool rap/grime.
									<Span>( If you fancy hiring by music taste )</Span>
								</WhoP>
								<br />
								<WhoP>
									I enjoy making games as a hobby, either web games or desktop by using
									the Unity Engine (C#, Blender).<br></br>
									<br></br>
									<Span>
										P.S. You may also visit my Playground page if you feel like
										playing a browser game.
									</Span>
								</WhoP>
							</>
						) : (
							<ul>
								{whoArr?.map((point: string) => (
									<WhoLI key={point}>{point}</WhoLI>
								))}
							</ul>
						)}
					</WhoWrapper>
				</>
			)}
		</CardWrapper>
		{!(isSkillCard && skillsArr) && (
			<Button disabled={textOpacity == '0' ? true : false}
				onClick={() => {
					setIsWhoCardOpen(!isWhoCardOpen);
					setTimeout(() => {
						setIsWhoCardDelayDone(!isWhoCardDelayDone);
					}, 500);
				}}
			>
				{textOpacity}
			</Button>
		)}
	</SkillsCard>
);

export default function Aboutme() {
	const hardSkills = [
		'React',
		'NextJs',
		'TypeScript',
		'ThreeJs',
		'WP',
		'VueJs',
	];
	const softSkills = [
		'Chess',
		'Gaming',
		'Politics',
		'GameDev',
		'Music',
		'Reading',
	];

	const [isWhoCardOpen, setIsWhoCardOpen] = useState(false);
	const [isWhoCardDelayDone, setIsWhoCardDelayDone] = useState(false);
	const [textOpacity, setTextOpacity] = useState('1');
	useEffect(() => {
		if (isWhoCardOpen) {
			setTextOpacity('0');
		} else {
			setTextOpacity('1');
		}
		setTimeout(() => {
			setTextOpacity('1');
		}, 500);
	}, [isWhoCardOpen]);

	return (
		<section>
			<SectionHeader>A little bit about me...</SectionHeader>
			<CardsWrapper>
				<SkillCard
					title={"Hi, I'm Alex."}
					isSkillCard={false}
					whoArr={aboutMePoints}
					setIsWhoCardOpen={setIsWhoCardOpen}
					isWhoCardOpen={isWhoCardOpen}
					setIsWhoCardDelayDone={setIsWhoCardDelayDone}
					isWhoCardDelayDone={isWhoCardDelayDone}
					textOpacity={textOpacity}
				></SkillCard>
				<SkillCard
					title={'Software Skills'}
					skillsArr={hardSkills}
					isSkillCard={true}
				/>
				<SkillCard
					title={'Hobbies'}
					skillsArr={softSkills}
					isSkillCard={true}
				/>
			</CardsWrapper>
		</section>
	);
}

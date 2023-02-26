'use client';

import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

const NavMobile = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: inherit;
	position: sticky;
`;

const Logo = styled.p`
	font-size: 2rem;
`;

const HamburgerMenu = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 30px;
`;

const Line = styled.div`
	width: 25px;
	height: 2.5px;
	border-radius: 0.1px;
	background-color: #bcbcbc;
	margin: 2px 0;
	z-index: 1001 !important;
`;

const Overlay = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.9);
	z-index: 900;
	position: absolute;
`;

const NavOpened = styled.div`
	width: 300px;
	height: 450px;
	background-color: #0f1117;
	z-index: 901 !important;
	position: absolute;
	border-radius: 0 0 0 15px;
	right: 0;
	display: block;
`;

const NavOpenedUL = styled.ul`
	margin: 5rem 2rem;
`;
const NavOpenedLI = styled.li`
	margin: 10px 0;
`;

export default function Navbar() {
	const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

	const links = [
		'Home',
		'Case Studies',
		'Who am I',
		'Contact',
		'My Playground',
	];

	return (
		<NavMobile>
			<Link href='/'>
				<Logo>VMA</Logo>
			</Link>

			<HamburgerMenu onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>
				<Line />
				<Line />
				<Line />
			</HamburgerMenu>

			{isHamburgerOpen && (
				<>
					<Overlay />
					<NavOpened>
						<NavOpenedUL>
							{links.map((link, index) => (
								<NavOpenedLI key={index}>{link}</NavOpenedLI>
							))}
						</NavOpenedUL>
					</NavOpened>
				</>
			)}
		</NavMobile>
	);
}

'use client';

import styled from 'styled-components';

const Section = styled.section`
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const HeaderText = styled.h1`
	color: #0ca8eb;
`;

const SubHeaderText = styled.h2``;

export default function Hero() {
	return (
		<Section>
			<HeaderText>Mihai-Alexandru Vistran</HeaderText>
			<SubHeaderText>Aspiring Frontend Developer</SubHeaderText>
		</Section>
	);
}

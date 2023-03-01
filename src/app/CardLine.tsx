import React from 'react';
import styled from 'styled-components';

const Line = styled.div`
	width: 100%;
	height: 2px;
	top: 0;
	position: absolute;
`;

interface ILineColor {
	lineColor: string;
}

export default function CardLine({ lineColor }: ILineColor) {
	return <Line style={{ background: lineColor }} />;
}

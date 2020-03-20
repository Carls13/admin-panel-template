import styled from 'styled-components';

export const TableContainer = styled.table`
	// border: 1px solid black;
	width: 70%;
	text-align: center;
	border: 1px solid hsl(304,93%,17%);
`;

export const TableHead = styled.thead`
	border: 1px solid black;
	background: hsl(304, 93%, 27%);
	color: white;
	height: 25px;
	font-weight: bold;
`;

export const HeadRow = styled.tr`
	height: 55px;
`;

export const TD = styled.td`
`;

export const TableBody = styled.thead`
	color: black;
`;

export const BodyRow = styled.tr`
	height: 40px;
	background: ${props => props.index % 2 === 0 ? 'rgba(141, 0, 255, .7)' : 'white'};
`;

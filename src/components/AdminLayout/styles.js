import styled from 'styled-components';

export const DashboardContainer = styled.div`
	display: flex;
	flex-direction: row;
	height: 100vh;
`;

export const Title = styled.h1`
	font-weight: bold;
	text-align: center;
`;

export const MainContent = styled.div`
	width: 75vw;
	margin-left: 25vw;
`;

export const PageContainer = styled.div`
	background-color: white;
	border-bottom: 1px solid black;
	border-radius: 10px;
	padding: 10px;
`;

export const PageTitle = styled.h1`
	font-size: 20px;
	text-align: right;
`;

export const ContentContainer = styled.div`
	y-overflow: auto;
	padding: 10px;
	display: flex;
    flex-direction: column;
    align-items: center;
`;
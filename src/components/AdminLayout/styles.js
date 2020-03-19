import styled from 'styled-components';

export const DashboardContainer = styled.div`
	display: flex;
	flex-direction: row;
	height: 100vh;
`;

export const MenuIcon = styled.div`
	display: none;
	@media screen and (max-width: 600px) {
		background-color: hsl(304, 93%, 27%);
		color: white;
		border-radius: 50%;
		position: fixed;
		top: 0;
		left: 0;
		margin: 10px;
		display: flex;
		flex-column: row;
		justify-content: center;
		align-items: center;
		padding: 5px;
		z-index: 1000;
	}
`;

export const Title = styled.h1`
	font-weight: bold;
	text-align: center;
`;

export const MainContent = styled.div`
	width: 75vw;
	margin-left: 25vw;

	@media screen and (max-width: 600px) {
		width: 100%;
		margin-left: 0;
	}
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
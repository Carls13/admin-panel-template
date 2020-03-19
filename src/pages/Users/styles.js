import styled from 'styled-components';

export const Title = styled.h1`
	font-weight: bold;
	text-align: center;
	font-size: 50px;
	margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
	margin: 10px 0;
	display: flex;
	flex-direction: row;
	width: 70%;

	@media screen and (max-width: 600px) {
		width: 90%;
	}
`;

export const Scrollable = styled.div`
	overflow-x: none;
	width: 100%;
	display: flex;
    flex-direction: row;
    justify-content: center;

	@media screen and (max-width: 600px) {
		width: 90%;
   		overflow:auto;
	}
`

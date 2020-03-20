import styled from 'styled-components';

export const ButtonContainer = styled.div`
	margin: 10px 0;
	display: flex;
	flex-direction: row;
	width: 70%;

	@media screen and (max-width: 600px) {
		width: 90%;
	}
`;
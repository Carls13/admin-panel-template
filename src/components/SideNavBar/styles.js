import styled, { css } from 'styled-components';
import { Link } from '@reach/router';

export const SideContainer = styled.div`
	width: 25vw;
	display: flex;
	flex-direction: column;
	color: white;
	background-color: hsl(304, 93%, 27%);
	position: fixed;
    height: 100%;
    top: 0;
    left: 0;

    @media screen and (max-width: 600px) {
		width: 100vw;
		align-items: center;
		${ props => {
			if(props.showMenu) {
				return css`
					display: flex;
					`;
			} else {
				return css`
					display: none;
					`;
				}
			}
		}
	}
`;

export const Options = styled.div`
	display: flex:
	flex-direction: column; 
	@media screen and (max-width: 600px) {
		width: 100vw;
	}
`;

export const Title = styled(Link)`
	background-color: hsl(304, 93%, 17%);
	padding: 10px;
	color: unset;
	text-decoration: none;
	display: flex:
	flex-direction: column; 
	@media screen and (max-width: 600px) {
		width: 100vw;
	}
`;

export const TitleText = styled.h1`
	font-size: 50px;
	text-align: center;
	font-weight: color;
`;

export const Option = styled(Link)`
	&[aria-current] {
		color: #000;
		font-weight: bold;
	}
	color: unset;
	text-decoration: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 10px;
	margin: 10px;
	height: 10vh;
	border-bottom: 1px solid hsl(304, 93%, 17%);

	@media screen and (max-width: 600px) {
		justify-content: center;
		width: auto;
		height: 10vh;
	}
`;

export const SignOut = styled.span`
	cursor: pointer;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 10px;
	margin: 10px;
	height: 10vh;
	border-bottom: 1px solid hsl(304, 93%, 17%);
	// position: absolute;
	// bottom: 0;
	@media screen and (max-width: 600px) {
		justify-content: center;
		width: auto;
		height: 10vh;
	}
`;

export const Span = styled.span`
	margin: 0 20px;
	pading: 10px;
`;

import styled, { css } from 'styled-components';

export const MyButton = styled.button`
	&[disabled] {
		opacity: .3;
	}

    border-radius: 50px;
	color: #FFF;
	height: 32px;
	display: block;
	margin: 20px auto;
	width: 20%;
	text-align: center;
	cursor: pointer;

	${ props => {
		switch (props.special){
			case 'confirm': 
				return css`
					background: #185904;
				`
			case 'cancel':
				return css`
					background: #F00;
					`
			default: 
				return css`
					background: hsl(304, 93%, 17%);
					`
			}
		}
	}
`;
import styled from 'styled-components';

export const Form = styled.form`
	width: 50vw;
    box-shadow: 0px 0px 8px 3px black;
	margin: 10px;
	padding: 10px;
	flex-direction: column;
`;

export const Input = styled.input`
	&[disabled] {
		opacity: .3;
	}
	border: 1px solid #CCC;
	border-radius: 3px;
	padding: 8px 4px;
	display: block;
	width: 30%;
	margin: 10px auto 10px auto;
`;

export const Title = styled.h1`
	font-weight: bold;
	text-align: center;
`;

export const ErrorSpan = styled.span`
	color: #FFF;
	background: #F00;
	padding: 8px 4px;
	margin: 5px auto;
	text-align: center;
	display: block;
`;
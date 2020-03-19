import styled from 'styled-components';

export const Form = styled.form`
	width: 100%;
	margin: 10px;
	padding: 10px;
	display: flex;
	flex-direction: column;
`;

export const SubmitBlock = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
`;

export const LabelDiv = styled.div`
	width: 20%;
	text-align: right;
`;

export const Label =  styled.label`
	margin-right: 5px;
	font-weight: bold;
	text-transform: capitalize;
	text-align: left;
`;

export const InputDiv = styled.div`
	width: 60%;
`;

export const Input = styled.input`
	&[disabled] {
		opacity: .3;
	}

    &::-webkit-input-placeholder {
	    text-transform: capitalize;
	}
	border: 1px solid #CCC;
	border-radius: 3px;
	padding: 8px 4px;
	display: block;
	width: 100%;
	text-align: center;
`;

export const Title = styled.h1`
	font-weight: bold;
	text-align: center;
	margin-bottom: 10px;
`;

export const Buttons = styled.div`
	display: flex;
	flex-direction: row;
`;
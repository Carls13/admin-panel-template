import styled from 'styled-components';

export const FilterContainer = styled.div`
	overflow-x: none;
	width: 100%;
	display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;

	@media screen and (max-width: 600px) {
		width: 90%;
   		overflow:auto;
	}
`;

export const FilterBlock = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: 0 10px;
	width: 25%;
`;

export const Label =  styled.label`
	margin-right: 5px;
	font-weight: bold;
	text-transform: capitalize;
	text-align: left;
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

import React from 'react';

import { Button } from './../../components/Button/Button';
import { ButtonContainer } from './styles';

import { FaPlus } from 'react-icons/fa';

export const AddButton = ({ handleClick }) => {
	return (
		<ButtonContainer>
			<Button special="confirm" handleClick={handleClick}>
				<FaPlus size="32px"/>
				 &nbsp; Nuevo
			</Button>
		</ButtonContainer>
	)
};
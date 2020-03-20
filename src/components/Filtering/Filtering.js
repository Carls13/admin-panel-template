import React from 'react';

import { FilterContainer, FilterBlock, Label, Input } from './styles';

import { Button } from './../../components/Button/Button';

import { FaSearch, FaTrash } from 'react-icons/fa';

export const Filtering = ({ filters, handleChange, handleClear }) => {
	const filterForm = filters.map(({label, param, value}, i) => {
		return (
			<FilterBlock>
				<Label>{label}:</Label>
				<Input
					placeholder={label}
					name={param}
					type="text"
					value={value}
					onChange={handleChange}
					/>
			</FilterBlock>
			);
	});

	return (
		<FilterContainer>
			<FaSearch size="22px"/>
			{filterForm}
			<Button icon special="cancel" handleClick={handleClear}>
				<FaTrash size="22px"/>
			</Button>
		</FilterContainer>
	)
};
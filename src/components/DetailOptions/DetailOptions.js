import React from 'react';

import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'

import { Options, Option } from './styles.js';

export const DetailOptions = ({ handleDetail, handleEdit, handleDelete }) => {
	return (
			<Options>
				<Option onClick={handleDetail}>
					<FaEye size="32px"/>
				</Option>
				<Option onClick={handleEdit}>
					<FaEdit size="32px"/>
				</Option>
				<Option onClick={handleDelete}>
					<FaTrash size="32px"/>
				</Option>
			</Options>
	)
};
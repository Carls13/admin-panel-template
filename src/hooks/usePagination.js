import { useState } from 'react';

export const usePagination = () => {
	const [paginatedData, setPaginatedData] = useState(null);
	const [currentPage, setCurrent] = useState(1);

	return [paginatedData, setPaginatedData, currentPage, setCurrent];
}
import React from 'react';

import { PaginationDiv, PagesControl, Prev, Next, Pages, Page, Info, Text } from './styles.js';

export const Pagination = ({ data, currentPage, setPage, recordsPerPage }) => {
	const showingFrom = (currentPage - 1) * recordsPerPage + 1;

	let totalPages;
	let total;
	let showingUntil;
	if (data) {
		totalPages = data.length
		total = data.reduce(
	      (counter, page) => counter + page.length
	      ,
	      0
	    );
	    showingUntil = (currentPage === totalPages) ? (currentPage - 1) * recordsPerPage + data[currentPage - 1].length : (currentPage) * recordsPerPage;
	};


	return (
		<PaginationDiv>
			<PagesControl>
				{currentPage !== 1 && <Prev onClick={() => setPage(currentPage - 1)}>Anterior</Prev>}
				<Pages>
					{
						data.map((page, i) => {
							return <Page 
									onClick={() => setPage(i + 1)} 
									key={i} 
									current={currentPage === i + 1}>{i + 1}</Page>
						})
					}
				</Pages>
				{currentPage !== data.length && <Next onClick={() => setPage(currentPage + 1)}>Siguiente</Next>}
			</PagesControl>
			<Info>
				<Text>{`Página actual: ${currentPage}`}</Text>
				<Text>{`Registros mostrados: ${showingFrom} - ${showingUntil}`}</Text>
				<Text>{`Total de páginas: ${totalPages}`}</Text>
				<Text>{`Registros por página: ${recordsPerPage}`}</Text>
				<Text>{`Total de registros: ${total}`}</Text>
			</Info>
		</PaginationDiv>
	)
};
import React, { Fragment } from 'react';

import { TableContainer, TableHead, HeadRow, TD, TableBody, BodyRow } from './styles';

import { ConfirmModal } from './../../components/ConfirmModal/ConfirmModal';
import { InfoModal } from './../../components/InfoModal/InfoModal';
import { DetailOptions } from './../../components/DetailOptions/DetailOptions';

import { useDelete } from './../../hooks/useDelete';

import { useNavigate } from "@reach/router"

export const Table = ({ paramsToTable, data, deleteAction, type, redirectTo }) => { 
	const [
		confirmModal,
		dataIdToDelete, 
		onConfirmDelete, 
		onCancelDelete, 
		deleteLoading, 
		infoModal, 
		onDeleteSuccess, 
		handleDeleteClick] = useDelete(deleteAction);

	const navigate = useNavigate();

	return (
		<Fragment>
			{confirmModal && <ConfirmModal text={`¿Está seguro que desea eliminar el ${type}: ${dataIdToDelete}?`}
										   onConfirm={onConfirmDelete}
										   onCancel={onCancelDelete}
										   loading={deleteLoading}
										    />}
			{(infoModal && dataIdToDelete) && <InfoModal text={`El ${type}: ${dataIdToDelete} fue borrado exitosamente.`}
									 onClick={() => onDeleteSuccess(redirectTo)}/>
								}
			<TableContainer>
				<TableHead>
					<HeadRow>
						{
							paramsToTable.map((param, i) => {
								return <TD key={i} index={i}>{param}</TD>
							})
						}
					</HeadRow>
				</TableHead>
				<TableBody>
					{
						data && data.map((element) => {
							let cells = [];

							for (const prop in element) {
								cells.push(<TD>{element[prop]}</TD>);
							}

							cells.push(
								<TD>
									<DetailOptions 
										handleDetail={() => navigate(`/users/${element.id}/detail`)}
										handleEdit={() => navigate(`/users/${element.id}/edit`)}
										handleDelete={() => handleDeleteClick(element.id)} />
								</TD>
								);

							return (
								<BodyRow>
									{cells}
								</BodyRow>
							)
						})
					}
				</TableBody>
			</TableContainer>
		</Fragment>
	);
}
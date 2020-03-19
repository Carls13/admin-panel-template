import React, { Fragment } from 'react';

import { TableContainer, TableHead, HeadRow, TD, TableBody, BodyRow, Options, Option } from './styles';

import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'

import { ConfirmModal } from './../../components/ConfirmModal/ConfirmModal';
import { InfoModal } from './../../components/InfoModal/InfoModal';

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
						data.map((element) => {
							let cells = [];

							for (const prop in element) {
								cells.push(<TD>{element[prop]}</TD>);
							}

							cells.push(
								<TD>
									<Options>
										<Option onClick={() => navigate(`/users/${element.id}/detail`)}>
											<FaEye size="32px"/>
										</Option>
										<Option onClick={() => navigate(`/users/${element.id}/edit`)}>
											<FaEdit size="32px"/>
										</Option>
										<Option onClick={() => handleDeleteClick(element.id)}>
											<FaTrash size="32px"/>
										</Option>
									</Options>
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
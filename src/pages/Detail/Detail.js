import React, { Fragment } from 'react';

import { Title, List, Info, Bold, Buttons } from './styles.js';

import { useNavigate } from "@reach/router"

import { Modal } from './../../components/Modal/Modal';
import { Button } from './../../components/Button/Button';
import { ConfirmModal } from './../../components/ConfirmModal/ConfirmModal';
import { InfoModal } from './../../components/InfoModal/InfoModal';

import { connect } from 'react-redux';

import { selectDataWithID } from './../../redux/general-selectors';

import { useDelete } from './../../hooks/useDelete';

export const Detail = ({ type, dataID, data, deleteAction, redirectTo, editUri }) => {
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

	let infoList = [];
	for (const prop in data) {
		infoList.push(
		<Info>
			<Bold>{prop}</Bold>{`: ${data[prop]}`}	
		</Info>)
	};

	const onReturn = () => {
		navigate(redirectTo);
	}

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
			{!(confirmModal || infoModal) && 
			<Modal>
					<Title>{type}: {dataID}</Title>
					<List>
						{infoList}
					</List>
					<Buttons>
						<Button handleClick={onReturn} text="Regresar"/>
			        	<Button special="confirm" handleClick={() => navigate(`${editUri}/${dataID}/edit`)} text="Editar"/>
			        	<Button special="cancel" handleClick={() => handleDeleteClick(parseInt(dataID))} text="Eliminar"/>
					</Buttons>		
			</Modal>
				}
		</Fragment>
	)
};

const mapStateToProps = (state, { type, dataID }) => ({
  	data: selectDataWithID(type, parseInt(dataID))(state)
});

export default connect(mapStateToProps)(Detail);
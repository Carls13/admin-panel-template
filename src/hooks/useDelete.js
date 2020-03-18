import { useState } from 'react';
import { useNavigate } from "@reach/router"

export const useDelete = (deleteAction) => {
	const [dataIdToDelete, setDataIdToDelete] = useState(null);
	const [confirmModal, setConfirmModal] = useState(false);
	const [infoModal, setInfoModal] = useState(false);
	const [deleteLoading, setdeleteLoading] = useState(false);

	const navigate = useNavigate();

	const handleDeleteClick = (dataId) => {
		setDataIdToDelete(dataId)
		setConfirmModal(true);
	}

	const onConfirmDelete = () => {
		setdeleteLoading(true);
		setTimeout(() => {
			console.log(deleteAction, dataIdToDelete)
			deleteAction.reduxFunction(dataIdToDelete);
			setConfirmModal(false);
			setInfoModal(true);
		}, 2000);
	};

	const onCancelDelete = () => {
		setDataIdToDelete(null);
		setConfirmModal(false);
	};

	const onDeleteSuccess = (redirect) => {
		setdeleteLoading(false);
		setInfoModal(false);
		setDataIdToDelete(null);
		if (redirect) navigate(redirect);
	};

	return [
		confirmModal,
		dataIdToDelete, 
		onConfirmDelete, 
		onCancelDelete, 
		deleteLoading, 
		infoModal, 
		onDeleteSuccess, 
		handleDeleteClick
		];
}
import { useState } from 'react';

export const useDelete = (deleteAction) => {
	const [userIdToDelete, setUserIdToDelete] = useState(null);
	const [confirmModal, setConfirmModal] = useState(false);
	const [infoModal, setInfoModal] = useState(false);
	const [deleteLoading, setdeleteLoading] = useState(false);

	const handleDeleteClick = (userId) => {
		setUserIdToDelete(userId)
		setConfirmModal(true);
	}

	const onConfirmDelete = () => {
		setdeleteLoading(true);
		setTimeout(() => {
			deleteAction.reduxFunction(userIdToDelete);
			setConfirmModal(false);
			setInfoModal(true);
		}, 2000);
	};

	const onCancelDelete = () => {
		setUserIdToDelete(null);
		setConfirmModal(false);
	};

	const onDeleteSuccess = () => {
		setdeleteLoading(false);
		setInfoModal(false);
		setUserIdToDelete(null);
	};

	return [
		confirmModal,
		userIdToDelete, 
		onConfirmDelete, 
		onCancelDelete, 
		deleteLoading, 
		infoModal, 
		onDeleteSuccess, 
		handleDeleteClick
		];
}
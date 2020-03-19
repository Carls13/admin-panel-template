import { useState } from 'react';

import { useNavigate } from "@reach/router"

export const useSubmit = (data, submitAction) => {
	const navigate = useNavigate();

	const [dataToSubmit, setData] = useState(data);
	const [loading, setLoading] = useState(false);
	const [infoModal, setInfoModal] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		setLoading(true);

		setTimeout(function(){
			setLoading(false)
			submitAction.reduxFunction(dataToSubmit);
			setInfoModal(true);
		}, 2000);
	}

	const onSubmitSuccess = (redirectTo) => {
		setInfoModal(true);
		navigate(redirectTo);
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({
			...dataToSubmit,
			[name]: value
		}) 
	}

	return [infoModal, handleSubmit, onSubmitSuccess, dataToSubmit, handleChange, loading];
}
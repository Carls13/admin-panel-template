import React, { useState, Fragment } from 'react';

import { connect } from 'react-redux';

import { useNavigate } from "@reach/router"

import { Modal } from './../../components/Modal/Modal';
import { Spinner } from './../../components/Spinner/Spinner';
import { Button } from './../../components/Button/Button';
import { InfoModal } from './../../components/InfoModal/InfoModal';

import { Form, Title, EditBlock, LabelDiv, Label, InputDiv, Input, Buttons } from './styles.js';

import { selectDataWithID } from './../../redux/general-selectors';

const Edit = ({type, dataID, data, editAction, redirectTo }) => {
    const navigate = useNavigate();

	const [dataToEdit, setData] = useState(data);
	const [editLoading, setEditLoading] = useState(false);
	const [infoModal, setInfoModal] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		setEditLoading(true);

		setTimeout(function(){
			setEditLoading(false)
			editAction.reduxFunction(dataToEdit);
			setInfoModal(true);
		}, 2000);
	}

	const onEditSuccess = (redirectTo) => {
		setInfoModal(true);
		navigate(redirectTo);
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log(dataToEdit, name, value);
		setData({
			...dataToEdit,
			[name]: value
		}) 
	}

	let editForm = [];
	for (const prop in dataToEdit) {
		editForm.push(
		<EditBlock onSubmit={handleSubmit}>
			<LabelDiv>
				<Label>{prop}:</Label>
			</LabelDiv>
			<InputDiv>
				<Input
					disabled={prop === 'id'}
					type="text"
					name={prop}
					value={dataToEdit[prop]}
					onChange={handleChange}
					placeholder={prop}
					/>
			</InputDiv>
		</EditBlock>)
	};

	const onReturn = () => {
		navigate(redirectTo);
	}

	return (
		<Fragment>
			{infoModal && <InfoModal text={`El ${type}: ${data.id} fue editado exitosamente.`}
										 onClick={() => onEditSuccess(redirectTo)}/>}
			{!infoModal && 
				<Modal>
				{
					editLoading ? <Spinner/> :
					    <Form onSubmit={handleSubmit}>
							<Title>Editar {type.toLowerCase()}: {dataID}</Title>
						    {editForm}
						    <Buttons>
					        	<Button type="submit" special="confirm" text="Guardar"/>
								<Button handleClick={onReturn} text="Regresar"/>
							</Buttons>		
					    </Form>
				}
				</Modal>
				
			}
		</Fragment>
	)
};

const mapStateToProps = (state, { type, dataID }) => ({
  	data: selectDataWithID(type, parseInt(dataID))(state)
});

export default connect(mapStateToProps)(Edit);
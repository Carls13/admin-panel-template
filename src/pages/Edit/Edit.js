import React, { useState, Fragment } from 'react';

import { connect } from 'react-redux';

import { useNavigate } from "@reach/router"

import { Modal } from './../../components/Modal/Modal';
import { Spinner } from './../../components/Spinner/Spinner';
import { Button } from './../../components/Button/Button';
import { InfoModal } from './../../components/InfoModal/InfoModal';

import { Form, Title, EditBlock, LabelDiv, Label, InputDiv, Input, Buttons } from './styles.js';

import { selectDataWithID } from './../../redux/general-selectors';

import { useSubmit } from './../../hooks/useSubmit';

const Edit = ({type, dataID, data, editAction, redirectTo }) => {
    const [infoModal, handleSubmit, onSubmitSuccess, dataToSubmit, handleChange, loading] = useSubmit(data, editAction);

    const navigate = useNavigate();

	let editForm = [];
	for (const prop in dataToSubmit) {
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
					value={dataToSubmit[prop]}
					onChange={handleChange}
					placeholder={prop}
					/>
			</InputDiv>
		</EditBlock>)
	};

	const onReturn = (e) => {
		e.preventDefault();
		navigate(redirectTo);
	}

	return (
		<Fragment>
			{infoModal && <InfoModal text={`El ${type}: ${data.id} fue editado exitosamente.`}
										 onClick={() => onSubmitSuccess(redirectTo)}/>}
			{!infoModal && 
				<Modal>
				{
					loading ? <Spinner/> :
					    <Form>
							<Title>Editar {type.toLowerCase()}: {dataID}</Title>
						    {editForm}
						    <Buttons>
					        	<Button handleClick={handleSubmit} type="submit" special="confirm" text="Guardar"/>
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
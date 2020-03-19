import React, { Fragment } from 'react';

import { Form, Title, SubmitBlock, LabelDiv, Label, InputDiv, Input, Buttons } from './styles.js';

import { useNavigate } from "@reach/router"

import { Modal } from './../../components/Modal/Modal';
import { Spinner } from './../../components/Spinner/Spinner';
import { Button } from './../../components/Button/Button';
import { InfoModal } from './../../components/InfoModal/InfoModal';

import { useSubmit } from './../../hooks/useSubmit';

export const Create = ({type, params, createAction, redirectTo }) => {
   const [infoModal, handleSubmit, onSubmitSuccess, dataToSubmit, handleChange, loading] = useSubmit(params, createAction);

   const navigate = useNavigate();

	let createForm = [];
	for (const prop in params) {
		createForm.push(
		<SubmitBlock onSubmit={handleSubmit}>
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
		</SubmitBlock>)
	};

	const onReturn = (e) => {
		e.preventDefault();
		navigate(redirectTo);
	}

	return (
		<Fragment>
			{infoModal && <InfoModal text={`El registro fue creado exitosamente.`}
										 onClick={() => onSubmitSuccess(redirectTo)}/>}
			{!infoModal && 
				<Modal>
				{
					loading ? <Spinner/> :
					    <Form>
							<Title>Agregar un nuevo usuario</Title>
						    {createForm}
						    <Buttons>
					        	<Button handleClick={handleSubmit} special="confirm" text="Agregar"/>
								<Button handleClick={onReturn} text="Regresar"/>
							</Buttons>		
					    </Form>
				}
				</Modal>
			}
		</Fragment>
	)
};
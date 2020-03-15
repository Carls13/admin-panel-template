import React, { Fragment } from 'react';

import { Text, Buttons, IconDiv } from './styles.js';

import { Modal } from './../Modal/Modal';
import { Button } from './../Button/Button';
import { Spinner } from './../Spinner/Spinner';

import { FaQuestionCircle } from 'react-icons/fa';

export const ConfirmModal = ({ text, onConfirm, onCancel, loading }) => (
   <Modal>
    {	
    	loading ? <Spinner small/> :
    	<Fragment>
	    	<IconDiv>
	   			<FaQuestionCircle size="75px"/>
	   		</IconDiv>
	    	<Text>{text}</Text>
	        <Buttons>
	        	<Button special="confirm" handleClick={onConfirm} text="Confirmar"/>
	        	<Button special="cancel" handleClick={onCancel} text="Cancelar"/>
	        </Buttons>
        </Fragment>
    }
   </Modal>
);

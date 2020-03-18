import React, { useState, Fragment } from 'react'

import { FaUser, FaPaintBrush, FaEdit, FaFolder, FaImage } from 'react-icons/fa';
import { TiArrowBack } from 'react-icons/ti';

import { SideContainer, Title, TitleText, Options, Option, Span, SignOut } from './styles';

import { connect } from 'react-redux';

import { ConfirmModal } from './../ConfirmModal/ConfirmModal';

import { useNavigate } from "@reach/router"

const SideNavBar = ({ userSignOut }) => {
   const [showModal, setModal] = useState(false);
   const navigate = useNavigate();

   const handleSignOut = () => {
      setModal(true);
   }

   const handleConfirm = () => {
    setModal(false);
    userSignOut();
    navigate('/login')
   }

   const handleCancel = () => {
    setModal(false);
   }

   return (
    <Fragment>
      {
        showModal && <ConfirmModal text="¿Está seguro que desea cerrar sesión?" onConfirm={handleConfirm} onCancel={handleCancel} />
      }
      <SideContainer>
         <Title to="/dashboard">
            <TitleText>Pintulac</TitleText>
         </Title>
         <Options>
            <Option to="/users">
               <FaUser size="32px"/>
               <Span>Usuarios</Span>
            </Option>
            <Option to="/colors">
               <FaPaintBrush size="32px"/>
               <Span>Colores</Span>
            </Option>
            <Option to="/images">
               <FaImage size="32px"/>
               <Span>Imágenes</Span>
            </Option>
            <Option to="/categories">
               <FaFolder size="32px"/>
               <Span>Categorías</Span>
            </Option>
            <Option to="/config">
               <FaEdit size="32px"/>
               <Span>Configuración</Span>
            </Option>
            <SignOut onClick={() => handleSignOut()}>
               <TiArrowBack size="32px"/>
               <Span>Salir</Span>
            </SignOut>
         </Options>
      </SideContainer>
    </Fragment>
      
)};

const mapDispatchToProps = (dispatch) => {
  return {
    userSignOut: () => dispatch({
      type: 'USER_SIGN_OUT',
    }),
  }
};

export default connect(null, mapDispatchToProps)(SideNavBar);
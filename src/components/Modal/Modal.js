import React from 'react'

import { ModalContainer, ModalContent } from './styles';

export const Modal = ({ children }) => {
  return (
    <ModalContainer>
      <ModalContent>
        {children}
      </ModalContent>
    </ModalContainer>
  )
};
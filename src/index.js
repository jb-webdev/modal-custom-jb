import React from 'react'
import {
  Modal,
  ModalContent,
  ModalWrapperBtn,
  ModalBtn,
  ModalMessage
} from './styles.js'

export const ModalCustom = ({
  isOpen,
  animation,
  border,
  closeModal,
  message,
  messageColor
}) => {
  return (
    <Modal openClose={isOpen}>
      <ModalContent animationType={animation} borderColor={border}>
        <ModalWrapperBtn>
          <ModalBtn onClick={closeModal}>X</ModalBtn>
        </ModalWrapperBtn>
        <ModalMessage color={messageColor}>{message}</ModalMessage>
      </ModalContent>
    </Modal>
  )
}

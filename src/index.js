import React from 'react'
import {
  Modal,
  ModalContent,
  ModalWrapperBtn,
  ModalBtn,
  ModalMessage
} from './styles.js'

export const ModalCustom = ({
  openModal,
  closeModal,
  animation,
  border,
  message,
  messageColor
}) => {
  const handleClickClose = () => {
    closeModal()
  }
  return (
    <Modal openClose={openModal}>
      <ModalContent animationType={animation} borderColor={border}>
        <ModalWrapperBtn>
          <ModalBtn onClick={handleClickClose}>X</ModalBtn>
        </ModalWrapperBtn>
        <ModalMessage color={messageColor}>{message}</ModalMessage>
      </ModalContent>
    </Modal>
  )
}

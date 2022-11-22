import React from 'react'
import {
  Modal,
  ModalContent,
  ModalWrapperIcon,
  ModalIcon,
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
  console.log(isOpen)
  return (
    <Modal openClose={isOpen}>
      <ModalContent animationType={animation} borderColor={border}>
        <ModalWrapperIcon>
          <ModalIcon onClick={closeModal}>X</ModalIcon>
        </ModalWrapperIcon>
        <ModalMessage color={messageColor}>{message}</ModalMessage>
      </ModalContent>
    </Modal>
  )
}

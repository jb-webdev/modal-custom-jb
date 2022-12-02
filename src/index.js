import React, { useState } from 'react'
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
  const [isVisible, setIsVisible] = useState(false)

  if (openModal && !isVisible) {
    setIsVisible(true)
  }

  const handleClickClose = () => {
    setIsVisible(false)
    closeModal()
  }

  return (
    <Modal openClose={isVisible}>
      <ModalContent animationType={animation} borderColor={border}>
        <ModalWrapperBtn>
          <ModalBtn onClick={handleClickClose}>X</ModalBtn>
        </ModalWrapperBtn>
        <ModalMessage color={messageColor}>{message}</ModalMessage>
      </ModalContent>
    </Modal>
  )
}

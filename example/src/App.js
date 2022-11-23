import React, {useState} from 'react'

import { ModalCustom } from 'modal-custom-jb'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button onClick={closeModal}>click to open modal</button>
      
      <ModalCustom 
        isOpen={isOpen} 
        message="Création du nouvel employé réussi !" 
        messageColor="#93ad18" 
        closeModal={closeModal} 
        animation="right" 
        border="success" 
      />
    </>
  )
}

export default App

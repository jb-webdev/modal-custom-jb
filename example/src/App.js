import React, {useState} from 'react'

import { ModalCustom } from 'modal-custom-jb'

const App = () => {
  // function to display the modal in the example
  const clickButton = () => {
    setIsOpen(true)
  }

  // modal display state needed
  const [isOpen, setIsOpen] = useState(false)
  const modalIsClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button onClick={clickButton}>click to open modal</button>
      
      <ModalCustom 
        openModal={isOpen}
        closeModal= {modalIsClose}
        message="Création du nouvel employé réussi !" 
        messageColor="#93ad18"
        animation="right" 
        border="success" 
      />
    </>
  )
}

export default App

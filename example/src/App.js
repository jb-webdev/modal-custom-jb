import React, {useState} from 'react'

import { ModalCustom } from 'modal-custom-jb'

const App = () => {
  // function to display the modal in the example
  const clickButton = () => {
    setIsOpen(true)
  }
  // state for example action display message
  const [displayMessage, setDisplayMessage] = useState(false)
  
  // modal display state needed
  const [isOpen, setIsOpen] = useState(false)

  const modalIsClose = () => {
    setIsOpen(false)
    // example of action performed after closing the modal
    setDisplayMessage(true)
    setTimeout(() => {
      setDisplayMessage(false)
    }, "1000")
  }

  return (
    <>
      <button className='btnForExample' onClick={clickButton}>click to open modal</button>
      {displayMessage && <p className='messageExample'>Hello World !</p>}
      <ModalCustom 
        openModal={isOpen}
        closeModal= {modalIsClose}
        message="Création du nouvel employé réussi !" 
        messageColor="#000000"
        animation="right" 
        border="blue" 
      />
    </>
  )
}

export default App
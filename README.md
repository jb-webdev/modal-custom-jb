# modal-custom-jb

> modal custom for student project

[![NPM](https://img.shields.io/npm/v/modal-custom-jb.svg)](https://www.npmjs.com/package/modal-custom-jb) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save modal-custom-jb
```

## Usage

```jsx
import React, {useState} from 'react'
import { ModalCustom } from 'modal-custom-jb'
import 'modal-custom-jb/dist/index.css'

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
```

## License

MIT © [jb-webdev](https://github.com/jb-webdev)

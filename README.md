# modal-custom-jb

> modal custom for student project

[![NPM](https://img.shields.io/npm/v/modal-custom-jb.svg)](https://www.npmjs.com/package/modal-custom-jb) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save modal-custom-jb
```

### Modal props

| Name          | Description                                                                   |
| ------------  | ------------------------------------------------------------------------------|
| openClose     | a boolean value to initialize the modal to a closed, non-apparent state       |
| onClick       | fonction à inclure  pour ouvrir ou fermer le modal avec le boutton de la modal|
| message       | a message string to display in the modal                                      |
| color         | a css color type string customizing the text color of the modal example: "#ffffff" if not filled in by default the color is: #000000                     |
| animationType | a string containing the modal's opening animation option, see options below     |
| borderColor   | a string containing the edge color option of the modal, see options below       |

### Modal options

| Props name    | Options     | Description                       |
| ------------  | ------------|-----------------------------------|
| color         | default     | the modal will not have a border  |
|               | success     | the modal will have green borders |
|               | alert       | the modal will have red borders   |


| Props name    | Options     | Description                                               |
| ------------  | ------------|-----------------------------------------------------------|
| animationType | up          | the modal will appear when descending                     |
|               | dowm        | the modal will appear ascending                           |
|               | left        | the modal will appear coming from the left of the screen  |
|               | left        | the modal will appear coming from the right of the screen |


## Usage

```jsx
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
        message="The modal is open!" 
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

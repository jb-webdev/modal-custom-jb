import styled, { css, keyframes } from 'styled-components'

export const modalDown = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-12rem);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`
export const modalUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(12rem);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`
export const modalLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-12rem);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
`
export const modalRight = keyframes`
    0% {
        opacity: 0;
        transform: translateX(12rem);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
`
const typeAnimation = (animation) => {
  switch (animation) {
    case 'up':
      return css`
        ${modalUp} 0.6s ease-in-out;
      `
    case 'down':
      return css`
        ${modalDown} 0.6s ease-in-out;
      `
    case 'left':
      return css`
        ${modalLeft} 0.6s ease-in-out;
      `
    case 'right':
      return css`
        ${modalRight} 0.6s ease-in-out;
      `
    default:
      return css`
        ${modalDown} 0.6s ease-in-out;
      `
  }
}
const borderColor = (borderType) => {
  switch (borderType) {
    case 'success':
      return css`4px solid #93ad18;`
    case 'alert':
      return css`4px solid red;`
    default:
      return css`none`
  }
}
export const Modal = styled.div`
  display: ${(props) => (props.openClose ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`
export const ModalContent = styled.div`
    padding: 5px;
    width: 50%;
    background-color: #fff;
    line-height: 1.5;
    font-size: 18px;
    cursor: initial;
    border-radius: 15px;
    border : ${(props) => borderColor(props.borderColor)}
    animation: ${(props) => typeAnimation(props.animationType)}
`
/* ===== IMAGE CLOSE ===== */
export const ModalWrapperIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const ModalIcon = styled.p`
  line-height: 30px;
  text-align: center;
  margin: 0;
  color: #ffffff;
  width: 35px;
  height: 35px;
  border-radius: 20px;
  background-color: #000000;
  position: relative;
  top: -15px;
  left: 15px;
  cursor: pointer;
  &:hover {
    transition: 0.9s;
    transform: rotate(360deg);
  }
`
/* ===== MESSAGE ===== */
export const ModalMessage = styled.p`
  color: ${(props) => (props.color ? props.color : '#313131')};
  text-align: center;
  margin-top: 0;
  margin-bottom: 30px;
`

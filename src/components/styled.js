import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  width: 60%;
  
  h3 {
    font-size: xx-large;
    font-style: italic;
  }

  label {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: large;
    display: flex;
    flex-direction: column;
    width: 60%;
    gap: 0.5rem;
  }
  
  input, textarea {
    background-color: #ddd;
    border: none;
    padding: 0.8rem 1rem;
    border-radius: 10px;
    font-size: 11pt;
    transition: background-color 0.4s, border 0.4s box-shadow 0.4s;
    :hover {
      background-color: white;
      border: solid 1px #ddd;
      box-shadow: 0 0 4px #eb50ff4f;
    }
    ::placeholder {
      opacity: 50%;
    }
  }

  textarea {
    height: 6rem;
    resize: vertical;
  }
`
export const Button = styled.button`
  background-color: #EA4C89;
  color: white;
  font-weight: 500;
  font-size: 14pt;
  text-align: center;
  padding: 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    opacity: 0.75;
  }
`
export const Error = styled.div`
  color: crimson;
  font-weight: 600;
  padding: 0.1rem;
  white-space: pre-line;
`
export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .6)
`
export const WindowModal = styled.div`
  text-align: center;
  padding: 2rem;
  width: 25rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #FFFFFF;
  box-shadow: 0px 4px 47.38px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  pre {
    font-size: large;
    text-align: left;
  }
`
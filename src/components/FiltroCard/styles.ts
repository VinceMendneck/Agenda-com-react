import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;
  @media (max-width: 600px) {
    text-align: center;
    padding: 4px;
  }
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
  @media (max-width: 600px) {
    font-size: 14px;
    text-align: center;
  }
`

export const Label = styled.span`
  font-size: 14px;
  @media (max-width: 600px) {
    font-size: 10px;
    text-align: center;
  }
`

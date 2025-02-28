import styled from 'styled-components'

// Estiliza o card de filtro
export const Card = styled.div<{ ativo: boolean }>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  border-radius: 8px;
  cursor: pointer;
`

// Estiliza o contador de contatos
export const Contador = styled.span<{ ativo?: boolean }>`
  font-weight: bold;
  font-size: 18px;
  display: block;
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  text-align: center;
`

// Estiliza a legenda do filtro
export const Label = styled.span<{ ativo?: boolean }>`
  font-size: 15px;
  display: block;
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  text-align: center;
`

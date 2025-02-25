import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`
export const Campo = styled.input`
  padding: 8px;
  background-color: #fcfcfc;
  border-radius: 8px;
  font-weight: bold;
  color: #5e5e5e;
  border: 1.5px solid #a1a1a1;
  width: 100%;
  &::placeholder {
    color: #5e5e5e;
    opacity: 1;
  }
`

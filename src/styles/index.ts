import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family: Roboto, sans-serif;

list-style: none;
}
main{
background-color: #fcfcfc;
}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
  @media (max-width: 600px) {
    grid-template-columns: 140px auto;
  }
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100%;
  overflow-y: scroll;
  color: #5e5e5e;
`
export const FormContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
  color: #5e5e5e;
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
  @media (max-width: 600px) {
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`

export const TituloCadastro = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: bold;
  @media (max-width: 600px) {
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #fcfcfc;
  border-radius: 8px;
  font-weight: bold;
  color: #5e5e5e;
  border: 1.5px solid #a1a1a1;
  width: 100%;
  margin-bottom: 8px;
  &::placeholder {
    color: #a1a1a1;
    opacity: 1;
  }
  @media (max-width: 600px) {
    font-size: 11px;
    text-align: center;
  }
`

export const CampoCadastro = styled.input`
  padding: 8px;
  background-color: #fcfcfc;
  border-radius: 8px;
  font-weight: bold;
  color: #5e5e5e;
  border: 1.5px solid #a1a1a1;
  width: 100%;
  margin-bottom: 16px;
  &::placeholder {
    color: #5e5e5e;
    opacity: 1;
  }
  @media (max-width: 600px) {
    font-size: 11px;
    text-align: center;
  }
`

export const Botao = styled.button`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
  @media (max-width: 600px) {
    font-size: 12px;
    padding: 5px 6px;
  }
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
  @media (max-width: 600px) {
    font-size: 12px;
    padding: 5px 6px;
  }
`

export default EstiloGlobal

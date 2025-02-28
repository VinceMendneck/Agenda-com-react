import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

// Estiliza o card de cada contato
export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  @media (max-width: 600px) {
    padding: 16px;
    margin: 8px;
  }
`

// Estiliza o nome do contato como título
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
  @media (max-width: 600px) {
    font-size: 13px;
  }
`

// Estiliza a etiqueta do contato
export const Etiqueta = styled.div<{ editavel: boolean }>`
  font-size: 12px;
  font-weight: bold;
  color: #5e5e5e;
  margin-bottom: 16px;
  select {
    width: 100%;
    padding: 4px 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 12px;
    color: #5e5e5e;
    background-color: #fff;
  }
`

// Estiliza os campos de email e telefone
export const Descricao = styled.input`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  border: 1px solid ${(props) => (props.disabled ? 'transparent' : '#ccc')};
  border-radius: 4px;
  padding: 8px;
  background-color: ${(props) => (props.disabled ? 'transparent' : '#fff')};
  @media (max-width: 600px) {
    font-size: 11px;
    margin-bottom: 0;
    margin-top: 0;
    padding: 0;
  }
`

// Estiliza a barra de ações
export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

// Estiliza o botão de cancelar ou remover
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
  @media (max-width: 600px) {
    font-size: 12px;
    padding: 4px 6px;
  }
`

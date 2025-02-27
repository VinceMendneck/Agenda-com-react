import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  width: 64px;
  height: 64px;
  color: #fff;
  background-color: ${variaveis.verde};
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
  text-decoration: none;
  @media (max-width: 600px) {
    width: 42px;
    height: 42px;
    font-size: 30px;
    bottom: 30px;
    right: 30px;
  }
`

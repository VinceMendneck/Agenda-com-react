import styled from 'styled-components'

// Estiliza a barra lateral
export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100%;
  width: 224px;
  @media (max-width: 600px) {
    width: 140px;
  }
`

// Estiliza a seção de filtros
export const Filtros = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
  background-color: #eee;
  text-align: center;
  font-size: 5px;
`

// Estiliza o container de cada etiqueta com seus botões
export const EtiquetaContainer = styled.div`
  display: column;
  margin-top: 8px;
  margin-bottom: 8px;
  align-items: center;
  gap: 4px;
`

// Estiliza os botões de edição e remoção de uma etiqueta
export const BotoesEtiqueta = styled.div`
  display: flex;
  margin-left: 30px;
  margin-top: 8px;
  margin-bottom: 8px;
  @media (max-width: 600px) {
    margin-left: -1px;
  }
`

// Estiliza o container de edição de uma etiqueta
export const EditarContainer = styled.div`
  display: inline-block;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`

// Estiliza o container para adicionar uma nova etiqueta
export const AdicionarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
  width: 100%;
`

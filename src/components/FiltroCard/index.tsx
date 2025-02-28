import { useDispatch, useSelector } from 'react-redux'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as S from './styles'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'todos' | 'com-etiqueta'
  valor?: string
}

// Componente que representa um card de filtro para a lista de contatos
const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  // Verifica se este filtro está ativo com base no critério e no valor
  const verificaEstaAtivo = () => {
    return filtro.criterio === criterio && (!valor || filtro.valor === valor)
  }

  // Conta os contatos com base no critério do filtro
  const contarContatos = () => {
    if (criterio === 'todos') return contatos.itens.length
    if (criterio === 'com-etiqueta' && valor) {
      return contatos.itens.filter((item) => item.etiqueta === valor).length
    }
    return 0
  }

  // Aplica o filtro ao clicar no card
  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const contador = contarContatos()
  const ativo = verificaEstaAtivo()

  // Renderiza o card com o contador e a legenda
  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador ativo={ativo}>{contador}</S.Contador>
      <S.Label ativo={ativo}>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard

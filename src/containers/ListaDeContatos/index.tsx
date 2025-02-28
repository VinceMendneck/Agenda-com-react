import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let cotatosFiltrados = itens
    if (termo !== undefined) {
      cotatosFiltrados = cotatosFiltrados.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        cotatosFiltrados = cotatosFiltrados.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        cotatosFiltrados = cotatosFiltrados.filter(
          (item) => item.status === valor
        )
      }
      return cotatosFiltrados
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} contato(s) encontrado(s)`
    } else {
      mensagem = `${quantidade} contato(s) encontrado(s) com ${`${criterio} ${valor}`} ${complementacao}`
    }

    return mensagem
  }

  const contatos = filtraContatos()
  const mensagem = exibeResultadoFiltragem(contatos.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {contatos.map((c) => (
          <li key={c.titulo}>
            <Contato
              id={c.id}
              descricao={c.descricao}
              titulo={c.titulo}
              status={c.status}
              prioridade={c.prioridade}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos

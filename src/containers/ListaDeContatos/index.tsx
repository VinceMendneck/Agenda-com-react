import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'

// Componente que exibe a lista de contatos com filtros aplicados
const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  // Filtra os contatos com base no termo de busca e no critério
  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) =>
          item.nome.toLowerCase().search(termo.toLowerCase()) >= 0 ||
          item.email.toLowerCase().search(termo.toLowerCase()) >= 0 ||
          item.telefone.toLowerCase().search(termo.toLowerCase()) >= 0
      )
    }
    if (criterio === 'com-etiqueta' && valor) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.etiqueta === valor // Supondo que o modelo de contato tenha um campo "etiqueta"
      )
    }
    return contatosFiltrados
  }

  // Gera a mensagem de resultado da filtragem
  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao = termo ? ` e "${termo}"` : ''

    if (criterio === 'todos') {
      mensagem = `${quantidade} contato(s) encontrado(s)`
    } else if (criterio === 'com-etiqueta' && valor) {
      mensagem = `${quantidade} contato(s) encontrado(s) com etiqueta "${valor}"${complementacao}`
    }
    return mensagem
  }

  // Renderiza a lista de contatos filtrados
  const contatos = filtraContatos()
  const mensagem = exibeResultadoFiltragem(contatos.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {contatos.map((c) => (
          <li key={c.id}>
            <Contato
              id={c.id}
              nome={c.nome}
              email={c.email}
              telefone={c.telefone}
              etiqueta={c.etiqueta}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos

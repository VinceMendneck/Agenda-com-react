import { FormEvent, useState } from 'react'
import { BotaoSalvar, FormContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, SelectEtiqueta } from './styles'
import { useDispatch } from 'react-redux'
import { cadastrar } from '../../store/reducers/contatos'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

// Componente para cadastrar um novo contato
const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { etiquetas } = useSelector((state: RootReducer) => state.filtro)
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [etiqueta, setEtiqueta] = useState('Amigos')

  // Função para formatar o telefone com máscara
  const formatarTelefone = (valor: string) => {
    const apenasNumeros = valor.replace(/\D/g, '') // Remove tudo que não é número
    if (apenasNumeros.length <= 2) return apenasNumeros
    if (apenasNumeros.length <= 7)
      return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2)}`
    return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(
      2,
      7
    )}-${apenasNumeros.slice(7, 11)}`
  }

  // Função para lidar com a mudança no campo de telefone
  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value
    const telefoneFormatado = formatarTelefone(valor)
    setTelefone(telefoneFormatado)
  }

  // Função para cadastrar o contato e verificar duplicatas
  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    // Verifica se já existe um contato com o mesmo nome
    const contatoJaExiste = itens.find(
      (contato) => contato.nome.toLowerCase() === nome.toLowerCase()
    )

    if (contatoJaExiste) {
      alert('Já existe um contato com esse nome!')
      return
    }

    dispatch(
      cadastrar({
        nome,
        email,
        telefone,
        etiqueta
      })
    )
    navigate('/')
  }

  // Renderiza o formulário de cadastro
  return (
    <FormContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          type="text"
          style={{ fontSize: 14 }}
          placeholder="Nome completo"
        />
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          style={{ fontSize: 14 }}
          placeholder="E-mail"
        />
        <Campo
          value={telefone}
          onChange={handleTelefoneChange}
          type="tel"
          style={{ fontSize: 14 }}
          placeholder="(XX) XXXXX-XXXX"
          maxLength={15}
        />
        <SelectEtiqueta
          value={etiqueta}
          onChange={({ target }) => setEtiqueta(target.value)}
        >
          {etiquetas.map((etiqueta) => (
            <option key={etiqueta} value={etiqueta}>
              {etiqueta}
            </option>
          ))}
        </SelectEtiqueta>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </FormContainer>
  )
}

export default Formulario

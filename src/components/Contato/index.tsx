import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { BotaoSalvar, Botao } from '../../styles'
import { RootReducer } from '../../store'

type Props = ContatoClass

// Componente principal que gerencia um único contato
const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  etiqueta: etiquetaOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const { etiquetas } = useSelector((state: RootReducer) => state.filtro)
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState(nomeOriginal)
  const [email, setEmail] = useState(emailOriginal)
  const [telefone, setTelefone] = useState(telefoneOriginal)
  const [etiqueta, setEtiqueta] = useState(etiquetaOriginal)

  // Sincroniza os valores com as props
  useEffect(() => {
    if (nomeOriginal) setNome(nomeOriginal)
    if (emailOriginal) setEmail(emailOriginal)
    if (telefoneOriginal) setTelefone(telefoneOriginal)
    if (etiquetaOriginal) setEtiqueta(etiquetaOriginal)
  }, [nomeOriginal, emailOriginal, telefoneOriginal, etiquetaOriginal])

  // Cancela a edição e restaura os valores originais
  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
    setEtiqueta(etiquetaOriginal)
  }

  // Renderiza o card do contato com os campos e botões de ação
  return (
    <S.Card>
      <S.Titulo>
        {estaEditando && <em>Editando: </em>}
        {nome}
      </S.Titulo>
      <S.Etiqueta editavel={estaEditando}>
        {estaEditando ? (
          <select
            value={etiqueta}
            onChange={(evento) => setEtiqueta(evento.target.value)}
          >
            {etiquetas.map((etiqueta) => (
              <option key={etiqueta} value={etiqueta}>
                {etiqueta}
              </option>
            ))}
          </select>
        ) : (
          etiqueta
        )}
      </S.Etiqueta>
      <S.Descricao
        disabled={!estaEditando}
        value={telefone}
        onChange={(evento) => setTelefone(evento.target.value)}
        placeholder="Telefone"
      />
      <S.Descricao
        disabled={!estaEditando}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
        placeholder="E-mail"
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    email,
                    telefone,
                    etiqueta,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato

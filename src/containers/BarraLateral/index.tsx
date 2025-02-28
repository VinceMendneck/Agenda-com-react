import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { Botao, BotaoSalvar, Campo } from '../../styles'
import { RootReducer } from '../../store'
import {
  alterarTermo,
  adicionarEtiqueta,
  editarEtiqueta,
  removerEtiqueta
} from '../../store/reducers/filtro'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { BotaoCancelarRemover } from '../../components/Contato/styles'

type Props = {
  mostrarFiltros: boolean
}

// Hook personalizado para monitorar media queries
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches)

  useEffect(() => {
    const media = window.matchMedia(query)
    const listener = () => setMatches(media.matches)

    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}

// Componente da barra lateral com pesquisa e filtros de etiquetas
const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo, etiquetas } = useSelector((state: RootReducer) => state.filtro)
  const [novaEtiqueta, setNovaEtiqueta] = useState('')
  const [editandoEtiqueta, setEditandoEtiqueta] = useState<string | null>(null)
  const [valorEdicao, setValorEdicao] = useState('')

  const isMobile = useMediaQuery('(max-width: 600px)')
  const textoBotao = isMobile ? 'Voltar' : 'Voltar a lista de contatos'

  // Adiciona uma nova etiqueta ao estado
  const handleAdicionarEtiqueta = () => {
    if (novaEtiqueta.trim()) {
      dispatch(adicionarEtiqueta(novaEtiqueta.trim()))
      setNovaEtiqueta('')
    }
  }

  // Inicia a edição de uma etiqueta existente
  const handleEditarEtiqueta = (etiqueta: string) => {
    setEditandoEtiqueta(etiqueta)
    setValorEdicao(etiqueta)
  }

  // Salva a edição de uma etiqueta
  const handleSalvarEdicao = (etiquetaOriginal: string) => {
    if (valorEdicao.trim()) {
      dispatch(
        editarEtiqueta({ original: etiquetaOriginal, novo: valorEdicao.trim() })
      )
      setEditandoEtiqueta(null)
      setValorEdicao('')
    }
  }

  // Renderiza a barra lateral com filtros e gerenciamento de etiquetas
  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Procurar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              {etiquetas.map((etiqueta) => (
                <S.EtiquetaContainer key={etiqueta}>
                  {editandoEtiqueta === etiqueta ? (
                    <S.EditarContainer>
                      <Campo
                        value={valorEdicao}
                        onChange={(e) => setValorEdicao(e.target.value)}
                      />
                      <BotaoSalvar onClick={() => handleSalvarEdicao(etiqueta)}>
                        Salvar
                      </BotaoSalvar>
                      <BotaoCancelarRemover
                        onClick={() => setEditandoEtiqueta(null)}
                      >
                        Cancelar
                      </BotaoCancelarRemover>
                    </S.EditarContainer>
                  ) : (
                    <>
                      <FiltroCard
                        criterio="com-etiqueta"
                        valor={etiqueta}
                        legenda={etiqueta}
                      />
                      <S.BotoesEtiqueta>
                        <Botao onClick={() => handleEditarEtiqueta(etiqueta)}>
                          Editar
                        </Botao>
                        <BotaoCancelarRemover
                          onClick={() => dispatch(removerEtiqueta(etiqueta))}
                        >
                          Remover
                        </BotaoCancelarRemover>
                      </S.BotoesEtiqueta>
                    </>
                  )}
                </S.EtiquetaContainer>
              ))}
            </S.Filtros>
            <FiltroCard criterio="todos" legenda="Todos" />
            <S.AdicionarContainer>
              <Campo
                value={novaEtiqueta}
                onChange={(e) => setNovaEtiqueta(e.target.value)}
                placeholder="Nova etiqueta"
              />
              <BotaoSalvar onClick={handleAdicionarEtiqueta}>
                Adicionar
              </BotaoSalvar>
            </S.AdicionarContainer>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>{textoBotao}</Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral

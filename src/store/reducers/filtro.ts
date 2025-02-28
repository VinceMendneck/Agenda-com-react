import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define o estado do filtro com termo de busca e etiquetas personalizadas
type FiltroState = {
  termo?: string
  criterio: 'todos' | 'com-etiqueta'
  valor?: string // Representa a etiqueta selecionada
  etiquetas: string[] // Lista de etiquetas disponíveis
}

// Estado inicial com algumas etiquetas padrão
const initialState: FiltroState = {
  termo: '',
  criterio: 'todos',
  etiquetas: ['Amigos', 'Trabalho', 'Família']
}

// Slice do Redux para gerenciar o estado do filtro
const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    // Altera o termo de busca
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    // Altera o critério de filtro e o valor (etiqueta selecionada)
    alterarFiltro: (
      state,
      action: PayloadAction<{
        criterio: FiltroState['criterio']
        valor?: string
      }>
    ) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    },
    // Adiciona uma nova etiqueta à lista
    adicionarEtiqueta: (state, action: PayloadAction<string>) => {
      const etiqueta = action.payload
      if (!state.etiquetas.includes(etiqueta)) {
        state.etiquetas.push(etiqueta)
      }
    },
    // Edita uma etiqueta existente
    editarEtiqueta: (
      state,
      action: PayloadAction<{ original: string; novo: string }>
    ) => {
      const index = state.etiquetas.indexOf(action.payload.original)
      if (index !== -1) {
        state.etiquetas[index] = action.payload.novo
        if (state.valor === action.payload.original) {
          state.valor = action.payload.novo // Atualiza o valor do filtro ativo, se aplicável
        }
      }
    },
    // Remove uma etiqueta da lista
    removerEtiqueta: (state, action: PayloadAction<string>) => {
      state.etiquetas = state.etiquetas.filter(
        (etiqueta) => etiqueta !== action.payload
      )
      if (state.valor === action.payload) {
        state.criterio = 'todos' // Reseta o filtro se a etiqueta removida estava ativa
        state.valor = undefined
      }
    }
  }
})

export const {
  alterarTermo,
  alterarFiltro,
  adicionarEtiqueta,
  editarEtiqueta,
  removerEtiqueta
} = filtroSlice.actions
export default filtroSlice.reducer

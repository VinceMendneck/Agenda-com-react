import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar JavaScript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'sw',
      1
    ),
    new Tarefa(
      'Estudar JavaScript',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      '5w',
      2
    ),
    new Tarefa(
      'Estudar JavaScript',
      enums.Prioridade.NORMAL,
      enums.Status.PENDENTE,
      'ww',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer

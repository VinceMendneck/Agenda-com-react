import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

// Define o estado da lista de contatos
type ContatosState = {
  itens: Contato[]
}

// Estado inicial com exemplos de contatos
const initialState: ContatosState = {
  itens: [
    new Contato(
      'João Silva',
      'joao.silva@email.com',
      '(11) 99999-9999',
      1,
      'Amigos'
    ),
    new Contato(
      'Maria Oliveira',
      'maria.oliveira@email.com',
      '(21) 98888-8888',
      2,
      'Trabalho'
    ),
    new Contato(
      'Pedro Souza',
      'pedro.souza@email.com',
      '(31) 97777-7777',
      3,
      'Família'
    )
  ]
}

// Slice do Redux para gerenciar os contatos
const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoJaExiste) {
        alert('Contato já existente')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = new Contato(
          action.payload.nome,
          action.payload.email,
          action.payload.telefone,
          ultimoContato ? ultimoContato.id + 1 : 1,
          action.payload.etiqueta
        )
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover } = contatosSlice.actions
export const { editar } = contatosSlice.actions
export const { cadastrar } = contatosSlice.actions
export default contatosSlice.reducer

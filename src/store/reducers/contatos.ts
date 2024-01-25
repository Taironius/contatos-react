import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Pedro Rosa',
      email: 'pedro.rosa@email.com',
      telefone: '1999999999'
    },
    {
      id: 2,
      nome: 'Guilherme Tomas',
      email: 'guilherme.tomas@email.com',
      telefone: '1999999999'
    },
    {
      id: 3,
      nome: 'Maria Jacinto',
      email: 'maria.jacinto@email.com',
      telefone: '1999999999'
    },
    {
      id: 4,
      nome: 'Mara Maravilha',
      email: 'mara.maravilha@email.com',
      telefone: '1999999999'
    }
  ]
}

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
      const indexDaTarefa = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const contatoJaExiste = state.itens.find(
        (cadastro) =>
          cadastro.nome.toLocaleLowerCase() ===
          action.payload.nome.toLocaleLowerCase()
      )

      if (contatoJaExiste) {
        alert('Esse Contato já existe')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer

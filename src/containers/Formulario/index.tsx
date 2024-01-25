import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'
import {
  BotaoCancelar,
  BotaoSalvar,
  Edit,
  Tittle
} from '../../components/Contato/styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const tarefaParaAdicionar = new Contato(nome, email, telefone, 9)
    dispatch(cadastrar(tarefaParaAdicionar))
    navigate('/')
  }

  return (
    <>
      <Tittle>Novo Contato</Tittle>
      <form onSubmit={cadastrarContato}>
        <Edit
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome Completo"
        />
        <Edit
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="email"
          placeholder="E-mail"
        />
        <Edit
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          type="tel"
          placeholder="Telefone"
        />
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
        <BotaoCancelar onClick={() => navigate('/')}>Cancelar</BotaoCancelar>
      </form>
    </>
  )
}

export default Formulario

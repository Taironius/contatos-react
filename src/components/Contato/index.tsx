import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import * as S from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

export const Tittle = () => <S.Tittle>Lista de Contatos</S.Tittle>

const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [nomeOriginal, emailOriginal, telefoneOriginal])

  return (
    <S.Card>
      {estaEditando ? (
        <>
          <>
            <S.Dado>Nome Completo: </S.Dado>
            <S.Edit
              type="text"
              value={nome}
              onChange={(evento) => setNome(evento.target.value)}
            />
            <S.Dado>E-mail: </S.Dado>
            <S.Edit
              type="text"
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
            />
            <S.Dado>Telefone: </S.Dado>
            <S.Edit
              type="tel"
              value={telefone}
              onChange={(evento) => setTelefone(evento.target.value)}
            />
          </>
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    id,
                    nome,
                    email,
                    telefone: telefone.toString()
                  }),
                  setEstaEditando(false)
                )
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelar
              onClick={() => {
                setEstaEditando(false)
                setNome(nomeOriginal)
                setEmail(emailOriginal)
                setTelefone(telefoneOriginal.toString())
              }}
            >
              Cancelar
            </S.BotaoCancelar>
          </>
        </>
      ) : (
        <>
          <>
            <S.Dado>Nome Completo: </S.Dado>
            <S.Edit value={nome} disabled />
            <S.Dado>E-mail: </S.Dado>
            <S.Edit value={email} disabled />
            <S.Dado>Telefone: </S.Dado>
            <S.Edit value={telefone} disabled />
          </>
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelar onClick={() => dispatch(remover(id))}>
              Excluir
            </S.BotaoCancelar>
          </>
        </>
      )}
    </S.Card>
  )
}

export default Contato

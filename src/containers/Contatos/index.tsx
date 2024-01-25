import { useSelector } from 'react-redux'
import Contato, { Tittle } from '../../components/Contato'
import * as S from './styles'
import { RootReducer } from '../../store'

const Contatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <>
      <Tittle />
      <S.Cards>
        {itens.map((p) => (
          <li key={p.nome}>
            <Contato
              id={p.id}
              nome={p.nome}
              email={p.email}
              telefone={p.telefone}
            />
          </li>
        ))}
      </S.Cards>
    </>
  )
}

export default Contatos

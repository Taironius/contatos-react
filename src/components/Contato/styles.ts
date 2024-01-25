import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Tittle = styled.h1`
  color: #f7f1e3;
  text-align: center;
  font-family: Itim;
  font-size: 32px;
  margin: 15px 0;
`

export const Card = styled.div`
  background-color: #84817a;
  padding: 16px;
  border-radius: 10px;
`

export const Dado = styled.label`
  display: block;
  font-size: 16px;
  color: #fff;
  background-color: #84817a;
`

export const Edit = styled.input`
  display: block;
  color: #fff;
  margin-top: 6px;
  width: 100%;
  padding: 5px;
  border-radius: 10px;
  background-color: #227093;
  &::placeholder {
    color: #fff;
  }
`

export const Botao = styled.button`
  font-size: 16px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.amarelo};
  margin-top: 10px;
  margin-right: 5px;
  border-radius: 10px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

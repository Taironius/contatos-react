import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Itim', cursive;
    background-color: #2C2C54;
  }

`

export const Container = styled.div`
  display: block;
  margin: 0 auto 32px;
  max-width: 1024px;
`

export default EstiloGlobal

import styled, { css } from 'styled-components'
import { pixelToRem } from '../../styles/global'
import theme from '../../styles/theme'

export const Header = styled.header`
    display: flex;
    flex-direction: row;
     justify-content: center;
    align-content: center;
    padding: ${pixelToRem(64)} ${pixelToRem(10)} 0;
    background-color: black;
`;

export const BodyContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100%;

   .content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

      .page-map {
        display: flex;
        justify-content: flex-start;
        width: 100vw;
        height: 100vh;
      }

  @media (min-width: 998px) { 

    .page-map {
        width: 100vw;
        height: 93vh;
    }

    .page-map .leaflet-container {
      z-index: 0;
    }
  }
`

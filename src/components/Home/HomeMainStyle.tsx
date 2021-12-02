import styled, { css } from 'styled-components'
import { pixelToRem } from '../../styles/global'
import theme from '../../styles/theme'

export const Header = styled.header`
    display: flex;
    flex-direction: row;
     justify-content: center;
    align-content: center;
    padding: ${pixelToRem(142)} ${pixelToRem(10)} 0;
    background-color: black;
`;

export const BodyContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding: ${pixelToRem(142)} ${pixelToRem(10)} 0;
  
  @media (min-width: 998px) {
    padding: ${pixelToRem(142)} ${pixelToRem(116)} 0;

    .page-map {
      width: 100vw;
      height: 100vh;
    }

    .page-map .leaflet-container {
      z-index: 0;
    }
  }
`

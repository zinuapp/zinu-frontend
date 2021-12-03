import styled, { css } from 'styled-components'
import { pixelToRem } from '../../styles/global'
import theme from '../../styles/theme'

export const AddressContainer = styled.div`

    @media (min-width: 998px) { 
        position: fixed;
        left: 77%;
        top: 16%;
        
        height: ${pixelToRem(513)};
        width: ${pixelToRem(400)};
       
        background-color:  ${theme.colors.button};
        box-shadow: rgb(0 0 0 / 15%) 0px 4px 16px;
        border-radius: 5%;
        z-index: 999;
     }

     .title {
         align-items: center;
         background-color: ${theme.colors.subtitle};
         color: ${theme.colors.background};
        display: grid;
        font-size: ${pixelToRem(10)};
        height: ${pixelToRem(170)};

        border-radius: 5%;
     }

     .container {
         position: relative;
         padding-left: ${pixelToRem(12)};
     }

       .container  p{
         position: relative;
         padding-left: ${pixelToRem(20)};
     }

      .container  p:hover{
         cursor: pointer;
     }

     .actual-address::before {
         position: absolute;
         top: 43%;
         border-radius: 50%;
         left: 0%;
         content: '';

         width: ${pixelToRem(8)};
         height: ${pixelToRem(8)};
         background: ${theme.colors.background};
     }

     .dest-address {
         padding-top:  ${pixelToRem(16)};
     }
     
     .dest-address::before {
         position: absolute;
          top: 62%;
          border-radius: 50%;
          left: 0%;
          content: '';

         width: ${pixelToRem(8)};
         height: ${pixelToRem(8)};
         background: ${theme.colors.background};
     }

     .search-container { 
         padding: ${pixelToRem(12)};
    }

    .container-search {
        background: #F3F4F6;
        border: ${pixelToRem(1)} solid #E5E7EB;
        font-size: ${pixelToRem(16)};
        margin-bottom: ${pixelToRem(12)};
        padding: ${pixelToRem(14)}  ${pixelToRem(16)};
        width: 100%;
        border-bottom: ${pixelToRem(2)} solid #2563EB;
    }

    .result {
        max-height: ${pixelToRem(250)};
        overflow-y: auto;
    }

    .result-item {
         border-bottom: ${pixelToRem(1)} solid #ccc;
         display: grid;
         grid-gap: ${pixelToRem(16)};
         grid-template-columns: max-content auto;
         padding: ${pixelToRem(12)} 0;
         padding-left: ${pixelToRem(8)};
    }

    .result-item:hover {
        cursor: pointer;
        background: #F3F4F6;
    }

    .search_result-item {
        align-items: center;
        background: #ccc;
        border-radius: 50%;
        display: grid;
        height: ${pixelToRem(24)};
        justify-content: center;
        width: ${pixelToRem(24)}
    }

    .search_result-item svg{
        fill: #fff;
        height: ${pixelToRem(12)};
        width: ${pixelToRem(12)};
    }

    .search_result-label {
        color: ${theme.colors.background};
    }

  `;
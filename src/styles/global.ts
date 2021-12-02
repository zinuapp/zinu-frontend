import { createGlobalStyle } from 'styled-components'

export function pixelToRem(pixels: number){
 return `${(1 / 16 * pixels)}rem`;
}


export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-size: 16px;
    margin: 0;
}
h1,h2{
    font-family: 'Inter', sans-serif;
}
`;

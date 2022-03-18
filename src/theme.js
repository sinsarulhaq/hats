import { createGlobalStyle } from "styled-components"

export const lightTeme = {
body: '#000',
fontColor: '#fff'
}

export const DarkTeme = {
    body: '#fff',
    fontColor: '#000'
}

export const GlobalStyle = createGlobalStyle`
body{
    background-color: ${props => props.theme.body};
}
`
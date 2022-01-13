import styled, { createGlobalStyle } from "styled-components";

export const darkTheme = {
    body: "#000",
    text: "#eee2dc",
};

export const lightTheme = {
    body: "#fff",
    text: "#000",
};

export const GlobalStyles = createGlobalStyle`
body {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    
}
`;

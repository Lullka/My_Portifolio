import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    
    html{
        scroll-behavior: smooth;
    }
    
    body{
        background-color: #0B0B0B;
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
        overflow-y: auto;
    }

    a{
        text-decoration: none;
    }

    ::selection{
        background: rgba(131, 71, 230, 0.5); /* #50BEF5 #FCAF17*/
        color: #FFF;
    }
`;
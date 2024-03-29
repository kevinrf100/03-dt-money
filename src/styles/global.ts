import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${({ theme }) => theme["green-500"]};
    }

    body {
        background-color: ${({ theme }) => theme["gray-800"]};
        color: ${({ theme }) => theme["gray-100"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem Roboto, san-serif;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:focus {
        transition: background-color 600000s 0s, color 600000s 0s;
    }
`;

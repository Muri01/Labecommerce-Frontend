import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  /* line-height: 1.5; */
  /* font-weight: 400; */

  /* color-scheme: light dark; */
  /* color: rgba(255, 255, 255, 0.87); */
  /* background-color: #242424; */

  /* font-synthesis: none; */
  /* text-rendering: optimizeLegibility; */
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  /* -webkit-text-size-adjust: 100%; */
}

*{
    margin: 0;
    padding: 0;
    border-sizing:border-box;
}

`

export const ContainerApp = styled.div`
    border: solid black 1px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    /* grid-template-columns: 1fr, 2fr, 1fr */
`
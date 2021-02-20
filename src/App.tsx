import styled, { ThemeProvider } from "styled-components";
import type { JSX } from "preact";

const Button = styled.button`
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border-radius: 3px;
	color: ${(props: any) => props.theme.main};
	border: 2px solid ${props => props.theme.main};
`;

const theme = {
  main: "mediumseagreen"
};

export function App(): JSX.Element {
  return (
    <div>
      <Button theme={{ main: "royalblue" }}>Ad hoc theme</Button>
      <ThemeProvider theme={theme}>
        <div>
          <Button>Themed</Button>
          <Button theme={{ main: "darkorange" }}>Overidden</Button>
        </div>
      </ThemeProvider>
    </div>
  );
}

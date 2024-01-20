import { Bemvindo, Body, Container, Head, Titulo } from "./assets/styles";

function App() {
  return (
    <Body>
    <Container>
      <Head>
      <Titulo>
        Projeto styled
      </Titulo>
      </Head>
      <Bemvindo cor="0000FF" tamanho={20}>
        Página de bem-vindo!!
      </Bemvindo>
    </Container>
    </Body>
  );
}
export default App;

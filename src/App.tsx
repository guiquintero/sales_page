import { Card, Container, LogoLoja, Section, Stars } from "./styles";
import Logo from "./assets/logo.jpeg";
import produtos from "./produtos.json";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

interface CardsProps {
  nome: string;
  imagem: string;
  link: string;
  numero: number;
}

function Cards({ nome, imagem, link, numero }: CardsProps) {
  return (
    <Card>
      <a href={link}>
        <img src={imagem} alt="" />
        <h1>{nome}</h1>
        <Stars>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          <span>{numero} mil</span>
        </Stars>
      </a>
    </Card>
  );
}

function App() {
  return (
    <Section>
      <LogoLoja src={Logo} alt="" />
      <Container>
        {produtos.map((produto, index) => (
          <Cards
            key={index}
            nome={produto.nome}
            imagem={produto.imagem}
            link={produto.link}
            numero={produto.numero}
          />
        ))}
      </Container>
    </Section>
  );
}

export default App;

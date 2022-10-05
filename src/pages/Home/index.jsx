import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.png";
import Button from "../../components/buttons";
import { Container, Content } from "./styles";

const Home = ({ authenticated }) => {
  const history = useHistory();
  const handleNavigation = (path) => {
    return history.push(path);
  };
  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo Register me" />

        <div>
          <Button onClick={() => handleNavigation("/singup")} greenSchema>
            {" "}
            Cadastrar{" "}
          </Button>
          <Button onClick={() => handleNavigation("/login")}> Login </Button>
        </div>
      </Content>
    </Container>
  );
};

export default Home;

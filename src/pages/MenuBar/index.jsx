import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.png";
import Button from "../../components/buttons";
import { Container } from "./style";

const MenuBar = ({ name, children, path, setAuthenticated }) => {
  const history = useHistory();

  const handleNavigation = (path) => {
    history.push(path);
  };
  return (
    <Container>
      <img src={logo} alt="Logo da KenzieHub" />
      <Button
        onClick={() => {
          if (name === "sair") {
            setAuthenticated(false);
            localStorage.removeItem("@resgiterMe:token");
          }
          handleNavigation(path);
        }}
      >
        {" "}
        {children}{" "}
      </Button>
    </Container>
  );
};
export default MenuBar;

import { useState, useEffect } from "react";
import Button from "../../components/buttons";
import Card from "../Card";
import MenuBar from "../MenuBar";
import ModalPost from "../../components/modalPost";
import ModalPut from "../../components/modalPut";
import { Container, DivMenu, DivContact } from "./styles";
import api from "../../services/api";

const Dashboard = ({ authenticated, setAuthenticated }) => {
  const [modalPost, setModalPost] = useState(false);
  const [modalPut, setModalPut] = useState(false);
  const [itemToChange, setItemToChange] = useState("");
  const [user] = useState(JSON.parse(localStorage.getItem("@resgiterMe:user")));
  const [associateList, setAssociateList] = useState([]);

  const createAssociate = () => {
    setModalPost(true);
  };
  const [token] = useState(
    JSON.parse(localStorage.getItem("@resgiterMe:token")) || ""
  );

  useEffect(() => {
    api
      .get("/associate", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setAssociateList(response.data))
      .catch((err) => console.log(err));
  });

  return (
    <Container>
      <DivMenu>
        <MenuBar name="sair" path="/login" setAuthenticated={setAuthenticated}>
          {" "}
          Sair{" "}
        </MenuBar>
      </DivMenu>
      <hr />

      <nav>
        {modalPost && <ModalPost user={user} setModalPost={setModalPost} />}
        {modalPut && (
          <ModalPut setModalPut={setModalPut} itemToChange={itemToChange} />
        )}

        <Button className="add" onClick={createAssociate}>
          Adicionar novo contato
        </Button>
        <h3>Contatos:</h3>
      </nav>
      <DivContact>
        {associateList.map(({ nome, telefone, email, id }) => (
          <Card
            key={id}
            setModalPut={setModalPut}
            itemToChange={id}
            setItemToChange={setItemToChange}
            nome={nome}
            telefone={telefone}
            email={email}
            id={id}
          />
        ))}
      </DivContact>
    </Container>
  );
};

export default Dashboard;

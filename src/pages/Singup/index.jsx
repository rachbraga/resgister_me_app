import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnimationContainer, Container, Content, DivMenu } from "./style";
import Input from "../../components/inputs";
import Button from "../../components/buttons";
import MenuBar from "../MenuBar";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
const Singup = ({ authenticated }) => {
  const history = useHistory();
  const schema = yup.object().shape({
    nome: yup.string().required("Campo Obrigatório!"),
    email: yup.string().email("Email inválido").required("Campo Obrigatório!"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 digitos")
      .required("Campo Obrigatório!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo Obrigatório!"),
    data_registro: yup.string().required("Campo Obrigatório!"),
    telefone: yup.string().required("Campo Obrigatório!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = ({
    nome,
    email,
    password,
    telefone,
    data_registro,
  }) => {
    const user = {
      nome,
      email,
      password,
      telefone,
      data_registro,
    };

    api
      .post("/registers", user)
      .then((response) => {
        toast.success("Conta criada com sucesso!");
        return history.push("/login");
      })
      .catch((err) => toast.error("Ops!Algo deu errado."));
  };

  return (
    <Container>
      <Content>
        <DivMenu>
          <MenuBar path="/">Voltar</MenuBar>
        </DivMenu>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Crie sua conta</h1>
            <p> Seus contatos mais organizados e na palma da mão.</p>
            <Input
              register={register}
              type="text"
              name="nome"
              label="Nome"
              placeholder="Digite aqui seu nome"
              error={errors.nome?.message}
            />
            <Input
              register={register}
              type="email"
              name="email"
              label="Email"
              placeholder="Digite aqui seu email"
              error={errors.email?.message}
            />
            <Input
              register={register}
              name="password"
              type="password"
              label="Senha"
              placeholder="Crie uma senha forte"
              error={errors.password?.message}
            />
            <Input
              register={register}
              type="password"
              name="passwordConfirm"
              label="Confirmar senha"
              placeholder="Confirme a senha"
              error={errors.passwordConfirm?.message}
            />

            <Input
              register={register}
              type="text"
              name="telefone"
              label="Telefone"
              placeholder="xxxx-xxxx"
              error={errors.telefone?.message}
            />
            <Input
              register={register}
              type="date"
              name="data_registro"
              label="Data de Registro"
              placeholder="Data de hoje"
              error={errors.data_registro?.message}
            />

            <Button type="submit">Cadastrar</Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Singup;

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnimationContainer, Container, Content, DivMenu } from "./styles";
import Input from "../../components/inputs";
import Button from "../../components/buttons";
import MenuBar from "../MenuBar";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import api from "../../services/api";
import { toast } from "react-toastify";

const Login = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo Obrigatório!"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 digitos")
      .required("Campo Obrigatório!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    api
      .post("/login", data)
      .then((response) => {
        toast.success("Logado com sucesso!");
        localStorage.setItem(
          "@resgiterMe:token",
          JSON.stringify(response.data.token)
        );

        localStorage.setItem(
          "@resgiterMe:user",
          JSON.stringify(response.data.registerId)
        );

        setAuthenticated(true);
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Informações incorretas!");
      });
  };

  return (
    <Container>
      <Content>
        <DivMenu>
          <MenuBar path="/">Voltar</MenuBar>
        </DivMenu>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Login</h1>

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
              placeholder="Insira sua senha"
              error={errors.password?.message}
            />
            <Button type="submit">Entrar</Button>
            <p> Ainda não possui uma conta?</p>
            <Button
              onClick={() => handleNavigation("/singup")}
              className="cadastre"
            >
              Cadastre-se
            </Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Login;

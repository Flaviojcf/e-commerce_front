import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ButtonLogin,
  Container,
  ContainerButtonsRegister,
  Form,
  InputContainer,
} from "./styles";
import { api } from "../../services/api";
import { useAuthContext } from "../../hooks/useAuthContext";

const FormValidationSchema = zod.object({
  email: zod.string().email("O Email precisa ser válido"),
  password: zod.string().min(5, "É necessário no mínimo 5 caracteres"),
});

export type LoginFormData = zod.infer<typeof FormValidationSchema>;

export function Login() {
  const { onSubmitLogin, isAuthenticated } = useAuthContext();
  console.log(isAuthenticated);

  const loginUserForm = useForm<LoginFormData>({
    resolver: zodResolver(FormValidationSchema),
  });

  const {
    handleSubmit,
    watch,
    reset,
    register,
    formState: { errors },
  } = loginUserForm;

  const navigate = useNavigate();

  function handleRegister() {
    navigate("/Register");
  }

  async function handleLogin(data: LoginFormData) {
    onSubmitLogin(data.email, data.password);
  }

  return (
    <>
      {!isAuthenticated ? (
        <Container>
          <ToastContainer />
          <Form onSubmit={handleSubmit(handleLogin)}>
            <header>
              <h1>
                <strong>LOGIN:</strong>
              </h1>
            </header>
            <InputContainer>
              <label htmlFor="email">{errors.email?.message} </label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                {...register("email")}
                className={
                  errors.email?.message !== undefined ? "Red" : "Black"
                }
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="password">{errors.password?.message}</label>
              <input
                type="password"
                placeholder="Digite sua senha"
                {...register("password")}
                className={
                  errors.password?.message !== undefined ? "Red" : "Black"
                }
              />
            </InputContainer>

            <ButtonLogin>Entrar</ButtonLogin>
            <p>
              Não tem conta?{" "}
              <strong>
                <u>Registre-se abaixo:</u>
              </strong>
            </p>
            <ContainerButtonsRegister>
              <button type="button" onClick={handleRegister}>
                Criar conta
              </button>
            </ContainerButtonsRegister>
          </Form>
        </Container>
      ) : (
        navigate("/")
      )}
    </>
  );
}

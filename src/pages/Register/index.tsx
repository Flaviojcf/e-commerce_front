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

const FormValidationSchema = zod
  .object({
    name: zod.string().min(1, "Este campo é obrigatório"),
    email: zod.string().email("O Email precisa ser válido"),
    password: zod.string().min(5, "É necessário no mínimo 5 caracteres"),
    confirmPassword: zod.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas são diferentes.",
    path: ["confirmPassword"],
  });

type NewUserFormData = zod.infer<typeof FormValidationSchema>;

export function Register() {
  const { isAuthenticated } = useAuthContext();

  const newUserDataForm = useForm<NewUserFormData>({
    resolver: zodResolver(FormValidationSchema),
  });

  const navigate = useNavigate();

  function handleLogin() {
    navigate("/Login");
  }

  async function handleCreateNewUser(data: NewUserFormData) {
    try {
      await api.post("/createAccount", {
        headers: {
          "Content-Type": "application/json",
        },
        name: data.name,
        email: data.email,
        password: data.password,
      });
      toast.success("Conta cadastrada!", {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
      reset();
    } catch (err) {
      toast.error("E-mail já cadastrado", {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
    }
  }

  const {
    handleSubmit,
    watch,
    reset,
    register,
    formState: { errors },
  } = newUserDataForm;

  return (
    <>
      {!isAuthenticated ? (
        <Container>
          <ToastContainer />
          <Form onSubmit={handleSubmit(handleCreateNewUser)}>
            <header>
              <h1>
                <strong>Criar conta:</strong>
              </h1>
            </header>
            <InputContainer>
              <label htmlFor="name">{errors.name?.message} </label>
              <input
                type="text"
                placeholder="Nome"
                {...register("name")}
                className={errors.name?.message !== undefined ? "Red" : "Black"}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="name">{errors.email?.message} </label>
              <input
                type="email"
                placeholder="E-mail"
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
                placeholder="Senha"
                {...register("password")}
                className={
                  errors.password?.message !== undefined ? "Red" : "Black"
                }
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="confirmPassword">
                {errors.confirmPassword?.message}
              </label>
              <input
                type="password"
                placeholder="Confirmar senha"
                {...register("confirmPassword")}
                className={
                  errors.confirmPassword?.message !== undefined
                    ? "Red"
                    : "Black"
                }
              />
            </InputContainer>
            <ButtonLogin type="submit">Cadastrar</ButtonLogin>
            <p>
              Já possui conta?{" "}
              <strong>
                <u>Faça login clicando abaixo:</u>
              </strong>
            </p>
            <ContainerButtonsRegister>
              <button onClick={handleLogin}>Login</button>
            </ContainerButtonsRegister>
          </Form>
        </Container>
      ) : (
        navigate("/")
      )}
    </>
  );
}

import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface AuthContextProps {
  onSubmitLogin: (email: string, password: string) => Promise<any>;
  isAuthenticated: boolean;
  accountName: string;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

interface onSubmitLoginProps {
  password: string;
  email: string;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthcontextProvider({ children }: AuthContextProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accountName, setAccountName] = useState("") as any;
  const [isLoading, setIsloading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("userName");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setIsAuthenticated(true);
      setAccountName(name);
    }
    setIsloading(false);
  });

  async function onSubmitLogin(email: string, password: string) {
    try {
      const response = await api.post("/authenticateAccount", {
        headers: {
          "Content-Type": "application/json",
        },
        email,
        password,
      });
      const token = response.data.token;
      const name = response.data.name;
    

      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("userName", name);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setIsAuthenticated(true);

      setAccountName(name);

      navigate("/");
    } catch (err) {
      toast.error("Senha inválida", {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
    }
  }

  return (
    <AuthContext.Provider
      value={{ onSubmitLogin, isAuthenticated, accountName }}
    >
      {children}
    </AuthContext.Provider>
  );
}

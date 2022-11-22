import { createContext, ReactNode } from "react";
import { api } from "../api";
import { toast } from "react-toastify";
import { toastError, toastSucess } from "../utils/toast";
import { Navigate, useNavigate } from "react-router-dom";

interface UserProviderProps {
  children: ReactNode;
}

interface ICreateUser {
  username: string;
  email: string;
  password: string;
}

interface IUserContextData {
  createNewUser: (data: ICreateUser) => void;
}

export const UserContext = createContext<IUserContextData>(
  {} as IUserContextData
);

export const UserProvider = ({ children }: UserProviderProps) => {
  const navigate = useNavigate();

  const createNewUser = async (data: ICreateUser) => {
    await api
      .post("/users/", data)
      .then((res) => {
        toastSucess("Cadastro efetuado com sucesso");
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      })
      .catch((err) => {
        toastError("Usuario já cadastrado");
      });
  };

  return (
    <UserContext.Provider value={{ createNewUser }}>
      {children}
    </UserContext.Provider>
  );
};

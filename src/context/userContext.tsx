import { createContext, ReactNode } from "react";
import { api } from "../api";
import { toast } from "react-toastify";
import { toastError, toastSucess } from "../utils/toast";

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
  const createNewUser = async (data: ICreateUser) => {
    await api.post("/users/", data).then((res) => {
      toastSucess("Cadastro efetuado com sucesso");
    }).catch((err)=>{
      toastError("Usuario já cadastrado")
      setTimeout(()=>{

      },5000)
    });
  };

  return (
    <UserContext.Provider value={{ createNewUser }}>
      {children}
    </UserContext.Provider>
  );
};

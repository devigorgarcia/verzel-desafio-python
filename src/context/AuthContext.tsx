import jwt_decode from "jwt-decode";
import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
import { toastSucess } from "../utils/toast";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  login: (data: ILogin) => void;
}

interface ILogin {
  username: string;
  password: string;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();

  const login = async (data: ILogin) => {
    await api.post("/login/", data).then(async (res) => {
      localStorage.setItem("@Verzel:Token", res.data.access);

      let token = res.data.access;

      let decoded: any = jwt_decode(token);

      if (decoded.is_admin) {
        toastSucess("Login efetuado com sucesso");
        setTimeout(() => {
          navigate("/admin/dashboard");
        }, 6500);
      } else {
        setTimeout(() => {
          navigate("/");
        }, 6500);
      }
    });
  };

  return (
    <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
  );
};

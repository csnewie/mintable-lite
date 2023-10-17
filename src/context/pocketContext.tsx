"use client";
import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
  useMemo,
} from "react";
import PocketBase from "pocketbase";
import { useInterval } from "usehooks-ts";
import jwtDecode from "jwt-decode";
import { UsersRecord } from "@/types/database_types";
import { error } from "console";

type Props = {
  children: React.ReactNode;
};

interface JWT {
  name: string;
  exp: number;
}

interface PocketContextType {
  token: any;
  user: any;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (email: string, password: string) => void;
  pb: any;
}

export const PocketContext = React.createContext<PocketContextType | null>(
  null
);

export const PocketProvider = ({ children }: Props) => {
  const BASE_URL = "http://127.0.0.1:8090";

  const pb = useMemo(() => new PocketBase(BASE_URL), []);

  const [token, setToken] = useState(pb.authStore.token);
  const [user, setUser] = useState(pb.authStore.model);

  useEffect(() => {
    return pb.authStore.onChange((token, model) => {
      setToken(token);
      setUser(model);
    });
  }, []);

  const register = useCallback(async (email: string, password: string) => {
    return await pb
      .collection("users")
      .create({ email, password, passwordConfirm: password });
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    return await pb.collection("users").authWithPassword(email, password);
  }, []);

  const logout = useCallback(() => {
    pb.authStore.clear();
  }, []);

  const refreshSession = useCallback(async () => {
    if (!pb.authStore.isValid) return;
    const decoded = jwtDecode<JWT>(token);
    const tokenExpiration = decoded.exp;
    const expirationWithBuffer = (decoded.exp + 60 * 60 * 5) / 1000;
    if (tokenExpiration < expirationWithBuffer) {
      await pb.collection("users").authRefresh();
    }
  }, [token]);

  return (
    <PocketContext.Provider
      value={{ register, login, logout, user, token, pb }}
    >
      {children}
    </PocketContext.Provider>
  );
};

export const usePocketContext = () => {
  const context = useContext(PocketContext);
  if (!context) {
    throw new Error("Use within PocketProvider");
  }
  return context;
};

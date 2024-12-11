// AuthProvider.tsx
import React, { createContext, useContext, useEffect, useReducer } from "react";
import * as SecureStore from "expo-secure-store";

// Объектные интерфейсы
interface Services {
  internet: string;
  tv: string;
  ip: string;
}

interface Cashback {
  percent: number;
  friends: number;
  loyality: number;
  other: number;
}

export interface User {
  username: string;
  password: string;
  phone: string;
  email: string;
  language: string;
  theme: "light" | "dark";
  deviceId: string;
  adress: string;
  status: string;
  tarif: string;
  balance: number;
  credit: boolean;
  services: Services;
  creditDate: number;
  dissableDate: number;
  dateActivation: number;
  cashback: Cashback;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  userToken: string | null;
  hasOnboarded: boolean | null;
}

interface AuthContextType {
  state: AuthState;
  logout: () => Promise<void>;
  login: (username: string, password: string) => Promise<boolean>;
  updateUser: (updatedData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const initialState: AuthState = {
  user: null,
  loading: true,
  userToken: null,
  hasOnboarded: null,
};

// Фейковые данные пользователя
const fakeUser: User = {
  username: "545464",
  password: "1",
  phone: "0000000000",
  email: "test@test.ua",
  language: "uk",
  theme: "light",
  deviceId: "",
  adress: "Кв. 34, вул. Ломоносова 54А...",
  status: "active",
  tarif: "Unlim 1000",
  balance: 230,
  dissableDate: 1733788800000,
  dateActivation: 1696118400000,
  credit: false,
  creditDate: 0,
  cashback: {
    percent: 20,
    friends: 400,
    loyality: 5000,
    other: 200,
  },
  services: {
    internet: "Unlim 1000",
    tv: "omega 60",
    ip: "10.10.10.10",
  },
};

const authReducer = (state: AuthState, action: any): AuthState => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        userToken: action.token,
        loading: false,
        hasOnboarded: true,
      };
    case "LOGOUT":
      return { ...initialState, loading: false };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userToken = await SecureStore.getItemAsync("userToken");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const hasOnboarded = await SecureStore.getItemAsync("hasOnboarded");

        if (userToken) {
          dispatch({
            type: "SET_USER",
            payload: fakeUser,
            token: userToken,
          });
        } else {
          dispatch({ type: "LOGOUT" });
        }
      } catch (error) {
        console.error("Не удалось загрузить данные пользователя", error);
      }
    };

    loadUser();
  }, []);

  const login = async (
    username: string,
    password: string,
  ): Promise<boolean> => {
    if (username === fakeUser.username && password === fakeUser.password) {
      const token = "fake_token";
      await SecureStore.setItemAsync("userToken", token);
      await SecureStore.setItemAsync("hasOnboarded", "true");
      dispatch({
        type: "SET_USER",
        payload: fakeUser,
        token: token,
      });
      return true;
    }
    return false;
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync("userToken");
    dispatch({ type: "LOGOUT" });
  };

  const updateUser = (updatedData: Partial<User>) => {
    const updatedUser = { ...state.user, ...updatedData };
    Object.assign(fakeUser, updatedUser);

    dispatch({
      type: "SET_USER",
      payload: updatedUser,
      token: state.userToken,
    });
  };

  return (
    <AuthContext.Provider value={{ state, logout, login, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth должен использоваться внутри AuthProvider");
  }
  return context;
};

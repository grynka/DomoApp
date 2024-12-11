import { AuthState } from "@/contexts/AuthProvider"; // Убедитесь, что импортируете только нужные типы

const authReducer = (state: AuthState, action: any): AuthState => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        userToken: action.token,
        loading: false,
        hasOnboarded: true, // Добавляем флаг онбординга
      };
    case "LOGOUT":
      return { ...state, user: null, userToken: null, loading: false }; // Обратите внимание, что hasOnboarded не сбрасывается
    default:
      return state;
  }
};

export default authReducer;

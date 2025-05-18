import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useCallback,
} from "react";
import { AuthState, authReducer, initialState } from "./fakeAuthReducer";
import { authActions } from "./fakeAuthActions";
import { User, FAKE_USER } from "../../types";

interface AuthContextType extends Omit<AuthState, "dispatch"> {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = useCallback(async (email: string, password: string) => {
    dispatch(authActions.loginRequest());

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (email === FAKE_USER.email && password === FAKE_USER.password) {
        const { password: _, ...userWithoutPassword } = FAKE_USER;
        dispatch(authActions.loginSuccess(userWithoutPassword));
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      dispatch(
        authActions.loginFailure(
          error instanceof Error ? error.message : "Something went wrong"
        )
      );
    }
  }, []);

  const logout = useCallback(() => {
    dispatch(authActions.logout());
  }, []);

  const value = {
    ...state,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };

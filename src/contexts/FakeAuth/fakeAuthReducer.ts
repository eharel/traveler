import { AuthAction, AuthActionType } from "../../types/actionTypes";
import { User } from "../../types/modelTypes";

export interface AuthState {
  user: Omit<User, "password"> | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

export function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case AuthActionType.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case AuthActionType.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        isLoading: false,
        error: null,
      };

    case AuthActionType.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        isLoading: false,
        error: action.payload,
      };

    case AuthActionType.LOGOUT:
      return initialState;

    default:
      return state;
  }
}

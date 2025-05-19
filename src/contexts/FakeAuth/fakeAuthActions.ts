import { AuthAction, AuthActionType } from "../../types/actionTypes";
import { User } from "../../types/modelTypes";

export const authActions = {
  loginRequest: (): AuthAction => ({
    type: AuthActionType.LOGIN_REQUEST,
  }),

  loginSuccess: (user: Omit<User, "password">): AuthAction => ({
    type: AuthActionType.LOGIN_SUCCESS,
    payload: user,
  }),

  loginFailure: (error: string): AuthAction => ({
    type: AuthActionType.LOGIN_FAILURE,
    payload: error,
  }),

  logout: (): AuthAction => ({
    type: AuthActionType.LOGOUT,
  }),
};

import {AuthStateInterface} from '../types/authState.interface';
import {Action, createReducer, on} from '@ngrx/store';
import {loginAction, loginFailureAction, loginSuccessAction} from './actions/login.action';
import {registerAction, registerFailureAction, registerSuccessAction} from './actions/register.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  isLoggedIn: null,
  errors: null
};

const authReducer = createReducer(
  initialState,
  on(
    loginAction,
    (state): AuthStateInterface => {
      return {
        ...state,
        isSubmitting: true,
        errors: null
      };
    }
  ),
  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => {
      return {
        ...state,
        isSubmitting: false,
        isLoggedIn: true,
        currentUser: action.currentUser,
      };
    }
  ),
  on(
    loginFailureAction,
    (state, action): AuthStateInterface => {
      return {
        ...state,
        isSubmitting: false,
        errors: action.errors
      };
    }
  ),
  on(
    registerAction,
    (state): AuthStateInterface => {
      return {
        ...state,
        isSubmitting: true,
        errors: null
      };
    }
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => {
      return {
        ...state,
        isSubmitting: false,
        isLoggedIn: true,
        currentUser: action.currentUser,
      };
    }
  ),
  on(
    registerFailureAction,
    (state, action): AuthStateInterface => {
      return {
        ...state,
        isSubmitting: false,
        errors: action.errors
      };
    }
  )
);

export function reducers(
  state: AuthStateInterface,
  action: Action
): AuthStateInterface {
  return authReducer(state, action);
}

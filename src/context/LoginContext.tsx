import React, { createContext, Dispatch, useReducer, useContext } from "react";

type LoginState = {
  token: string;
};

type LoginAction = {
  type: "SET_TOKEN";
  token: string;
};

type LoginDispatch = Dispatch<LoginAction>;

const LoginStateContext = createContext<LoginState | null>(null);
const LoginDispatchContext = createContext<LoginDispatch | null>(null);

function LoginReducer(state: LoginState, action: LoginAction): LoginState {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      throw new Error("Unhandled action");
  }
}

export function LoginProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(LoginReducer, {
    token: "",
  });

  return (
    <LoginStateContext.Provider value={state}>
      <LoginDispatchContext.Provider value={dispatch}>
        {children}
      </LoginDispatchContext.Provider>
    </LoginStateContext.Provider>
  );
}

export function useLoginState() {
  const state = useContext(LoginStateContext);
  if (!state) throw new Error("Cannot find SampleProvider"); // 유효하지 않을땐 에러를 발생
  return state;
}

export function useLoginDispatch() {
  const dispatch = useContext(LoginDispatchContext);
  if (!dispatch) throw new Error("Cannot find SampleProvider"); // 유효하지 않을땐 에러를 발생
  return dispatch;
}

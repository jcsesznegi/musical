import { useReducer, useCallback, useRef } from "react";

export type Action = { type: string };
export type Dispatch<A> = (action: A | ThunkAction<A>) => void;
export type ThunkAction<A> = (
  dispatch: Dispatch<A>,
  getState: () => any,
) => void;

export function useThunkReducer<S, A extends Action>(
  reducer: (state: S, action: A) => S,
  initialState: S,
): [S, Dispatch<A>] {
  const [state, dispatch] = useReducer(reducer, initialState);

  const stateRef = useRef(state);
  stateRef.current = state;

  const getState = useCallback(() => stateRef.current, []);

  const thunkDispatch = useCallback((action: A | ThunkAction<A>) => {
    if (typeof action === "function") {
      action(thunkDispatch, getState);
    } else {
      dispatch(action);
    }
  }, []);

  return [state, thunkDispatch];
}

import * as types from "./constants/actionTypes";
import { getInitialState, getNextBuildableCards } from "./helpers/index";

type State = {
  redealsRemaining: number;
  stock: number[];
  wastepile: number[];
  indicators: number[];
  tableauColumn1: number[];
  tableauColumn2: number[];
  tableauColumn3: number[];
  tableauColumn4: number[];
};

export type Action =
  | { type: typeof types.INIT_GAME }
  | { type: typeof types.MOVE_CARD_TO_WASTEPILE; cardNumber: number }
  | {
      type: typeof types.CHECK_AND_MOVE_CARD_TO_TABLEAU_COLUMN;
      cardNumber: number;
      tableauColumnNumber: number;
    };

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case types.INIT_GAME: {
      return getInitialState();
    }
    case types.MOVE_CARD_TO_WASTEPILE: {
      return {
        ...state,
        stock: [...state.stock].filter(
          (cardNumber) => cardNumber !== action.cardNumber,
        ),
        wastepile: [...state.wastepile, action.cardNumber],
      };
    }
    case types.CHECK_AND_MOVE_CARD_TO_TABLEAU_COLUMN: {
      const tableauColumnKey =
        `tableauColumn${action.tableauColumnNumber}` as keyof State;

      const targetColumn = state[tableauColumnKey];
      if (!Array.isArray(targetColumn)) return state;

      const nextBuildableCards = getNextBuildableCards(
        state.stock,
        action.tableauColumnNumber,
        [...targetColumn],
      );

      if (nextBuildableCards.includes(action.cardNumber)) {
        return {
          ...state,
          stock: [...state.stock].filter(
            (cardNumber) => cardNumber !== action.cardNumber,
          ),
          [tableauColumnKey]: [...targetColumn, action.cardNumber],
        };
      }

      return state;
    }
  }
}

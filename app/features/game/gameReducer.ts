import * as types from "./constants/actionTypes";
import { initGame } from "./helpers/index";
import { shuffleArray } from "../../utils/index";

type State = {
  result: "win" | "lose" | null;
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
  | { type: typeof types.MOVE_CARD_FROM_STOCK_TO_WASTEPILE; cardNumber: number }
  | {
      type: typeof types.MOVE_CARD_TO_TABLEAU_COLUMN;
      cardNumber: number;
      cardOriginKey: "stock" | "wastepile";
      tableauColumnKey: string;
    }
  | { type: typeof types.REDEAL }
  | { type: typeof types.SET_RESULT; result: "win" | "lose" };

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case types.INIT_GAME: {
      return initGame();
    }
    case types.MOVE_CARD_FROM_STOCK_TO_WASTEPILE: {
      return {
        ...state,
        stock: [...state.stock].filter(
          (cardNumber) => cardNumber !== action.cardNumber,
        ),
        wastepile: [...state.wastepile, action.cardNumber],
      };
    }
    case types.MOVE_CARD_TO_TABLEAU_COLUMN: {
      const origin = state[action.cardOriginKey as keyof State];
      const targetColumn = state[action.tableauColumnKey as keyof State];
      if (!Array.isArray(origin) || !Array.isArray(targetColumn)) return state;

      return {
        ...state,
        [action.cardOriginKey]: filterCardFromCardList(
          [...origin],
          action.cardNumber,
        ),
        [action.tableauColumnKey]: [...targetColumn, action.cardNumber],
      };
    }
    case types.REDEAL: {
      return {
        ...state,
        redealsRemaining: state.redealsRemaining - 1,
        stock: shuffleArray([...state.wastepile]),
        wastepile: [],
      };
    }
    case types.SET_RESULT: {
      return {
        ...state,
        result: action.result,
      };
    }
    default: {
      return state;
    }
  }
}

function filterCardFromCardList(cardList: number[], cardNumber: number) {
  return cardList.filter(
    (currentCardNumber) => currentCardNumber !== cardNumber,
  );
}

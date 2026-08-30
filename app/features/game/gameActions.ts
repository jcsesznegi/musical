import * as types from "./constants/actionTypes";
import { type Action } from "./gameReducer";

export function initGame(): Action {
  return { type: types.INIT_GAME };
}

export function moveCardToWastepile(cardNumber: number): Action {
  return { type: types.MOVE_CARD_TO_WASTEPILE, cardNumber };
}

export function checkAndMoveCardToTableauColumn(
  cardNumber: number,
  tableauColumnNumber: number,
): Action {
  return {
    type: types.CHECK_AND_MOVE_CARD_TO_TABLEAU_COLUMN,
    cardNumber,
    tableauColumnNumber,
  };
}

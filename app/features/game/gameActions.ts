import * as types from "./constants/actionTypes";
import { type Action } from "./gameReducer";
import { type ThunkAction } from "../../hooks/useThunkReducer";
import {
  getNextBuildableCards,
  isTableauColumnComplete,
} from "./helpers/index";

export function initGame(): Action {
  return { type: types.INIT_GAME };
}

function redeal(): Action {
  return { type: types.REDEAL };
}

function setResult(result: "win" | "lose"): Action {
  return { type: types.SET_RESULT, result };
}

function checkEndConditions(): ThunkAction<Action> {
  return (dispatch, getState) => {
    const state = getState();
    const tableauColumn1 = state.tableauColumn1;
    const tableauColumn2 = state.tableauColumn2;
    const tableauColumn3 = state.tableauColumn3;
    const tableauColumn4 = state.tableauColumn4;

    if (
      isTableauColumnComplete(tableauColumn1, 1) &&
      isTableauColumnComplete(tableauColumn2, 2) &&
      isTableauColumnComplete(tableauColumn3, 3) &&
      isTableauColumnComplete(tableauColumn4, 4)
    ) {
      return dispatch(setResult("win"));
    }

    const stock = state.stock;
    const redealsRemaining = state.redealsRemaining;

    if (stock.length === 0) {
      if (redealsRemaining > 0) {
        return dispatch(redeal());
      }
      return dispatch(setResult("lose"));
    }

    return Promise.resolve();
  };
}

export function moveCardFromStockToWastepile(
  cardNumber: number,
): ThunkAction<Action> {
  return async (dispatch, getState) => {
    await dispatch({
      type: types.MOVE_CARD_FROM_STOCK_TO_WASTEPILE,
      cardNumber,
    });

    return dispatch(checkEndConditions());
  };
}

export function checkAndMoveCardToTableauColumn(
  cardNumber: number,
  cardOriginKey: "stock" | "wastepile",
  tableauColumnNumber: number,
): ThunkAction<Action> {
  return async (dispatch, getState) => {
    const state = getState();
    const tableauColumnKey = `tableauColumn${tableauColumnNumber}`;
    const targetColumn = state[tableauColumnKey];
    const nextBuildableCards = getNextBuildableCards(
      [...targetColumn],
      tableauColumnNumber,
    );

    if (!nextBuildableCards.includes(cardNumber)) {
      return Promise.reject();
    }

    await dispatch({
      type: types.MOVE_CARD_TO_TABLEAU_COLUMN,
      cardNumber,
      cardOriginKey,
      tableauColumnKey,
    });

    return dispatch(checkEndConditions());
  };
}

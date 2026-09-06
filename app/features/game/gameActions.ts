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

export function moveCardToWastepile(cardNumber: number): Action {
  return { type: types.MOVE_CARD_TO_WASTEPILE, cardNumber };
}

function checkForWin(): ThunkAction<Action> {
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
      alert("You Win!");
    }
  };
}

export function checkAndMoveCardToTableauColumn(
  cardNumber: number,
  tableauColumnNumber: number,
): ThunkAction<Action> {
  return (dispatch, getState) => {
    const state = getState();
    const tableauColumnKey = `tableauColumn${tableauColumnNumber}`;
    const targetColumn = state[tableauColumnKey];
    const nextBuildableCards = getNextBuildableCards(
      state.stock,
      [...targetColumn],
      tableauColumnNumber,
    );

    if (!nextBuildableCards.includes(cardNumber)) {
      return Promise.reject();
    }

    dispatch({
      type: types.MOVE_CARD_TO_TABLEAU_COLUMN,
      cardNumber,
      tableauColumnKey,
    });

    dispatch(checkForWin());
  };
}

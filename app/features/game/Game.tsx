import { useEffect, useState, useRef, type MouseEvent } from "react";
import { reducer } from "./gameReducer";
import { useThunkReducer } from "../../hooks/useThunkReducer";
import {
  initGame,
  moveCardToWastepile,
  checkAndMoveCardToTableauColumn,
} from "./gameActions";
import { doesCardIntersectElement } from "./helpers/index";
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { StockContainer } from "./components/StockContainer";
import { Stock } from "./components/Stock";
import { Wastepile } from "./components/Wastepile";
import { Indicators } from "./components/Indicators";
import { Tableau } from "./components/Tableau";
import { TableauColumn } from "./components/TableauColumn";
import { MovingCard } from "./components/MovingCard";

const initialState = {
  redealsRemaining: 2,
  stock: [],
  wastepile: [],
  indicators: [],
  tableauColumn1: [],
  tableauColumn2: [],
  tableauColumn3: [],
  tableauColumn4: [],
};

export function Game() {
  const [state, dispatch] = useThunkReducer(reducer, initialState);
  const [movingCardNumber, setMovingCardNumber] = useState<number | null>(null);
  const [movingCardCoordinates, setMovingCardCoordinates] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const movingCardRef = useRef<HTMLDivElement | null>(null);
  const wastepileRef = useRef<HTMLDivElement | null>(null);
  const tableauColumn1Ref = useRef<HTMLDivElement | null>(null);
  const tableauColumn2Ref = useRef<HTMLDivElement | null>(null);
  const tableauColumn3Ref = useRef<HTMLDivElement | null>(null);
  const tableauColumn4Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => dispatch(initGame()), []);

  const handleResetBtnClick = () => {
    dispatch(initGame());
  };

  const handleCardMouseDown = (cardNumber: number) => {
    setMovingCardNumber(cardNumber);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setMovingCardCoordinates({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    const movingCard = movingCardRef.current;
    const wastepile = wastepileRef.current;
    const tableauColumn1 = tableauColumn1Ref.current;
    const tableauColumn2 = tableauColumn2Ref.current;
    const tableauColumn3 = tableauColumn3Ref.current;
    const tableauColumn4 = tableauColumn4Ref.current;

    if (movingCard && movingCardNumber) {
      switch (true) {
        case doesCardIntersectElement(movingCard, wastepile):
          dispatch(moveCardToWastepile(movingCardNumber));
          break;
        case doesCardIntersectElement(movingCard, tableauColumn1):
          dispatch(checkAndMoveCardToTableauColumn(movingCardNumber, 1));
          break;
        case doesCardIntersectElement(movingCard, tableauColumn2):
          dispatch(checkAndMoveCardToTableauColumn(movingCardNumber, 2));
          break;
        case doesCardIntersectElement(movingCard, tableauColumn3):
          dispatch(checkAndMoveCardToTableauColumn(movingCardNumber, 3));
          break;
        case doesCardIntersectElement(movingCard, tableauColumn4):
          dispatch(checkAndMoveCardToTableauColumn(movingCardNumber, 4));
          break;
        default:
          break;
      }
    }

    setMovingCardNumber(null);
  };

  const movingCard = movingCardNumber && (
    <MovingCard
      cardNumber={movingCardNumber}
      coordinates={movingCardCoordinates}
      ref={movingCardRef}
    />
  );

  return (
    <main>
      <Layout onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
        {movingCard}
        <Header title="Musical" onResetBtnClick={handleResetBtnClick} />
        <StockContainer>
          <Stock
            stock={state.stock}
            movingCardNumber={movingCardNumber}
            onCardMouseDown={handleCardMouseDown}
          />
          <Wastepile wastepile={state.wastepile} ref={wastepileRef} />
        </StockContainer>
        <Indicators indicators={state.indicators} />
        <Tableau>
          <TableauColumn
            tableauColumn={state.tableauColumn1}
            ref={tableauColumn1Ref}
          />
          <TableauColumn
            tableauColumn={state.tableauColumn2}
            ref={tableauColumn2Ref}
          />
          <TableauColumn
            tableauColumn={state.tableauColumn3}
            ref={tableauColumn3Ref}
          />
          <TableauColumn
            tableauColumn={state.tableauColumn4}
            ref={tableauColumn4Ref}
          />
        </Tableau>
      </Layout>
    </main>
  );
}

import { CARD_NUMBERS } from "../constants/cards";
import { INITIAL_REDEAL_COUNT } from "../constants/game";
import { shuffleArray, getCardValue } from "../../../utils/index";

export function getInitialState() {
  const redealsRemaining = INITIAL_REDEAL_COUNT;
  const stock: number[] = shuffleArray(CARD_NUMBERS);
  const wastepile: number[] = [];

  const indicator1Index = stock.findIndex((id) => id % 13 === 1);
  const indicator1Array = stock.splice(indicator1Index, 1);

  const indicator2Index = stock.findIndex((id) => id % 13 === 2);
  const indicator2Array = stock.splice(indicator2Index, 1);

  const indicator3Index = stock.findIndex((id) => id % 13 === 3);
  const indicator3Array = stock.splice(indicator3Index, 1);

  const indicator4Index = stock.findIndex((id) => id % 13 === 4);
  const indicator4Array = stock.splice(indicator4Index, 1);

  const indicators: number[] = [
    ...indicator1Array,
    ...indicator2Array,
    ...indicator3Array,
    ...indicator4Array,
  ];

  const base1Index = stock.findIndex((id) => id % 13 === 2);
  const tableauColumn1 = stock.splice(base1Index, 1);

  const base2Index = stock.findIndex((id) => id % 13 === 4);
  const tableauColumn2 = stock.splice(base2Index, 1);

  const base3Index = stock.findIndex((id) => id % 13 === 6);
  const tableauColumn3 = stock.splice(base3Index, 1);

  const base4Index = stock.findIndex((id) => id % 13 === 8);
  const tableauColumn4 = stock.splice(base4Index, 1);

  return {
    redealsRemaining,
    stock,
    wastepile,
    indicators,
    tableauColumn1,
    tableauColumn2,
    tableauColumn3,
    tableauColumn4,
  };
}

export function doesCardIntersectElement(
  card: HTMLDivElement | null,
  element: HTMLElement | null,
) {
  if (card === null || element === null) return false;

  const cardRect = card.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  return !(
    cardRect.right < elementRect.left ||
    cardRect.left > elementRect.right ||
    cardRect.bottom < elementRect.top ||
    cardRect.top > elementRect.bottom
  );
}

export function getNextBuildableCards(
  stock: number[],
  currentCards: number[],
  interval: number,
) {
  const lastCardValue = getCardValue(currentCards[currentCards.length - 1]);
  const nextCardValue = lastCardValue + interval;

  return stock.filter((currentCardNumber) => {
    const currentCardValue = getCardValue(currentCardNumber);

    return currentCardValue === nextCardValue;
  });
}

export function isTableauColumnComplete(cards: number[], interval: number) {
  const expectedCardValues = Array.from(
    { length: 13 },
    (_, index) => index + interval,
  );

  return expectedCardValues.every((expectedCardValue, index) => {
    const cardNumber = cards[index];
    const cardValue = getCardValue(cardNumber);

    return cards[index] === expectedCardValue;
  });
}

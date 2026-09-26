import { type MouseEvent, useState, useEffect, useRef } from "react";
import { Card } from "./Card";
import styles from "./Stock.module.css";

type Props = {
  stock: number[];
  movingCardNumber: number | null;
  onCardMouseDown: (e: MouseEvent<HTMLDivElement>, cardNumber: number) => void;
};

export function Stock({ stock, movingCardNumber, onCardMouseDown }: Props) {
  const [isLastCardFlipped, setIsLastCardFlipped] = useState<boolean>(false);
  const lastCardInnerRef = useRef<HTMLDivElement | null>(null);
  const lastCardInnerEl = lastCardInnerRef.current;

  const handleTransitionEnd = (event: TransitionEvent) => {
    if (event.propertyName === "transform") {
      setIsLastCardFlipped(true);
    }
  };

  useEffect(() => {
    if (lastCardInnerEl) {
      lastCardInnerEl.addEventListener("transitionend", handleTransitionEnd);

      return () => {
        lastCardInnerEl.removeEventListener(
          "transitionend",
          handleTransitionEnd,
        );
      };
    }
  }, [lastCardInnerEl]);

  useEffect(() => {
    setIsLastCardFlipped(false);
  }, [stock.length]);

  const cards = stock.map((cardNumber, index) => {
    const isLastCard = index === stock.length - 1;
    const isHidden = cardNumber === movingCardNumber;
    const isFaceDown = !isLastCard || !isLastCardFlipped;
    const isFlipping = isLastCard && !isLastCardFlipped;
    const onMouseDown = isLastCard ? onCardMouseDown : undefined;

    return (
      <li key={cardNumber} className={styles.cardItem}>
        <Card
          cardNumber={cardNumber}
          isHidden={isHidden}
          isFaceDown={isFaceDown}
          isFlipping={isFlipping}
          onMouseDown={onMouseDown}
          cardInnerRef={lastCardInnerRef}
        />
      </li>
    );
  });
  const cardList = cards ? <ul className={styles.cardList}>{cards}</ul> : null;

  return <div className={styles.stock}>{cardList}</div>;
}

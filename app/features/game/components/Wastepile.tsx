import { type MouseEvent } from "react";
import { type RefObject } from "react";
import { Card } from "./Card";
import styles from "./Wastepile.module.css";

type Props = {
  wastepile: number[];
  ref: RefObject<HTMLDivElement | null>;
  movingCardNumber: number | null;
  onCardMouseDown: (e: MouseEvent<HTMLDivElement>, cardNumber: number) => void;
};

export function Wastepile({
  wastepile,
  ref,
  movingCardNumber,
  onCardMouseDown,
}: Props) {
  const cards = wastepile.map((cardNumber, index) => {
    const isHidden = cardNumber === movingCardNumber;
    const onMouseDown =
      index === wastepile.length - 1 ? onCardMouseDown : undefined;

    return (
      <li key={cardNumber} className={styles.cardItem}>
        <Card
          cardNumber={cardNumber}
          isHidden={isHidden}
          onMouseDown={onMouseDown}
        />
      </li>
    );
  });
  const cardList = cards ? <ul className={styles.cardList}>{cards}</ul> : null;

  return (
    <div className={styles.wastepile} ref={ref}>
      {cardList}
    </div>
  );
}

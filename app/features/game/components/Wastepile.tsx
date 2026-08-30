import { type RefObject } from "react";
import { Card } from "./Card";
import styles from "./Wastepile.module.css";

type Props = {
  wastepile: number[];
  ref: RefObject<HTMLDivElement | null>;
};

export function Wastepile({ wastepile, ref }: Props) {
  const cards = wastepile.map((cardNumber) => {
    return (
      <li key={cardNumber} className={styles.cardItem}>
        <Card cardNumber={cardNumber} />
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

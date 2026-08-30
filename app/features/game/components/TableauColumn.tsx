import { type RefObject } from "react";
import { Card } from "./Card";
import styles from "./TableauColumn.module.css";

type Props = {
  tableauColumn: number[];
  ref: RefObject<HTMLDivElement | null>;
};

export function TableauColumn({ tableauColumn, ref }: Props) {
  const cards = tableauColumn.map((cardNumber) => {
    return (
      <li key={cardNumber} className={styles.cardItem}>
        <Card cardNumber={cardNumber} />
      </li>
    );
  });
  const cardList = cards ? <ul className={styles.cardList}>{cards}</ul> : null;

  return (
    <div className={styles.tableauColumn} ref={ref}>
      {cardList}
    </div>
  );
}

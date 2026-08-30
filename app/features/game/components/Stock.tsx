import { Card } from "./Card";
import styles from "./Stock.module.css";

type Props = {
  stock: number[];
  movingCardNumber: number | null;
  onCardMouseDown: (cardNumber: number) => void;
};

export function Stock({ stock, movingCardNumber, onCardMouseDown }: Props) {
  const cards = stock.map((cardNumber) => {
    const isHidden = cardNumber === movingCardNumber;

    return (
      <li key={cardNumber} className={styles.cardItem}>
        <Card
          cardNumber={cardNumber}
          isHidden={isHidden}
          onMouseDown={onCardMouseDown}
        />
      </li>
    );
  });
  const cardList = cards ? <ul className={styles.cardList}>{cards}</ul> : null;

  return <div className={styles.stock}>{cardList}</div>;
}

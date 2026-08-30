import { Card } from "./Card";
import styles from "./Indicators.module.css";

type Props = {
  indicators: number[];
};

export function Indicators({ indicators }: Props) {
  const cards = indicators.map((cardNumber) => {
    return (
      <li key={cardNumber}>
        <Card cardNumber={cardNumber} />
      </li>
    );
  });
  const cardList = cards ? <ul className={styles.cardList}>{cards}</ul> : null;

  return <div className={styles.indicators}>{cardList}</div>;
}

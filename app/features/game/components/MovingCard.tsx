import { type RefObject } from "react";
import { Card } from "./Card";

import styles from "./MovingCard.module.css";

type Props = {
  cardNumber: number;
  coordinates: { x: number; y: number };
  offset: { x: number; y: number };
  ref: RefObject<HTMLDivElement | null>;
};

export function MovingCard({ cardNumber, coordinates, offset, ref }: Props) {
  return (
    <div
      className={styles.movingCard}
      style={{ left: coordinates.x - offset.x, top: coordinates.y - offset.y }}
      ref={ref}
    >
      <Card cardNumber={cardNumber} />
    </div>
  );
}

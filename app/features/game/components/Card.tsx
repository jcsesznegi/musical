import { type MouseEvent, type RefObject } from "react";
import { clsx } from "../../../utils/index";
import { CardFace } from "./CardFace";
import { CardBack } from "./CardBack";
import styles from "./Card.module.css";

type Props = {
  cardNumber: number;
  isHidden?: boolean;
  isFaceDown?: boolean;
  isFlipping?: boolean;
  cardInnerRef: RefObject<HTMLDivElement | null>;
  onMouseDown?: (e: MouseEvent<HTMLDivElement>, cardNumber: number) => void;
};

export function Card({
  cardNumber,
  isHidden = false,
  isFaceDown = false,
  isFlipping = false,
  cardInnerRef,
  onMouseDown = () => {},
}: Props) {
  const cardCls = clsx(
    styles.card,
    isHidden && styles.hidden,
    isFlipping && styles.flipping,
  );

  let cardFront = <CardFace cardNumber={cardNumber} />;
  let cardBack = <CardBack />;

  if (isFaceDown) {
    cardFront = <CardBack />;
    cardBack = <CardFace cardNumber={cardNumber} />;
  }

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    onMouseDown(e, cardNumber);
  };

  return (
    <div className={cardCls} draggable="false" onMouseDown={handleMouseDown}>
      <div className={styles.cardInner} ref={cardInnerRef}>
        <div className={styles.cardFront}>{cardFront}</div>
        <div className={styles.cardBack}>{cardBack}</div>
      </div>
    </div>
  );
}

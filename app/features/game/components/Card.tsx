import { clsx } from "../../../utils/index";
import { CardFace } from "./CardFace";
import styles from "./Card.module.css";

type Props = {
  cardNumber: number;
  isHidden?: boolean;
  onMouseDown?: (cardNumber: number) => void;
};

export function Card({ cardNumber, isHidden, onMouseDown }: Props) {
  const cardCls = clsx(styles.card, isHidden && styles.hidden);

  const handleMouseDown = () => {
    if (onMouseDown) {
      onMouseDown(cardNumber);
    }
  };

  return (
    <div className={cardCls} onMouseDown={handleMouseDown}>
      <CardFace cardNumber={cardNumber} />
    </div>
  );
}

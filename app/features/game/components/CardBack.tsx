import Back from "../../../assets/cards/back.svg";

import styles from "./CardBack.module.css";

export function CardBack() {
  return <img draggable="false" className={styles.image} src={Back} />;
}

import Face1 from "../../../assets/cards/1.svg";
import Face2 from "../../../assets/cards/2.svg";
import Face3 from "../../../assets/cards/3.svg";
import Face4 from "../../../assets/cards/4.svg";
import Face5 from "../../../assets/cards/5.svg";
import Face6 from "../../../assets/cards/6.svg";
import Face7 from "../../../assets/cards/7.svg";
import Face8 from "../../../assets/cards/8.svg";
import Face9 from "../../../assets/cards/9.svg";
import Face10 from "../../../assets/cards/10.svg";
import Face11 from "../../../assets/cards/11.svg";
import Face12 from "../../../assets/cards/12.svg";
import Face13 from "../../../assets/cards/13.svg";
import Face14 from "../../../assets/cards/14.svg";
import Face15 from "../../../assets/cards/15.svg";
import Face16 from "../../../assets/cards/16.svg";
import Face17 from "../../../assets/cards/17.svg";
import Face18 from "../../../assets/cards/18.svg";
import Face19 from "../../../assets/cards/19.svg";
import Face20 from "../../../assets/cards/20.svg";
import Face21 from "../../../assets/cards/21.svg";
import Face22 from "../../../assets/cards/22.svg";
import Face23 from "../../../assets/cards/23.svg";
import Face24 from "../../../assets/cards/24.svg";
import Face25 from "../../../assets/cards/25.svg";
import Face26 from "../../../assets/cards/26.svg";
import Face27 from "../../../assets/cards/27.svg";
import Face28 from "../../../assets/cards/28.svg";
import Face29 from "../../../assets/cards/29.svg";
import Face30 from "../../../assets/cards/30.svg";
import Face31 from "../../../assets/cards/31.svg";
import Face32 from "../../../assets/cards/32.svg";
import Face33 from "../../../assets/cards/33.svg";
import Face34 from "../../../assets/cards/34.svg";
import Face35 from "../../../assets/cards/35.svg";
import Face36 from "../../../assets/cards/36.svg";
import Face37 from "../../../assets/cards/37.svg";
import Face38 from "../../../assets/cards/38.svg";
import Face39 from "../../../assets/cards/39.svg";
import Face40 from "../../../assets/cards/40.svg";
import Face41 from "../../../assets/cards/41.svg";
import Face42 from "../../../assets/cards/42.svg";
import Face43 from "../../../assets/cards/43.svg";
import Face44 from "../../../assets/cards/44.svg";
import Face45 from "../../../assets/cards/45.svg";
import Face46 from "../../../assets/cards/46.svg";
import Face47 from "../../../assets/cards/47.svg";
import Face48 from "../../../assets/cards/48.svg";
import Face49 from "../../../assets/cards/49.svg";
import Face50 from "../../../assets/cards/50.svg";
import Face51 from "../../../assets/cards/51.svg";
import Face52 from "../../../assets/cards/52.svg";

import styles from "./CardFace.module.css";

type Props = {
  cardNumber: number;
};

export function CardFace({ cardNumber }: Props) {
  return getCardFace(cardNumber);
}

function getCardFace(cardNumber: number) {
  switch (cardNumber) {
    case 1:
      return <img draggable="false" className={styles.image} src={Face1} />;
    case 2:
      return <img draggable="false" className={styles.image} src={Face2} />;
    case 3:
      return <img draggable="false" className={styles.image} src={Face3} />;
    case 4:
      return <img draggable="false" className={styles.image} src={Face4} />;
    case 5:
      return <img draggable="false" className={styles.image} src={Face5} />;
    case 6:
      return <img draggable="false" className={styles.image} src={Face6} />;
    case 7:
      return <img draggable="false" className={styles.image} src={Face7} />;
    case 8:
      return <img draggable="false" className={styles.image} src={Face8} />;
    case 9:
      return <img draggable="false" className={styles.image} src={Face9} />;
    case 10:
      return <img draggable="false" className={styles.image} src={Face10} />;
    case 11:
      return <img draggable="false" className={styles.image} src={Face11} />;
    case 12:
      return <img draggable="false" className={styles.image} src={Face12} />;
    case 13:
      return <img draggable="false" className={styles.image} src={Face13} />;
    case 14:
      return <img draggable="false" className={styles.image} src={Face14} />;
    case 15:
      return <img draggable="false" className={styles.image} src={Face15} />;
    case 16:
      return <img draggable="false" className={styles.image} src={Face16} />;
    case 17:
      return <img draggable="false" className={styles.image} src={Face17} />;
    case 18:
      return <img draggable="false" className={styles.image} src={Face18} />;
    case 19:
      return <img draggable="false" className={styles.image} src={Face19} />;
    case 20:
      return <img draggable="false" className={styles.image} src={Face20} />;
    case 21:
      return <img draggable="false" className={styles.image} src={Face21} />;
    case 22:
      return <img draggable="false" className={styles.image} src={Face22} />;
    case 23:
      return <img draggable="false" className={styles.image} src={Face23} />;
    case 24:
      return <img draggable="false" className={styles.image} src={Face24} />;
    case 25:
      return <img draggable="false" className={styles.image} src={Face25} />;
    case 26:
      return <img draggable="false" className={styles.image} src={Face26} />;
    case 27:
      return <img draggable="false" className={styles.image} src={Face27} />;
    case 28:
      return <img draggable="false" className={styles.image} src={Face28} />;
    case 29:
      return <img draggable="false" className={styles.image} src={Face29} />;
    case 30:
      return <img draggable="false" className={styles.image} src={Face30} />;
    case 31:
      return <img draggable="false" className={styles.image} src={Face31} />;
    case 32:
      return <img draggable="false" className={styles.image} src={Face32} />;
    case 33:
      return <img draggable="false" className={styles.image} src={Face33} />;
    case 34:
      return <img draggable="false" className={styles.image} src={Face34} />;
    case 35:
      return <img draggable="false" className={styles.image} src={Face35} />;
    case 36:
      return <img draggable="false" className={styles.image} src={Face36} />;
    case 37:
      return <img draggable="false" className={styles.image} src={Face37} />;
    case 38:
      return <img draggable="false" className={styles.image} src={Face38} />;
    case 39:
      return <img draggable="false" className={styles.image} src={Face39} />;
    case 40:
      return <img draggable="false" className={styles.image} src={Face40} />;
    case 41:
      return <img draggable="false" className={styles.image} src={Face41} />;
    case 42:
      return <img draggable="false" className={styles.image} src={Face42} />;
    case 43:
      return <img draggable="false" className={styles.image} src={Face43} />;
    case 44:
      return <img draggable="false" className={styles.image} src={Face44} />;
    case 45:
      return <img draggable="false" className={styles.image} src={Face45} />;
    case 46:
      return <img draggable="false" className={styles.image} src={Face46} />;
    case 47:
      return <img draggable="false" className={styles.image} src={Face47} />;
    case 48:
      return <img draggable="false" className={styles.image} src={Face48} />;
    case 49:
      return <img draggable="false" className={styles.image} src={Face49} />;
    case 50:
      return <img draggable="false" className={styles.image} src={Face50} />;
    case 51:
      return <img draggable="false" className={styles.image} src={Face51} />;
    case 52:
      return <img draggable="false" className={styles.image} src={Face52} />;
    default:
      return null;
  }
}

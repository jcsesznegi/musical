import { type AlertState } from "../context/UIContext";
import { Button } from "./Button";

import styles from "./Alert.module.css";

type Props = {
  alert: AlertState | null;
  close: () => void;
};

export function Alert({ alert, close }: Props) {
  if (!alert) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.alert}>
        <p>{alert.message}</p>
        <div className={styles.footer}>
          <Button onClick={close}>OK</Button>
        </div>
      </div>
    </div>
  );
}

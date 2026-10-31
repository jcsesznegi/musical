import { type DialogState } from "../context/UIContext";
import { Button } from "./Button";

import styles from "./Dialog.module.css";

type Props = {
  dialog: DialogState | null;
  close: () => void;
};

export function Dialog({ dialog, close }: Props) {
  if (!dialog) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        <div>
          <h3>{dialog.title}</h3>
          <p>{dialog.content}</p>
        </div>
        <div className={styles.footer}>
          <Button
            onClick={() => {
              dialog.onConfirm();
              close();
            }}
          >
            Confirm
          </Button>
          <Button onClick={close}>Cancel</Button>
        </div>
      </div>
    </div>
  );
}

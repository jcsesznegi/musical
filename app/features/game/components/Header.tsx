import { useUI } from "../../../context/UIContext";
import { Button } from "../../../components/Button";
import styles from "./Header.module.css";

type Props = {
  title: string;
  redealsRemaining: number;
  onResetButtonClick: () => void;
};

export function Header({ title, redealsRemaining, onResetButtonClick }: Props) {
  const { showDialog } = useUI();

  const handleResetButtonClick = () => {
    showDialog("", "Are you sure you want to restart the game?", () => {
      onResetButtonClick();
    });
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>{title}</h1>
      <p className={styles.redealsRemaining}>
        Redeals remaining: {redealsRemaining}
      </p>
      <Button onClick={handleResetButtonClick}>Reset</Button>
    </header>
  );
}

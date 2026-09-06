import styles from "./Header.module.css";

type Props = {
  title: string;
  onResetBtnClick: () => void;
};

export function Header({ title, onResetBtnClick }: Props) {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>{title}</h1>
      <button type="button" onClick={onResetBtnClick}>
        Reset
      </button>
    </header>
  );
}

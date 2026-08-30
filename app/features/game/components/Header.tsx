import styles from './Header.module.css';

type Props = {
  onResetBtnClick: () => void;
};

export function Header({ onResetBtnClick }: Props) {
  return (
    <div className={styles.header}>
      <button type="button" onClick={onResetBtnClick}>Reset</button>
    </div>
  );
}

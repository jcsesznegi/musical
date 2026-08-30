import { type ReactNode } from 'react';
import styles from './StockContainer.module.css';

type Props = {
  children: ReactNode;
};

export function StockContainer({ children }: Props) {
  return <div className={styles.stockContainer}>{children}</div>;
}

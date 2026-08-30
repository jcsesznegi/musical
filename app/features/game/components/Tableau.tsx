import { type ReactNode } from 'react';
import styles from './Tableau.module.css';

type Props = {
  children: ReactNode;
};

export function Tableau({ children }: Props) {
  return <div className={styles.tableau}>{children}</div>;
}

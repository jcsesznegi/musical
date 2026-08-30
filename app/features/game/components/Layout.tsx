import { type ReactNode, type MouseEvent } from "react";
import styles from "./Layout.module.css";

type Props = {
  children: ReactNode;
  onMouseUp: () => void;
  onMouseMove: (e: MouseEvent<HTMLDivElement>) => void;
};

export function Layout({ children, onMouseUp, onMouseMove }: Props) {
  return (
    <div
      className={styles.layout}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {children}
    </div>
  );
}

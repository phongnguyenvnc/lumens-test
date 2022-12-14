import React from 'react';
import styles from './styles.module.scss'

interface ProgressBarProps {
  percent: number;
}
export default function ProgressBar({ percent }: ProgressBarProps) {
  return (
    <div className={styles.progressBar}>
      <div className={styles.emptyBar}>
        <div
          className={styles.fillingBar}
          style={{ left: percent - 100 + '%' }}
        />
      </div>
    </div>
  );
}

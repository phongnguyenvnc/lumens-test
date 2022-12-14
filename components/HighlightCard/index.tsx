import React, { ReactElement } from 'react';
import { thousandSeparator } from '@/utils/formatNumber'
import Button from '@/components/Button'
import ProgressBar from '@/components/ProgressBar'
import ArrowRight from '@/icons/ArrowRight'
import styles from './styles.module.scss'

interface Props {
  balance: number;
  paid: number;
  left: number;
  nextLevel: string;
  updateAt: string;
  handleClickButton: () => void;
  handleClickBenefits: () => void;
}

export default function HighlightCard({
  balance,
  paid,
  left,
  nextLevel,
  updateAt,
  handleClickButton, 
  handleClickBenefits,
} : Props): ReactElement {

  const handleRedirect = (): void => {
    if (handleClickBenefits && typeof handleClickBenefits === 'function') {
      handleClickBenefits()
    }
  }

  const percent = 100 / (paid + left) * paid

  return (
    <div className={styles.highlightCard}>
      <h3 className={styles.title}>
        Available Coin balance
      </h3>
      <div className={styles.value}>
        {!isNaN(balance) ? thousandSeparator(balance) : '-'}
      </div>
      <div className={styles.progressWrapper}>
        <ProgressBar percent={80} />
      </div>
      <p className={styles.message}>
        You have paid rental fee for {!isNaN(paid) ? `$${thousandSeparator(paid)}` : '-'}.
        <br />
        Pay more {!isNaN(left) ? `$${thousandSeparator(left)}` : '-'} to achieve {nextLevel || 'higher'} Tier.
      </p>
      <div onClick={handleRedirect} className={styles.viewBenefit}>
        <span>
          View tier benefits
        </span>
        <span className={styles.iconWrapper}>
          <ArrowRight />
        </span>
      </div>
      <Button text='My Coupons' handleClick={handleClickButton} />
      <span className={styles.update}>
        Updated: {updateAt}
      </span>
    </div>
  )
}

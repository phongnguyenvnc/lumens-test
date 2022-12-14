import React, { ReactElement } from 'react'
import { thousandSeparator } from '@/utils/formatNumber'
import Coin from '@/icons/Coin'
import styles from './styles.module.scss'

interface Reward {
  coin: number,
  type: number,
  key: string,
  category: string,
  message: string,
  thumbnail?: string,
}

export default function Reward({
  coin,
  type,
  message,
  thumbnail,
} : Reward): ReactElement {

  return (
    <div className={styles.rewardCard}>
      <div className={styles.thumbnail}>
        <img
          src={thumbnail ? '/images/' + thumbnail : 'https://tdsg.com.sg/wp-content/uploads/2016/04/dummy-post-horisontal.jpg'}
          className={styles.image} alt='reward thumbnail'
        />
      </div>
      <div className={styles.content}>
        {
          type ? (
            <>
              <label className={styles.insufficientLabel}>
                <span className={styles.iconWrapper}>
                  <Coin />
                </span>
                {!isNaN(coin) ? `${thousandSeparator(coin)} ${coin === 1 ? 'Coin' : 'Coins'}` : '-'}
              </label>
              <span className={styles.insufficientMessage}>
                {message || ''}
              </span>
              <label className={styles.insufficientMark}>
                Insufficient coins
              </label>
            </>
          ) : (
            <>
              <label className={styles.label}>
                {!isNaN(coin) ? `${thousandSeparator(coin)} ${coin === 1 ? 'Coin' : 'Coins'}` : '-'}
              </label>
              <span className={styles.message}>
                {message || ''}
              </span>
            </>
          )
        }
      </div>
    </div>
  )
}

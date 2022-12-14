import React, { ReactElement } from 'react'
import styles from './styles.module.scss'

export default function Profile(): ReactElement {

  return (
    <div className={styles.notifyWrapper}>
      <h1 className={styles.title}>
        Notifications
      </h1>
    </div>
  )
}

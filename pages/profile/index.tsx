import React, { ReactElement } from 'react'
import styles from './styles.module.scss'

export default function Profile(): ReactElement {

  return (
    <div className={styles.pofileWrapper}>
      <h1 className={styles.title}>
        Profile
      </h1>
    </div>
  )
}

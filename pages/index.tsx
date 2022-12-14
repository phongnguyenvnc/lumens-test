import React, { ReactElement } from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.scss'
import 'swiper/css/bundle'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Home(): ReactElement {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to Lumens!
      </h1>
      <Link href='/wallet' className={styles.text}>
        Check your wallet
      </Link>
    </main>
  )
}

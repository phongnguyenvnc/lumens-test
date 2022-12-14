import React, { ReactNode, ReactElement, useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useScrollDirection, SCROLL_DIRECTION } from '@/utils/scrollDirection'
import BottomNavigation from '@/components/BottomNavigation'
import { ROUTES } from '@/constants/routes'
import ArrowLeft from '@/icons/ArrowLeft'
import styles from './styles.module.scss'

interface Props {
  children: ReactNode,
}

export default function Layout({ children }: Props): ReactElement {
  const router = useRouter()
  const walletRef = useRef(null)
  const scrollDirection = useScrollDirection(walletRef)
  const [state, setState] = useState<{prevRoute: null | string, currentRoute: string }>({ prevRoute: null, currentRoute: router.pathname })

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setState(() => ({
        prevRoute: state.currentRoute,
        currentRoute: url
       }))
    }
    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  })

  const onClickBack = () => {
    if (state.prevRoute && state.prevRoute !== ROUTES.ERROR) {
      router.back()
    } else {
      router.push(ROUTES.HOME)
    }
  }

  return (
    <div className={styles.container} ref={walletRef}>
       <Head>
        <title>Lumens</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {[ROUTES.WALLET].includes(state.currentRoute) ? (
        <div className={`${styles.siteActions} ${scrollDirection === SCROLL_DIRECTION.DOWN ? styles.hide : ''}`}>
        <span
          className={styles.backIconWrapper}
          onClick={onClickBack}
        >
          <ArrowLeft />
        </span>
      </div>
      ) : null}
      {children}
      <div className={`${styles.navigationBar} ${scrollDirection === SCROLL_DIRECTION.DOWN ? styles.hide : ''}`}>
        <BottomNavigation />
      </div>
    </div>
  )
}

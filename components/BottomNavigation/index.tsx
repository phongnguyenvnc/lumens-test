import React, { ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ROUTES, PAGE_NAME } from '@/constants/routes'
import Portrait from '@/icons/Portrait'
import Card from '@/icons/Card'
import Bell from '@/icons/Bell'
import Home from '@/icons/Home'
import styles from './styles.module.scss'

interface Props {
  label?: string;
  icon: ReactElement;
  handleNavigate: () => void;
}

function BottomNavigationAction({ label, icon, handleNavigate }: Props): ReactElement {
  const handelClick = (): void => {
    if (handleNavigate && typeof handleNavigate === 'function') {
      handleNavigate()
    }
  }

  return (
    <span className={styles.item} onClick={handelClick}>
      <span className={styles.iconWrapper}>
        {icon}
      </span>
      {label}
    </span>
  )
}

export default function BottomNavigation(): ReactElement {
  const router = useRouter()
  const [currentRoute, setCurrentRoute] = useState(PAGE_NAME.HOME);

  useEffect(() => {
    const currentPath = router.route.replaceAll('/', '')
    switch(currentPath) {
      case PAGE_NAME.NOTIFY:
        setCurrentRoute(PAGE_NAME.NOTIFY)
        break;
      case PAGE_NAME.WALLET:
        setCurrentRoute(PAGE_NAME.WALLET)
        break;
      case PAGE_NAME.PROFILE:
        setCurrentRoute(PAGE_NAME.PROFILE)
        break;
      default:
        setCurrentRoute(PAGE_NAME.HOME)
    }
  }, [router.route]);

  const handleRedirect = (to: string) => {
    router.push(to)
  }

  return (
    <div className={styles.navigationWrapper}>
      <BottomNavigationAction
        handleNavigate={() => handleRedirect(ROUTES.HOME)}
        label=''
        icon={
          <Home color={currentRoute === PAGE_NAME.HOME ? '#171725' : '#d5d5dc'} />
        }
      />
      <BottomNavigationAction
        handleNavigate={() => handleRedirect(ROUTES.NOTIFY)}
        label=''
        icon={
          <Bell hasNew={true} color={currentRoute === PAGE_NAME.NOTIFY ? '#171725' : '#d5d5dc'} />
        }
      />
      <BottomNavigationAction
        handleNavigate={() => handleRedirect(ROUTES.WALLET)}
        label=''
        icon={
          <Card color={currentRoute === PAGE_NAME.WALLET ? '#171725' : '#d5d5dc'} />
        }
      />
      <BottomNavigationAction
        handleNavigate={() => handleRedirect(ROUTES.PROFILE)}
        label=''
        icon={
          <Portrait color={currentRoute === PAGE_NAME.PROFILE ? '#171725' : '#d5d5dc'} />
        }
      />
    </div>
  )
}

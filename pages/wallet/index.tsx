import React, { ReactElement, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from 'swiper/react'
import HighlightCard from '@/components/HighlightCard'
import Reward from '@/components/Reward'
import { ROUTES } from '@/constants/routes'
import { spreadDataByField } from '@/utils/utils'
import Spinner from '@/icons/Spinner'
import styles from './styles.module.scss'

interface Wallet {
  coin: number,
  dollar: number,
  balance: number,
  paid: number,
  left: number,
  currentLevel: string,
  nextLevel: string,
  updateAt: string,
}

interface Reward {
  coin: number,
  type: number,
  key: string,
  category: string,
  message: string,
  thumbnail?: string,
}

interface RewardList {
  category: string,
  data?: Array<Reward>,
}

export default function Wallet(): ReactElement {
  const router = useRouter()
  const [state, setState] = useState<{ data: Wallet, rewards: Array<Reward>, loading: boolean }>({
    data: {
      coin: 0,
      dollar: 0,
      balance: 0,
      paid: 0,
      left: 0,
      currentLevel: '',
      nextLevel: '',
      updateAt: '',
    },
    rewards: [],
    loading: false
  })

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      loading: true
    }))
    Promise.all([
      fetch('https://run.mocky.io/v3/1a6aa8bd-fc2f-456c-bb5d-c0ac96aeef9f', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }),
      fetch('https://run.mocky.io/v3/e5faf321-078b-4422-853a-e505570a54e3', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }),
    ])
    .then(([resWallet, resRewards]) => Promise.all([resWallet.json(), resRewards.json()]))
    .then(([dataWallet, dataRewards]) => {
      setState((prevState) => ({
        ...prevState,
        data: dataWallet,
        rewards: dataRewards,
        loading: false
      }))
    })
  }, [])

  const handleNavigate = () => {
    router.push(ROUTES.PROFILE)
  }

  const redirectToBenefits = () => {
    router.push(ROUTES.BENEFIT)
  }

  const {
    coin,
    dollar,
    balance,
    paid,
    left,
    currentLevel,
    nextLevel,
    updateAt,
  } = state.data

  if (state.loading) {
    return (
      <div className={styles.emptyWrapper}>
        <Spinner color='#171725' />
      </div>
    )
  }
  
  const rewardData = spreadDataByField(state.rewards, 'category')

  return (
    <div className={styles.walletWrapper}>
      <div className={styles.darkBackground}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Silver Tier</h1>
        <span className={styles.text}>
          In {currentLevel || 'Current'} Tier, every {!isNaN(dollar) ? `$${dollar}` : '-'} in rental fee paid, you get {!isNaN(coin) ? coin : '-'} coins to redeem exclusive rewards.
        </span>
      </div>
      <div className={styles.highlightCardWrapper}>
        <HighlightCard
          balance={balance}
          paid={paid}
          left={left}
          nextLevel={nextLevel}
          updateAt={updateAt}
          handleClickButton={handleNavigate}
          handleClickBenefits={redirectToBenefits}
        />
      </div>
      {rewardData?.map((rewardList: RewardList, index: number) => (
        <div className={styles.rewardBox} key={index}>
          <label className={styles.label}>{rewardList.category}</label>
          <div className={styles.slideWrapper}>
            <Swiper
              slidesPerView={'auto'}
              spaceBetween={24}
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              loop={true}
            >
              {rewardList.data?.map((item: Reward) => 
                <SwiperSlide
                  key={item.key}
                  className={styles.itemWrapper}
                >
                  <Reward {...item} />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>
      )
      )}
    </div>
  )
}

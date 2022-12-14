import React, { FC, ReactNode } from 'react'
import { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import '@/styles/globals.scss'
import 'swiper/css'

const CustomApp = (props: AppProps): ReactNode => {
  const { Component, pageProps } = props


  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default CustomApp

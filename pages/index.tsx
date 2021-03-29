import React from 'react'
import { NextPage } from 'next/types'

import Header from '../components/header'
import Footer from '../components/Footer'
import ProductList from '../containers/productsListContainer'

const HomePage: NextPage = () => {
  return (
    <>
      <Header />
      <ProductList />
      <Footer />
    </>
  )
}

export default HomePage

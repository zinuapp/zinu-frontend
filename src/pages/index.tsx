import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import GlobalStyle  from '../styles/global'

const HomeComponent = dynamic(
  () => import('../components/Home/HomeMain'),
  { ssr: false }
)

const Home = () => {
  return (
    <div >
      <Head>
          <title>ZinuApp</title>
      </Head>
      <main>
         <HomeComponent />
       </main>
    </div>
  )
}

export default Home

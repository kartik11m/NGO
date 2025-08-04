import React from 'react'
import Hero from './Hero'
import Layout from '../components/Layout'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'


const Home = () => {
  return (
    <>
        <Layout>
            <Hero/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            
        </Layout>
    </>
  )
}

export default Home
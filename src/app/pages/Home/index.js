import React from 'react'

import Text from 'app/components/core/Text'
import Image from 'app/components/core/Image'

import NavBar from 'app/components/NavBar'
import Section from 'app/components/core/Section'
import Footer from 'app/components/Footer'
import GithubProfile from 'app/components/GithubProfile'

const Home = () => {
  return (
    <div>
      <NavBar />

      <Section style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
        <Text component='h1'>
          TremTec react-parcel Base Project
        </Text>

        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}
        >
          <Image
            src='https://parceljs.org/assets/parcel-og.png'
            width='300px'
          />

          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
            width='300px'
          />
        </div>

        <GithubProfile />

      </Section>

      <Footer />
    </div>
  )
}

export default Home

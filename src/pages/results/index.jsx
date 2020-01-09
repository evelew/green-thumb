import React from 'react'

import PickImage from 'assets/images/pick.png'

import Header from 'components/header'
import Container from 'components/container'
import PlantCard from 'components/plant-card'
import * as Styles from './styles'

export default function Results() {
  return (
    <Container>
      <Header />

      <Styles.WrapperImage>
        <img src={PickImage} alt="" />
      </Styles.WrapperImage>

      <Styles.Title>Our picks for you</Styles.Title>

      <PlantCard />
    </Container>
  )
}

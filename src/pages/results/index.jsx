import React from 'react'

import PickImage from 'assets/images/pick.png'

import history from 'common/browser-history'

import Header from 'components/header'
import PlantCard from 'components/plant-card'
import * as Styles from './styles'

export default function Results() {
  return (
    <Styles.Container>
      <Header />

      <Styles.WrapperImage>
        <img src={PickImage} alt="" />
      </Styles.WrapperImage>

      <Styles.Title>Our picks for you</Styles.Title>

      <PlantCard onClickButton={() => history.push('/purchase')} />
    </Styles.Container>
  )
}

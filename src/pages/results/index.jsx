import React from 'react'

import PickImage from 'assets/images/pick.png'

import history from 'common/browser-history'

import Header from 'components/header'
import PlantCard from 'components/plant-card'
import * as Styles from './styles'

export default function Results() {
  return (
    <Styles.BackgroundPage>
      <Styles.Container>
        <Header />

        <Styles.WrapperImage>
          <img src={PickImage} alt="" />
        </Styles.WrapperImage>

        <Styles.Title>Our picks for you</Styles.Title>

        <Styles.WrapperPlantCards>
          <PlantCard onClickButton={() => history.push('/purchase')} />
          <PlantCard onClickButton={() => history.push('/purchase')} />
          <PlantCard onClickButton={() => history.push('/purchase')} />
          <PlantCard onClickButton={() => history.push('/purchase')} />
          <PlantCard onClickButton={() => history.push('/purchase')} />
          <PlantCard onClickButton={() => history.push('/purchase')} />
        </Styles.WrapperPlantCards>
      </Styles.Container>
    </Styles.BackgroundPage>
  )
}

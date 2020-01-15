import React from 'react'

import Wateringcan from 'assets/images/wateringcan.png'
import { ReactComponent as OneDrop } from 'assets/icons/one-drop.svg'
import { ReactComponent as TwoDrops } from 'assets/icons/two-drops.svg'
import { ReactComponent as ThreeDrops } from 'assets/icons/three-drops.svg'

import history from 'common/browser-history'
import colors from 'common/colors'

import Header from 'components/header'
import Container from 'components/container'
import Question from 'containers/question'

import { BackgroundPage } from '../styles'

export default function WaterQuestion() {
  const items = [
    {
      icon: OneDrop,
      name: 'Rarely'
    },
    {
      icon: TwoDrops,
      name: 'Regularly'
    },
    {
      icon: ThreeDrops,
      name: 'Daily'
    }
  ]

  return (
    <BackgroundPage>
      <Container>
        <Header />

        <Question
          title={() => (
            <>
              How often do you want to <strong>water</strong> your plant?
            </>
          )}
          imageSrc={Wateringcan}
          imageAlt=""
          items={items}
          color={colors['green']}
          onClickPrevButton={() => history.push('/questions/sunlight')}
          onClickNextButton={() => history.push('/questions/pet')}
        />
      </Container>
    </BackgroundPage>
  )
}

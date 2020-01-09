import React from 'react'

import Wateringcan from 'assets/images/wateringcan.png'
import OneDrop from 'assets/images/inputs/water/one-drop.svg'
import TwoDrops from 'assets/images/inputs/water/two-drops.svg'
import ThreeDrops from 'assets/images/inputs/water/three-drops.svg'

import Header from 'components/header'
import Container from 'components/container'
import Question from 'containers/question'

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
      />
    </Container>
  )
}

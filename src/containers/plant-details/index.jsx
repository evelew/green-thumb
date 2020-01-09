import React from 'react'

import SucculentBowl from 'assets/images/plant-pictures/succulent-bowl.jpg'
import { ReactComponent as LowSun } from 'assets/icons/low-sun.svg'

import * as Styles from './styles'

export default function PlantDetails() {
  return (
    <article>
      <Styles.Title>Succulent bowl</Styles.Title>
      <Styles.Price>$20</Styles.Price>

      <Styles.ImageWrapper>
        <img src={SucculentBowl} alt="" />
      </Styles.ImageWrapper>

      <Styles.Detail>
        <LowSun />
        <p>Low sun</p>
      </Styles.Detail>
      <Styles.Detail>
        <LowSun />
        <p>Low sun</p>
      </Styles.Detail>
    </article>
  )
}

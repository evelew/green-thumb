import React from 'react'

import { useStateValue } from 'store'
import {
  getSunlightIcon,
  getWaterIcon,
  getToxicIcon
} from 'common/icons-helpers'

import * as Styles from './styles'

export default function PlantDetails() {
  const [{ plant }] = useStateValue()

  const propertiesNames = {
    sun: {
      low: 'Low sunlight',
      high: 'High sunlight',
      no: 'No sunlight'
    },
    water: {
      rarely: 'Water rarely',
      regularly: 'Water regularly',
      daily: 'Water daily'
    },
    toxicity: {
      true: 'Toxic for pets',
      false: 'Non-toxic for pets'
    }
  }

  return (
    <article>
      <Styles.Title>{plant.name}</Styles.Title>
      <Styles.Price>${plant.price}</Styles.Price>

      <Styles.ImageWrapper>
        <img src={plant.url} alt={plant.name} />
      </Styles.ImageWrapper>

      <Styles.Detail>
        {getSunlightIcon(plant.sun)}
        <p>{propertiesNames.sun[plant.sun]}</p>
      </Styles.Detail>
      <Styles.Detail>
        {getWaterIcon(plant.water)}
        <p>{propertiesNames.water[plant.water]}</p>
      </Styles.Detail>
      <Styles.Detail>
        {getToxicIcon(plant.toxicity)}
        <p>{propertiesNames.toxicity[plant.toxicity]}</p>
      </Styles.Detail>
    </article>
  )
}

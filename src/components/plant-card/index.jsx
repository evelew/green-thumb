import React from 'react'

import { ReactComponent as HighSun } from 'assets/icons/high-sun.svg'
import { ReactComponent as LowSun } from 'assets/icons/low-sun.svg'
import { ReactComponent as Toxic } from 'assets/icons/toxic.svg'
import { ReactComponent as OneDrop } from 'assets/icons/one-drop.svg'
import { ReactComponent as TwoDrops } from 'assets/icons/two-drops.svg'
import { ReactComponent as ThreeDrops } from 'assets/icons/three-drops.svg'
import { ReactComponent as NoAnswer } from 'assets/icons/no-answer.svg'

import Button from 'components/button'
import * as Styles from './styles'

export default function PlantCard({
  name,
  price,
  url,
  sun,
  water,
  toxicity,
  onClickButton
}) {
  const getSunlightIcon = value => {
    switch (value) {
      case 'high':
        return <HighSun />
      case 'low':
        return <LowSun />
      default:
        return <NoAnswer />
    }
  }

  const getWaterIcon = value => {
    switch (value) {
      case 'daily':
        return <ThreeDrops />
      case 'regularly':
        return <TwoDrops />
      case 'rarely':
        return <OneDrop />
      default:
        return <NoAnswer />
    }
  }

  const getToxicIcon = value => {
    switch (value) {
      case true:
        return <Toxic />
      default:
        return null
    }
  }

  return (
    <Styles.Card>
      <Styles.WrapperImage>
        <img src={url} alt={name} />
      </Styles.WrapperImage>

      <Styles.Name>{name}</Styles.Name>

      <Styles.Details>
        <Styles.Price>${price}</Styles.Price>
        <Styles.DetailsIcons>
          {getToxicIcon(toxicity)}
          {getSunlightIcon(sun)}
          {getWaterIcon(water)}
        </Styles.DetailsIcons>
      </Styles.Details>

      <Styles.WrapperButton>
        <Button onClick={onClickButton}>buy now</Button>
      </Styles.WrapperButton>
    </Styles.Card>
  )
}

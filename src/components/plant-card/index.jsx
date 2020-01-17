import React from 'react'

import {
  getSunlightIcon,
  getWaterIcon,
  getToxicIcon
} from 'common/icons-helpers'

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

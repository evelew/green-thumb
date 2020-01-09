import React from 'react'

import PonytailPalmImage from 'assets/images/plant-pictures/ponytail-palm.jpg'
import { ReactComponent as PetSvg } from 'assets/images/inputs/pet/pet.svg'

import Button from 'components/button'
import * as Styles from './styles'

export default function PlantCard() {
  return (
    <Styles.Card>
      <Styles.WrapperImage>
        <img src={PonytailPalmImage} alt="" />
      </Styles.WrapperImage>

      <Styles.Name>Ponytail Palm</Styles.Name>

      <Styles.Details>
        <Styles.Price>$30</Styles.Price>
        <Styles.DetailsIcons>
          <PetSvg />
          <PetSvg />
        </Styles.DetailsIcons>
      </Styles.Details>

      <Styles.WrapperButton>
        <Button>buy now</Button>
      </Styles.WrapperButton>
    </Styles.Card>
  )
}

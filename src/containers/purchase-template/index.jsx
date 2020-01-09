import React from 'react'

import Header from 'components/header'
import PlantDetails from 'containers/plant-details'

import * as Styles from './styles'

export default function PurchaseTemplate({ bottomContent: BottomContent }) {
  return (
    <Styles.Container>
      <Styles.PlantDetails>
        <Header />
        <PlantDetails />
      </Styles.PlantDetails>

      <BottomContent />
    </Styles.Container>
  )
}

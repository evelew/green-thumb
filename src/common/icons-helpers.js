import React from 'react'

import { ReactComponent as HighSun } from 'assets/icons/high-sun.svg'
import { ReactComponent as LowSun } from 'assets/icons/low-sun.svg'
import { ReactComponent as Toxic } from 'assets/icons/toxic.svg'
import { ReactComponent as Pet } from 'assets/icons/pet.svg'
import { ReactComponent as OneDrop } from 'assets/icons/one-drop.svg'
import { ReactComponent as TwoDrops } from 'assets/icons/two-drops.svg'
import { ReactComponent as ThreeDrops } from 'assets/icons/three-drops.svg'
import { ReactComponent as NoAnswer } from 'assets/icons/no-answer.svg'

export const getSunlightIcon = value => {
  switch (value) {
    case 'high':
      return <HighSun />
    case 'low':
      return <LowSun />
    default:
      return <NoAnswer />
  }
}

export const getWaterIcon = value => {
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

export const getToxicIcon = value => {
  switch (value) {
    case true:
      return <Toxic />
    default:
      return <Pet />
  }
}
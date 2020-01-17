import React from 'react'

import Wateringcan from 'assets/images/wateringcan.png'
import { ReactComponent as OneDrop } from 'assets/icons/one-drop.svg'
import { ReactComponent as TwoDrops } from 'assets/icons/two-drops.svg'
import { ReactComponent as ThreeDrops } from 'assets/icons/three-drops.svg'

import { useStateValue } from 'store'
import history from 'common/browser-history'
import colors from 'common/colors'

import Header from 'components/header'
import DesktopLogo from 'components/desktop-logo'
import Container from 'components/container'
import Question from 'containers/question'

import { BackgroundPage } from '../styles'

export default function WaterQuestion() {
  const [{ water }, dispatch] = useStateValue()

  const items = [
    {
      icon: OneDrop,
      name: 'Rarely',
      active: water === 'rarely',
      onClick: () => {
        dispatch({
          type: 'setWater',
          value: 'rarely'
        })
      }
    },
    {
      icon: TwoDrops,
      name: 'Regularly',
      active: water === 'regularly',
      onClick: () => {
        dispatch({
          type: 'setWater',
          value: 'regularly'
        })
      }
    },
    {
      icon: ThreeDrops,
      name: 'Daily',
      active: water === 'daily',
      onClick: () => {
        dispatch({
          type: 'setWater',
          value: 'daily'
        })
      }
    }
  ]

  const onClickNextButton = () => {
    if (water) {
      return history.push('/questions/pet')
    }

    alert('Please select an option')
  }

  return (
    <BackgroundPage>
      <Container>
        <Header />
        <DesktopLogo />

        <Question
          title={() => (
            <>
              How often do you want to <strong>water</strong> your plant?
            </>
          )}
          imageSrc={Wateringcan}
          imageAlt=""
          items={items}
          color={colors['acapulco']}
          onClickPrevButton={() => history.push('/questions/sunlight')}
          onClickNextButton={() => onClickNextButton()}
        />
      </Container>
    </BackgroundPage>
  )
}

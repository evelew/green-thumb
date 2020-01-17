import React from 'react'

import Sun from 'assets/images/sun.png'
import { ReactComponent as HighSun } from 'assets/icons/high-sun.svg'
import { ReactComponent as LowSun } from 'assets/icons/low-sun.svg'
import { ReactComponent as NoSun } from 'assets/icons/no-answer.svg'

import { useStateValue } from 'store'
import history from 'common/browser-history'
import colors from 'common/colors'

import Header from 'components/header'
import DesktopLogo from 'components/desktop-logo'
import Container from 'components/container'
import Question from 'containers/question'

import * as Styles from '../styles'

export default function SunlightQuestion() {
  const [{ sunlight }, dispatch] = useStateValue()

  const items = [
    {
      icon: HighSun,
      name: 'High sunlight',
      active: sunlight === 'high',
      onClick: () => {
        dispatch({
          type: 'setSunlight',
          value: 'high'
        })
      }
    },
    {
      icon: LowSun,
      name: 'Low sunlight',
      active: sunlight === 'low',
      onClick: () => {
        dispatch({
          type: 'setSunlight',
          value: 'low'
        })
      }
    },
    {
      icon: NoSun,
      name: 'No sunlight',
      active: sunlight === 'no',
      onClick: () => {
        dispatch({
          type: 'setSunlight',
          value: 'no'
        })
      }
    }
  ]

  return (
    <Styles.BackgroundPage>
      <Container>
        <Header />
        <DesktopLogo />

        <Question
          title={() => (
            <>
              First set the amount of <strong>sunlight</strong> your plant will
              get.
            </>
          )}
          color={colors['coral']}
          imageSrc={Sun}
          imageAlt="Sol de óculos escuro"
          items={items}
          prevButtonText="home"
          onClickPrevButton={() => history.push('/')}
          onClickNextButton={() => history.push('/questions/water')}
        />
      </Container>
    </Styles.BackgroundPage>
  )
}

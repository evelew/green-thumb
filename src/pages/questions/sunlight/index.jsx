import React from 'react'

import Sun from 'assets/images/sun.png'
import { ReactComponent as HighSun } from 'assets/icons/high-sun.svg'
import { ReactComponent as LowSun } from 'assets/icons/low-sun.svg'
import { ReactComponent as NoSun } from 'assets/icons/no-answer.svg'

import history from 'common/browser-history'

import Header from 'components/header'
import Container from 'components/container'
import Question from 'containers/question'

import { BackgroundPage } from '../styles'

export default function SunlightQuestion() {
  const items = [
    {
      icon: HighSun,
      name: 'High sunlight'
    },
    {
      icon: LowSun,
      name: 'Low sunlight'
    },
    {
      icon: NoSun,
      name: 'No sunlight'
    }
  ]

  return (
    <BackgroundPage>
      <Container>
        <Header />

        <Question
          title={() => (
            <>
              First set the amount of <strong>sunlight</strong> your plant will
              get.
            </>
          )}
          imageSrc={Sun}
          imageAlt="Sol de óculos escuro"
          items={items}
          prevButtonText="home"
          onClickPrevButton={() => history.push('/')}
          onClickNextButton={() => history.push('/questions/water')}
        />
      </Container>
    </BackgroundPage>
  )
}

import React from 'react'

import Sun from 'assets/images/sun.png'
import HighSun from 'assets/images/inputs/sunlight/high-sun.svg'
import LowSun from 'assets/images/inputs/sunlight/low-sun.svg'
import NoSun from 'assets/images/inputs/sunlight/no-answer.svg'

import history from 'common/browser-history'

import Header from 'components/header'
import Container from 'components/container'
import Question from 'containers/question'

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
  )
}

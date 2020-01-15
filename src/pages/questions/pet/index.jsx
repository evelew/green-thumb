import React from 'react'

import Dog from 'assets/images/dog.png'
import { ReactComponent as Pet } from 'assets/images/inputs/pet/pet.svg'
import { ReactComponent as NoAnswer } from 'assets/images/inputs/pet/no-answer.svg'

import history from 'common/browser-history'

import Header from 'components/header'
import Container from 'components/container'
import Question from 'containers/question'

import { BackgroundPage } from '../styles'

export default function PetQuestion() {
  const items = [
    {
      icon: Pet,
      name: 'Yes'
    },
    {
      icon: NoAnswer,
      name: "No/They don't care"
    }
  ]

  return (
    <BackgroundPage>
      <Container>
        <Header />

        <Question
          title={() => (
            <>
              Do you have pets? Do they <strong>chew</strong> plants?
            </>
          )}
          subtitle={() => (
            <>
              We are asking because some plants can be <strong>toxic</strong>{' '}
              for your buddy.
            </>
          )}
          imageSrc={Dog}
          imageAlt=""
          items={items}
          nextButtonText="finish"
          onClickPrevButton={() => history.push('/questions/water')}
          onClickNextButton={() => history.push('/results')}
        />
      </Container>
    </BackgroundPage>
  )
}

import React from 'react'

import Dog from 'assets/images/dog.png'
import { ReactComponent as Pet } from 'assets/icons/pet.svg'
import { ReactComponent as NoAnswer } from 'assets/icons/no-answer.svg'

import { useStateValue } from 'store'
import history from 'common/browser-history'

import Header from 'components/header'
import DesktopLogo from 'components/desktop-logo'
import Container from 'components/container'
import Question from 'containers/question'

import { BackgroundPage } from '../styles'

export default function PetQuestion() {
  const [{ pet }, dispatch] = useStateValue()

  const items = [
    {
      icon: Pet,
      name: 'Yes',
      active: pet === true,
      onClick: () => {
        dispatch({
          type: 'setPet',
          value: true
        })
      }
    },
    {
      icon: NoAnswer,
      name: "No/They don't care",
      active: pet === false,
      onClick: () => {
        dispatch({
          type: 'setPet',
          value: false
        })
      }
    }
  ]

  const onClickNextButton = () => {
    if (pet !== null) {
      return history.push('/results')
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
          onClickNextButton={() => onClickNextButton()}
        />
      </Container>
    </BackgroundPage>
  )
}

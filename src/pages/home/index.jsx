import React, { useEffect } from 'react'

import LogoGreenthumb from 'assets/images/logo-greenthumb.svg'

import { appStoreName } from 'store/AppStore'
import { clear } from 'store/cache'
import history from 'common/browser-history'

import Header from 'components/header'
import Button from 'components/button'

import * as Styles from './styles'

export default function Home() {
  useEffect(() => {
    clear(appStoreName)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Styles.Content>
      <Styles.Container>
        <Header />

        <Styles.LogoDesktop>
          <img src={LogoGreenthumb} alt="" />
        </Styles.LogoDesktop>
        <Styles.Title>Find your next green friend</Styles.Title>

        <Button arrow onClick={() => history.push('/questions/sunlight')}>
          start quizz
        </Button>
      </Styles.Container>
    </Styles.Content>
  )
}

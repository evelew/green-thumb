import React, { useEffect, useState } from 'react'

import PickImage from 'assets/images/pick.png'

import { useStateValue } from 'store'
import history from 'common/browser-history'
import { fetchData } from 'api'

import Header from 'components/header'
import DesktopLogo from 'components/desktop-logo'
import PlantCard from 'components/plant-card'

import * as Styles from './styles'

export default function Results() {
  const [plants, setPlants] = useState([])
  const [state, dispatch] = useStateValue()

  useEffect(() => {
    getPlants()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getPlants = async () => {
    try {
      const { sunlight, water, pet } = state
      const data = await fetchData({ sunlight, water, pet })
      setPlants(data)
    } catch (error) {
      alert('Something went wrong. Please try again.')
      console.error(error)
    }
  }

  const onClickBuyPlant = plant => {
    dispatch({
      type: 'setPlant',
      value: plant
    })

    history.push('/purchase')
  }

  return (
    <Styles.BackgroundPage>
      <Styles.Container>
        <Header />
        <DesktopLogo />

        <Styles.WrapperImage>
          <img src={PickImage} alt="" />
        </Styles.WrapperImage>

        <Styles.Title>Our picks for you</Styles.Title>

        <Styles.WrapperPlantCards>
          {plants.map(plant => (
            <PlantCard
              onClickButton={() => onClickBuyPlant(plant)}
              key={plant.id}
              {...plant}
            />
          ))}
        </Styles.WrapperPlantCards>
      </Styles.Container>
    </Styles.BackgroundPage>
  )
}

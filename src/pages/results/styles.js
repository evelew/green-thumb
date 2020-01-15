import styled from 'styled-components'

import { default as ContainerBase } from 'components/container'

import colors from 'common/colors'
import breakpoints from 'common/breakpoints'

export const BackgroundPage = styled.div`
  background-color: ${colors['wildSand']};

  @media (${breakpoints.MEDIUM}) {
    padding-top: 60px;
  }
`

export const Container = styled(ContainerBase)`
  padding-bottom: 80px;
`

export const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  img {
    width: 146px;
  }
`

export const Title = styled.h1`
  font-size: 40px;
  margin: 0 auto 28px auto;
  text-align: center;
  width: 240px;

  @media (${breakpoints.LARGE}) {
    font-size: 65px;
    width: auto;
  }
`

export const WrapperPlantCards = styled.div`
  @media (${breakpoints.LARGE}) {
    display: grid;
    grid-template-columns: 268px 268px 268px;
    justify-content: center;
    grid-gap: 50px 30px;
  }
`

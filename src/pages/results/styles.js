import styled from 'styled-components'

import { default as ContainerBase } from 'components/container'

import colors from 'common/colors'
import breakpoints from 'common/breakpoints'

export const BackgroundPage = styled.div`
  background-color: ${colors['wildSand']};
`

export const Container = styled(ContainerBase)`
  padding-bottom: 80px;
`

export const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  @media (${breakpoints.LARGE}) {
    padding-top: 60px;
  }

  img {
    width: 146px;
  }
`

export const Title = styled.h1`
  color: ${colors['bush']};
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
  display: flex;
  overflow-x: auto;

  @media (${breakpoints.MEDIUM}) {
    margin-top: 80px;
  }

  @media (${breakpoints.LARGE}) {
    display: grid;
    grid-template-columns: 268px 268px 268px;
    justify-content: center;
    grid-gap: 50px 30px;
  }

  > div {
    flex: 0 0 auto;
    margin-right: 18px;

    &:last-of-type {
      margin-right: 0;
    }

    @media (${breakpoints.LARGE}) {
      margin-right: 0;
    }
  }
`

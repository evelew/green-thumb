import styled from 'styled-components'

import { default as ContainerBase } from 'components/container'

import colors from 'common/colors'
import breakpoints from 'common/breakpoints'

export const BackgroundPage = styled.div`
  background-color: ${colors['grey']};

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
`

import styled from 'styled-components'

import { default as ContainerBase } from 'components/container'

import colors from 'common/colors'
import breakpoints from 'common/breakpoints'

export const PageContent = styled.div`
  @media (${breakpoints.LARGE}) {
    align-items: center;
    display: flex;
    margin: 0 auto;
    max-width: 1024px;
    min-height: 100vh;
  }
`

export const Container = styled(ContainerBase)`
  background: transparent;
  min-height: auto;
`

export const PlantDetails = styled(ContainerBase)`
  background: white;
  min-height: auto;
  padding-bottom: 35px;

  @media (${breakpoints.LARGE}) {
    width: 378px;
  }
`

export const WrapperBottomContent = styled.div`
  background-color: ${colors['grey']};
`

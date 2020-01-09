import styled from 'styled-components'

import { default as ContainerBase } from 'components/container'

import breakpoints from 'common/breakpoints'

// export const Container = styled.section`
export const Container = styled(ContainerBase)`
  background: white;

  @media (${breakpoints.LARGE}) {
    align-items: center;
    display: flex;
    min-height: 100vh;
  }
`

export const PlantDetails = styled(ContainerBase)`
  background: white;
  min-height: auto;
  padding-bottom: 35px;

  @media (${breakpoints.LARGE}) {
    width: 378px;
  }
`

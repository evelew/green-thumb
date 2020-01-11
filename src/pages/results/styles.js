import styled from 'styled-components'

import { default as ContainerBase } from 'components/container'

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

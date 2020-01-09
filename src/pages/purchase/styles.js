import styled from 'styled-components'

import { default as ContainerBase } from 'components/container'
import Button from 'components/button'

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

export const Contact = styled(ContainerBase)`
  min-height: 0;
  padding-top: 26px;
  padding-bottom: 32px;

  @media (${breakpoints.LARGE}) {
    padding: 43px 48px;
    width: 381px;
  }
`

export const ContactTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 16px;

  @media (${breakpoints.LARGE}) {
    font-size: 40px;
  }
`

export const ContactIntro = styled.p`
  color: #6e6e6e;
  font-size: 16px;
  margin-bottom: 25px;
`

export const Label = styled.label`
  display: flex;
  flex-flow: column;
  margin-bottom: 22px;

  @media (${breakpoints.LARGE}) {
    margin-bottom: 30px;
  }

  strong {
    color: #6e6e6e;
    font-size: 16px;
    margin-left: 15px;
  }

  input {
    background: white;
    border: none;
    border-radius: 19px;
    color: #d0d0d0;
    font-size: 14px;
    height: 40px;
    margin-top: 6px;
    padding: 6px 20px;
  }
`

export const SubmitButton = styled(Button)`
  width: 100%;
`

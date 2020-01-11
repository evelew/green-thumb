import styled from 'styled-components'

import IllustrationMobile from 'assets/images/illustration-home-mobile.png'
import IllustrationDesktop from 'assets/images/illustration-home-desktop.png'

import { default as ContainerBase } from 'components/container'

import breakpoints from 'common/breakpoints'
import colors from 'common/colors'

export const Content = styled.section`
  background-color: ${colors['grey']};
  background-image: url(${IllustrationMobile});
  background-repeat: no-repeat;
  background-size: 98%;
  background-position: -13px 110%;
  overflow: hidden;

  @media (${breakpoints.MEDIUM}) {
    background-position: 100% 145%;
  }

  @media (${breakpoints.LARGE}) {
    background-image: url(${IllustrationDesktop});
    background-size: 779px;
    background-position: 90% 100%;
  }

  button {
    font-weight: 600;
    margin: 0 auto;
    width: 174px;

    @media (${breakpoints.LARGE}) {
      margin: 0;
    }
  }
`

export const Container = styled(ContainerBase)`
  background: transparent;
`

export const Title = styled.h1`
  font-size: 35px;
  margin-bottom: 35px;
  text-align: center;

  @media (${breakpoints.LARGE}) {
    font-size: 66px;
    text-align: left;
    width: 433px;
  }
`

export const LogoDesktop = styled.div`
  display: none;
  margin-bottom: 96px;
  padding-top: 62px;
  width: 208px;

  @media (${breakpoints.LARGE}) {
    display: block;
  }

  img {
    width: 100%;
  }
`

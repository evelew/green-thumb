import styled from 'styled-components'

import colors from 'common/colors'
import breakpoints from 'common/breakpoints'

export const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;

  @media (${breakpoints.MEDIUM}) {
    padding-top: 60px;
  }
`

export const Title = styled.h1`
  color: ${colors['doveGray']};
  font-size: 22px;
  font-weight: normal;
  text-align: center;

  @media (${breakpoints.LARGE}) {
    font-size: 30px;
    margin: 0 auto;
    width: 470px;
  }
`

export const Subtitle = styled.p`
  color: ${colors['doveGray']};
  font-size: 14px;
  margin-top: 11px;
  padding: 0 18px;
  text-align: center;
`

export const WrapperContent = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column;
`

export const WrapperOptions = styled.div`
  margin-top: 30px;

  @media (${breakpoints.LARGE}) {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    margin: 65px auto 0 auto;
  }

  > button {
    margin-bottom: 20px;

    @media (${breakpoints.LARGE}) {
      margin-bottom: 0;
      margin-right: 30px;
    }

    &:last-of-type {
      @media (${breakpoints.LARGE}) {
        margin-right: 0;
      }
    }
  }
`

export const WrapperButtons = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column;
  padding: 37px 0;

  @media (${breakpoints.LARGE}) {
    display: flex;
    flex-flow: row-reverse;
    justify-content: space-between;
    width: 100%;
  }

  button {
    width: 146px;

    &:first-of-type {
      margin-bottom: 30px;

      @media (${breakpoints.LARGE}) {
        margin-bottom: 0;
      }
    }
  }
`

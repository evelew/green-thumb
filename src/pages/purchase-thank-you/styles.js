import styled from 'styled-components'

import colors from 'common/colors'
import breakpoints from 'common/breakpoints'

export const MessageWrapper = styled.article`
  padding: 26px;

  @media (${breakpoints.LARGE}) {
    align-items: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
    height: 495px;
    width: 380px;
  }
`

export const Title = styled.h2`
  color: ${colors['bush']};
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
`

export const Message = styled.p`
  color: ${colors['doveGray']};
  font-size: 16px;
  margin-bottom: 30px;
  text-align: center;

  @media (${breakpoints.LARGE}) {
    width: 265px;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

import styled from 'styled-components'

import colors from 'common/colors'

export const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`

export const Title = styled.h1`
  color: ${colors['grey1']};
  font-size: 22px;
  font-weight: normal;
  text-align: center;
`

export const Subtitle = styled.p`
  color: ${colors['grey1']};
  font-size: 14px;
  margin-top: 11px;
  padding: 0 18px;
  text-align: center;
`

export const WrapperOptions = styled.div`
  margin-top: 30px;
`

export const WrapperButtons = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column;
  padding: 37px 0;

  button {
    width: 146px;

    &:first-of-type {
      margin-bottom: 30px;
    }
  }
`

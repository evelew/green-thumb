import styled from 'styled-components'

import colors from 'common/colors'

export const Card = styled.div`
  background: white;
  padding: 22px 28px;
`

export const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
`

export const Name = styled.h2`
  color: ${colors['greenPea']};
  font-size: 18px;
  margin-bottom: 4px;
`

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const DetailsIcons = styled.div`
  display: flex;

  svg {
    height: auto;
    margin: 0 4px;
    width: 25px;

    path {
      fill: ${colors['doveGray']};
    }
  }
`

export const Price = styled.p`
  color: ${colors['doveGray']};
  font-size: 18px;
`

export const WrapperButton = styled.div`
  button {
    width: 100%;
  }
`

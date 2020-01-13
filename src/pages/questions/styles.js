import styled from 'styled-components'

import colors from 'common/colors'
import breakpoints from 'common/breakpoints'

export const BackgroundPage = styled.div`
  background-color: ${colors['grey']};

  @media (${breakpoints.MEDIUM}) {
    padding-top: 60px;
  }
`

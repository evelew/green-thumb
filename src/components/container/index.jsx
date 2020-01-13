import styled from 'styled-components'

import colors from 'common/colors'
import breakpoints from 'common/breakpoints'

export default styled.div`
  background-color: ${colors['grey']};
  min-height: 100vh;
  margin: 0 auto;
  max-width: 600px;
  padding: 0 14px;
  width: 100%;

  @media (${breakpoints.LARGE}) {
    max-width: 1024px;
  }
`
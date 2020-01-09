import styled from 'styled-components'

import breakpoints from 'common/breakpoints'

export const Header = styled.header`
  margin-bottom: 20px;
  padding: 24px 0;

  @media (${breakpoints.LARGE}) {
    display: none;
  }
`

export const WrapperLogo = styled.div`
  margin: 0 auto;
  width: 166px;

  img {
    width: 100%;
  }
`

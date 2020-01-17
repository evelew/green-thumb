import styled from 'styled-components'

import breakpoints from 'common/breakpoints'
import colors from 'common/colors'

export const Logo = styled.div`
  display: none;

  @media (${breakpoints.LARGE}) {
    align-items: center;
    display: flex;
    position: absolute;
    left: 0;
    transform: rotate(-90deg);
    transform-origin: 0 0;
    top: 570px;
    width: 100%;
  }

  &:before {
    @media (${breakpoints.LARGE}) {
      background-color: ${colors['greenPea']};
      content: '';
      display: inline-block;
      margin-right: 40px;
      height: 2px;
      width: 259px;
    }
  }

  img {
    width: 100%;

    @media (${breakpoints.LARGE}) {
      width: 208px;
    }
  }
`

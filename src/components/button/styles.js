import styled, { css } from 'styled-components'

import colors from 'common/colors'
import breakpoints from 'common/breakpoints'

export const Button = styled.button`
  align-items: center;
  background: ${colors['darkGreen']};
  border-radius: 25px;
  color: white;
  display: flex;
  font-size: 16px;
  justify-content: center;
  padding: 12px 16px;

  ${props =>
    props.theme === 'ghost' &&
    css`
      background: transparent;
      border: 1px solid ${colors['darkGreen']};
      color: ${colors['darkGreen']};

      svg {
        path {
          stroke: ${colors['darkGreen']};
        }
      }
    `};

  @media (${breakpoints.LARGE}) {
    background: transparent;
    border: 1px solid ${colors['darkGreen']};
    color: ${colors['darkGreen']};

    &:hover {
      background: ${colors['darkGreen']};
      color: white;

      svg {
        path {
          stroke: white;
        }
      }
    }

    svg {
      path {
        stroke: ${colors['darkGreen']};
      }
    }
  }

  svg {
    margin-right: 12px;
  }
`

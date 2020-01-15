import styled, { css } from 'styled-components'

import colors from 'common/colors'
import breakpoints from 'common/breakpoints'

export const Button = styled.button`
  align-items: center;
  background: ${colors['greenPea']};
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
      border: 1px solid ${colors['greenPea']};
      color: ${colors['greenPea']};

      svg {
        path {
          stroke: ${colors['greenPea']};
        }
      }
    `};

  @media (${breakpoints.LARGE}) {
    background: transparent;
    border: 1px solid ${colors['greenPea']};
    color: ${colors['greenPea']};

    &:hover {
      background: ${colors['greenPea']};
      color: white;

      svg {
        path {
          stroke: white;
        }
      }
    }

    svg {
      path {
        stroke: ${colors['greenPea']};
      }
    }
  }

  svg {
    margin-right: 12px;
  }
`

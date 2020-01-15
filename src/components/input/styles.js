import styled from 'styled-components'

import breakpoints from 'common/breakpoints'
import colors from 'common/colors'

export const Wrapper = styled.div`
  align-items: center;
  background: white;
  border-radius: 5px;
  box-shadow: 0px 20px 34px rgba(0, 0, 0, 0.0758577);
  display: flex;
  margin-bottom: 20px;
  padding: 20px 32px;

  @media (${breakpoints.LARGE}) {
    box-shadow: none;
    cursor: pointer;
    flex-flow: column;
    height: 190px;
    justify-content: center;
    width: 215px;
  }

  &:hover {
    @media (${breakpoints.LARGE}) {
      background: ${props => (props.color ? props.color : colors['coral'])};

      p {
        color: white;
      }
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  p {
    color: #acacac;
    font-size: 16px;

    @media (${breakpoints.LARGE}) {
      margin-top: 20px;
    }
  }
`

export const WrapperIcon = styled.div`
  margin-right: 28px;

  @media (${breakpoints.LARGE}) {
    margin-right: 0;
  }
`

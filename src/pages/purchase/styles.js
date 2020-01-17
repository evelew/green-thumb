import styled from 'styled-components'

import { default as ContainerBase } from 'components/container'
import Button from 'components/button'

import colors from 'common/colors'
import breakpoints from 'common/breakpoints'

export const Contact = styled(ContainerBase)`
  min-height: 0;
  padding-top: 26px;
  padding-bottom: 32px;

  @media (${breakpoints.LARGE}) {
    padding: 43px 48px;
    width: 381px;
  }
`

export const ContactTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 16px;

  @media (${breakpoints.LARGE}) {
    font-size: 40px;
  }
`

export const ContactIntro = styled.p`
  color: ${colors['doveGray']};
  font-size: 16px;
  margin-bottom: 25px;
`

export const Label = styled.label`
  display: flex;
  flex-flow: column;
  margin-bottom: 22px;

  @media (${breakpoints.LARGE}) {
    margin-bottom: 30px;
  }

  strong {
    color: ${props =>
        props.isInvalid === true ? colors['torchRed'] : colors['doveGray']};
    font-size: 16px;
    margin-left: 15px;
  }

  input {
    background: white;
    border: 1px solid;
    border-color: ${props =>
      props.isInvalid === true ? colors['torchRed'] : 'transparent'};
    border-radius: 19px;
    color: ${colors['alto']};
    font-size: 14px;
    height: 40px;
    margin-top: 6px;
    outline: none;
    padding: 6px 20px;

    ::placeholder {
      color: ${props =>
        props.isInvalid === true ? colors['torchRed'] : colors['alto']};
    }
  }
`

export const MessageError = styled.p`
  color: ${colors['torchRed']};
  font-size: 12px;
  margin-top: 5px;
  padding: 0 4px;

  span {
    background-color: ${colors['torchRed']};
    border-radius: 50%;
    color: white;
    display: inline-block;
    height: 14px;
    line-height: 15px;
    margin-right: 7px;
    text-align: center;
    width: 14px;
  }
`

export const SubmitButton = styled(Button)`
  width: 100%;
`

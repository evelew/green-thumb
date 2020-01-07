import styled, { css } from 'styled-components';

import Colors from 'common/colors';

export default styled.button`
  background: ${Colors['darkGreen']};
  border-radius: 25px;
  color: white;
  font-size: 16px;
  padding: 12px 16px;

  ${props => props.ghost && css`
    background: transparent;
    border: 1px solid ${Colors['darkGreen']};
    color: ${Colors['darkGreen']};
  `}
`;
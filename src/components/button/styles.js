import styled, { css } from "styled-components";

import Colors from "common/colors";

export const Button = styled.button`
  align-items: center;
  background: ${Colors["darkGreen"]};
  border-radius: 25px;
  color: white;
  display: flex;
  font-size: 16px;
  justify-content: center;
  padding: 12px 16px;

  ${props =>
    props.ghost &&
    css`
      background: transparent;
      border: 1px solid ${Colors["darkGreen"]};
      color: ${Colors["darkGreen"]};
    `};

  svg {
    margin-right: 12px;
  }
`;

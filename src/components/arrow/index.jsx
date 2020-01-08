import styled, { css } from "styled-components";

import { ReactComponent as Icon } from "assets/icons/arrow.svg";

const Arrow = styled(Icon)`
  ${props =>
    props.direction === "left" &&
    css`
      transform: rotateY(180deg);
    `};
`;

export default Arrow;

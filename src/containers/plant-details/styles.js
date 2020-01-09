import styled from "styled-components";

import colors from "common/colors";
import breakpoints from "common/breakpoints";

export const Title = styled.h1`
  font-size: 35px;
  margin-bottom: 4px;

  @media (${breakpoints.LARGE}) {
    font-size: 50px;
  }
`;

export const Price = styled.p`
  color: #d6d6d6;
  font-size: 24px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 14px;

  @media (${breakpoints.LARGE}) {
    justify-content: flex-start;
  }
`;

export const Detail = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 16px;

  svg {
    height: auto;
    margin-right: 10px;
    width: 26px;

    g {
      fill: ${colors["grey1"]};
    }
  }

  p {
    color: ${colors["grey1"]};
    font-size: 16px;
  }
`;

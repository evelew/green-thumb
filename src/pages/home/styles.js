import styled from "styled-components";

import { default as BaseButton } from "components/button";

import Colors from "common/colors";

export const Content = styled.section`
  background-color: ${Colors["grey"]};
  height: 100vh;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 35px;
  margin-bottom: 35px;
  text-align: center;
`;

export const Button = styled(BaseButton)`
  display: block;
  font-weight: 600;
  margin: 0 auto;
  width: 174px;
`;

export const Image = styled.img`
  width: 98%;
`;
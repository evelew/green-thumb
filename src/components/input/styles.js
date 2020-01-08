import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  background: white;
  border-radius: 5px;
  box-shadow: 0px 20px 34px rgba(0, 0, 0, 0.0758577);
  display: flex;
  margin-bottom: 20px;
  padding: 20px 32px;

  &:last-of-type {
    margin-bottom: 0;
  }

  p {
    color: #acacac;
    font-size: 16px;
  }
`;

export const WrapperImage = styled.div`
  margin-right: 28px;
`;

import React from "react";

import * as Styles from "./styles";

export default function Input({ icon, name }) {
  return (
    <Styles.Wrapper>
      <Styles.WrapperImage>
        <img src={icon} alt="" />
      </Styles.WrapperImage>

      <p>{name}</p>
    </Styles.Wrapper>
  );
}

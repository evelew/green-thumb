import React from "react";

import Arrow from 'components/arrow';
import * as Styles from "./styles";

export default function Button({ children, theme, arrow, arrowDirection }) {
  return (
    <Styles.Button theme={theme}>
      {arrow && <Arrow direction={arrowDirection} />}
      {children}
    </Styles.Button>
  );
}

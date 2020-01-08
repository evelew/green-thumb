import React from "react";

import Arrow from 'components/arrow';
import * as Styles from "./styles";

export default function Button({ children, ghost, arrow, arrowDirection }) {
  return (
    <Styles.Button ghost={ghost}>
      {arrow && <Arrow direction={arrowDirection} />}
      {children}
    </Styles.Button>
  );
}

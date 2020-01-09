import React from "react";

import Arrow from 'components/arrow';
import * as Styles from "./styles";

export default function Button(props) {
  const { children, theme, arrow, arrowDirection } = props;
  
  return (
    <Styles.Button theme={theme} {...props}>
      {arrow && <Arrow direction={arrowDirection} />}
      {children}
    </Styles.Button>
  );
}

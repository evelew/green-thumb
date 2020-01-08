import React from "react";

import Input from "components/input";
import Button from "components/button";
import * as Styles from "./styles";

export default function Question({
  imageSrc,
  imageAlt,
  items,
  prevButtonText
}) {
  return (
    <>
      <Styles.WrapperImage>
        <img src={imageSrc} alt={imageAlt} />
      </Styles.WrapperImage>

      <Styles.Title>
        First set the amount of <strong>sunlight</strong> your plant will get.
      </Styles.Title>

      {items.map(item => (
        <Input icon={item.icon} name={item.name} />
      ))}

      <Styles.WrapperButtons>
        <Button arrow>next</Button>
        <Button ghost arrow arrowDirection="left">
          {prevButtonText ? prevButtonText : "previous"}
        </Button>
      </Styles.WrapperButtons>
    </>
  );
}

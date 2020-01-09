import React from "react";

import Input from "components/input";
import Button from "components/button";
import * as Styles from "./styles";

export default function Question({
  imageSrc,
  imageAlt,
  items,
  subtitle: Subtitle,
  title: Title,
  nextButtonText,
  prevButtonText
}) {
  return (
    <>
      <Styles.WrapperImage>
        <img src={imageSrc} alt={imageAlt} />
      </Styles.WrapperImage>

      <Styles.Title>
        <Title />
      </Styles.Title>

      {Subtitle && (
        <Styles.Subtitle>
          <Subtitle />
        </Styles.Subtitle>
      )}

      <Styles.WrapperOptions>
        {items.map(item => (
          <Input icon={item.icon} name={item.name} />
        ))}
      </Styles.WrapperOptions>

      <Styles.WrapperButtons>
        <Button arrow>{nextButtonText ? nextButtonText : "next"}</Button>
        <Button arrow theme="ghost" arrowDirection="left">
          {prevButtonText ? prevButtonText : "previous"}
        </Button>
      </Styles.WrapperButtons>
    </>
  );
}

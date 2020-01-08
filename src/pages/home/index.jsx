import React from "react";

import LogoGreenthumb from "assets/images/logo-greenthumb.svg";

import Header from "components/header";
import Container from "components/container";
import Button from "components/button";

import * as Styles from "./styles";

export default function Home() {
  return (
    <Styles.Content>
      <Container>
        <Header />
        <Styles.LogoDesktop>
          <img src={LogoGreenthumb} alt="" />
        </Styles.LogoDesktop>
        <Styles.Title>Find your next green friend</Styles.Title>
        <Button arrow>start quizz</Button>
      </Container>
    </Styles.Content>
  );
}

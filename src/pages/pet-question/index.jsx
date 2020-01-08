import React from "react";

import Dog from "assets/images/dog.png";
import Pet from "assets/images/inputs/pet/pet.svg";
import NoAnswer from "assets/images/inputs/pet/no-answer.svg";

import Header from "components/header";
import Container from "components/container";
import Question from "containers/question";

export default function PetQuestion() {
  const items = [
    {
      icon: Pet,
      name: "Yes"
    },
    {
      icon: NoAnswer,
      name: "No/They don't care"
    }
  ];

  return (
    <Container>
      <Header />

      <Question
        title={() => (
          <>
            Do you have pets? Do they <strong>chew</strong> plants?
          </>
        )}
        imageSrc={Dog}
        imageAlt=""
        items={items}
        nextButtonText="finish"
      />
    </Container>
  );
}


import React from "react";
import ButtonLink from "../Atoms/Links/ButtonLink";
import Container from "./Container";
import TwoThirds from "./TwoThirds";
import Title from "../Atoms/Title";

export default function Article({
  title,
  children,
}: {
  children?: React.ReactNode;
  title?: React.ReactNode;
}) {
  return (
    <Container>
      <div className="p-5">
        <TwoThirds
          first={
            title && (
              <div className="md:sticky md:top-5 ">
                <Title>{title}</Title>
                <span className="block">
                  <ButtonLink href="/">« Home</ButtonLink>
                </span>
              </div>
            )
          }
        >
          {children}
        </TwoThirds>
      </div>
    </Container>
  );
}

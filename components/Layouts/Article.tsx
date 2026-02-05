
import React from "react";
import ButtonLink from "../Atoms/Links/ButtonLink";
import Container from "./Container";
import TwoThirds from "./TwoThirds";
import Title from "../Atoms/Title";
import { HomeIcon } from "@heroicons/react/24/outline";

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
                  <ButtonLink to="/"><HomeIcon className="inline w-5 h-5 mr-1" /> Home</ButtonLink>
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

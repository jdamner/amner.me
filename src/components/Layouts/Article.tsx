import React from "react";
import { WithChildren } from "../../types/WithChildren.type";
import ButtonLink from "../Links/ButtonLink";
import Container from "./Container";
import TwoThirds from "./TwoThirds";
export default function Article({ first, image, children, offset = false }: WithChildren & { first?: React.ReactNode | React.ReactNode[], image?: React.ReactNode | React.ReactNode[], offset?: boolean }): React.JSX.Element {
    return (
        <Container>
            <TwoThirds top first={
                (first||image) && <div className={offset ? '-mt-10 md:-mt-20 h-full' : ''}>
                    {image}
                    <div className='md:sticky md:top-5'>
                        {first}
                        <span className='hidden md:block'>
                            <ButtonLink href='/'>« Home</ButtonLink>
                        </span>
                    </div>
                </div>
            }>
                {children}
            </TwoThirds>
        </Container>
    )
}
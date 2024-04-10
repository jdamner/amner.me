'use client'
import React from "react";
import ButtonLink from "../Links/ButtonLink";
import Container from "./Container";
import TwoThirds from "./TwoThirds";

import Image from "next/image";

export default function Article({ first, image, children, offset = false }: { children?: React.ReactNode, first?: React.ReactNode, image?: string, offset?: boolean }) {
    return (
        <Container>
            <TwoThirds top first={
                (first || image) && <div className={offset ? '-mt-10 md:-mt-20 h-full' : ''}>
                    {image && <Image src={image} className="border-2 border-slate-500 mb-5 bg-white"
                        loader={({ src }) => src}
                        alt=""
                        width={500}
                        height={500}
                        priority />}
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
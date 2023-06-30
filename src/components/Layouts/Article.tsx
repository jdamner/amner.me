import { WithChildren } from "../../types/WithChildren.type";
import ButtonLink from "../Links/ButtonLink";
import Container from "./Container";
import TwoThirds from "./TwoThirds";
export default function Article({ first, children }: WithChildren & { first?: React.ReactNode | React.ReactNode[] }) {
    return (
        <Container>
            <TwoThirds top first={
                <div className='-mt-20'>
                    {first}
                    <span className='hidden md:block'>
                        <ButtonLink href='/'>« Home</ButtonLink>
                    </span>
                </div>
            }>
                {children}
            </TwoThirds>
        </Container>
    )
}
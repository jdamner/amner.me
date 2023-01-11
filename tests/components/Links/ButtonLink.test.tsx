import { render } from "@testing-library/react"
import ButtonLink from "../../../src/components/Links/ButtonLink"

describe("ButtonLink", () => {
  it("renders correctly", () => {
    const { container } = render(<ButtonLink href='/'>Test</ButtonLink>)
    expect(container).toMatchSnapshot()
  })
})

import { render } from "@testing-library/react"
import InlineLink from "../../../src/components/Links/Inline"

describe("InlineLink", () => {
  it("renders correctly", () => {
    const { container } = render(<InlineLink href='/'>Test</InlineLink>)
    expect(container).toMatchSnapshot()
  })
})

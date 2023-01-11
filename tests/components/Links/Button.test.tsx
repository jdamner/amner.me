import { render } from "@testing-library/react"
import Button from "../../../src/components/Links/Button"

describe("Button", () => {
  it("renders correctly", () => {
    const { container } = render(<Button>Test</Button>)
    expect(container).toMatchSnapshot()
  })
})

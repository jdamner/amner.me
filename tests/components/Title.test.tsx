import { render } from "@testing-library/react"
import Title from "../../src/components/Global/Title"

describe("Title", () => {
  it("renders correctly", () => {

    const { container } = render(<Title title="TEST">Here's the children</Title>)
    expect(container).toMatchSnapshot()
  })
})

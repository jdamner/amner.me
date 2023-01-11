
import { render } from "@testing-library/react"
import ContactDetails from "../../src/components/Global/ContactDetails"

describe("Corner", () => {
  it("renders correctly", () => {
    const { container } = render(<ContactDetails />)
    expect(container).toMatchSnapshot()
  })
})

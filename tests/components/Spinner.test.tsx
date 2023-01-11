import { render } from "@testing-library/react"
import Spinner from "../../src/components/Global/Spinner"

describe("Seperator", () => {
  it("renders correctly", () => {
    const { container } = render(<Spinner />)
    expect(container).toMatchSnapshot()
  })
})

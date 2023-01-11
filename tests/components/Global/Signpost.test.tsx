import { render } from "@testing-library/react"
import Signpost from "../../../src/components/Global/Signpost"

describe("Signpost", () => {
  it("renders correctly", () => {
    const { container } = render(<Signpost><p>Empty</p></Signpost>)
    expect(container).toMatchSnapshot()
  })
})

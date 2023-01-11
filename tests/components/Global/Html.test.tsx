import { render } from "@testing-library/react"
import Html from "../../../src/components/Global/Html"

describe("Html", () => {
  it("renders correctly", () => {
    const { container } = render(<Html content="<p>This is HTML!!</p>" />)
    expect(container).toMatchSnapshot()
  })
})

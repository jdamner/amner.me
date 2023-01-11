import { render } from "@testing-library/react"
import NavBar from "../../../src/components/Global/NavBar"

describe("NavBar", () => {
  it("renders correctly", () => {
    const { container } = render(<NavBar><a href="/">Home</a></NavBar>);
    expect(container).toMatchSnapshot()
  })
})

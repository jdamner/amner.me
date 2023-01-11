import { render } from "@testing-library/react"
import TabButton from "../../../src/components/Links/TabButton"

describe("TabButton", () => {
  it("renders correctly", () => {
    const handleClick = jest.fn()
    const { container } = render(<TabButton index={1} name={'Test'} onClick={handleClick} active={true} />)
    expect(container).toMatchSnapshot()
  })
})

import { render } from "@testing-library/react"
import describe, { test, expect } from "@playwright/test"
import TabButton from "../../../../src/components/Links/TabButton"

describe("TabButton", () => {
  test("renders correctly", () => {
    const handleClick = () => console.log('test')
    const { container } = render(<TabButton index={1} name={'Test'} onClick={handleClick} active={true} />)
    expect(container).toMatchSnapshot()
  })
})

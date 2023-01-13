import { render } from "@testing-library/react"
import describe, { test, expect } from "@playwright/test"
import NavBar from "../../../../src/components/Global/NavBar"

describe("NavBar", () => {
  test("renders correctly", () => {
    const { container } = render(<NavBar><a href="/">Home</a></NavBar>);
    expect(container).toMatchSnapshot()
  })
})

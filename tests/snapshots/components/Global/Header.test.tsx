import { render } from "@testing-library/react"
import describe, { test, expect } from "@playwright/test"
import Header from "../../../../src/components/Global/Header"

describe("Header", () => {
  test("renders correctly", () => {
    const { container } = render(<Header title="Page Not Found" subtitle="Not Found"><p>Something Here</p></Header>)
    expect(container).toMatchSnapshot()
  })
})

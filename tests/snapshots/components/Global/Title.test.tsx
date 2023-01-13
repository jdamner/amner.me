import { render } from "@testing-library/react"
import describe, { test, expect } from "@playwright/test"
import Title from "../../../../src/components/Global/Title"

describe("Title", () => {
  test("renders correctly", () => {
    const { container } = render(<Title title="TEST">Here's the children</Title>)
    expect(container).toMatchSnapshot()
  })
})

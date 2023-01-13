import { render } from "@testing-library/react"
import describe, { test, expect } from "@playwright/test"
import Button from "../../../../src/components/Links/Button"

describe("Button", () => {
  test("renders correctly", () => {
    const { container } = render(<Button>Test</Button>)
    expect(container).toMatchSnapshot()
  })
})

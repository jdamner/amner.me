import { render } from "@testing-library/react"
import describe, { test, expect } from "@playwright/test"
import InlineLink from "../../../../src/components/Links/Inline"

describe("InlineLink", () => {
  test("renders correctly", () => {
    const { container } = render(<InlineLink href='/'>Test</InlineLink>)
    expect(container).toMatchSnapshot()
  })
})

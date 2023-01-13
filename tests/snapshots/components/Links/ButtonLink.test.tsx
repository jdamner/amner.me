import { render } from "@testing-library/react"
import describe, { test, expect } from "@playwright/test"
import ButtonLink from "../../../../src/components/Links/ButtonLink"

describe("ButtonLink", () => {
  test("renders correctly", () => {
    const { container } = render(<ButtonLink href='/'>Test</ButtonLink>)
    expect(container).toMatchSnapshot()
  })
})

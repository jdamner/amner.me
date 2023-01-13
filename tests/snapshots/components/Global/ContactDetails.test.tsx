
import { render } from "@testing-library/react"
import describe, { test, expect } from "@playwright/test"
import ContactDetails from "../../../../src/components/Global/ContactDetails"

describe("ContactDetails", () => {
  test("renders correctly", () => {
    const { container } = render(<ContactDetails />)
    expect(container).toMatchSnapshot()
  })
})

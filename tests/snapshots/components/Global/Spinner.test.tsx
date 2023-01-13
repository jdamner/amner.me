import { render } from "@testing-library/react"
import describe, { test, expect } from "@playwright/test"
import Spinner from "../../../../src/components/Global/Spinner"

describe("Spinner", () => {
  test("renders correctly", () => {
    const { container } = render(<Spinner />)
    expect(container).toMatchSnapshot()
  })
})

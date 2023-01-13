import { render } from "@testing-library/react"
import describe, { test, expect } from "@playwright/test"
import Signpost from "../../../../src/components/Global/Signpost"

describe("Signpost", () => {
  test("renders correctly", () => {
    const { container } = render(<Signpost><p>Empty</p></Signpost>)
    expect(container).toMatchSnapshot()
  })
})

import React from "react"
import { render } from "@testing-library/react"

import NotFoundPage from "../../src/pages/404"

describe("NotFoundPage", () => {
  it("renders correctly", () => {
    const { container } = render(<NotFoundPage />)
    expect(container).toMatchSnapshot()
  })
})

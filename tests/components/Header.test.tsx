import React from "react"
import { render } from "@testing-library/react"

import Header from "../../src/components/Global/Header"

describe("Header", () => {
  it("renders correctly", () => {
    const { container } = render(<Header title="Page Not Found" subtitle="Not Found"><p>Something Here</p></Header>)
    expect(container).toMatchSnapshot()
  })
})

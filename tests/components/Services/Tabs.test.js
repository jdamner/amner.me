import React from "react"
import { render } from "@testing-library/react"

import Tabs from "@components/Services/Tabs"

describe("Tabs", () => {
  it("renders correctly", () => {
    const { container } = render(<Tabs />)
    expect(container).toMatchInlineSnapshot(`<div />`)
  })
})

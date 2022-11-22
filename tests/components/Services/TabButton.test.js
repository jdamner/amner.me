import React from "react"
import { render } from "@testing-library/react"

import TabButton from "@components/Services/TabButton"

describe("TabButton", () => {
  it("renders correctly", () => {
    const { container } = render(<TabButton />)
    expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="tab-button "
    role="button"
  >
    <h3 />
  </div>
</div>
`)
  })
})

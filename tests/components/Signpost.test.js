import React from "react"
import Signpost from "@components/Signpost"
import { render } from "@testing-library/react"

describe("Signpost", () => {
  it("renders correctly", () => {
    const { container } = render(<Signpost />)
    expect(container).toMatchInlineSnapshot(`
<div>
  <button
    class="signpost"
    style="top: -150px;"
  >
    <div
      class="signpost-top"
    />
    <div
      class="signpost-content"
    >
      <span>
        Contact
      </span>
    </div>
    <div
      class="signpost-bottom"
    />
  </button>
</div>
`)
  })
})

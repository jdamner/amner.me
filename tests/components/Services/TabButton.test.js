import React from "react"
import renderer from "react-test-renderer"

import TabButton from "@components/Services/TabButton"

describe("TabButton", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<TabButton />).toJSON()
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="tab-button "
        role="button"
      >
        <h3 />
      </div>
    `)
  })
})

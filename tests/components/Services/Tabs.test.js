import React from "react"
import renderer from "react-test-renderer"

import Tabs from "@components/Services/Tabs"

describe("Tabs", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Tabs />).toJSON()
    expect(tree).toMatchInlineSnapshot(`null`)
  })
})

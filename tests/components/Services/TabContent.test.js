import React from "react"
import renderer from "react-test-renderer"

import TabContent from "@components/Services/TabContent"

describe("TabContent", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <TabContent
          tab={{
            frontmatter: {
              title: "TEST",
              description: "TEST",
            },
            html: "TEST",
          }}
        />
      )
      .toJSON()
    expect(tree).toMatchInlineSnapshot(`
<div>
  No Content
</div>
`)
  })
})

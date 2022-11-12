import React from "react"
import renderer from "react-test-renderer"

import PostList from "../../PostList/PostList"

describe("PostList", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<PostList />).toJSON()
    expect(tree).toMatchInlineSnapshot(`null`)
  })
})

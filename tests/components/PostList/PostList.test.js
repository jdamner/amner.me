import React from "react"
import { render } from "@testing-library/react"

import PostList from "@components/PostList/PostList"

describe("PostList", () => {
  it("renders correctly", () => {
    const { container } = render(<PostList />)
    expect(container).toMatchInlineSnapshot(`<div />`)
  })
})

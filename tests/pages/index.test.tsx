import React from "react"
import { render } from "@testing-library/react"

import IndexPage from "../../src/pages/index"
import { getTestPosts } from "../helper"

describe("NotFoundPage", () => {
  it("renders correctly", () => {
    const { container } = render(<IndexPage posts={ getTestPosts() } services={ getTestPosts() } />)
    expect(container).toMatchSnapshot()
  })
})

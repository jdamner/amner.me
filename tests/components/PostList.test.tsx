import { render } from "@testing-library/react"

import { getTestPosts } from "../helper"
import PostList from "../../src/components/Global/PostList"

describe("PostList", () => {
  it("renders correctly", () => {
    const { container } = render(<PostList posts={ getTestPosts() } />)
    expect(container).toMatchSnapshot()
  })
})

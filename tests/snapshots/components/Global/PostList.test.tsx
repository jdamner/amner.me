import { render } from "@testing-library/react"
import describe, { test, expect } from "@playwright/test"
import { getTestPosts } from "../../../helper"
import PostList from "../../../../src/components/Global/PostList"

describe("PostList", () => {
  test("renders correctly", () => {
    const { container } = render(<PostList posts={ getTestPosts() } />)
    expect(container).toMatchSnapshot()
  })
})

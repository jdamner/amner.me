
import { render } from "@testing-library/react"
import describe, { test, expect } from "@playwright/test"
import Template from "../../../src/pages/[slug]"
import { getTestPost, getTestPosts } from "../../helper"

describe("SlugJs", () => {
  test("renders correctly", () => {
    const { container } = render(<Template post={ getTestPost() } posts={ getTestPosts() } />)
    expect(container).toMatchSnapshot()
  })
})

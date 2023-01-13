import { render } from "@testing-library/react"
import describe, { test, expect } from "@playwright/test"

import Blog from "../../../../src/components/Global/Blog"
import { getTestPosts } from "../../../helper"

describe("Blog", () => {
  test("renders correctly", () => {
    const { container } = render(<Blog posts={ getTestPosts() } />)
    expect(container).toMatchSnapshot()
  })
})

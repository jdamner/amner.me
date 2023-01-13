import { render } from "@testing-library/react"
import describe, { test, expect } from "@playwright/test"
import Tabs from "../../../../src/components/Global/Tabs"
import { getTestPosts } from "../../../helper"

describe("Tabs", () => {
  test("renders correctly", () => {
    const { container } = render(<Tabs tabs={ getTestPosts() } content='<p>Test Content</p>' />)
    expect(container).toMatchSnapshot()
  })
})

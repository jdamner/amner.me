
import { render } from "@testing-library/react"
import Template from "../../src/pages/[slug]"
import { getTestPost, getTestPosts } from "../helper"

describe("NotFoundPage", () => {
  it("renders correctly", () => {
    const { container } = render(<Template post={ getTestPost() } posts={ getTestPosts() } />)
    expect(container).toMatchSnapshot()
  })
})

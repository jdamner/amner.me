import { render } from "@testing-library/react"
import Blog from "../../../src/components/Global/Blog"
import { getTestPosts } from "../../helper"

describe("Blog", () => {
  it("renders correctly", () => {
    const { container } = render(<Blog posts={ getTestPosts() } />)
    expect(container).toMatchSnapshot()
  })
})

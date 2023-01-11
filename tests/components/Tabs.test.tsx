import { render } from "@testing-library/react"
import Tabs from "../../src/components/Global/Tabs"
import { getTestPosts } from "../helper"

describe("Tabs", () => {
  it("renders correctly", () => {
    const { container } = render(<Tabs tabs={ getTestPosts() } />)
    expect(container).toMatchSnapshot()
  })
})

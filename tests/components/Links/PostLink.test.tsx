import { render } from "@testing-library/react"
import PostLink from "../../../src/components/Links/PostLink"
import { getTestPost } from "../../helper"

describe("PostLink", () => {
  it("renders correctly", () => {
    const { container } = render(<PostLink post={ getTestPost() }/>)
    expect(container).toMatchSnapshot()
  })
})

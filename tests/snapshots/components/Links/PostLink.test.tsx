import { render } from "@testing-library/react"
import describe, { test, expect } from "@playwright/test"
import PostLink from "../../../../src/components/Links/PostLink"
import { getTestPost } from "../../../helper"

describe("PostLink", () => {
  test("renders correctly", () => {
    const { container } = render(<PostLink post={ getTestPost() }/>)
    expect(container).toMatchSnapshot()
  })
})

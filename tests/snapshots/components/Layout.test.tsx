import { render } from "@testing-library/react"
import describe, { test, expect } from "@playwright/test"
import Layout from "../../../src/components/Layout"

describe("Layout", () => {
  test("renders correctly", () => {
    const { container } = render(<Layout title="TEST"><p>Empty</p></Layout>)
    expect(container).toMatchSnapshot()
  })
})

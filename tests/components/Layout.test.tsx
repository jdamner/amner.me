import React from "react"
import { render } from "@testing-library/react"
import Layout from "../../src/components/Layout"

describe("Layout", () => {
  it("renders correctly", () => {
    const { container } = render(<Layout title="TEST"><p>Empty</p></Layout>)
    expect(container).toMatchSnapshot()
  })
})

import React from "react"
import Layout from "@components/Layout"
import { render } from "@testing-library/react"

describe("Layout", () => {
  it("renders correctly", () => {
    const { container } = render(<Layout title="TEST" />)
    expect(container).toMatchInlineSnapshot(`
<div>
  <main
    class="site"
    id="page"
  >
    <button
      class="signpost"
      style="top: -150px;"
    >
      <div
        class="signpost-top"
      />
      <div
        class="signpost-content"
      >
        <span>
          Contact
        </span>
      </div>
      <div
        class="signpost-bottom"
      />
    </button>
    <div
      class="container"
      id="home"
      style="opacity: 0;"
    />
  </main>
  <footer
    id="footer"
  >
    <small>
      © James Amner 
      2023
    </small>
  </footer>
</div>
`)
  })
})

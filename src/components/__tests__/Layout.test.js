import React from "react"
import Layout from "../Layout"
import renderer from "react-test-renderer"

describe("Layout", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Layout title="TEST" />).toJSON()
    expect(tree).toMatchInlineSnapshot(`
      [
        <title>
          TEST - Amner.me
        </title>,
        <main
          className="site"
          id="page"
        >
          <button
            className="signpost"
            onClick={[Function]}
            style={
              {
                "top": "-150px",
              }
            }
          >
            <div
              className="signpost-top"
            />
            <div
              className="signpost-content"
            >
              <span>
                Contact
              </span>
            </div>
            <div
              className="signpost-bottom"
            />
          </button>
          <div
            className="container"
            id="home"
            style={
              {
                "opacity": 0,
              }
            }
          />
        </main>,
        <footer
          id="footer"
        >
          <small>
            © James Amner 
            2022
          </small>
        </footer>,
      ]
    `)
  })
})

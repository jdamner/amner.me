import React from "react"
import Signpost from "@components/Signpost"
import renderer from "react-test-renderer"

describe("Signpost", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Signpost />).toJSON()
    expect(tree).toMatchInlineSnapshot(`
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
    `)
  })
})

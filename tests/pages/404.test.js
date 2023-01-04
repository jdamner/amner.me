import React from "react"
import { render } from "@testing-library/react"

import NotFoundPage from "../../src/pages/404"

describe("NotFoundPage", () => {
  it("renders correctly", () => {
    const { container } = render(<NotFoundPage />)
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
    >
      <section
        class="title"
        id="title"
      >
        <div
          class="title-wrap"
        >
          <div
            class="title-image"
          />
          <div
            class="title-content"
          >
            <div
              class="corner"
              style="transform: rotate(-90deg); top: -50rem;"
            >
              <svg
                height="496.000000pt"
                preserveAspectRatio="xMidYMid meet"
                version="1.0"
                viewBox="0 0 493.000000 496.000000"
                width="493.000000pt"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  fill="#000000"
                  stroke="none"
                  transform="translate(0.000000,496.000000) scale(0.100000,-0.100000)"
                >
                  <path
                    d="M10 2480 l0 -2480 75 0 75 0 2 483 3 482 345 5 345 5 3 165 c2 116 6 166 15 172 6 4 103 8 214 8 l203 0 2 642 3 641 140 72 c221 113 335 197 508 375 74 77 152 169 196 234 70 103 191 325 191 351 0 33 23 35 630 35 384 0 609 4 621 11 18 9 19 24 19 213 0 177 2 205 16 210 9 3 94 6 190 6 l174 0 0 344 c0 304 2 345 16 350 9 3 222 6 475 6 l459 0 0 75 0 75 -2460 0 -2460 0 0 -2480z m1746 2322 c15 -9 49 -120 69 -223 22 -118 20 -342 -4 -462 -107 -531 -526 -925 -1066 -1002 -55 -8 -128 -15 -163 -15 -64 0 -226 22 -297 41 -73 19 -100 27 -117 34 -17 7 -18 55 -18 814 0 444 3 811 7 814 9 9 1575 9 1589 -1z m263 -1 c21 -13 59 -191 72 -334 22 -251 -25 -506 -140 -752 -190 -405 -574 -717 -1008 -821 -216 -51 -446 -54 -660 -9 -125 26 -123 25 -123 100 0 72 7 77 67 54 102 -38 367 -59 523 -40 332 40 605 180 839 427 324 342 445 826 321 1287 -11 43 -18 82 -15 88 8 11 105 12 124 0z m1461 -280 l0 -289 -22 -6 c-30 -8 -936 -8 -965 0 -23 6 -23 9 -23 165 0 87 -4 180 -9 206 -27 146 -33 184 -27 198 5 13 72 15 526 15 l520 0 0 -289z m378 277 c9 -9 12 -86 12 -285 0 -259 -1 -273 -19 -283 -21 -11 -209 -14 -235 -4 -14 5 -16 40 -16 289 0 217 3 285 13 288 27 11 233 7 245 -5z m-378 -848 l0 -160 -540 0 c-603 0 -552 -7 -530 70 17 58 40 173 40 201 0 14 5 30 12 37 9 9 137 12 515 12 l503 0 0 -160z m-2306 -1406 c3 -9 6 -258 6 -554 0 -523 -1 -540 -19 -550 -21 -11 -258 -14 -285 -4 -14 5 -16 61 -16 523 0 389 3 520 12 529 7 7 26 12 43 13 16 0 77 13 135 29 58 15 108 28 111 29 4 1 10 -6 13 -15z m-874 -49 c52 -9 169 -18 260 -21 91 -2 168 -4 173 -4 4 0 7 -231 7 -514 0 -459 -2 -515 -16 -520 -20 -8 -528 -8 -548 0 -14 6 -16 63 -16 546 l0 540 23 -5 c12 -4 65 -13 117 -22z m438 -1297 l3 -118 -291 0 -290 0 0 113 c0 63 3 117 7 120 4 4 133 6 287 5 l281 -3 3 -117z"
                  />
                </g>
              </svg>
            </div>
            <h1
              class="title-content-title"
            >
              Page Not Found
            </h1>
            <p>
              Sorry, we couldn’t find what you were looking for.
              <br />
              <a
                href="/"
              >
                Go home
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
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

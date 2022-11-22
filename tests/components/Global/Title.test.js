import React from "react"
import renderer from "react-test-renderer"

import Title from "@components/Global/Title"

describe("Title", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Title text="TEST" />).toJSON()
    expect(tree).toMatchInlineSnapshot(`
<div
  className="blog-wrap-title"
  style={
    {
      "opacity": 0,
      "transform": "translateY(-100px) translateZ(0)",
    }
  }
>
  <div
    className="seperator-wrap"
  >
    <svg
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
      viewBox="0 0 1332.000000 212.000000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="none"
        transform="translate(0.000000,212.000000) scale(0.100000,-0.100000)"
      >
        <path
          d="M6580 2084 c-218 -27 -447 -116 -640 -248 -100 -68 -263 -232 -334 -333 -32 -46 -63 -83 -69 -83 -7 0 -23 10 -37 21 -48 39 -160 109 -237 147 -194 97 -387 142 -611 142 -229 0 -403 -38 -597 -129 -121 -57 -266 -156 -373 -255 -60 -56 -160 -182 -218 -276 -53 -85 -144 -285 -144 -316 0 -7 -9 -18 -19 -24 -13 -7 -266 -10 -750 -10 l-731 0 0 -194 c0 -149 -3 -196 -13 -205 -10 -8 -216 -10 -715 -10 -385 1 -706 -2 -711 -6 -14 -8 -14 -62 -1 -70 12 -7 12579 -7 12591 1 11 7 11 45 0 62 -7 12 -134 14 -717 15 l-709 2 -6 200 c-3 110 -6 201 -7 202 -1 2 -336 4 -744 5 l-743 3 -30 85 c-39 108 -125 271 -189 358 -65 87 -212 234 -301 300 -38 29 -128 81 -200 117 -208 104 -385 145 -620 145 -271 -1 -519 -71 -734 -208 -35 -22 -69 -38 -75 -36 -6 2 -22 21 -36 41 -49 73 -217 237 -310 303 -157 112 -326 187 -519 231 -84 19 -364 34 -451 23z m445 -194 c138 -35 286 -100 395 -173 139 -94 330 -292 330 -343 0 -21 -38 -64 -56 -64 -7 0 -35 31 -63 69 -68 91 -175 191 -275 256 -106 69 -145 88 -252 123 -143 48 -205 57 -374 56 -134 -1 -169 -4 -257 -27 -275 -71 -507 -236 -665 -472 -34 -52 -68 -95 -75 -95 -14 0 -53 53 -53 73 0 8 23 50 51 93 60 92 215 249 312 317 140 97 348 181 512 207 101 15 378 4 470 -20z m-90 -175 c110 -23 165 -42 261 -89 100 -48 229 -141 291 -209 64 -69 133 -167 133 -188 0 -10 -15 -38 -32 -62 -18 -24 -42 -57 -54 -72 l-20 -29 -58 89 c-122 186 -285 306 -503 367 -61 17 -106 22 -203 22 -129 0 -187 -9 -302 -49 -225 -78 -434 -292 -507 -517 -7 -21 -16 -40 -21 -43 -4 -3 -33 40 -65 95 l-56 100 32 58 c118 208 298 373 507 462 80 34 120 46 227 69 67 15 294 12 370 -4z m-2093 -165 c279 -55 477 -158 665 -345 125 -126 209 -250 269 -399 30 -77 26 -88 -36 -84 -33 3 -36 7 -85 103 -67 133 -122 211 -208 298 -222 223 -493 337 -802 337 -422 0 -800 -231 -990 -606 -31 -60 -60 -115 -66 -122 -6 -8 -26 -12 -47 -10 -55 4 -53 30 12 161 125 250 309 434 551 551 196 95 320 124 537 125 81 1 171 -4 200 -9z m4151 -19 c122 -34 166 -50 252 -93 243 -123 432 -313 552 -553 77 -155 78 -169 7 -163 -38 3 -39 4 -94 111 -86 169 -166 268 -307 385 -282 231 -696 305 -1049 187 -231 -77 -447 -243 -580 -442 -37 -56 -114 -206 -114 -223 0 -12 -40 -23 -71 -18 -38 5 -34 39 14 141 144 303 415 543 726 641 147 47 220 56 411 52 140 -3 191 -8 253 -25z m-4200 -166 c229 -34 418 -129 584 -294 102 -101 236 -311 218 -341 -7 -12 -165 -13 -183 -1 -7 4 -31 36 -52 71 -75 122 -225 252 -364 316 -139 63 -317 88 -474 65 -244 -36 -452 -173 -595 -391 l-42 -65 -88 -3 c-102 -3 -109 3 -79 72 79 178 266 369 453 465 205 105 405 139 622 106z m4058 0 c230 -35 418 -130 586 -297 101 -99 213 -272 213 -328 0 -18 -6 -20 -83 -20 -52 0 -89 5 -99 13 -9 6 -32 39 -53 72 -21 33 -65 88 -99 123 -178 186 -403 274 -661 259 -262 -15 -502 -151 -647 -367 -28 -41 -58 -81 -66 -87 -24 -20 -171 -17 -179 3 -14 38 91 207 204 324 146 154 356 267 554 299 147 24 202 25 330 6z m-1971 -106 c175 -48 304 -154 378 -311 45 -95 68 -193 51 -215 -10 -11 -110 -13 -573 -11 l-561 3 -4 25 c-1 14 3 50 10 80 72 313 398 513 699 429z m-2050 -369 c111 -37 250 -141 217 -162 -6 -4 -189 -8 -405 -8 -344 0 -393 2 -399 15 -14 37 149 138 273 170 82 21 229 14 314 -15z m4043 6 c112 -35 269 -146 237 -167 -9 -5 -187 -9 -408 -9 -357 0 -393 2 -399 17 -16 41 175 151 307 177 46 9 214 -3 263 -18z m2545 -288 c8 -8 12 -55 12 -145 0 -122 -2 -133 -20 -143 -14 -8 -1392 -10 -4740 -9 -4146 1 -4722 3 -4735 16 -19 19 -22 262 -3 281 17 17 9469 17 9486 0z"
        />
        <path
          d="M24 106 c-3 -8 -4 -27 -2 -43 l3 -28 6643 -3 6642 -2 0 45 0 45 -6640 0 c-5717 0 -6641 -2 -6646 -14z"
        />
      </g>
    </svg>
  </div>
  <h2>
    TEST
  </h2>
  <div
    className="seperator-wrap rotate"
  >
    <svg
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
      viewBox="0 0 1332.000000 212.000000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="none"
        transform="translate(0.000000,212.000000) scale(0.100000,-0.100000)"
      >
        <path
          d="M6580 2084 c-218 -27 -447 -116 -640 -248 -100 -68 -263 -232 -334 -333 -32 -46 -63 -83 -69 -83 -7 0 -23 10 -37 21 -48 39 -160 109 -237 147 -194 97 -387 142 -611 142 -229 0 -403 -38 -597 -129 -121 -57 -266 -156 -373 -255 -60 -56 -160 -182 -218 -276 -53 -85 -144 -285 -144 -316 0 -7 -9 -18 -19 -24 -13 -7 -266 -10 -750 -10 l-731 0 0 -194 c0 -149 -3 -196 -13 -205 -10 -8 -216 -10 -715 -10 -385 1 -706 -2 -711 -6 -14 -8 -14 -62 -1 -70 12 -7 12579 -7 12591 1 11 7 11 45 0 62 -7 12 -134 14 -717 15 l-709 2 -6 200 c-3 110 -6 201 -7 202 -1 2 -336 4 -744 5 l-743 3 -30 85 c-39 108 -125 271 -189 358 -65 87 -212 234 -301 300 -38 29 -128 81 -200 117 -208 104 -385 145 -620 145 -271 -1 -519 -71 -734 -208 -35 -22 -69 -38 -75 -36 -6 2 -22 21 -36 41 -49 73 -217 237 -310 303 -157 112 -326 187 -519 231 -84 19 -364 34 -451 23z m445 -194 c138 -35 286 -100 395 -173 139 -94 330 -292 330 -343 0 -21 -38 -64 -56 -64 -7 0 -35 31 -63 69 -68 91 -175 191 -275 256 -106 69 -145 88 -252 123 -143 48 -205 57 -374 56 -134 -1 -169 -4 -257 -27 -275 -71 -507 -236 -665 -472 -34 -52 -68 -95 -75 -95 -14 0 -53 53 -53 73 0 8 23 50 51 93 60 92 215 249 312 317 140 97 348 181 512 207 101 15 378 4 470 -20z m-90 -175 c110 -23 165 -42 261 -89 100 -48 229 -141 291 -209 64 -69 133 -167 133 -188 0 -10 -15 -38 -32 -62 -18 -24 -42 -57 -54 -72 l-20 -29 -58 89 c-122 186 -285 306 -503 367 -61 17 -106 22 -203 22 -129 0 -187 -9 -302 -49 -225 -78 -434 -292 -507 -517 -7 -21 -16 -40 -21 -43 -4 -3 -33 40 -65 95 l-56 100 32 58 c118 208 298 373 507 462 80 34 120 46 227 69 67 15 294 12 370 -4z m-2093 -165 c279 -55 477 -158 665 -345 125 -126 209 -250 269 -399 30 -77 26 -88 -36 -84 -33 3 -36 7 -85 103 -67 133 -122 211 -208 298 -222 223 -493 337 -802 337 -422 0 -800 -231 -990 -606 -31 -60 -60 -115 -66 -122 -6 -8 -26 -12 -47 -10 -55 4 -53 30 12 161 125 250 309 434 551 551 196 95 320 124 537 125 81 1 171 -4 200 -9z m4151 -19 c122 -34 166 -50 252 -93 243 -123 432 -313 552 -553 77 -155 78 -169 7 -163 -38 3 -39 4 -94 111 -86 169 -166 268 -307 385 -282 231 -696 305 -1049 187 -231 -77 -447 -243 -580 -442 -37 -56 -114 -206 -114 -223 0 -12 -40 -23 -71 -18 -38 5 -34 39 14 141 144 303 415 543 726 641 147 47 220 56 411 52 140 -3 191 -8 253 -25z m-4200 -166 c229 -34 418 -129 584 -294 102 -101 236 -311 218 -341 -7 -12 -165 -13 -183 -1 -7 4 -31 36 -52 71 -75 122 -225 252 -364 316 -139 63 -317 88 -474 65 -244 -36 -452 -173 -595 -391 l-42 -65 -88 -3 c-102 -3 -109 3 -79 72 79 178 266 369 453 465 205 105 405 139 622 106z m4058 0 c230 -35 418 -130 586 -297 101 -99 213 -272 213 -328 0 -18 -6 -20 -83 -20 -52 0 -89 5 -99 13 -9 6 -32 39 -53 72 -21 33 -65 88 -99 123 -178 186 -403 274 -661 259 -262 -15 -502 -151 -647 -367 -28 -41 -58 -81 -66 -87 -24 -20 -171 -17 -179 3 -14 38 91 207 204 324 146 154 356 267 554 299 147 24 202 25 330 6z m-1971 -106 c175 -48 304 -154 378 -311 45 -95 68 -193 51 -215 -10 -11 -110 -13 -573 -11 l-561 3 -4 25 c-1 14 3 50 10 80 72 313 398 513 699 429z m-2050 -369 c111 -37 250 -141 217 -162 -6 -4 -189 -8 -405 -8 -344 0 -393 2 -399 15 -14 37 149 138 273 170 82 21 229 14 314 -15z m4043 6 c112 -35 269 -146 237 -167 -9 -5 -187 -9 -408 -9 -357 0 -393 2 -399 17 -16 41 175 151 307 177 46 9 214 -3 263 -18z m2545 -288 c8 -8 12 -55 12 -145 0 -122 -2 -133 -20 -143 -14 -8 -1392 -10 -4740 -9 -4146 1 -4722 3 -4735 16 -19 19 -22 262 -3 281 17 17 9469 17 9486 0z"
        />
        <path
          d="M24 106 c-3 -8 -4 -27 -2 -43 l3 -28 6643 -3 6642 -2 0 45 0 45 -6640 0 c-5717 0 -6641 -2 -6646 -14z"
        />
      </g>
    </svg>
  </div>
</div>
`)
  })
})

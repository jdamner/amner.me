import React from "react";

export default function Flash({ rotation }) {
    const style = {
        transform: `rotate(${rotation}deg)`
    }
    return (
        <div className="flash" style={style}>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="288.000000pt" height="606.000000pt" viewBox="0 0 288.000000 606.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,606.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path d="M970 6025 c-189 -31 -402 -115 -537 -211 -197 -141 -336 -357 -387
-605 -26 -126 -30 -243 -12 -366 56 -399 288 -672 650 -765 100 -26 298 -30
394 -9 49 11 66 11 75 2 15 -15 23 -1461 9 -1461 -5 0 -80 99 -167 220 -87
121 -162 223 -167 226 -17 11 -21 -5 -25 -104 l-3 -98 39 -60 c22 -32 63 -90
90 -129 28 -38 73 -101 101 -140 27 -38 101 -142 165 -230 63 -88 131 -182
150 -210 108 -154 393 -552 450 -630 28 -38 102 -142 165 -230 62 -88 130
-182 150 -210 20 -27 56 -77 79 -110 47 -66 291 -408 355 -496 23 -31 58 -81
79 -110 132 -188 204 -284 212 -281 6 1 10 51 10 115 l0 112 -103 143 c-57 78
-110 155 -118 170 -11 21 -14 81 -14 281 l0 254 -47 69 c-93 136 -84 25 -79
973 3 462 5 891 5 952 l1 113 41 26 c107 67 213 71 302 11 39 -27 45 -2 15 60
-27 54 -72 89 -126 99 -41 8 -141 -10 -185 -33 -18 -9 -33 -11 -38 -6 -5 5 -8
67 -7 138 l3 129 69 34 c58 30 78 35 136 35 56 0 77 -5 113 -27 25 -14 48 -22
51 -17 16 25 -47 121 -94 146 -42 22 -139 19 -204 -6 -31 -11 -60 -18 -66 -14
-6 4 -10 57 -10 131 l0 124 47 30 c91 58 186 66 272 24 28 -15 55 -24 58 -20
13 13 -48 112 -84 136 -49 34 -154 34 -227 2 -27 -13 -53 -19 -57 -15 -4 5 -9
159 -12 343 -3 192 -10 356 -17 385 -44 195 -69 271 -128 395 -80 166 -206
326 -359 456 -132 111 -336 206 -538 250 -100 22 -368 27 -475 9z m470 -158
c214 -55 362 -133 496 -260 247 -234 372 -503 402 -867 6 -63 8 -229 5 -367
l-6 -253 -31 0 c-17 0 -76 22 -133 50 -114 57 -199 72 -283 50 -103 -27 -95
-31 -114 52 -23 96 -73 199 -134 273 l-48 60 4 125 c5 149 -8 214 -67 335 -64
131 -169 221 -308 267 -94 30 -241 30 -332 0 -155 -53 -267 -169 -305 -318
-20 -76 -20 -123 -1 -193 33 -125 100 -216 200 -269 46 -25 60 -27 165 -27
109 0 118 2 175 31 102 53 155 147 155 279 0 49 -6 75 -30 122 -78 156 -254
191 -389 77 -45 -37 -64 -80 -65 -144 -1 -164 164 -254 282 -155 62 52 66 129
10 184 -65 64 -168 27 -168 -60 0 -46 -13 -50 -30 -9 -31 76 46 160 147 160
54 0 102 -36 139 -104 12 -21 15 -48 12 -97 -3 -56 -9 -76 -33 -110 -46 -65
-92 -84 -200 -84 -69 0 -99 5 -130 20 -139 69 -199 266 -127 417 115 245 465
291 670 88 194 -192 190 -563 -8 -755 -72 -71 -115 -100 -199 -135 -177 -73
-413 -64 -586 23 -137 69 -240 172 -310 312 -69 138 -89 229 -88 410 1 132 4
160 27 239 108 362 374 574 816 650 54 10 367 -4 420 -17z m-395 -997 c10 -31
-3 -59 -35 -75 -35 -18 -41 -18 -64 -2 -15 11 -16 17 -7 35 7 13 17 19 26 16
10 -4 18 3 25 20 11 31 46 35 55 6z m595 -485 c72 -148 70 -100 70 -1380 0
-910 -3 -1145 -12 -1145 -7 1 -48 51 -90 112 l-78 111 0 986 c0 1079 1 1052
-60 1190 l-30 70 45 62 c25 34 45 65 45 69 0 5 7 16 16 25 15 15 18 15 36 -2
10 -9 37 -53 58 -98z m-255 -158 c8 -13 23 -45 32 -73 16 -45 18 -129 20 -981
3 -753 1 -933 -9 -933 -13 1 -33 26 -119 149 l-44 64 -5 806 -5 806 -23 50
c-18 40 -20 52 -10 58 7 4 38 23 68 41 67 41 75 42 95 13z m630 -118 c22 -6
75 -29 118 -50 43 -22 106 -46 140 -52 l62 -13 0 -144 0 -145 -40 4 c-22 2
-79 24 -129 50 -83 43 -94 46 -177 50 -66 2 -100 -1 -130 -13 -22 -9 -45 -14
-50 -11 -5 4 -9 61 -9 129 0 114 2 124 23 143 28 26 63 44 102 54 43 10 46 10
90 -2z m67 -440 c24 -12 63 -32 88 -45 25 -13 65 -26 90 -29 87 -13 81 0 78
-158 l-3 -142 -49 2 c-35 1 -62 10 -98 32 -110 69 -218 86 -321 52 -31 -10
-59 -16 -62 -13 -3 3 -5 61 -5 129 0 121 1 124 27 149 59 55 172 65 255 23z
m33 -434 c50 -25 120 -51 155 -59 l65 -13 3 -794 c1 -437 0 -809 -3 -827 -7
-41 -16 -35 -72 46 -22 31 -107 152 -188 267 -82 116 -177 251 -212 302 l-63
91 0 481 0 480 33 25 c46 35 74 45 137 45 46 1 70 -6 145 -44z"/>
                </g>
            </svg>
        </div>
    );
}
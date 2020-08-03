import React from 'react'
import './loading.css'
export const Loading = () => {
    return (
        <main>
  <svg viewBox="0 0 700 700">
    <defs>
      <g id="circles">
        <symbol id="dot">
          <circle cx="30" cy="30" r="30" />
        </symbol>
        <symbol id="moving-dot">
                <circle className="scanner" cx="175" cy="175" r="28" />
        </symbol>
      </g>

      <g id="filters">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur"
                         mode="matrix"
                         values="1 0 0 0 0
                                 0 1 0 0 0
                                 0 0 1 0 0
                                 0 0 0 19 -9"
                         result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>

        <filter id="glow" filterUnits="userSpaceOnUse" x="-20%" y="-20%" height="140%" width="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="12" />
        </filter>
        <filter id="outer-glow" filterUnits="userSpaceOnUse" x="-50%" y="-50%" height="220%" width="220%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="outer-glow"/>
        </filter>
      </g>
    </defs>

    <svg aria-labelledby="title"
         aria-describedby="desc"
         aria-busy="true"
         role="progressbar"
         aria-valuemin="0"
         aria-valuemax="100">
      <title id="title">loading effect</title>
      <desc id="desc">
        Loading effect
      </desc>

        <g className="circles centered">
          <use className="dot" href="#dot" x="106"  y="106"/>
          <use className="dot" href="#dot" x="0"    y="150"/>
          <use className="dot" href="#dot" x="-106" y="106"/>
          <use className="dot" href="#dot" x="-150" y="0"/>
          <use className="dot" href="#dot" x="-106" y="-106"/>
          <use className="dot" href="#dot" x="0"    y="-150"/>
          <use className="dot" href="#dot" x="106"  y="-106"/>
          <use className="dot" href="#dot" x="150"  y="0"/>
          <use className="dot--light" href="#moving-dot" x="-150" y="-150" />
      </g>
      <g className="centered">
        <use className="dot--glowing" href="#moving-dot" x="-150" y="-150" />
      </g>
    </svg>
  </svg>

  {/* <p class="credits">
    Based on the design by
    <a target="_blank" href="https://dribbble.com/shots/2177533-Spinner-Loader-Gooey-light-Effect">
      <b>Christophe Kerebel</b>
    </a>
  </p> */}
</main>
    )
}

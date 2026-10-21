import React from 'react';

/**
 * CharminarSvg - An authentic architectural line-art illustration of
 * Hyderabad's iconic Charminar monument, styled as a subtle blueprint sketch
 * inspired by Zoho's heritage monument backdrop.
 */
export const CharminarSvg = ({ className = '', ...props }) => {
  return (
    <svg
      viewBox="0 0 700 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        {/* Soft Linear Gradient for the sketch strokes */}
        <linearGradient id="charminarGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9933" stopOpacity="0.8" />
          <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="80%" stopColor="#38BDF8" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
        </linearGradient>

        <linearGradient id="archFill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#021E42" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#010E24" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      {/* Birds in flight above Charminar (like Zoho reference sketch) */}
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.75">
        {/* Bird 1 */}
        <path d="M 230 75 Q 240 65, 250 75 Q 260 65, 270 75" />
        {/* Bird 2 */}
        <path d="M 275 55 Q 283 47, 291 55 Q 299 47, 307 55" />
        {/* Bird 3 */}
        <path d="M 420 85 Q 430 75, 440 85 Q 450 75, 460 85" />
        {/* Bird 4 */}
        <path d="M 455 60 Q 462 53, 469 60 Q 476 53, 483 60" />
        {/* Bird 5 */}
        <path d="M 345 40 Q 352 34, 359 40 Q 366 34, 373 40" />
      </g>

      {/* Base / Plinth Steps */}
      <g stroke="currentColor" strokeWidth="1.5" opacity="0.85">
        <line x1="60" y1="580" x2="640" y2="580" />
        <line x1="75" y1="570" x2="625" y2="570" />
        <line x1="90" y1="560" x2="610" y2="560" />
        <line x1="105" y1="550" x2="595" y2="550" />
      </g>

      {/* Main Ground Floor Structure & Outer Walls */}
      <g stroke="currentColor" strokeWidth="1.5">
        {/* Main Base Block outline */}
        <rect x="135" y="270" width="430" height="280" opacity="0.6" />

        {/* LEFT MINARET (Tower 1 - Far Left) */}
        {/* Minaret Shaft */}
        <rect x="95" y="160" width="46" height="390" opacity="0.85" />
        <line x1="110" y1="160" x2="110" y2="550" strokeDasharray="3 3" opacity="0.4" />
        <line x1="126" y1="160" x2="126" y2="550" strokeDasharray="3 3" opacity="0.4" />

        {/* Minaret Balcony 1 (Lower) */}
        <path d="M 90 410 L 146 410 L 142 420 L 94 420 Z" fill="currentColor" fillOpacity="0.1" />
        <line x1="88" y1="405" x2="148" y2="405" strokeWidth="2" />
        {/* Balcony Brackets */}
        <path d="M 95 420 L 95 435 M 106 420 L 106 435 M 118 420 L 118 435 M 130 420 L 130 435 M 141 420 L 141 435" />

        {/* Minaret Balcony 2 (Middle) */}
        <path d="M 90 280 L 146 280 L 142 290 L 94 290 Z" fill="currentColor" fillOpacity="0.1" />
        <line x1="88" y1="275" x2="148" y2="275" strokeWidth="2" />
        <path d="M 96 290 L 96 302 M 107 290 L 107 302 M 118 290 L 118 302 M 129 290 L 129 302 M 140 290 L 140 302" />

        {/* Minaret Balcony 3 (Upper) */}
        <path d="M 90 160 L 146 160 L 142 170 L 94 170 Z" fill="currentColor" fillOpacity="0.1" />
        <line x1="88" y1="155" x2="148" y2="155" strokeWidth="2" />

        {/* Minaret Top Lantern / Pavillion */}
        <rect x="100" y="105" width="36" height="50" opacity="0.9" />
        {/* Arched openings in lantern */}
        <path d="M 106 150 L 106 125 Q 112 118, 118 125 L 118 150" strokeWidth="1.2" />
        <path d="M 122 150 L 122 125 Q 128 118, 134 125 L 134 150" strokeWidth="1.2" />
        {/* Dome & Finial */}
        <path d="M 97 105 Q 98 75, 118 65 Q 138 75, 139 105 Z" fill="currentColor" fillOpacity="0.15" strokeWidth="1.5" />
        {/* Finial / Kalasa */}
        <line x1="118" y1="65" x2="118" y2="35" strokeWidth="2" />
        <circle cx="118" cy="42" r="4.5" fill="currentColor" fillOpacity="0.3" />
        <circle cx="118" cy="53" r="3" fill="currentColor" fillOpacity="0.3" />

        {/* RIGHT MINARET (Tower 4 - Far Right) */}
        {/* Minaret Shaft */}
        <rect x="559" y="160" width="46" height="390" opacity="0.85" />
        <line x1="574" y1="160" x2="574" y2="550" strokeDasharray="3 3" opacity="0.4" />
        <line x1="590" y1="160" x2="590" y2="550" strokeDasharray="3 3" opacity="0.4" />

        {/* Minaret Balcony 1 (Lower) */}
        <path d="M 554 410 L 610 410 L 606 420 L 558 420 Z" fill="currentColor" fillOpacity="0.1" />
        <line x1="552" y1="405" x2="612" y2="405" strokeWidth="2" />
        <path d="M 559 420 L 559 435 M 570 420 L 570 435 M 582 420 L 582 435 M 594 420 L 594 435 M 605 420 L 605 435" />

        {/* Minaret Balcony 2 (Middle) */}
        <path d="M 554 280 L 610 280 L 606 290 L 558 290 Z" fill="currentColor" fillOpacity="0.1" />
        <line x1="552" y1="275" x2="612" y2="275" strokeWidth="2" />
        <path d="M 560 290 L 560 302 M 571 290 L 571 302 M 582 290 L 582 302 M 593 290 L 593 302 M 604 290 L 604 302" />

        {/* Minaret Balcony 3 (Upper) */}
        <path d="M 554 160 L 610 160 L 606 170 L 558 170 Z" fill="currentColor" fillOpacity="0.1" />
        <line x1="552" y1="155" x2="612" y2="155" strokeWidth="2" />

        {/* Minaret Top Lantern / Pavillion */}
        <rect x="564" y="105" width="36" height="50" opacity="0.9" />
        {/* Arched openings in lantern */}
        <path d="M 570 150 L 570 125 Q 576 118, 582 125 L 582 150" strokeWidth="1.2" />
        <path d="M 586 150 L 586 125 Q 592 118, 598 125 L 598 150" strokeWidth="1.2" />
        {/* Dome & Finial */}
        <path d="M 561 105 Q 562 75, 582 65 Q 602 75, 603 105 Z" fill="currentColor" fillOpacity="0.15" strokeWidth="1.5" />
        {/* Finial / Kalasa */}
        <line x1="582" y1="65" x2="582" y2="35" strokeWidth="2" />
        <circle cx="582" cy="42" r="4.5" fill="currentColor" fillOpacity="0.3" />
        <circle cx="582" cy="53" r="3" fill="currentColor" fillOpacity="0.3" />

        {/* INNER MINARETS / ACCENT TOWERS (Towers 2 & 3 in background perspective) */}
        {/* Inner Left Minor Tower */}
        <rect x="195" y="140" width="32" height="130" opacity="0.75" />
        <path d="M 192 140 Q 211 110, 229 140 Z" fill="currentColor" fillOpacity="0.1" strokeWidth="1.2" />
        <line x1="211" y1="110" x2="211" y2="90" strokeWidth="1.5" />
        <circle cx="211" cy="95" r="2.5" />

        {/* Inner Right Minor Tower */}
        <rect x="473" y="140" width="32" height="130" opacity="0.75" />
        <path d="M 470 140 Q 489 110, 507 140 Z" fill="currentColor" fillOpacity="0.1" strokeWidth="1.2" />
        <line x1="489" y1="110" x2="489" y2="90" strokeWidth="1.5" />
        <circle cx="489" cy="95" r="2.5" />

        {/* MAIN CENTRAL GRAND POINTED ARCH (Charminar's Iconic Signature Portal) */}
        <path
          d="M 215 550 L 215 410 C 215 320, 310 270, 350 250 C 390 270, 485 320, 485 410 L 485 550 Z"
          fill="url(#archFill)"
          strokeWidth="2.5"
        />

        {/* Arch Intrados (Inner Outline with Cusps/Keystone Accent) */}
        <path
          d="M 235 550 L 235 415 C 235 345, 315 300, 350 282 C 385 300, 465 345, 465 415 L 465 550"
          strokeWidth="1.5"
          opacity="0.8"
        />

        {/* Arch Radiating Voussoirs / Stone Joint Accents */}
        <path
          d="M 215 400 L 235 403 M 222 365 L 241 372 M 240 330 L 257 342 M 268 300 L 283 316 M 305 277 L 316 298 M 350 250 L 350 282 M 395 277 L 384 298 M 432 300 L 417 316 M 460 330 L 443 342 M 478 365 L 459 372 M 485 400 L 465 403"
          strokeWidth="1.2"
          opacity="0.65"
        />

        {/* Side Ground Arch Left */}
        <path
          d="M 148 550 L 148 450 C 148 395, 175 375, 190 365 C 200 375, 204 395, 204 450 L 204 550"
          strokeWidth="1.2"
          opacity="0.6"
        />
        {/* Side Ground Arch Right */}
        <path
          d="M 496 550 L 496 450 C 496 395, 500 375, 510 365 C 525 375, 552 395, 552 450 L 552 550"
          strokeWidth="1.2"
          opacity="0.6"
        />

        {/* FIRST & SECOND FLOOR CENTRAL GALLERIES & BALUSTRADES */}
        {/* Gallery Band Lower Line */}
        <line x1="141" y1="270" x2="559" y2="270" strokeWidth="2.2" />
        <line x1="141" y1="262" x2="559" y2="262" strokeWidth="1.2" />

        {/* Row of Miniature Arched Jharokhas / Windows across 1st Floor */}
        <g strokeWidth="1.2" opacity="0.8">
          <path d="M 160 258 L 160 240 Q 166 235, 172 240 L 172 258" />
          <path d="M 185 258 L 185 240 Q 191 235, 197 240 L 197 258" />
          <path d="M 210 258 L 210 240 Q 216 235, 222 240 L 222 258" />
          <path d="M 235 258 L 235 240 Q 241 235, 247 240 L 247 258" />
          <path d="M 260 258 L 260 240 Q 266 235, 272 240 L 272 258" />

          {/* Center Clock / Medallion Area */}
          <circle cx="350" cy="225" r="18" strokeWidth="1.8" />
          <circle cx="350" cy="225" r="14" strokeDasharray="2 2" strokeWidth="1" />
          {/* Clock Hands indicating forward momentum */}
          <line x1="350" y1="225" x2="350" y2="216" strokeWidth="1.5" />
          <line x1="350" y1="225" x2="358" y2="225" strokeWidth="1.5" />

          <path d="M 428 258 L 428 240 Q 434 235, 440 240 L 440 258" />
          <path d="M 453 258 L 453 240 Q 459 235, 465 240 L 465 258" />
          <path d="M 478 258 L 478 240 Q 484 235, 490 240 L 490 258" />
          <path d="M 503 258 L 503 240 Q 509 235, 515 240 L 515 258" />
          <path d="M 528 258 L 528 240 Q 534 235, 540 240 L 540 258" />
        </g>

        {/* Gallery Band Upper Line */}
        <line x1="141" y1="200" x2="559" y2="200" strokeWidth="2" />
        <line x1="141" y1="194" x2="559" y2="194" strokeWidth="1" />

        {/* Upper Balustrade / 2nd Floor Arches */}
        <g strokeWidth="1.1" opacity="0.75">
          <path d="M 245 190 L 245 174 Q 252 168, 259 174 L 259 190" />
          <path d="M 270 190 L 270 174 Q 277 168, 284 174 L 284 190" />
          <path d="M 295 190 L 295 174 Q 302 168, 309 174 L 309 190" />
          <path d="M 320 190 L 320 174 Q 327 168, 334 174 L 334 190" />

          {/* Central Upper Arch */}
          <path d="M 342 190 L 342 166 Q 350 158, 358 166 L 358 190" strokeWidth="1.5" />

          <path d="M 366 190 L 366 174 Q 373 168, 380 174 L 380 190" />
          <path d="M 391 190 L 391 174 Q 398 168, 405 174 L 405 190" />
          <path d="M 416 190 L 416 174 Q 423 168, 430 174 L 430 190" />
          <path d="M 441 190 L 441 174 Q 448 168, 455 174 L 455 190" />
        </g>

        {/* Top Parapet Roof Line & Qutb Shahi Merlons / Crestings */}
        <line x1="141" y1="150" x2="559" y2="150" strokeWidth="2" />

        {/* Ornate Battlement Crestings (Petal Shape Merlons across roof) */}
        <path
          d="M 148 150 Q 153 138, 158 150 Q 163 138, 168 150 Q 173 138, 178 150 Q 183 138, 188 150 M 230 150 Q 235 138, 240 150 Q 245 138, 250 150 Q 255 138, 260 150 Q 265 138, 270 150 Q 275 138, 280 150 Q 285 138, 290 150 Q 295 138, 300 150 Q 305 138, 310 150 Q 315 138, 320 150 Q 325 138, 330 150 Q 335 138, 340 150 Q 345 138, 350 150 Q 355 138, 360 150 Q 365 138, 370 150 Q 375 138, 380 150 Q 385 138, 390 150 Q 395 138, 400 150 Q 405 138, 410 150 Q 415 138, 420 150 Q 425 138, 430 150 Q 435 138, 440 150 Q 445 138, 450 150 Q 455 138, 460 150 Q 465 138, 470 150 M 512 150 Q 517 138, 522 150 Q 527 138, 532 150 Q 537 138, 542 150 Q 547 138, 552 150"
          strokeWidth="1.2"
          opacity="0.85"
        />

        {/* Subtle Decorative Floral Medallions in Arch Spandrels */}
        <circle cx="270" cy="340" r="10" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
        <circle cx="270" cy="340" r="4" fill="currentColor" fillOpacity="0.2" />

        <circle cx="430" cy="340" r="10" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
        <circle cx="430" cy="340" r="4" fill="currentColor" fillOpacity="0.2" />
      </g>
    </svg>
  );
};

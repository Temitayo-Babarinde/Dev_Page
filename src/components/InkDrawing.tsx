export default function InkDrawing({ kind = "portrait", className = "" }: { kind?: "portrait" | "laptop" | "hand" | "orbit"; className?: string }) {
  return <svg className={className} viewBox={kind === "hand" ? "0 0 620 180" : "0 0 400 400"} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      {kind === "portrait" ? <>
        <path d="M66 373 Q76 305 140 294 L160 282 L164 250 M236 250 L241 283 Q314 302 333 373"/>
        <path d="M139 296 L160 282 Q198 324 241 283 L261 298 M96 333 L111 372 M295 331 L286 372"/>
        <path d="M148 148 Q137 124 151 102 Q148 80 170 77 Q177 56 200 67 Q219 53 232 73 Q260 67 263 92 Q282 99 267 131 L263 156"/>
        <path d="M149 128 Q140 189 156 226 Q166 254 199 268 Q231 258 244 231 Q261 197 260 136"/>
        <path d="M147 158 Q128 143 132 179 Q133 196 149 195 M262 159 Q277 151 274 182 Q272 193 260 194"/>
        <path d="M151 120 Q181 130 203 113 Q231 131 260 117"/>
        <path d="M157 284 Q180 348 202 353 Q222 331 242 284 M157 311 L139 325 L170 348 M244 310 L263 327 L232 349"/>
        <path d="M183 356 L182 375 M218 356 L220 376"/>
        <path d="M65 376 Q205 382 336 376"/>
        {Array.from({ length: 13 }, (_, i) => <path key={i} d={`M${83+i*4} ${342-i*3} l20 22`} opacity=".35" strokeWidth="1"/> )}
        <path d="M173 157 L227 157 M173 180 L227 180" strokeDasharray="2 7" opacity=".25"/>
        <path d="M200 137 L200 233" strokeDasharray="2 7" opacity=".25"/>
        <ellipse cx="200" cy="184" rx="59" ry="81" strokeDasharray="3 9" opacity=".15"/>
        <path d="M302 85 Q330 102 312 126 M301 96 L311 127 L332 114"/>
      </> : kind === "laptop" ? <>
        <path d="M75 89 Q189 80 302 88 L309 264 L82 266 Z M88 103 L290 101 L294 247 L94 249 Z"/>
        <path d="M82 266 L39 309 Q173 324 349 306 L309 264 M39 309 L47 323 Q208 335 342 320 L349 306"/>
        <path d="M151 281 L237 280 L246 300 L142 301 Z M65 295 L116 295 M265 292 L321 291"/>
        <path d="M155 145 L125 174 L158 202 M235 145 L267 172 L238 199 M211 133 L188 213"/>
        <path d="M311 70 L321 52 M326 83 L348 76 M290 65 L290 45"/>
        <path d="M59 139 Q27 123 35 93 Q43 68 65 81 M58 151 Q20 150 19 118"/>
        <path d="M322 341 L355 333 L362 345 L327 354 Z M327 354 L316 354 L322 341 M352 335 L360 347"/>
        {Array.from({length:9},(_,i)=><path key={i} d={`M${101+i*20} 258 l8 -5`} opacity=".45" strokeWidth="1"/>)}
      </> : kind === "hand" ? <>
        <path d="M620 20 Q545 16 492 44 L407 65 Q389 62 374 75 L323 104 Q301 117 309 127 Q318 137 343 120 L379 103"/>
        <path d="M379 103 Q353 136 362 146 Q370 154 381 145 L415 110"/>
        <path d="M414 111 Q386 144 398 153 Q407 159 418 146 L447 118"/>
        <path d="M444 119 Q428 145 440 150 Q451 157 466 132 L492 97 Q561 105 620 90"/>
        <path d="M378 81 Q399 68 413 78 L442 94 M492 44 L518 95 M500 41 L526 96"/>
        <path d="M344 80 L452 162 L462 151 L355 68 Z M344 80 L330 62 L355 68 M446 156 L456 146"/>
        {Array.from({length:12},(_,i)=><path key={i} d={`M${526+i*6} ${41-i*.5} l-10 45`} strokeWidth=".8" opacity=".45"/>)}
        <path d="M324 134 Q291 147 278 137 Q251 127 233 145 Q219 159 188 148 Q146 134 117 153 L38 153" strokeDasharray="3 5"/>
      </> : <>
        <ellipse cx="200" cy="201" rx="142" ry="51" transform="rotate(-24 200 201)"/>
        <ellipse cx="200" cy="201" rx="142" ry="51" transform="rotate(39 200 201)"/>
        <ellipse cx="200" cy="201" rx="142" ry="51" transform="rotate(95 200 201)"/>
        <circle cx="200" cy="201" r="14"/><circle cx="82" cy="254" r="8" fill="currentColor"/>
        <circle cx="279" cy="110" r="7" fill="currentColor"/><path d="M90 88 l12 -15 m-23 4 l24 9"/>
      </>}
    </g>
  </svg>;
}

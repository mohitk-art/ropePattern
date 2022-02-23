<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1.0, user-scalable=0"/>
  <link rel="icon" type="image/x-icon" href="{{ asset('favicon.jpg') }}"/>
  <link rel="apple-touch-icon" href="{{ asset('favicon.jpg') }}"/>
  <link rel="apple-touch-icon-precomposed" href="{{ asset('favicon.jpg') }}"/>
  <link rel="shortcut icon" href="{{ asset('favicon.jpg') }}" type="image/x-icon"/>
  <!--<link rel="manifest" href="{{ asset('manifest.webmanifest') }}" />-->


  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"/>
  <link rel="stylesheet" href="{{ asset('frontend/assets/css/fontawesome.min.css') }}"/>
  <link rel="stylesheet" href="{{ asset('frontend/assets/slick.css') }}"/>
  <link rel="stylesheet" href="{{ asset('frontend/assets/slick-theme.css') }}"/>
  <!--<link rel="stylesheet" href="{{ asset('frontend/assets/css/style.css') }}">-->
  <link rel="stylesheet" href="{{ asset('frontend/assets/css/style.css?ver=') }}<?php echo rand(111,999)?>" />
  <link rel="stylesheet" href="{{ asset('frontend/assets/css/custom.css?ver=') }}<?php echo rand(111,999)?>" />
   <!--<link rel="stylesheet" href="{{ asset('frontend/assets/css/custom.css') }}">-->
  <!--<link rel="stylesheet" href="https://www.jqueryscript.net/demo/Flat-HTML5-Palette-Color-Picker-For-jQuery-colorPick-js/colorPick.css">-->
    <link href="https://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css"/>

  <title>Custom Braid</title>
  <style>

		.colorPickSelector {
		border-radius: 5px;
		width: 36px;
		height: 36px;
		cursor: pointer;
		-webkit-transition: all linear .2s;
		-moz-transition: all linear .2s;
		-ms-transition: all linear .2s;
		-o-transition: all linear .2s;
		transition: all linear .2s;
	}

	.colorPickSelector:hover { transform: scale(1.1); }
	
	
	#loaderdiv img{
	    width:100%;
	    max-width:300px;
	}
	

    .loaderImage {
  width: 200px;
  height: 100px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  animation-name: animateCloud;
  animation-duration: 2s;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0, 0, 0, 5.18);
  background-image: url("frontend/assets/loader/loader1.png");
}
    
@keyframes animateCloud  {
0% {background-image: url("frontend/assets/loader/loader1.png");}
10% {background-image: url("frontend/assets/loader/loader2.png");}
20% {background-image: url("frontend/assets/loader/loader3.png");}
30% {background-image: url("frontend/assets/loader/loader4.png");}
40% {background-image: url("frontend/assets/loader/loader5.png");}
50% {background-image: url("frontend/assets/loader/loader6.png");}
60% {background-image: url("frontend/assets/loader/loader7.png");}
70% {background-image: url("frontend/assets/loader/loader8.png");}
80% {background-image: url("frontend/assets/loader/loader9.png");}
90% {background-image: url("frontend/assets/loader/loader10.png");}
100% {background-image: url("frontend/assets/loader/loader11.png");}
}
  </style>
</head>

<body>

<!--<header class="main_header shadow-sm">-->
<!--    <div class="container">-->
<!--      <a href="{{asset('/demo')}}"><img src="{{asset('/frontend/assets/img/customlogo.png')}}" class="logo_img" /></a>-->
<!--    </div>-->
<!--  </header>-->
  

  <div id="hiddenPattren" class="d-none">
    <svg x="18" y="-177" version="1.0" xmlns="http://www.w3.org/2000/svg" width="64.000000pt" height="239.000000pt"
      viewBox="0 0 64.000000 239.000000" preserveAspectRatio="xMidYMid meet">
      <metadata>
        Created by potrace 1.16, written by Peter Selinger 2001-2019
      </metadata>
      <g transform="translate(0.000000,239.000000) scale(0.100000,-0.100000)">
        <path d="M0 1658 c0 -784 8 -1004 40 -1169 11 -57 20 -129 20 -159 0 -61 12
-147 36 -258 12 -55 20 -72 31 -70 19 4 203 391 245 513 45 134 121 281 199
384 38 51 69 97 69 102 0 4 -29 53 -66 108 -77 119 -173 316 -204 421 -13 41
-69 166 -126 277 -103 202 -142 304 -185 486 -18 78 -26 97 -41 97 -17 0 -18
-33 -18 -732z" />
      </g>
    </svg>

    <svg x="40" y="-140" version="1.0" xmlns="http://www.w3.org/2000/svg" width="245.000000pt" height="342.000000pt"
      viewBox="0 0 245.000000 342.000000" preserveAspectRatio="xMidYMid meet">
      <metadata>
        Created by potrace 1.16, written by Peter Selinger 2001-2019
      </metadata>
      <g transform="translate(0.000000,342.000000) scale(0.100000,-0.100000)">
        <path d="M1319 3369 c-24 -29 -69 -87 -99 -129 -52 -74 -109 -147 -239 -305
-31 -38 -79 -108 -105 -155 -27 -47 -101 -163 -165 -258 -137 -203 -138 -205
-151 -259 -8 -30 -32 -65 -96 -135 -96 -105 -121 -151 -158 -293 -19 -69 -58
-164 -127 -308 -55 -115 -119 -264 -141 -332 l-41 -123 33 -84 c18 -45 75
-171 127 -278 52 -107 110 -242 129 -299 57 -174 196 -411 240 -411 8 0 31 26
50 57 19 32 78 128 130 213 131 211 399 567 555 736 38 40 69 83 69 94 0 12 7
20 16 20 11 0 15 6 11 19 -3 14 62 85 270 292 176 176 291 299 321 344 27 41
140 165 274 301 126 127 228 235 228 241 0 6 -35 39 -77 74 -103 85 -280 263
-372 374 -41 50 -148 164 -237 255 -89 91 -173 184 -188 207 -48 78 -167 193
-200 193 -7 0 -33 -23 -57 -51z" />
      </g>
    </svg>

    <svg x="234" y="-301" version="1.0" xmlns="http://www.w3.org/2000/svg" width="369.000000pt" height="343.000000pt"
      viewBox="0 0 369.000000 343.000000" preserveAspectRatio="xMidYMid meet">
      <metadata>
        Created by potrace 1.16, written by Peter Selinger 2001-2019
      </metadata>
      <g transform="translate(0.000000,343.000000) scale(0.100000,-0.100000)">
        <path d="M945 3364 c-139 -111 -233 -204 -316 -310 -44 -57 -126 -152 -183
   -213 -203 -214 -456 -534 -440 -556 16 -22 294 -335 409 -460 60 -66 137 -154
   170 -195 79 -98 291 -309 387 -385 63 -50 75 -64 71 -82 -4 -18 -1 -23 16 -23
   13 0 21 -6 21 -17 0 -10 20 -32 43 -50 24 -18 103 -85 177 -149 74 -64 196
   -169 270 -233 74 -64 235 -211 357 -327 247 -236 395 -364 422 -364 19 0 125
   70 231 153 100 78 479 402 635 544 122 110 380 323 455 376 20 14 23 21 14 35
   -6 9 -105 102 -220 206 -115 103 -263 238 -330 300 -66 61 -273 230 -460 376
   -284 222 -372 297 -544 465 -113 110 -264 249 -335 310 -72 60 -218 196 -325
   301 -190 187 -400 364 -430 363 -8 0 -51 -29 -95 -65z" />
      </g>
    </svg>

    <svg x="557" y="-141" version="1.0" xmlns="http://www.w3.org/2000/svg" width="399.000000pt" height="349.000000pt"
      viewBox="0 0 399.000000 349.000000" preserveAspectRatio="xMidYMid meet">
      <metadata>
        Created by potrace 1.16, written by Peter Selinger 2001-2019
      </metadata>
      <g transform="translate(0.000000,349.000000) scale(0.100000,-0.100000)">
        <path d="M2655 3424 c-44 -36 -146 -120 -227 -185 -81 -66 -191 -162 -245
-213 -54 -50 -145 -130 -203 -176 -193 -154 -384 -317 -526 -446 -77 -71 -281
-239 -452 -373 -172 -134 -345 -273 -386 -310 -40 -36 -163 -147 -272 -245
-241 -217 -344 -317 -344 -332 0 -18 67 -76 306 -266 120 -96 257 -210 304
-254 47 -44 139 -125 205 -179 66 -55 179 -154 250 -222 132 -124 252 -223
270 -223 6 0 69 59 140 131 72 72 171 162 222 199 51 38 152 125 226 192 73
68 252 216 398 329 145 114 292 229 326 255 34 27 62 57 63 67 0 10 8 17 21
17 17 0 20 5 16 23 -4 19 17 39 152 144 212 166 320 262 609 542 223 215 377
357 455 417 15 12 27 26 27 31 0 5 -159 166 -352 359 -298 296 -384 376 -553
509 -110 87 -230 184 -266 217 -37 32 -71 58 -75 57 -5 0 -45 -30 -89 -65z" />
      </g>
    </svg>

    <svg x="932" y="-298" version="1.0" xmlns="http://www.w3.org/2000/svg" width="316.000000pt" height="342.000000pt"
      viewBox="0 0 316.000000 342.000000" preserveAspectRatio="xMidYMid meet">
      <metadata>
        Created by potrace 1.16, written by Peter Selinger 2001-2019
      </metadata>
      <g transform="translate(0.000000,342.000000) scale(0.100000,-0.100000)">
        <path d="M1205 3410 c-3 -5 -43 -38 -88 -72 -45 -34 -188 -166 -317 -292 -194
-190 -629 -592 -767 -709 -18 -16 -33 -37 -33 -47 0 -11 51 -58 138 -127 220
-174 341 -282 602 -538 220 -216 427 -404 480 -437 13 -9 18 -19 14 -35 -5
-19 -2 -23 15 -23 13 0 21 -6 21 -17 0 -10 35 -45 78 -79 90 -72 374 -337 482
-450 41 -44 114 -126 161 -184 114 -140 367 -400 388 -400 30 0 328 369 506
625 102 147 275 440 275 466 0 31 -148 308 -236 442 -92 140 -179 254 -339
442 -75 88 -179 215 -232 283 -118 151 -213 259 -419 472 -87 91 -177 192
-199 224 -63 94 -229 261 -366 367 -122 95 -151 111 -164 89z" />
      </g>
    </svg>

    <svg x="1255" y="-126" version="1.0" xmlns="http://www.w3.org/2000/svg" width="152.000000pt" height="334.000000pt"
      viewBox="0 0 152.000000 334.000000" preserveAspectRatio="xMidYMid meet">
      <metadata>
        Created by potrace 1.16, written by Peter Selinger 2001-2019
      </metadata>
      <g transform="translate(0.000000,334.000000) scale(0.100000,-0.100000)">
        <path d="M1282 3212 c-29 -71 -64 -163 -77 -205 -33 -102 -331 -695 -389 -775
-26 -35 -110 -152 -188 -260 -78 -108 -251 -342 -385 -519 -134 -177 -243
-328 -243 -335 0 -16 72 -107 275 -348 81 -96 167 -205 191 -243 24 -37 69
-101 100 -143 31 -42 82 -124 113 -183 72 -136 117 -201 139 -201 13 0 55 76
159 288 78 158 147 305 154 327 6 22 47 128 89 235 43 107 86 231 95 275 10
44 34 143 55 220 70 255 98 379 104 470 4 50 16 157 26 239 25 187 25 358 1
556 -11 85 -23 199 -27 253 -8 121 -100 470 -124 475 -11 1 -30 -35 -68 -126z" />
      </g>
    </svg>
  </div>
  
  <div id="previewImg"></div>
 
 
  @yield('content')
  

<!-- <div id="loaderdiv" style="display:none" class="d-flex">
     <img src="{{asset('frontend/assets/img/loader.gif')}}">
 </div> -->
 



<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<!--<script src="{{ asset('frontend/assets/js/htmltocanvs.js') }}"></script>-->
<!--<script type="text/javascript" src="https://unpkg.com/canvg@3.0.4/lib/umd.js"></script>-->
	
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
    crossorigin="anonymous"></script>
	<!--<script src="https://www.jqueryscript.net/demo/Flat-HTML5-Palette-Color-Picker-For-jQuery-colorPick-js/colorPick.js"></script>-->
  <script src="{{ asset('frontend/assets/slick.min.js?ver=') }}<?php echo rand(111,999)?>"></script>
  <script src="{{ asset('frontend/assets/js/main.js?ver=') }}<?php echo rand(111,999)?>"></script>
  <script src="{{ asset('frontend/assets/js/custom.js?ver=') }}<?php echo rand(111,999)?>"></script>
    @yield('scripts')
</body>

</html>
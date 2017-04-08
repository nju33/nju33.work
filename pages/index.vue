<template>
  <section>
    <Acoru ref="acoru" class="section-box" data-acoru-parent
      :onopened="onopened"
      :onclosed="onclosed"
      >

      <div>
        <header class="header" data-acoru-for="own">
          <h1 class="title">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 225 225"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
                <g>
                  <title>nju33</title>
                  <path d="M0,0l150,225l-150,0l0,-225Z" style="fill:#77b6cb;"/>
                    <clipPath id="_clip1"><path d="M0,0l150,225l-150,0l0,-225Z"/></clipPath>
                    <g clip-path="url(#_clip1)"><path d="M15.221,-45l-159.099,159.099l127.279,127.279l159.099,-159.099l-127.279,-127.279Z" style="fill:#777ccb;"/><path d="M184.903,16.654l-175.37,-101.25l-75,129.904l175.37,101.25l75,-129.904Z" style="fill:#d364af;"/></g>
                    <g><path d="M225,112.5l0,112.5l-81.881,0l81.881,-112.5Z" style="fill:#f6eb00;"/><path d="M150,105l75,120l-150,0l75,-120Z" style="fill:#dc5d62;"/><path d="M187.172,164.474l37.828,60.526l-81.881,0l44.053,-60.526Z" style="fill:#f8a500;"/><path d="M111.29,166.935l38.71,58.065l-75,0l36.29,-58.065Z" style="fill:#3a9d7b;"/></g>
                </g>
            </svg>
          </h1>
        </header>
        <div data-acoru-id="own" class="section-body" style="display:none">
          <section class="own-section">
            <h2 class="own-name">nju33 <small>佐々木純</small></h2>
            <div class="own-body">
              <p>
                JavaScriptがあれば永遠に暇にならない。<br/>
                朝に「あ、こうゆうの作りたいな」と思ったことが、夜までには作れちゃうような所が好きです。<br/>
                あと、お金が掛からない所😇
              </p>
              <div class="skill-tables">
                <div class="skill-table">
                  <h3>😆</h3>
                  <ul>
                    <li class="skill-progress skill-progress-js">JavaScript</li>
                    <li class="skill-progress skill-progress-css">CSS3</li>
                    <li class="skill-progress skill-progress-html">HTML5.1</li>
                    <li class="skill-progress skill-progress-wp">Wordpress</li>
                    <li class="skill-progress skill-progress-ad">Affinity Designer</li>
                    <li class="skill-progress skill-progress-csp">Clip Studio Paint</li>
                    <li class="skill-progress skill-progress-sketch">Sketch</li>
                  </ul>
                </div>
                <div class="skill-table">
                  <h3>😡</h3>
                  <ul>
                    <li class="skill-progress skill-progress-scala">Scala</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <div class="own-section flex">
            <h2 class="own-name">お問い合わせ <small>すべて必須項目です</small></h2>
            <Form/>
          </div>
        </div>
      </div>

      <section class="section electron">
        <header class="section-header electron" data-acoru-for="electron">
          <!-- <h2 class="section-title" data-acoru-for="electron">Electron Application</h2> -->
          <h2 class="section-title">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 54 59"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path
                d="M15.292,46.678c2.617,7.306 6.897,11.804 11.71,11.804c3.511,0 6.758,-2.393 9.291,-6.606c0.223,-0.37 0.103,-0.852 -0.268,-1.075c-0.371,-0.223 -0.852,-0.103 -1.075,0.268c-2.276,3.786 -5.072,5.846 -7.948,5.846c-3.998,0 -7.816,-4.012 -10.234,-10.765c-0.146,-0.408 -0.595,-0.62 -1.002,-0.474c-0.408,0.146 -0.62,0.595 -0.474,1.002Zm32.72,0.851c-5.983,3.52 -17.413,1.724 -28.168,-4.485c-4.579,-2.644 -8.593,-5.829 -11.683,-9.225c-0.292,-0.32 -0.268,-0.816 0.052,-1.107c0.32,-0.291 0.816,-0.268 1.107,0.052c2.979,3.274 6.866,6.358 11.308,8.922c10.15,5.861 20.839,7.605 26.311,4.649c-0.312,-0.546 -0.49,-1.179 -0.49,-1.854c0,-2.071 1.679,-3.75 3.751,-3.75c2.071,0 3.751,1.679 3.751,3.75c0,2.072 -1.68,3.751 -3.751,3.751c-0.817,0 -1.572,-0.261 -2.188,-0.703Zm-46.083,-6.327c-0.565,-7.01 6.803,-16.407 17.938,-22.836c4.625,-2.67 9.441,-4.566 13.966,-5.535c0.423,-0.091 0.839,0.179 0.93,0.602c0.091,0.423 -0.179,0.84 -0.602,0.93c-4.361,0.935 -9.024,2.77 -13.51,5.36c-10.487,6.055 -17.421,14.781 -17.18,21.018c0.092,-0.007 0.186,-0.01 0.28,-0.01c2.071,0 3.751,1.679 3.751,3.75c0,2.072 -1.68,3.751 -3.751,3.751c-2.072,0 -3.751,-1.679 -3.751,-3.751c0,-1.41 0.778,-2.638 1.929,-3.279Zm46.851,4.938c0.382,0.327 0.878,0.525 1.42,0.525c1.206,0 2.183,-0.978 2.183,-2.184c0,-1.206 -0.977,-2.183 -2.183,-2.183c-1.206,0 -2.184,0.977 -2.184,2.183c0,0.53 0.189,1.015 0.502,1.393c0.091,0.056 0.172,0.132 0.236,0.226c0.009,0.013 0.018,0.027 0.026,0.04Zm-45.029,0.525c-1.206,0 -2.184,-0.978 -2.184,-2.184c0,-1.206 0.978,-2.183 2.184,-2.183c1.206,0 2.183,0.977 2.183,2.183c0,1.206 -0.977,2.184 -2.183,2.184Zm26.585,-41.194c-0.623,1.206 -1.882,2.031 -3.334,2.031c-2.071,0 -3.751,-1.68 -3.751,-3.751c0,-2.072 1.68,-3.751 3.751,-3.751c2.072,0 3.751,1.679 3.751,3.751c0,0.054 -0.001,0.108 -0.003,0.162c6.208,3.211 10.523,14.161 10.523,26.812c0,5.203 -0.728,10.196 -2.082,14.524c-0.129,0.413 -0.569,0.643 -0.982,0.514c-0.413,-0.129 -0.643,-0.569 -0.514,-0.982c1.306,-4.173 2.01,-9.009 2.01,-14.056c0,-11.912 -3.959,-22.163 -9.369,-25.254Zm-2.761,27.906c-1.465,0.317 -2.908,-0.614 -3.225,-2.079c-0.316,-1.465 0.614,-2.909 2.079,-3.226c1.465,-0.316 2.909,0.615 3.226,2.08c0.316,1.465 -0.615,2.908 -2.08,3.225Zm19.118,-0.511c5.004,-5.912 6.751,-11.857 4.348,-16.02c-1.768,-3.063 -5.507,-4.68 -10.475,-4.745c-0.433,-0.005 -0.788,0.341 -0.794,0.774c-0.006,0.432 0.341,0.788 0.773,0.793c4.469,0.058 7.69,1.452 9.139,3.962c1.996,3.457 0.438,8.759 -4.187,14.223c-0.28,0.33 -0.239,0.825 0.091,1.105c0.331,0.279 0.825,0.238 1.105,-0.092Zm-27.659,-20.296c-7.643,-1.392 -13.685,0.065 -16.093,4.236c-1.798,3.113 -1.284,7.24 1.245,11.651c0.216,0.376 0.695,0.505 1.07,0.29c0.375,-0.215 0.505,-0.694 0.29,-1.069c-2.278,-3.974 -2.722,-7.536 -1.248,-10.088c2,-3.465 7.39,-4.765 14.455,-3.478c0.426,0.077 0.834,-0.205 0.911,-0.631c0.078,-0.425 -0.204,-0.834 -0.63,-0.911Zm7.968,-6.636c-1.206,0 -2.183,-0.977 -2.183,-2.183c0,-1.206 0.977,-2.184 2.183,-2.184c1.206,0 2.184,0.978 2.184,2.184c0,1.206 -0.978,2.183 -2.184,2.183Z"/>
              </svg>
          </h2>
        </header>

        <div class="list-wrapper" data-acoru-id="electron" style="display:none">
          <ul class="list">
            <li v-for="item in apps" class="card">
              <!-- <nuxt-link class="card-link" :to="`/electron-application/${item.name}`"> -->
              <a class="card-link" :href="item.url">
                <section>
                  <div class="item-icon-wrapper">
                    <div class="item-icon"
                      :style="{'background-image': `url(${item.icon})`}"></div>
                  </div>
                  <div class="item-body">
                    <h3 class="item-name" v-text="item.name"></h3>
                    <div class="item-desc" v-html="item.desc"></div>
                  </div>
                </section>
              </a>
              <!-- </nuxt-link> -->
            </li>
          </ul>
        </div>
      </section>

      <section class="section chrome">
        <header class="section-header chrome" data-acoru-for="chrome">
          <!-- <h2 class="section-title" data-acoru-for="chrome">Chrome Extension</h2> -->
          <h2 class="section-title">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 292 292"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path
                d="M280.482,91.647c4.151,11.818 9.149,29.423 10.178,41.586l0.191,2.403c0.319,4.516 0.41,9.04 0.338,13.537l-0.082,3.614c-0.228,4.515 -0.674,8.985 -1.302,13.428l-0.355,2.95c-0.847,5.18 -1.985,10.296 -3.378,15.367l-1.502,4.698c-1.138,3.65 -2.376,7.255 -3.796,10.815l-2.148,5.053c-1.675,3.751 -3.514,7.438 -5.499,11.043l-1.265,2.558l-0.701,1.029c-6.172,10.506 -13.738,20.246 -22.55,29.068l-2.012,2.048l-0.619,0.537c-3.988,3.788 -8.166,7.383 -12.627,10.761l-0.264,0.209c-4.634,3.46 -9.432,6.773 -14.557,9.723c-5.726,3.314 -11.607,6.018 -17.552,8.485l-0.929,0.391l-0.592,0.191c-17.443,6.973 -41.686,10.223 -59.693,10.223l51.208,-88.816c16.751,-13.337 27.539,-33.884 27.539,-56.989c0,-21.412 -9.295,-40.592 -23.997,-53.912l85.966,0Zm-134.799,126.751c-36.852,0 -67.231,-27.384 -72.074,-62.925l-50.207,-87.059l-0.055,-0.127l-5.617,8.111c-1.384,2.54 -2.731,5.116 -3.969,7.747l-2.686,6.282c-0.892,2.167 -1.775,4.361 -2.567,6.6c-0.892,2.485 -1.666,4.998 -2.403,7.52l-1.62,5.799c-0.674,2.704 -1.247,5.408 -1.766,8.13l-0.983,5.744c-0.401,2.667 -0.71,5.317 -0.947,7.966l-0.473,6.345c-0.118,2.422 -0.164,4.834 -0.164,7.256c0,2.422 0.036,4.843 0.164,7.256l0.473,6.345c0.246,2.649 0.564,5.317 0.947,7.966l0.983,5.744c0.528,2.722 1.092,5.426 1.766,8.13l1.62,5.799c0.747,2.504 1.511,5.034 2.403,7.52c0.792,2.221 1.684,4.406 2.567,6.6c0.874,2.094 1.711,4.197 2.686,6.272c1.238,2.631 2.585,5.189 3.978,7.756l1.812,3.56l0.838,1.302c1.602,2.74 3.368,5.353 5.153,7.966l2.859,4.251c1.721,2.349 3.605,4.588 5.49,6.846l3.769,4.515c1.639,1.793 3.396,3.505 5.125,5.226c1.73,1.739 3.432,3.523 5.235,5.134l4.515,3.787c2.258,1.866 4.497,3.751 6.846,5.48l4.215,2.877c2.622,1.793 5.253,3.56 7.966,5.153l1.293,0.838l3.55,1.812c2.549,1.384 5.116,2.758 7.747,3.987l0.756,0.391l3.687,1.511c9.85,4.197 20.137,7.165 30.625,9.122l41.558,-72.065c-4.871,0.975 -9.915,1.53 -15.095,1.53Zm0,-127.461c30.17,0 54.622,24.471 54.622,54.622c0,30.179 -24.453,54.622 -54.622,54.622c-30.152,0 -54.622,-24.453 -54.622,-54.622c0,-30.151 24.471,-54.622 54.622,-54.622Zm126.096,-18.207c-3.05,-5.28 -6.464,-10.205 -10.051,-14.957l-1.174,-1.457c-3.223,-4.16 -6.637,-8.111 -10.242,-11.826l-2.44,-2.504c-3.96,-3.896 -8.066,-7.593 -12.372,-10.97l-0.947,-0.801c-4.798,-3.696 -9.823,-7.019 -15.003,-10.06l-1.038,-0.692l-3.942,-2.048c-2.276,-1.229 -4.543,-2.458 -6.882,-3.56c-2.249,-1.047 -4.515,-1.976 -6.782,-2.913l-5.708,-2.276c-2.758,-0.992 -5.544,-1.83 -8.339,-2.686l-4.643,-1.347c-3.041,-0.783 -6.109,-1.402 -9.167,-1.994l-4.333,-0.856c-2.986,-0.482 -5.972,-0.783 -8.967,-1.065l-4.907,-0.501c-2.567,-0.164 -5.125,-0.146 -7.711,-0.182l-6.318,-0.035l-4.916,0.355c-10.87,0.728 -21.74,2.667 -32.418,5.899l-2.212,0.601c-2.704,0.874 -5.371,1.939 -8.048,2.986l-5.134,2.03c-2.203,0.938 -4.379,2.039 -6.564,3.123c-2.112,1.038 -4.233,2.085 -6.309,3.241l-2.367,1.211l-3.496,2.258c-2.067,1.275 -4.115,2.576 -6.127,3.96c-1.966,1.375 -3.905,2.777 -5.799,4.215l-5.007,3.997c-2.067,1.73 -4.078,3.487 -6.036,5.307l-3.714,3.623c-2.158,2.167 -4.27,4.37 -6.263,6.646l-1.356,1.639l41.431,71.874c9.513,-29.141 36.888,-50.234 69.216,-50.234c-0.002,-0.001 126.085,-0.001 126.085,-0.001Z"/>
            </svg>
          </h2>
        </header>

        <div class="list-wrapper" data-acoru-id="chrome" style="display:none">
          <ul class="list">
            <li v-for="item in chromeExts" class="card">
              <a class="card-link" :href="item.url">
                <section>
                  <div class="item-icon-wrapper">
                    <div class="item-icon"
                      :style="{'background-image': `url(${item.icon})`}"></div>
                  </div>
                  <div class="item-body">
                    <h3 class="item-name" v-text="item.name"></h3>
                    <div class="item-desc" v-text="item.desc"></div>
                  </div>
                </section>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section class="section atom">
        <header class="section-header atom" data-acoru-for="atom">
          <!-- <h2 class="section-title" data-acoru-for="atom">Atom Package</h2> -->
          <h2 class="section-title">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 124 113"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path
                d="M118.551,48.674c-3.099,-2.975 -7.53,-5.701 -13.169,-8.102c-11.194,-4.768 -26.188,-7.856 -42.221,-8.697c-1.933,-0.102 -3.821,-0.171 -5.646,-0.208c12.24,-14.61 24.062,-22.384 30.947,-22.646c1.458,-0.056 2.682,0.233 3.64,0.856c3.223,2.094 4.116,8.589 2.392,17.375c-0.34,1.734 0.789,3.416 2.523,3.756c1.735,0.339 3.416,-0.789 3.757,-2.524c2.965,-15.102 -1.182,-21.372 -5.184,-23.973c-2.088,-1.358 -4.57,-1.992 -7.371,-1.885c-10.59,0.402 -25.429,11.694 -38.968,29.102c-5.361,0.185 -10.528,0.648 -15.363,1.37c-0.53,-2.464 -0.94,-4.852 -1.218,-7.141c-1.214,-10.008 0.275,-17.112 3.984,-19.003c0.596,-0.304 1.247,-0.479 1.99,-0.535c3.314,-0.249 7.99,1.978 13.157,6.269c1.359,1.129 3.377,0.943 4.506,-0.417c1.129,-1.36 0.943,-3.377 -0.417,-4.506c-6.637,-5.512 -12.6,-8.113 -17.725,-7.728c-1.584,0.119 -3.071,0.528 -4.419,1.215c-3.445,1.757 -5.799,5.121 -6.997,9.999c-1.026,4.177 -1.172,9.384 -0.432,15.477c0.292,2.409 0.72,4.917 1.271,7.498c-3.78,0.797 -7.283,1.768 -10.423,2.902c-13.737,4.962 -16.908,11.503 -17.15,16.116c-0.23,4.407 2.025,10.966 14.082,17.183c1.571,0.81 3.501,0.193 4.311,-1.377c0.81,-1.571 0.193,-3.501 -1.378,-4.311c-6.935,-3.577 -10.807,-7.644 -10.623,-11.16c0.259,-4.954 8.562,-10.196 22.705,-13.151c1.31,4.732 2.993,9.646 5.011,14.629c-5.084,9.542 -8.793,18.946 -10.716,27.312c-1.374,5.977 -1.776,11.167 -1.194,15.425c0.68,4.973 2.669,8.563 5.912,10.671c1.653,1.075 3.881,1.915 6.808,1.915c4.244,0 9.956,-1.768 17.508,-7.154c1.439,-1.026 1.773,-3.024 0.747,-4.463c-1.026,-1.439 -3.025,-1.774 -4.463,-0.747c-7.444,5.309 -13.841,7.209 -17.113,5.083c-3.488,-2.268 -4.224,-9.481 -1.968,-19.296c1.497,-6.509 4.167,-13.722 7.788,-21.157c0.786,1.683 1.606,3.367 2.462,5.048c7.288,14.315 16.209,26.77 25.121,35.071c4.488,4.18 8.78,7.123 12.758,8.747c2.413,0.986 4.68,1.479 6.783,1.479c1.948,-0.001 3.757,-0.423 5.413,-1.267c3.322,-1.695 5.633,-4.891 6.868,-9.5c1.057,-3.947 1.294,-8.87 0.706,-14.634c-1.157,-11.332 -5.44,-25.154 -12.058,-38.918c-0.766,-1.593 -2.678,-2.263 -4.271,-1.498c-1.593,0.766 -2.263,2.678 -1.497,4.271c6.305,13.114 10.375,26.181 11.459,36.795c0.953,9.335 -0.585,15.982 -4.115,17.782c-3.706,1.89 -10.317,-1.078 -17.684,-7.941c-8.378,-7.803 -16.823,-19.626 -23.78,-33.291c-1.59,-3.124 -3.055,-6.255 -4.388,-9.362c1.654,-2.959 3.443,-5.927 5.357,-8.877c1.952,-3.007 3.927,-5.841 5.908,-8.5c0.525,-0.007 1.054,-0.012 1.586,-0.014c2.748,-0.009 5.694,0.068 8.766,0.229c15.303,0.803 29.526,3.713 40.049,8.194c9.255,3.942 14.651,8.778 14.433,12.937c-0.185,3.531 -4.475,7.181 -11.772,10.014c-1.647,0.64 -2.464,2.494 -1.825,4.142c0.492,1.267 1.702,2.042 2.985,2.042c0.384,0 0.776,-0.07 1.157,-0.218c12.678,-4.922 15.615,-11.225 15.847,-15.645c0.202,-3.864 -1.53,-7.584 -5.149,-11.058Zm-63.298,8.671c0,3.865 3.131,6.998 6.992,6.998c3.862,0 6.993,-3.133 6.993,-6.998c0,-3.865 -3.131,-6.998 -6.993,-6.998c-3.861,0 -6.992,3.133 -6.992,6.998Zm-14.056,-14.277c-1.031,1.59 -2.028,3.187 -2.99,4.786c-1.053,-2.896 -1.977,-5.749 -2.764,-8.532c2.798,-0.401 5.772,-0.718 8.906,-0.937c-1.064,1.526 -2.116,3.087 -3.152,4.683Z"/>
              </svg>
          </h2>
        </header>

        <div class="list-wrapper" data-acoru-id="atom" style="display:none">
          <ul class="list">
            <li v-for="item in atomPkgs" class="card">
              <a class="card-link" :href="item.url">
                <section>
                  <div class="item-icon-wrapper">
                    <div class="item-icon"
                      :style="{'background-image': `url(${item.icon})`}"></div>
                  </div>
                  <div class="item-body">
                    <h3 class="item-name" v-text="item.name"></h3>
                    <div class="item-desc" v-text="item.desc"></div>
                  </div>
                </section>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section class="section npm">
        <header class="section-header npm" data-acoru-for="npm">
          <!-- <h2 class="section-title" data-acoru-for="npm">NPM Package</h2> -->
          <h2 class="section-title">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 256 100"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path
                d="M256,0l0,85.498l-128,0l0,14.332l-56.834,0l0,-14.332l-71.166,0l0,-85.498l256,0Zm-170.502,14.332l0,71.166l28.664,0l0,-14.332l28.17,0l0,-56.834l-56.834,0Zm-14.332,0l-56.834,0l0,56.834l28.17,0l0,-42.502l14.332,0l0,42.502l14.332,0l0,-56.834Zm170.996,0l-85.498,0l0,56.834l28.17,0l0,-42.502l14.332,0l0,42.502l14.332,0l0,-42.502l14.332,0l0,42.502l14.332,0l0,-56.834Zm-114.162,42.502l-13.838,0l0,-28.17l13.838,0l0,28.17Z"/>
              </svg>
          </h2>
        </header>

        <div class="list-wrapper" data-acoru-id="npm" style="display:none">
          <ul class="list">
            <li v-for="item in npmPkgs" class="card">
              <a class="card-link" :href="item.url">
                <section>
                  <div class="item-icon-wrapper">
                    <div class="item-icon"
                      :style="{'background-image': `url(${item.icon})`}"></div>
                  </div>
                  <div class="item-body">
                    <h3 class="item-name" v-text="item.name"></h3>
                    <div class="item-desc" v-text="item.desc"></div>
                  </div>
                </section>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section class="section blog">
        <header class="section-header blog" data-acoru-for="blog">
          <!-- <h2 class="section-title" data-acoru-for="blog">Blog</h2> -->
          <h2 class="section-title">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 56 56"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path
                d="M52.618,2.631c-3.51,-3.508 -9.219,-3.508 -12.729,0l-36.062,36.062c-0.017,0.017 -0.027,0.038 -0.042,0.056c-0.021,0.024 -0.039,0.05 -0.058,0.076c-0.053,0.074 -0.094,0.153 -0.125,0.239c-0.009,0.026 -0.022,0.049 -0.029,0.075c-0.003,0.01 -0.009,0.02 -0.012,0.03l-3.535,14.85c-0.016,0.067 -0.02,0.135 -0.022,0.202c0,0.013 -0.004,0.025 -0.004,0.038c0.001,0.114 0.026,0.225 0.065,0.332c0.009,0.025 0.019,0.047 0.03,0.071c0.049,0.107 0.11,0.21 0.196,0.296c0.095,0.095 0.207,0.168 0.328,0.218c0.121,0.05 0.25,0.075 0.379,0.075c0.077,0 0.155,-0.009 0.231,-0.027l14.85,-3.535c0.027,-0.006 0.051,-0.021 0.077,-0.03c0.034,-0.011 0.066,-0.024 0.099,-0.039c0.072,-0.033 0.139,-0.074 0.201,-0.123c0.024,-0.019 0.049,-0.033 0.072,-0.054c0.008,-0.008 0.018,-0.012 0.026,-0.02l36.063,-36.063c3.51,-3.51 3.51,-9.22 0.001,-12.729Zm-1.414,1.414c2.488,2.489 2.7,6.397 0.65,9.137l-9.787,-9.787c2.741,-2.05 6.649,-1.838 9.137,0.65Zm-4.95,14.85l-9.9,-9.9l1.414,-1.414l9.9,9.9l-1.414,1.414Zm-41.293,31.393c-0.391,-0.391 -1.023,-0.391 -1.414,0l-0.757,0.757l2.554,-10.728l4.422,-0.491l-0.569,5.122c-0.004,0.038 0.01,0.073 0.01,0.11c0,0.038 -0.014,0.072 -0.01,0.11c0.004,0.033 0.021,0.06 0.028,0.092c0.012,0.058 0.029,0.111 0.05,0.165c0.026,0.065 0.057,0.124 0.095,0.181c0.031,0.046 0.062,0.087 0.1,0.127c0.048,0.051 0.1,0.094 0.157,0.134c0.045,0.031 0.088,0.06 0.138,0.084c0.066,0.031 0.135,0.049 0.207,0.066c0.038,0.009 0.069,0.03 0.108,0.035c0.036,0.004 0.072,0.006 0.109,0.006l0.004,0c0.036,0 0.073,-0.002 0.109,-0.006l5.122,-0.569l-0.491,4.422l-10.729,2.554l0.757,-0.757c0.39,-0.39 0.39,-1.023 0,-1.414Zm12.55,-5.479l22.378,-22.379c0.391,-0.391 0.391,-1.023 0,-1.414c-0.391,-0.391 -1.023,-0.391 -1.414,0l-22.378,22.379l-4.773,0.53l0.53,-4.773l22.38,-22.378c0.391,-0.391 0.391,-1.023 0,-1.414c-0.391,-0.391 -1.023,-0.391 -1.414,0l-22.38,22.378l-3.183,0.354l27.683,-27.683l9.9,9.9l-27.683,27.683l0.354,-3.183Zm31.571,-28.742l-9.9,-9.9l1.415,-1.415l9.9,9.9l-1.415,1.415Z"
                style="fill-rule:nonzero;"/>
              </svg>
          </h2>
        </header>

        <div class="list-wrapper" data-acoru-id="blog" style="display:none">
          <ul class="list">
            <li v-for="item in blogs" class="card">
              <a class="card-link" :href="item.url">
                <section>
                  <div class="item-icon-wrapper">
                    <div class="item-icon"
                      :style="{'background-image': `url(${item.icon})`}"></div>
                  </div>
                  <div class="item-body">
                    <h3 class="item-name" v-text="item.name"></h3>
                    <div class="item-desc" v-text="item.desc"></div>
                  </div>
                </section>
              </a>
            </li>
        </ul>
      </div>
      </section>
    </Acoru>

    <footer class="footer">
      <div class="footer-links">
        <a class="footer-link github" href="https://github.com/nju33">
          <svg
              width="100%"
              height="100%"
              viewBox="0 0 68 52"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve"
              style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path
              id="Github__x28_alt_x29_"
              d="M49.282,0c0.877,1.993 1.446,5.303 0.597,7.726c3.469,2.962 4.662,10.162 2.987,16.045c4.944,0.377 10.833,-0.181 14.634,1.336c-3.553,-0.457 -8.407,-1.353 -12.99,-1.041c-0.868,0.059 -2.155,-0.033 -2.092,1.189c5.306,0.416 10.578,0.87 14.934,2.229c-4.321,-0.705 -9.565,-1.781 -14.934,-1.93c-2.218,4.376 -6.681,6.527 -12.842,6.98c0.662,1.442 1.93,1.99 2.24,4.308c0.462,3.464 -0.723,8.536 0.446,10.845c0.561,1.106 1.476,1.135 2.092,2.081c-1.509,1.786 -5.25,-0.201 -5.676,-2.081c-0.73,-3.222 1.112,-8.215 -0.894,-10.399c0.141,3.514 -0.831,8.448 0.149,11.587c0.387,1.234 1.502,1.71 1.195,2.824c-7.014,0.712 -4.082,-9.078 -5.229,-14.857c-1.058,0.075 -0.593,1.584 -0.597,2.229c-0.03,5.643 1.155,13.383 -4.927,12.628c-0.178,-1.186 0.816,-1.589 1.194,-2.672c1.11,-3.175 -0.207,-7.907 0.301,-11.738c-2.321,1.75 0.244,7.86 -1.195,10.992c-0.828,1.803 -3.499,2.588 -5.525,1.783c0.264,-1.343 1.65,-1.126 2.238,-2.377c0.822,-1.743 0.006,-4.255 0.299,-6.833c-4.296,0.858 -7.629,-0.124 -9.261,-2.823c-0.729,-1.211 -0.91,-2.64 -1.792,-3.713c-0.878,-1.074 -2.28,-1.219 -2.687,-2.673c5.322,-1.28 5.526,5.477 10.305,5.643c1.465,0.054 2.227,-0.422 3.583,-0.741c0.38,-1.703 1.192,-2.975 2.39,-3.864c-5.947,-0.814 -10.858,-2.666 -13.142,-7.128c-5.406,0.265 -10.353,0.987 -14.935,2.078c4.159,-1.511 9.288,-2.052 14.787,-2.23c-0.324,-1.947 -3.165,-1.411 -4.928,-1.336c-3.277,0.144 -7.402,0.551 -10.007,1.04c3.775,-1.346 9.073,-1.178 14.188,-1.189c-1.564,-4.905 -1.022,-12.697 2.39,-15.598c-0.967,-2.437 -0.667,-6.423 0.597,-8.32c3.809,0.171 6.119,1.832 8.512,3.418c2.968,-0.844 6.089,-1.264 10.155,-1.041c1.71,0.095 3.489,0.864 4.777,0.742c1.264,-0.118 2.657,-1.537 3.884,-2.078c1.598,-0.706 2.95,-0.975 4.779,-1.041Z"
              style="fill-rule:nonzero;"/>
            </svg>
        </a>
        <a class="footer-link twitter" href="https://twitter.com/nju33_ki">
          <svg
              width="100%"
              height="100%"
              viewBox="0 0 118 96"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve"
              style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path
              d="M117.56,11.31c-4.403,1.949 -9.072,3.229 -13.853,3.797c4.972,-2.988 8.797,-7.71 10.597,-13.345c-4.734,2.809 -9.913,4.788 -15.314,5.852c-4.557,-4.866 -10.937,-7.626 -17.603,-7.614c-13.314,0 -24.12,10.796 -24.12,24.113c0,1.892 0.213,3.736 0.63,5.497c-20.048,-1.007 -37.815,-10.603 -49.713,-25.195c-2.078,3.557 -3.263,7.704 -3.263,12.124c0,8.363 4.257,15.745 10.727,20.07c-3.831,-0.117 -7.578,-1.152 -10.926,-3.016l0,0.307c0,11.681 8.315,21.428 19.343,23.648c-3.552,0.961 -7.276,1.102 -10.89,0.412c3.07,9.582 11.98,16.553 22.53,16.755c-8.253,6.458 -18.652,10.32 -29.954,10.32c-1.922,-0.002 -3.842,-0.115 -5.751,-0.337c10.673,6.84 23.353,10.837 36.972,10.837c44.362,0 68.618,-36.753 68.618,-68.625c-0.001,-1.042 -0.001,-2.085 -0.076,-3.12c4.72,-3.415 8.796,-7.64 12.038,-12.48l0.007,0Z"
              style="fill-rule:nonzero;"/></svg>
        </a>
      </div>
      <div class="copyright">© 2017 nju33</div>
    </footer>

  </section>
</template>

<script>
  import createHistory from 'history/createBrowserHistory';
  import loadjs from 'loadjs';
  import Acoru from '~components/Acoru.vue';
  import Form from '~components/Form.vue';

  export default {
    components: {
      Acoru,
      Form
    },
    methods: {
      onopened(collection) {
        if (this.touchHistory) {
          this.history.push(`#${collection.name}`, {some: 'state'})
        }
        if (!this.loadedFormrun && collection.name === 'own') {
          loadjs(['https://sdk.form.run/js/v2/formrun.js']);
          this.laodedFormrun = true;
        }
        this.touchHistory = true;
      },
      onclosed() {
        if (!this.$refs.acoru.isOpen()) {
          this.history.push('', {some: 'state'})
        }
      }
    },
    mounted() {
      this.history = createHistory();
      this.history.listen((location, action) => {
        this.touchHistory = false;
        setTimeout(() => {
          const active = this.$refs.acoru.getActive();
          if (active !== null &&
              '#' + active.name !== this.history.location.hash) {
            this.$refs.acoru.open(this.history.location.hash.slice(1));
          }
        }, 0)
      });

      if (this.history.location.hash) {
        if (this.history.location.hash === '#own') {
          loadjs(['https://sdk.form.run/js/v2/formrun.js']);
          this.laodedFormrun = true;
        }
        setTimeout(() => {
          this.$refs.acoru.open(this.history.location.hash.slice(1));
        }, 100);
      }
    },
    data() {
      return {
        history: null,
        touchHistory: true,
        loadedFormrun: false,
        acoruOpts: {
          transitionDuration: '.4s',
          transitionTimingFunction: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'
        },
        blogs: [
          {
            icon: '/images/javascript.nju33.work/icon_128x128@2x.png',
            name: 'javascript',
            url: 'https://javascript.nju33.work'
            // desc: 'JavaScriptでやってみたことなど。'
          },
          {
            icon: '/images/mac-app.nju33.work/icon_128x128@2x.png',
            name: 'mac-app',
            url: 'https://mac-app.nju33.work'
            // desc: '使ってみたMacAppなどの紹介。'
          }
        ],
        apps: [
          {
            icon: '//github.com/nju33/pocket-pocket/blob/master/app/icons/icon.iconset/icon_128x128@2x.png?raw=true',
            name: 'Pocket Pocket',
            url: 'https://github.com/nju33/pocket-pocket'
            // desc: '複数タグで絞込検索ができる非公式Pocketアプリ。'
          },
          {
            icon: '//github.com/nju33/netfri/blob/master/app/icons/icon.iconset/icon_128x128@2x.png?raw=true',
            name: 'Netfri',
            url: 'https://github.com/nju33/netfri'
            // desc: '他ウィンドウに被らないようにしたり、直ぐにマイリストから再生できるようなど、細かい点を修正した非公式Netflixアプリ。'
          },
          {
            icon: '//github.com/nju33/cama/blob/master/app/icons/icon.iconset/icon_256x256.png?raw=true',
            name: 'Cama',
            url: 'https://github.com/nju33/cama'
            // desc: 'ショートカットで直ぐさま表示して、テキスト計算が行えます。'
          },
          {
            icon: '//github.com/nju33/fusen/blob/master/app/icons/icon.iconset/icon_256x256.png?raw=true',
            name: 'Fusen',
            url: 'https://github.com/nju33/fusen'
            // desc: '常に一番上のWindowで表示することができる付箋ノートです。'
          },
          {
            icon: '//github.com/nju33/eziten/blob/master/app/icons/icon.iconset/icon_128x128@2x.png?raw=true',
            name: 'Eziten',
            url: 'https://github.com/nju33/eziten'
            // desc: '常に一番上のWindowで表示することができる付箋ノートです。'
            // desc: '絵文字を一覧で表示できて、クリックで直ぐ様コピーできます。'
          },
          {
            icon: '//github.com/nju33/jogich/blob/master/app/icons/icon.iconset/icon_256x256.png?raw=true',
            name: 'Jogich',
            url: 'https://github.com/nju33/jogich'
            // desc: 'ショートカットで呼び出して、簡単な操作で気になる要素のサイズを図ることができる定規です。'
          },
          {
            icon: '//github.com/nju33/share-on/blob/master/app/icons/icon.iconset/icon_256x256.png?raw=true',
            name: 'Share On',
            url: 'https://github.com/nju33/share-on'
            // desc: 'メニューバーのアイコンにファイルをドロップするだけで即座にファイルをシェアできます。',
          },
          {
            icon: '//github.com/nju33/immi/blob/master/app/icons/icon.iconset/icon_128x128@2x.png?raw=true',
            name: 'Immi',
            url: 'https://github.com/nju33/immi'
            // desc: 'メニューバーに画像ファイルをドロップして圧縮できるアプリ。（ただコマンドで実行する必要あり）'
          },
        ],
        chromeExts: [
          {
            icon: '//github.com/nju33/chrome-tab-limiter/blob/master/dev/icon/icon_128.png?raw=true',
            name: 'Tab Limiter',
            url: 'https://github.com/nju33/chrome-tab-limiter'
            // desc: 'タブの数に制限を持たせるることで、事前にChromeの不具合を防ぎます。'
          },
          {
            icon: '//github.com/nju33/chrome-owloom/blob/master/extension/icons/icon_128x128.png?raw=true',
            name: 'Owloom',
            url: 'https://github.com/nju33/chrome-owloom'
            // desc: 'より良くChromeのブックマークを活用するための拡張です。'
          },
          {
            icon: '//github.com/nju33/chrome-ll/blob/master/app/icons/icon128.png?raw=true',
            name: 'Ll',
            url: 'https://github.com/nju33/chrome-ll'
            // desc: 'ページURLに名前を付けて、その名前でアクセスできるようになります。'
          },
          {
            icon: '//github.com/nju33/chrome-ll-tab/blob/master/app/icons/icon_128x128.png?raw=true',
            name: 'Ll Tab',
            url: 'https://github.com/nju33/chrome-ll-tab'
            // desc: '開かれてるタブをタイトルかURLで検索して、マッチしたタブをアクティブにします。'
          },
          {
            icon: '//github.com/nju33/chrome-hahaki/blob/master/app/icon/icon_128.png?raw=true',
            name: 'Hahaki',
            url: 'https://github.com/nju33/chrome-hahaki'
            // desc: '狙った画像だけのダウンロードが可能です。'
          },
          {
            icon: '',
            name: 'Like One Dark Theme',
            url: 'https://github.com/nju33/chrome-like-one-dark-theme'
            // desc: 'AtomのOneDarkのようなテーマ。'
          },
        ],
        atomPkgs: [
          {
            icon: '//github.com/nju33/atom-pane-browser/blob/master/images/icon_128x128@2x.png?raw=true',
            name: 'Pane Browser',
            url: 'https://github.com/nju33/atom-pane-browser'
            // desc: 'ブラウザと同じようにブラウジングや開発が行えます。'
          },
          {
            icon: '',
            name: 'Google Translate Modal',
            url: 'https://github.com/nju33/atom-google-translate-moda'
            // desc: 'ショートカットで直ぐさまGoogleTranslateページを開きます。'
          },
          {
            icon: '//github.com/nju33/atom-colorio/blob/master/media/icon_512x512.png?raw=true',
            name: 'Colorio',
            url: 'https://github.com/nju33/atom-colorio'
            // desc: '調べたい色について詳細を見ることができます。'
          },
          {
            icon: '',
            name: 'Flex Tab Bar',
            url: 'https://github.com/nju33/atom-flex-tab-bar'
            // desc: 'タブバーをFlex化します。'
          },
          {
            icon: '',
            name: 'Tab Limiter',
            url: 'https://github.com/nju33/atom-tab-limiter'
            // desc: 'タブ数に上限を設定します。'
          },
          {
            icon: '',
            name: 'Maximize Space Pane',
            url: 'https://github.com/nju33/atom-maximaize-space-pane'
            // desc: '現在のPaneをワークスペースいっぱいに広げることができます。'
          },
          {
            icon: '//github.com/nju33/atom-tmproject/blob/master/images/icon_128x128@2x.png?raw=true',
            name: 'Tmproject',
            url: 'https://github.com/nju33/atom-tmproject'
            // desc: '現在のWindowを開いてるときだけ有効なプロジェクトを作ります。'
          },
        ],
        npmPkgs: [
          {
            icon: '//github.com/nju33/hai/blob/master/images/icon_128x128@2x.png?raw=true',
            name: 'Hai',
            url: 'https://github.com/nju33/hai'
            // desc: 'ツールチップのような感じで、ユーザーに確認ダイアログを出したりすることができます。'
          },
          {
            icon: '',
            name: 'Taba',
            url: 'https://github.com/nju33/taba'
            // desc: 'テーブル要素のヘッダーやフッターをポジション固定表示できます。'
          },
          {
            icon: '',
            name: 'Rangebar',
            url: 'https://github.com/nju33/rangebar'
            // desc: 'スタイルをカスタマイズできる、input[type=range]のような要素です。'
          },
          {
            icon: '',
            name: 'Suwa',
            url: 'https://github.com/nju33/suwa'
            // desc: '簡単なレイアウトでカルーセルな要素を作ります。'
          },
          {
            icon: '',
            name: 'Mohill',
            url: 'https://github.com/nju33/mohill'
            // desc: '下から伸びるようなモーダル。'
          },
          {
            icon: '',
            name: 'Vue Prdiv',
            url: 'https://github.com/nju33/vue-prediv'
            // desc: '要素を下に引っ張って更新、みたいなことができるVueComponent。'
          },
          {
            icon: '',
            name: 'Diz',
            url: 'https://github.com/nju33/diz'
            // desc: '静的サイトジェネレータ。'
          },
          {
            icon: '',
            name: 'PostCSS Octicon',
            url: 'https://github.com/nju33/postcss-octicon'
            // desc: 'セレクタにプレフィックスを付けれるPostCSSプラグイン。'
          },
          {
            icon: '',
            name: 'PostCSS Blokk',
            url: 'https://github.com/nju33/postcss-blokk'
            // desc: 'セレクタにプレフィックスを付けれるPostCSSプラグイン。'
          },
          {
            icon: '',
            name: 'PostCSS Namespace',
            url: 'https://github.com/nju33/postcss-namespace'
            // desc: 'セレクタにプレフィックスを付けれるPostCSSプラグイン。'
          },
          {
            icon: '',
            name: 'PostCSS Preref',
            url: 'https://github.com/nju33/postcss-preref'
            // desc: '何度も同じセレクタ部分を書かなくて済むPostCSSプラグイン'
          },
        ]
      };
    }
  }
</script>

<style scoped>
.section-box {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.list {
  overflow: auto;
}

.header {
  position: absolute;
  width: 100%;
  top: calc(50% - 8em);
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);

  -webkit-transition: background .2s linear,
    .6s cubic-bezier(0.25, 0.46, 0.45, 0.94) .2s;

  transition:
    background .2s linear,
    .6s cubic-bezier(0.25, 0.46, 0.45, 0.94) .2s;
  opacity: 1;
  z-index: 999;
}

.title {
  margin: 0 auto;
  font-size: 1em;
  height: 5em;
  width: 5em;
  -webkit-transition: .4s cubic-bezier(0.55, 0.085, 0.68, 0.53) .2s;
  transition: .4s cubic-bezier(0.55, 0.085, 0.68, 0.53) .2s;
  cursor: pointer;
}

.acoru-open .header {
  -webkit-transition: .2s cubic-bezier(0.55, 0.085, 0.68, 0.53),
    z-index .1s linear .4s;
  transition:
    .2s cubic-bezier(0.55, 0.085, 0.68, 0.53),
    z-index .1s linear .4s;
  opacity: 0;
}

.acoru-opened .header {
  -webkit-transition: .6s cubic-bezier(0.55, 0.085, 0.68, 0.53),
    background .2s linear .6s;
  transition:
    .6s cubic-bezier(0.55, 0.085, 0.68, 0.53),
    background .2s linear .6s;
  background: rgba(255,255,255,.4);
  top: 1.2em;
  padding: .5em 0;
  opacity: 1;
  z-index: 999;
}

.acoru-open-electron .header,
.acoru-open-chrome .header,
.acoru-open-atom .header,
.acoru-open-npm .header,
.acoru-open-blog .header {
  z-index: -1;
}

.acoru-opened .title {
  -webkit-transition: .4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  transition: .4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  width: 1.5em;
  height: 1.5em;
}

.title-text-small {
  font-size: .25em;
  opacity: .8;
  color: #aaa;
}

.section {
  background: #fff;
}

.section.electron {
  background: #0d98ba;
}

.section.chrome {
  background: #ffaa1d;
}

.section.atom {
  background: #ad6f69;
}

.section.npm {
  background: #D05340;
}

.section.blog {
  background: #828e84;
}

.section-header {
  position: fixed;
  right: 50%;
  bottom: 50%;
  -webkit-transform: translate(50%, 50%);
          transform: translate(50%, 50%);
  width: 3em;
  height: 3em;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  z-index: 9999;
  cursor: pointer;
  -webkit-transition: .4s cubic-bezier(0.455, 0.03, 0.515, 0.955) .2s;
  transition: .4s cubic-bezier(0.455, 0.03, 0.515, 0.955) .2s;
}

.section-header.electron {
  right: calc(50% + 6em);
  bottom: calc(50% + 1em);
  background: #0d98ba;
}
.section-header.chrome {
  right: calc(50% + 3em);
  bottom: calc(50% - 1em);
  background: #ffaa1d;
}
.section-header.atom {
  background: #ad6f69;
  bottom: calc(50% + 1em);
}
.section-header.npm {
  right: calc(50% - 3em);
  bottom: calc(50% - 1em);
  background: #D05340;
}
.section-header.blog {
  right: calc(50% - 6em);
  bottom: calc(50% + 1em);
  background: #828e84;
}

.acoru-open .section-header {
  -webkit-transform: translate(50%, 0);
          transform: translate(50%, 0);
  right: 1em;
  bottom: 50%;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background: transparent;
}

.acoru-open.acoru-open-own .section-header {
  -webkit-transform: translate(50%, 0);
          transform: translate(50%, 0);
  right: -1em;
  bottom: 50%;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background: transparent;
}

.acoru-open .section-header svg {
  fill: rgba(255,255,255,.7);
  -webkit-transition: .2s;
  transition: .2s;
}

.acoru-open .section-header:hover svg {
  fill: #fff;
}

.acoru-opened .section-header svg {
  fill: #fff;
}

.acoru-open .section-header.electron {
  /*right: 1em;*/
  bottom: calc(50% + 5em);
  -webkit-transition-delay: .3s;
          transition-delay: .3s;
  /*top: 5em;*/
  /*background: orange;*/
}
.acoru-open .section-header.chrome {
  /*right: 1em;*/
  bottom: calc(50% + 2.5em);
  -webkit-transition-delay: .1s;
          transition-delay: .1s;
  /*background: blue;*/
}
.acoru-open .section-header.atom {
  /*right: 1em;*/
  bottom: 50%;
  -webkit-transition-delay: .15s;
          transition-delay: .15s;
  /*background: pink;*/
}
.acoru-open .section-header.npm {
  /*right: 1em;*/
  -webkit-transition-delay: .2s;
          transition-delay: .2s;
  /*top: 5em;*/
  bottom: calc(50% - 2.5em);
  /*background: #222;*/
}
.acoru-open .section-header.blog {
  /*right: 1em;*/
  -webkit-transition-delay: .24s;
          transition-delay: .24s;
  bottom: calc(50% - 5em);
  /*top: 5em;*/
  /*background: red;*/
}

.acoru-opened.acoru-opened .section-header {
  right: 1.75em;
}

.section-title {
  margin: 0;
  padding: 15%;
  box-sizing: border-box;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.section-title svg {
  display: block;
  width: 100%;
  fill: #fff;
}

.section-desc {
  margin: 0;
}

.section-body,
.list-wrapper {
  width: 100%;
  max-width: 90%;
  padding: 0 1em;
  overflow: hidden;
}

@media (min-width: 425px){
  .section-body,
  .list-wrapper {
    max-width: auto;
    width: 71vw;
    padding: 0 calc((100% - 71vw) / 2);
  }
}

.own-section {
  min-height: 100vh;
  box-sizing: border-box;
  padding: 1em 0;
}

.own-section.flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -ms-flex-line-pack: center;
      align-content: center;
}

/*@media (min-width: 425px) {*/
.flex .own-name {
  margin-top: -50vh;
  padding-top: 70vw;
}
/*}*/

@media (min-width: 900px) {
  .flex .own-name {
    margin-top: -50vh;
    padding-top: 5em;
  }
}

.own-name {
  width: 100%;
  /*max-height: 2em;*/
  padding: .5em 1rem;
  box-sizing: border-box;
  font-size: 3em;
  font-weight: lighter;
  /*margin: -3em 0;*/
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  border-bottom: 1px solid;
}

.own-name small {
  font-size: .4em;
  position: relative;
  top: -.15em;
}

.own-body {
  box-sizing: border-box;
  padding: 0 1rem;
}

@media (max-width: 424px) {
  .skill-tables {
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }
}

.skill-tables {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.skill-table {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 100%;
          flex: 1 1 100%;
}

.skill-table:first-child {
  margin-right: .5em;
}

.skill-table:last-child {
  margin-left: .5em;
}

.skill-table h3 {
  font-size: 1em;
  background: rgba(255,255,255,.4);
  padding: .3em;
  /*border: 1px solid;*/
  /*color: #fff;*/
}

.skill-table ul {
  line-height: 1.8;
  list-style: none;
  padding-left: .5em;
}

.skill-progress {
  position: relative;
  padding: 0 .25em;
}

.skill-progress:before {
  content: '';
  background: -webkit-linear-gradient(left, rgba(255,255,255,.4), rgba(255,255,255,.4), rgba(255,255,255,.4), transparent);
  background: linear-gradient(to right, rgba(255,255,255,.4), rgba(255,255,255,.4), rgba(255,255,255,.4), transparent);
  height: 1.2em;
  position: absolute;
  left: 0;
  bottom: 50%;
  border-left: 1px solid #fff;
  /*border-right: 1px solid #fff;*/
  -webkit-transform: translateY(50%);
          transform: translateY(50%);
}

.skill-progress-js:before {
  width: 86%;
}
.skill-progress-html:before {
  width: 81%;
}
.skill-progress-wp:before {
  width: 58%;
}
.skill-progress-css:before {
  width: 85%;
}
.skill-progress-csp:before {
  width: 50%;
}
.skill-progress-ad:before {
  width: 50%;
}
.skill-progress-sketch:before {
  width: 35%;
}
.skill-progress-scala:before {
  width: 15%;
}

.list {
  position: absolute;
  z-index: -1;
  width: 71vw;
  bottom: 50%;
  -webkit-transform: translateY(50%);
          transform: translateY(50%);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  list-style: none;
  margin: 0 auto;
  opacity: 0;
  padding-left: 0;
  -webkit-transition: .2s cubic-bezier(0.6, 0.04, 0.98, 0.335) .4s;
  transition: .2s cubic-bezier(0.6, 0.04, 0.98, 0.335) .4s;
}

.acoru-not-open .list {
  -webkit-transition: .2s linear;
  transition: .2s linear;
  z-index: 0;
  opacity: 0;
}

.acoru-opened .list {
  z-index: 1;
  opacity: 1;
}

.card {
  -webkit-box-flex: 1;
      -ms-flex: auto;
          flex: auto;
  max-width: calc(33.3333% - .2em);
  min-width: calc(33.3333% - .2em);
  box-sizing: border-box;
  margin: .1em .1em;
}

@media (min-width: 425px) {
  .card {
    max-width: calc(16.6666% - .2em);
    min-width: calc(16.6666% - .2em);
  }
}

.card-link {
  color: inherit;
  display: block;
  -webkit-transition: .4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition: .4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.card-link:hover {
  -webkit-transform: scale(1.03);
          transform: scale(1.03);
}

.electron .card-link:hover .item-name {
  color: #0d98ba;
}
.chrome .card-link:hover .item-name {
  color: #ffaa1d;
}
.atom .card-link:hover .item-name {
  color: #ad6f69;
}
.npm .card-link:hover .item-name {
  color: #D05340;
}
.blog .card-link:hover .item-name {
  color: #828e84;
}

.item-icon-wrapper {
  padding: .5em;
  /*background-color: #ccc;*/
  background: rgba(0,0,0,.4);
}


.item-icon {
  width: 100%;
  height: 3.5em;
  background-size: 85% 85%;
  background-position: center center;
  background-repeat: no-repeat;
}

.item-body {
  position: relative;
  height: 3em;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  background: rgba(255,255,255,.8);
  font-size: 11px;
}


@media (min-width: 425px) {
  .item-icon {
    height: 6em;
  }

  .item-body {
    height: 3em;
    font-size: .85em;
  }
}

.item-name {
  margin: 0;
  width: 100%;
  font-size: .85em;
  text-align: center;
  font-weight: lighter;
  -webkit-transition: .2s;
  transition: .2s;
  /*text-align: center;
  padding: .3em 0;
  margin: 0;
  transition: .2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  font-size: .9em;*/
  /*background: #fff;*/
}

.item-desc {
  display: none;
  font-size: .85em;
  padding: .3em .5em;
  /*background: #fff;*/
}

.footer {
  position: absolute;
  right: 50%;
  bottom: 1em;
  -webkit-transform: translateX(50%);
          transform: translateX(50%);
  -webkit-transition: .4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition: .4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.acoru-open + .footer {
  opacity: 0;
  bottom: -3em;
}

.footer-links {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.footer-link {
  display: block;
  width: 1.75em;
  height: 1.75em;
  box-sizing: border-box;
}

.footer-link svg {
  width: 100%;
  fill: #888;
  -webkit-transition: .2s;
  transition: .2s
}

.footer-link.twitter {
  padding: 2px;
}

.footer-link.github:hover svg {
  fill: #24292e;
}

.footer-link.twitter:hover svg {
  fill: #1da1f2;
}

.copyright {
  font-size: 10px;
  color: #888;
}
</style>

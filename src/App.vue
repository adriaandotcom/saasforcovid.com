<template>
  <div id="app">
    <!--Hero-->
    <div
      class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center mb-8 sm:mb-0"
    >
      <!--Left Col-->
      <div
        class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
      >
        <p class="uppercase tracking-loose w-full">
          Some companies have special deals
        </p>
        <h1 class="my-4 text-5xl font-bold leading-tight">
          We can fight COVID-19 together!
        </h1>
        <p class="leading-normal text-2xl mb-8">
          Use their provided discounts and build amazing tools.
        </p>

        <!-- <button
          class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        >
          Subscribe
        </button> -->
      </div>
      <!--Right Col-->
      <div
        class="hidden sm:flex w-full md:w-3/5 py-6 pb-20 text-right flex-col items-start"
      >
        <svg
          style="max-height: 200px; margin-left: 3rem;"
          viewBox="0 0 128 128"
          fill="#2c3e50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M127.26,109.23a7.54,7.54,0,0,0-2.69-2.42,5.45,5.45,0,0,0,.68-1.39c1.24-3.86-1.83-5.85-4.08-7.3l-.49-.31A79.59,79.59,0,0,0,112.22,94a5,5,0,0,0,1.49-3,6.15,6.15,0,0,0-.34-2.57,7,7,0,0,0,2.61-2,6.11,6.11,0,0,0,1.18-4.78,4.63,4.63,0,0,0-1.9-3.16,7.36,7.36,0,0,0-3.39-1.26A5.13,5.13,0,0,0,112,75.7c-.26-4-3.85-4.77-6.48-5.29l-.56-.12c-2-.4-12.36-.47-15.75-.43l.72-.73C93,66,94.29,62,93.3,58.5a5.5,5.5,0,0,0-3.58-4.11h0c-3.33-.83-6.34,2.25-8.33,4.28-.38.39-.9.92-1.09,1.06h0c-.45.27-1.61,1-3.79,2.49-3.72,2.47-9.23,6.14-12.74,8.27-2.94,0-6.21-.09-8.06-.12L54.24,70c2.57-2.7,6.46-7.16,8.65-11.45,2-3.93,2-8.1,0-11.16a5.51,5.51,0,0,0-4.66-2.82c-3.16.2-5.66,3.56-7.94,7-.29.44-.65,1-.74,1.09-.29.28-1.71,1.29-3,2.18C43,57.37,37.66,61.2,34.8,64.45c-.95,1.07-4.44,4.88-7.52,8.25-2.5,2.73-4.66,5.09-5.15,5.64s-1.45,1.55-2.5,2.62c-1.2,1.24-2.44,2.52-3.22,3.39-1.34.83-8.63,2.42-14.74,3.44a2,2,0,1,0,.66,3.94c10-1.67,15.75-3.23,17-4.64.71-.8,2-2.15,3.18-3.34s2.1-2.16,2.63-2.77,2.72-3,5.1-5.58c3.09-3.38,6.6-7.21,7.57-8.31,2.56-2.9,7.7-6.57,11.1-9a26.52,26.52,0,0,0,3.6-2.77,16,16,0,0,0,1.1-1.54c.85-1.27,3.41-5.13,4.81-5.22a2.8,2.8,0,0,1,1.38,1.49c.44.87,1.28,3.27-.46,6.68-2.48,4.86-7.67,10.24-9.6,12.16-3.49-.75-5.8-.6-6.86.49a2,2,0,0,0,2.5,3.09c.27,0,1.47-.21,4.48.55l5.09,1.28a1.74,1.74,0,0,0,.45.06c1.28,0,12.56.25,14.64.11,1.1-.07,6.19-.21,10.68-.34l3.38-.1h.16a1.73,1.73,0,0,0,.32,0l3.91-.13c1.67-.11,14.18,0,15.66.33l.59.12c2.83.57,3.22.84,3.27,1.62a1.61,1.61,0,0,1-.69,1.36L67,82a2,2,0,0,0,.23,4l.23,0,40.8-4.77h.09c1-.16,3.56-.26,4.58.49a.72.72,0,0,1,.31.52,2.1,2.1,0,0,1-.34,1.72,4.9,4.9,0,0,1-2.92,1.32h-.18L68.42,92.56a2,2,0,0,0,.35,4l.35,0,40.32-7.09a2.07,2.07,0,0,1,.28,1.24c-.06.28-1,1.66-4.34,2.79-3.5,1.19-10,2.69-10.27,2.77h0l-29.75,6.42a2,2,0,0,0,.42,4,2.15,2.15,0,0,0,.43,0l29.51-6.37a.71.71,0,0,1,.65.61c.18.74-1.24,1.66-2.73,2.11-.75.23-2.15.76-3.92,1.43-1.61.61-3.68,1.39-5.68,2.1a1.9,1.9,0,0,0-.4.14,31.63,31.63,0,0,1-5.84,1.65c-2.35.14-5.8,1.45-9.79,3-2.07.79-4.21,1.6-6.22,2.25a77.13,77.13,0,0,1-9.33,2.12l-.24,0c-6.16,1.07-13,1.82-16.37,1.51-6.32-.58-9.94,0-19.33,3C6.3,123.36,1.77,124,1.73,124A2,2,0,0,0,2,128l.27,0c.19,0,4.85-.69,15.48-4.09,9.35-3,12.34-3.32,17.73-2.81,3.71.34,10.64-.42,16.88-1.48a55.09,55.09,0,0,0,12,3.56c1.92.41,3.73.8,5.49,1.27,6.92,1.85,27.77,3.51,28,3.53s.68,0,1,0c3.67,0,6.21-1.69,6.58-4.46a4.56,4.56,0,0,0,.05-.73c2.22.29,4.9.58,6.89.68,4.42.2,7.74-1,8.82-3.21a6,6,0,0,0,.63-2.52,6.93,6.93,0,0,0,3.16-.88,6.07,6.07,0,0,0,2.85-4A4.63,4.63,0,0,0,127.26,109.23ZM80.59,70.13l-9.23.28c2.58-1.68,5.25-3.46,7.35-4.86,1.76-1.17,3.29-2.18,3.66-2.4h0a10.2,10.2,0,0,0,1.87-1.67c1-1,3.37-3.42,4.47-3.21a2.89,2.89,0,0,1,.85,1.83c.15,1,.22,3.5-2.48,6.22-1.91,1.93-3,3-3.56,3.62a1.14,1.14,0,0,1-.11.11Zm26.08,27.09c.52-.18,1-.37,1.48-.57,2.43.92,9.13,3.71,10.34,4.5l.51.33c2.42,1.57,2.68,2,2.44,2.71a1.58,1.58,0,0,1-1.14,1l-20-5.32a.13.13,0,0,1,0-.06,6.39,6.39,0,0,0-.22-.7C102.2,98.57,104.79,97.86,106.67,97.22ZM98.19,124c-5.35-.42-21.83-2-27.26-3.4-1.86-.5-3.8-.92-5.68-1.32s-3.5-.76-5.22-1.2c1.15-.28,2.17-.56,3-.83,1.3-.42,2.62-.9,3.95-1.39l34.14,6.37a.69.69,0,0,1,.39.81C101.4,123.77,99.73,124.09,98.19,124Zm19.45-5.48c-.16.24-1.58,1.16-5.06,1-3.67-.17-10.17-1.14-10.56-1.2l-27.71-5.16a16.8,16.8,0,0,1,3.74-.93,30.64,30.64,0,0,0,6.61-1.76l33.17,6.8A2,2,0,0,1,117.64,118.49Zm6.33-6.55a2.07,2.07,0,0,1-1,1.47,4.92,4.92,0,0,1-3.2.16h-.06l-.11,0-27.86-5.71c1.35-.52,2.48-.94,3-1.1a8.91,8.91,0,0,0,4.59-2.93l20.3,5.4h.08c1,.23,3.41,1.07,4.08,2.15A.66.66,0,0,1,124,111.94Z"
          />
          <path
            d="M77,14h49a2,2,0,0,0,2-2V9a2,2,0,0,0-4,0v1h-5V2a2,2,0,0,0-2-2H85.35a2,2,0,0,0,0,4H103v6H77c-3.78,0-8,2.88-8,7V27a2,2,0,0,0,2,2H87a2,2,0,0,0,2-2V24h35v1a2,2,0,0,0,4,0V22a2,2,0,0,0-2-2H87a2,2,0,0,0-2,2v3H73V17C73,15.38,75.2,14,77,14ZM107,4h8v6h-8Z"
          />
          <path d="M71,33a2,2,0,0,0-2,2V59a2,2,0,0,0,4,0V35A2,2,0,0,0,71,33Z" />
          <path d="M79,33a2,2,0,0,0-2,2V53a2,2,0,0,0,4,0V35A2,2,0,0,0,79,33Z" />
          <path d="M87,33a2,2,0,0,0-2,2V49a2,2,0,0,0,4,0V35A2,2,0,0,0,87,33Z" />
        </svg>
      </div>
    </div>

    <div class="relative -mt-12 lg:-mt-24">
      <svg
        viewBox="0 0 1428 174"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g
            transform="translate(-2.000000, 44.000000)"
            fill="#FFFFFF"
            fill-rule="nonzero"
          >
            <path
              d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
              opacity="0.100000001"
            ></path>
            <path
              d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
              opacity="0.100000001"
            ></path>
            <path
              d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
              id="Path-4"
              opacity="0.200000003"
            ></path>
          </g>
          <g
            transform="translate(-4.000000, 76.000000)"
            fill="#FFFFFF"
            fill-rule="nonzero"
          >
            <path
              d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
            ></path>
          </g>
        </g>
      </svg>
    </div>

    <section class="bg-white border-b py-8">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <h1
          class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
        >
          SaaS products with a COVID-19 discount
        </h1>

        <div class="w-full mb-4">
          <div
            class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
          ></div>
        </div>

        <div
          class="mx-auto my-8 py-4 px-6 bg-white shadow border rounded flex items-center justify-center"
        >
          <p class="mr-4">Does it drive you into a paid account</p>
          <ul class="inline-flex">
            <li class="mr-2">
              <a
                :class="
                  `rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                    show.includes('no')
                      ? 'bg-custom-pink text-white'
                      : 'text-custom-pink bg-gray-300'
                  }`
                "
                @click="toggle('no')"
                >No</a
              >
            </li>
            <li class="mr-2">
              <a
                :class="
                  `rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                    show.includes('maybe')
                      ? 'bg-custom-pink text-white'
                      : 'text-custom-pink bg-gray-300'
                  }`
                "
                @click="toggle('maybe')"
                >Maybe</a
              >
            </li>
            <li class="mr-2">
              <a
                :class="
                  `rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                    show.includes('yes')
                      ? 'bg-custom-pink text-white'
                      : 'text-custom-pink bg-gray-300'
                  }`
                "
                @click="toggle('yes')"
                >Yes</a
              >
            </li>
          </ul>
        </div>
        
        <div
          class="mx-auto my-0 mb-8 py-4 px-6 bg-white shadow border rounded flex items-center justify-center w-full"
        >
          <!-- <p class="mr-4"></p> -->
          <ul class="flex flex-wrap justify-center">
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('ads')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('ads')"
                >Ads</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('affiliate marketing')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('affiliate marketing')"
                >Affiliate Marketing</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('analytics')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('analytics')"
                >Analytics</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('app store optimisation')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('app store optimisation')"
                >App Store Optimisation</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('assessments')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('assessments')"
                >Assessments</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('authentication')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('authentication')"
                >Authentication</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('backup')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('backup')"
                >Backup</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('business intelligence')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('business intelligence')"
                >Business Intelligence</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('cartography')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('cartography')"
                >Cartography</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('cms')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('cms')"
                >CMS</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('content marketing')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('content marketing')"
                >Content Marketing</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('contract management')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('contract management')"
                >Contract Management</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('crm')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('crm')"
                >CRM</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('cybersecurity')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('cybersecurity')"
                >Cybersecurity</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('data collection')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('data collection')"
                >Data Collection</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('delivery management')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('delivery management')"
                >Delivery Management</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('developer tools')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('developer tools')"
                >Developer Tools</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('diagramming and collaboration tool')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('diagramming and collaboration tool')"
                >Diagramming and Collaboration Tool</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('domain names')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('domain names')"
                >Domain Names</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('ecommerce software')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('ecommerce software')"
                >eCommerce Software</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('edtech')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('edtech')"
                >Edtech</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('email')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('email')"
                >Email</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('email signature manager')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('email signature manager')"
                >Email signature manager</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('finance')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('finance')"
                >Finance</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('health records')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('health records')"
                >Health Records</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('help desk software')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('help desk software')"
                >Help Desk Software</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('hosting')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('hosting')"
                >Hosting</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('hr')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('hr')"
                >HR</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('incident management')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('incident management')"
                >Incident Management</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('internal communication')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('internal communication')"
                >Internal Communication</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('lead generation')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('lead generation')"
                >Lead generation</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('live presentations')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('live presentations')"
                >Live Presentations</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('low-code/no-code')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('low-code/no-code')"
                >Low-Code/No-Code</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('management tools')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('management tools')"
                >Management Tools</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('marketing automation')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('marketing automation')"
                >Marketing Automation</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('marketing/ livechat')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('marketing/ livechat')"
                >Marketing/ LiveChat</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('monitoring')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('monitoring')"
                >Monitoring</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('people management')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('people management')"
                >People Management</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('productivity tools')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('productivity tools')"
                >Productivity Tools</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('project management')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('project management')"
                >Project Management</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('recruitment')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('recruitment')"
                >Recruitment</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('remote work')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('remote work')"
                >Remote Work</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('reporting')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('reporting')"
                >Reporting</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('sales tools')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('sales tools')"
                >Sales Tools</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('slack app')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('slack app')"
                >Slack App</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('software editor')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('software editor')"
                >Software Editor</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('spreadsheets')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('spreadsheets')"
                >Spreadsheets</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('video & music')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('video & music')"
                >Video & Music</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('vpn')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('vpn')"
                >VPN</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('web/graphic design')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('web/graphic design')"
                >Web/Graphic Design</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('website builder')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('website builder')"
                >Website Builder</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('website tools')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('website tools')"
                >Website Tools</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('writing tools')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('writing tools')"
                >Writing Tools</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('shipping software')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('shipping software')"
                >Shipping Software</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('customer feedback')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('customer feedback')"
                >Customer Feedback</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('mobile app')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('mobile app')"
                >Mobile App</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('restaurant online ordering')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('restaurant online ordering')"
                >Restaurant Online Ordering</a
              >
            </li>
            <li class="mr-2 mb-3">
              <a
                :class="`rounded py-1 px-3 hover:text-gray-800 cursor-pointer ${
                  show.includes('url shortener')
                    ? 'bg-custom-pink text-white'
                    : 'text-custom-pink bg-gray-300'
                }`"
                @click="toggle('url shortener')"
                >URL Shortener</a
              >
            </li>
          </ul>
        </div>      

        <div class="px-4 w-full my-2" v-if="error">
          <p class="border-2 border-red-400 rounded inline p-2 text-red-600">
            {{ error }}
          </p>
        </div>

        <div class="w-full flex flex-wrap" v-if="showServices.length">
          <a
            class="md:w-1/3 p-6 flex flex-col flex-shrink transform hover:scale-105 transition duration-150 ease-in-out"
            v-for="service in showServices"
            :key="service.id"
            :href="
              service.how_to_apply_url_or_email.includes('@')
                ? `${service.url}/?ref=saasforcovid.com`
                : service.how_to_apply_url_or_email.includes('?')
                ? `${service.how_to_apply_url_or_email}&ref=saasforcovid.com`
                : `${service.how_to_apply_url_or_email}?ref=saasforcovid.com`
            "
          >
            <div
              class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
            >
              <div
                class="flex flex-wrap text-left no-underline hover:no-underline"
              >
                <div
                  class="w-full font-bold text-xl text-gray-800 px-6 mt-6 mb-2 flex items-center"
                >
                  <img
                    class="inline rounded-sm mr-2"
                    style="width: 30px; heigth: 30px;"
                    :src="service.favicon_url"
                    v-if="service.favicon_url"
                  />
                  {{ service.name }}
                  <a
                    class="p-2 ml-auto rounded bg-gray-200 hover:bg-gray-400"
                    :title="`Flag ${service.name}`"
                    :href="
                      `https://twitter.com/share?url=${encodeURIComponent(
                        'https://saasforcovid.com'
                      )}&text=${encodeURIComponent(
                        `Hi @AdriaanvRossum, there is something wrong with the '${service.name}' listing.\n\n(please replace this line with what is wrong...)\n\n`
                      )}`
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M18.827 7.806c-4.225 0-4.491-6.806-9.666-6.806-1.535 0-2.951.628-4.161 1.482v-2.482h-2v24h2v-10.427c1.064-1.302 2.316-2.021 4.205-2.021 2.219 0 3.592.841 5.368.841 3.127 0 4.938-2.379 6.428-5.083-.832.345-1.547.496-2.174.496zm-4.255 2.588c-1.399 0-2.882-.841-5.368-.841-1.761 0-3.108.508-4.205 1.292v-5.784c.999-.951 2.517-2.061 4.162-2.061 1.621 0 2.444 1.025 3.759 2.836.987 1.359 2.159 2.974 4.022 3.648-.74.633-1.5.91-2.37.91z"
                      />
                    </svg>
                  </a>
                </div>
                <p class="text-gray-800 text-base px-6 mb-2 mt-3">
                  <span
                    class="inline-flex rounded-full bg-gray-300 px-2 text-xs font-bold"
                  >
                    {{ service.category }}
                  </span>
                  {{ service.description }}
                  <a
                    class="underline"
                    :href="
                      `${service.more_info_url}?utm_source=saasforcovid.com`
                    "
                    v-if="service.more_info_url"
                  >
                    Read more
                  </a>
                </p>
                <p
                  class="text-gray-600 text-xs px-6 mb-5"
                  v-if="service.requirement"
                >
                  <strong>Requirement</strong>
                  {{ service.requirement }}
                </p>
                <p
                  :class="
                    `text-${service.driveToPaidColor ||
                      'gray'}-600 text-xs px-6 mb-5`
                  "
                  v-if="service.driveToPaidText"
                >
                  {{ service.driveToPaidText }}
                </p>
              </div>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6"
            >
              <p class="text-left text-sm">
                <span v-if="service.how_to_apply_text.endsWith('.')"
                  >{{ service.how_to_apply_text }}
                </span>
                <span v-else-if="service.how_to_apply_text"
                  >{{ service.how_to_apply_text }}.
                </span>
                <span v-if="service.discount.length > 10">{{
                  service.discount
                }}</span>
              </p>
              <div class="flex items-center justify-start">
                <a
                  :href="
                    service.useEmail
                      ? `mailto:${service.how_to_apply_url_or_email}&subject=Discount%20to%20fight%20COVID-19`
                      : `${service.how_to_apply_url_or_email}?utm_source=saasforcovid.com`
                  "
                  :class="
                    `transform hover:scale-105 transition duration-150 ease-in-out mx-auto lg:mx-0 text-sm font-bold rounded-full mt-4 mb-2 px-8 shadow-lg ${
                      service.useEmail
                        ? 'text-custom-pink border-2 border-custom-pink py-3'
                        : 'text-white gradient py-4'
                    }`
                  "
                >
                  <svg
                    v-if="service.useEmail"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#ed6ea0"
                    class="inline mr-2 -ml-2"
                  >
                    <path
                      d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"
                    />
                  </svg>

                  <span v-if="service.discount.length > 10"
                    >Get this discount</span
                  >
                  <span v-else>Get {{ service.discount }} discount</span>
                </a>
              </div>
            </div>
          </a>
        </div>
        <div v-else-if="loading" class="w-full mt-8">
          <p class="text-center">Loading products...</p>
        </div>
        <div v-else class="w-full mt-8">
          <p class="text-center">Select an option above.</p>
        </div>
      </div>
    </section>

    <section class="bg-gray-100 pt-12 pb-20">
      <div class="container mx-auto px-2 pt-4 pb-6 text-gray-800">
        <h1
          class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
        >
          Why?
        </h1>
        <div class="w-full mb-4">
          <div
            class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
          ></div>
        </div>
      </div>

      <div
        class="flex flex-wrap container mx-auto justify-center items-start text-left md:text-center"
      >
        <div class="w-full md:w-1/3 p-4">
          <h4 class="text-xl font-bold leading-tight text-gray-800 mb-4">
            Fight COVID-19
          </h4>
          <p>
            Some SaaS business have made their products cheaper, or even free.
            This way makers can help fighting COVID-19 by building amazing
            tools.
          </p>
        </div>
        <div class="w-full md:w-1/3 p-4">
          <h4 class="text-xl font-bold leading-tight text-gray-800 mb-4">
            Inspire
          </h4>
          <p>
            By showing a list of all awesome participating businesses, we hope
            to inspire others to join the movement. If they can do it, so can
            you. And it's always better together.
          </p>
        </div>
        <div class="w-full md:w-1/3 p-4">
          <h4 class="text-xl font-bold leading-tight text-gray-800 mb-4">
            Support businesses
          </h4>
          <p>
            Some businesses are going through tough times because of the
            COVID-19 crisis. We support them by generating a bit more traffic
            towards their websites.
          </p>
        </div>
      </div>
    </section>

    <!-- Change the colour #f8fafc to match the previous section colour -->
    <svg
      class="wave-top"
      viewBox="0 0 1439 147"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
          <g class="wave" fill="#f8fafc">
            <path
              d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
            ></path>
          </g>
          <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
            <g
              transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) "
            >
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"
              ></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                opacity="0.200000003"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>

    <section class="container mx-auto text-center pt-6 mb-8">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-white"
      >
        This list is crowdsourced
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>

      <h3 class="my-4 mt-8 text-3xl leading-tight">
        Let's fight COVID-19 together!
      </h3>

      <p class="mt-12 mb-8">
        <a
          class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8 shadow-lg"
          href="https://docs.google.com/spreadsheets/d/1QdMr6TYlPLgc8nip165CyuDrr5WPcxnzqxJBJK_EfJ0/edit#gid=0"
          target="_blank"
        >
          Add more SaaS products
        </a>
      </p>

      <p class="text-xs text-white mt-20">
        <span v-if="buildDate"
          ><a
            :href="
              `https://github.com/adriaanvanrossum/saasforcovid.com/${
                commitHash ? `commit/${commitHash}` : 'commits/master'
              }`
            "
            class="text-white underline"
            >Last build</a
          >
          was {{ buildDate }} -</span
        >

        Public website stats by
        <a
          href="https://simpleanalytics.com/saasforcovid.com?ref=saasforcovid.com"
          class="text-white underline"
          >Simple Analytics</a
        >
        - Washing icon by
        <a
          href="https://www.iconfinder.com/iconsets/stop-virus-outline-iconset?utm_source=saasforcovid.com"
          class="text-white underline"
          >LAFS</a
        >
        - Code is
        <a
          href="https://github.com/adriaanvanrossum/saasforcovid.com?utm_source=saasforcovid.com"
          class="text-white underline"
          >open source</a
        >
        <br />
        <a
          href="https://iconmonstr.com/paper-plane-1-psd/?utm_source=saasforcovid.com"
          class="text-white underline"
          >Paper plane</a
        >,
        <a
          href="https://iconmonstr.com/user-31-svg/?utm_source=saasforcovid.com"
          class="text-white underline"
          >users</a
        >, and
        <a
          href="https://iconmonstr.com/flag-14-svg/?utm_source=saasforcovid.com"
          class="text-white underline"
          >flag</a
        >
        by iconmonstr.com - Background vector created by
        <a
          href="https://www.freepik.com/free-photos-vectors/background?utm_source=saasforcovid.com"
          class="text-white underline"
          >freepik.com</a
        >
        - Theme by
        <a
          href="https://www.tailwindtoolbox.com/templates/landing-page?utm_source=saasforcovid.com"
          class="text-white underline"
          >TailwindToolbox.com</a
        >
      </p>

      <div class="mb-4 mt-8 flex w-full justify-center">
        <a
          href="https://simpleanalytics.com/saasforcovid.com?utm_source=saasforcovid.com&utm_content=badge"
          referrerpolicy="origin"
          ><img
            src="https://simpleanalyticsbadge.com/saasforcovid.com?background=%23f8fafc&logo=%23ed7c86"
            loading="lazy"
            referrerpolicy="no-referrer"
            crossorigin="anonymous"
        /></a>
      </div>
    </section>

    <div class="fixed bottom-0 right-0">
      <a
        class="flex items-center gradient px-3 py-2 rounded-tl-lg text-white border-t border-l"
        href="https://twitter.com/intent/user?screen_name=AdriaanvRossum"
      >
        <img class="w-6 rounded-full mr-2" src="/adriaan.jpg" /> Created by
        Adriaan
      </a>
    </div>
  </div>
</template>

<script>
import { services } from "./cache";
import { format } from "timeago.js";
const BUILD_DATE = process.env.VUE_APP_BUILD_DATE;
const COMMIT_HASH = process.env.VUE_APP_COMMIT_HASH;
export default {
  name: "App",
  data() {
    return {
      json: services,
      error: null,
      services: [],
      loading: true,
      buildDate: BUILD_DATE ? format(BUILD_DATE) : null,
      commitHash: COMMIT_HASH,
      show: ["maybe", "no", "ads"],
      category: null,
    };
  },
  computed: {
    showServices() {
      if (!this.json) return [];
      const clean = this.json.map((service) => {
        return Object.keys(service).reduce((c, k) => {
          const key = this.cleanKey(k);
          c[key] = this.cleanValue(key, service[k]);
          return c;
        }, {});
      });
      const showServices = clean
        .filter(({ description, name, category }) => {
          if (!description || !name || !category) return false;
          if (this.category) return category === this.category;
          return true;
        })
        .map((service) => {
          const {
            does_it_drive_you_into_a_paid_account: paid,
            favicon,
            category: categorychoice,
          } = service;
          if (favicon) {
            const url = !service.url.startsWith("http")
              ? `https://${service.url}`
              : service.url;
            const parts = url.split("/");
            if (parts && parts[2]) {
              const hostname = parts[2];
              const faviconUrl = !favicon.startsWith("http")
                ? `http://${hostname}${
                    favicon.startsWith("/") ? favicon : `/${favicon}`
                  }`
                : favicon;
              service.favicon_url = faviconUrl.startsWith("https")
                ? faviconUrl.split("?")[0]
                : null;
            }
          }
          if (paid) {
            if (/^maybe/i.test(paid)) {
              service.driveToPaid = "maybe";
              service.driveToPaidColor = "orange";
              service.driveToPaidText =
                "Warning: It may drive you into a paid account";
            }
            if (/^no/i.test(paid)) {
              service.driveToPaid = "no";
              service.driveToPaidColor = "green";
              service.driveToPaidText =
                "It does not drive you into a paid account";
            }
            if (/^yes/i.test(paid)) {
              service.driveToPaid = "yes";
              service.driveToPaidColor = "red";
              service.driveToPaidText =
                "Warning: It drives you into a paid account";
            }
            service.driveToPaidText += paid.includes(",")
              ? ", " + paid.split(",")[1].trim()
              : ".";
          }
          
           if (categorychoice) {
            // console.log(categorychoice);
            if (/^ads/i.test(categorychoice)) {
              service.selectedCategory = "ads";
            } else if (/^affiliate marketing/i.test(categorychoice)) {
              service.selectedCategory = "affiliate marketing";
            } else if (/^analytics/i.test(categorychoice)) {
              service.selectedCategory = "analytics";
            } else if (/^app store optimisation/i.test(categorychoice)) {
              service.selectedCategory = "app store optimisation";
            } else if (/^assessments/i.test(categorychoice)) {
              service.selectedCategory = "assessments";
            } else if (/^authentication/i.test(categorychoice)) {
              service.selectedCategory = "authentication";
            } else if (/^backup/i.test(categorychoice)) {
              service.selectedCategory = "backup";
            } else if (/^business intelligence/i.test(categorychoice)) {
              service.selectedCategory = "business intelligence";
            } else if (/^cartography/i.test(categorychoice)) {
              service.selectedCategory = "cartography";
            } else if (/^cms/i.test(categorychoice)) {
              service.selectedCategory = "cms";
            } else if (/^content marketing/i.test(categorychoice)) {
              service.selectedCategory = "content marketing";
            } else if (/^contract management/i.test(categorychoice)) {
              service.selectedCategory = "contract management";
            } else if (/^crm/i.test(categorychoice)) {
              service.selectedCategory = "crm";
            } else if (/^cybersecurity/i.test(categorychoice)) {
              service.selectedCategory = "cybersecurity";
            } else if (/^data collection/i.test(categorychoice)) {
              service.selectedCategory = "data collection";
            } else if (/^delivery management/i.test(categorychoice)) {
              service.selectedCategory = "delivery management";
            } else if (/^developer tools/i.test(categorychoice)) {
              service.selectedCategory = "developer tools";
            } else if (
              /^diagramming and collaboration tool/i.test(categorychoice)
            ) {
              service.selectedCategory = "diagramming and collaboration tool";
            } else if (/^domain names/i.test(categorychoice)) {
              service.selectedCategory = "domain names";
            } else if (/^ecommerce software/i.test(categorychoice)) {
              service.selectedCategory = "ecommerce software";
            } else if (/^edtech/i.test(categorychoice)) {
              service.selectedCategory = "edtech";
            } else if (/^email signature manager/i.test(categorychoice)) {
              service.selectedCategory = "email signature manager";
              // console.log(service.selectedCategory);
              //was having issues with this being properly alocated when "email" was above this, as this category was being allocated in that if instead. So, I've changed the order.
            } else if (/^email/i.test(categorychoice)) {
              service.selectedCategory = "email";
              // console.log(service.selectedCategory);
            } else if (/^finance/i.test(categorychoice)) {
              service.selectedCategory = "finance";
            } else if (/^health records/i.test(categorychoice)) {
              service.selectedCategory = "health records";
            } else if (/^help desk software/i.test(categorychoice)) {
              service.selectedCategory = "help desk software";
            } else if (/^hosting/i.test(categorychoice)) {
              service.selectedCategory = "hosting";
            } else if (/^hr/i.test(categorychoice)) {
              service.selectedCategory = "hr";
            } else if (/^incident management/i.test(categorychoice)) {
              service.selectedCategory = "incident management";
            } else if (/^internal communication/i.test(categorychoice)) {
              service.selectedCategory = "internal communication";
            } else if (/^lead generation/i.test(categorychoice)) {
              service.selectedCategory = "lead generation";
            } else if (/^live presentations/i.test(categorychoice)) {
              service.selectedCategory = "live presentations";
            } else if (/^low-code\/no-code/i.test(categorychoice)) {
              service.selectedCategory = "low-code/no-code";
            } else if (/^management tools/i.test(categorychoice)) {
              service.selectedCategory = "management tools";
            } else if (/^marketing automation/i.test(categorychoice)) {
              service.selectedCategory = "marketing automation";
            } else if (/^marketing\/ livechat/i.test(categorychoice)) {
              service.selectedCategory = "marketing/ livechat";
            } else if (/^monitoring/i.test(categorychoice)) {
              service.selectedCategory = "monitoring";
            } else if (/^people management/i.test(categorychoice)) {
              service.selectedCategory = "people management";
            } else if (/^productivity tools/i.test(categorychoice)) {
              service.selectedCategory = "productivity tools";
            } else if (/^project management/i.test(categorychoice)) {
              service.selectedCategory = "project management";
            } else if (/^recruitment/i.test(categorychoice)) {
              service.selectedCategory = "recruitment";
            } else if (/^remote work/i.test(categorychoice)) {
              service.selectedCategory = "remote work";
            } else if (/^reporting/i.test(categorychoice)) {
              service.selectedCategory = "reporting";
            } else if (/^sales tools/i.test(categorychoice)) {
              service.selectedCategory = "sales tools";
            } else if (/^slack app/i.test(categorychoice)) {
              service.selectedCategory = "slack app";
            } else if (/^software editor/i.test(categorychoice)) {
              service.selectedCategory = "software editor";
            } else if (/^spreadsheets/i.test(categorychoice)) {
              service.selectedCategory = "spreadsheets";
            } else if (/^video & music/i.test(categorychoice)) {
              service.selectedCategory = "video & music";
            } else if (/^vpn/i.test(categorychoice)) {
              service.selectedCategory = "vpn";
            } else if (/^web\/graphic design/i.test(categorychoice)) {
              service.selectedCategory = "web/graphic design";
            } else if (/^website builder/i.test(categorychoice)) {
              service.selectedCategory = "website builder";
            } else if (/^website tools/i.test(categorychoice)) {
              service.selectedCategory = "website tools";
            } else if (/^writing tools/i.test(categorychoice)) {
              service.selectedCategory = "writing tools";
            } else if (/^shipping software/i.test(categorychoice)) {
              service.selectedCategory = "shipping software";
            } else if (/^customer feedback/i.test(categorychoice)) {
              service.selectedCategory = "customer feedback";
            } else if (/^mobile app/i.test(categorychoice)) {
              service.selectedCategory = "mobile app";
              // console.log(service.selectedCategory);
              // this one did not render because description is missing
            } else if (/^restaurant online ordering/i.test(categorychoice)) {
              service.selectedCategory = "restaurant online ordering";
            } else if (/^url shortener/i.test(categorychoice)) {
              service.selectedCategory = "url shortener";
            } else {
              service.selectedCategory = "other";
            }
          }
         
          service.useEmail =
            service.how_to_apply_url_or_email &&
            service.how_to_apply_url_or_email.includes("@");
          return service;
        })
        .sort(({ name: left }, { name: right }) => {
          return left.toLowerCase() < right.toLowerCase() ? -1 : 1;
        })
        .sort(({ driveToPaid: left }, { driveToPaid: right }) => {
          if (left === "no" && ["yes", "maybe"].includes(right)) return -1;
          if (left === "yes" && ["no", "maybe"].includes(right)) return 1;
          if (left === "maybe" && ["yes"].includes(right)) return -1;
          if (left === "maybe" && ["no"].includes(right)) return 1;
          return 0;
        });
      return showServices.filter(({ driveToPaid }) => {
        return this.show.includes(driveToPaid);
      })
      .filter(({ selectedCategory }) => {
        return this.show.includes(selectedCategory);
      });
    },
  },
  methods: {
    cleanKey(key) {
      return key
        .toLowerCase()
        .replace(/[^a-z]+/gi, "_")
        .replace(/(^_|_$)/g, "");
    },
    cleanValue(key, value) {
      if (key === "category" && value.startsWith("Other")) return "Other";
      return value;
    },
    toggle(type) {
      const add = !this.show.includes(type);
      if (add) this.show.push(type);
      else this.show.splice(this.show.indexOf(type), 1);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

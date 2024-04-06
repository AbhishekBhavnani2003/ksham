export default function Footer () {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8" style={{backgroundColor:'#0f172a',color:'white'}}>
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
           <img src="data:image/png;base64,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" alt="" />
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800"  style={{color:'white'}}>
            Your Vision, Our Mission: A World of Inclusive Eyewear
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900"  style={{color:'white'}}>
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 ">Phone:</p>
            <a
              href="tel:9373124725"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              +91 9373124725
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 ">Email:</p>
            <a
              href="mailto:kshaminnovation@gmail.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              kshaminnovation@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              312 Eye Street, India
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide ">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3" style={{marginTop:'10px'}}>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
          <p className="mt-4 text-sm ">
          At kshaminnovation  , we believe in breaking barriers and enhancing lives through cutting-edge eyewear technology tailored to the unique needs of the deaf, blind, and mute communities.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm ">
        Copyright © Ksham Innovation 2023. All Rights Reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm  transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm  transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm  transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Trade Mark
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm  transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Patent
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm  transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
import React from 'react'
import MapComponent from './MapComponent'
import footer from '../../img/footer.png'
const Footer = () => {
  return (

    <footer className="bg-white lg:grid lg:grid-cols-5 dark:bg-gray-900">
      
  <div className="relative block h-24 lg:col-span-2 lg:h-full">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7202.772571509105!2d81.86091723574158!3d25.49216059445321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399aca789e0c84a5%3A0x2c27733a7529bf08!2sMNNIT%20Allahabad%20Campus%2C%20Teliarganj%2C%20Prayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1714657274880!5m2!1sen!2sin"
      className="absolute inset-0 h-full w-full object-cover"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <p>
          <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Team
          </span>
          <a
            href="#"
            className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl dark:text-white"
          >
            
          </a>
        </p>
        <ul className="mt-8 space-y-1 text-sm text-gray-700 dark:text-gray-200">
          <li>Shubham Kushwaha (20205157)</li>
          <li>Saurabh Kumar (20205146)</li>
          <li>Ashish Goyal (20205045)</li>

        </ul>
        <ul className="mt-8 flex gap-6">
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
            >
              <span className="sr-only">Github</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
            >
              <span className="sr-only">GitHub</span>

              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          {/* Rest of the social media icons */}
        </ul>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="font-medium text-gray-900 dark:text-white">Services</p>
          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                Disease Search
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                Cure About Disease
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                Search Any Disease
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="mt-6 space-y-4 text-sm">
            {/* Other content */}
            <img src = {footer} />
          </ul>
        </div>
      </div>
    </div>
    <div className="mt-12 border-t border-gray-100 pt-12 dark:border-gray-800">
      <div className="sm:flex sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-4 text-xs">
          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
              Cookies
            </a>
          </li>
        </ul>
        <p className="mt-8 text-xs text-gray-500 sm:mt-0 dark:text-gray-400">
          &copy; 2024. MNNIT Allahabad. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>


  
  )
}

export default Footer
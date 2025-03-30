import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          {/* Company Section */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {["About", "Careers", "Brand Center", "Blog"].map((item) => (
                <li className="mb-4" key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Center Section */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Help Center
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {["Discord Server", "Twitter", "Facebook", "Contact Us"].map(
                (item) => (
                  <li className="mb-4" key={item}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {["Privacy Policy", "Licensing", "Terms & Conditions"].map(
                (item) => (
                  <li className="mb-4" key={item}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Download Section */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Download
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {["iOS", "Android", "Windows", "MacOS"].map((item) => (
                <li className="mb-4" key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights
            Reserved.
          </span>

          {/* Social Icons */}
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            {[
              { icon: "facebook", link: "C:\Users\LENOVO\OneDrive\Desktop\ecommerce\public\icons\facebook.svg" },
              { icon: "discord", link: "C:\Users\LENOVO\OneDrive\Desktop\ecommerce\public\icons\discord.svg" },
              { icon: "twitter", link: "#" },
              { icon: "github", link: "www.github/lavanya9755" },
             
            ].map((item) => (
              <a
                key={item.icon}
                href={item.link}
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <img
                  src={`/icons/${item.icon}.svg`}
                  alt={item.icon}
                  className="w-4 h-4"
                />
                <span className="sr-only">{`${item.icon} page`}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Button from "../Button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <section className="w-full relative">
      {/* WRAPPER DIV */}
      <div>
        {/* Footer Part-1 */}
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center relative pt-16 lg:pt-72 px-4 sm:px-8">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <h1 className="heading lineHeight font-bold ">
              Have an <br /> idea? Just tell <br /> us.
            </h1>
            <p className="text-base sm:text-lg lg:text-xl">
              Get big results for your small business.
            </p>

            <Button>Let's Talk</Button>
          </div>
          <div className="lg:absolute lg:-bottom-36 lg:right-10 mt-8 lg:mt-0 relative -bottom-16">
            <Image
              src={"/images/footer-img.webp"}
              alt="footer-img"
              width={700}
              height={400}
              className="w-full max-w-md lg:max-w-none"
            />
          </div>
        </div>

        <div className="relative pt-16 sm:pt-24 lg:pt-36">
          {/* Footer Part-2 */}
          <div className="h-48 sm:h-64 lg:h-[50vh] w-full relative overflow-hidden">
            <Image
              src={
                "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="footer-image"
              width={1200}
              height={1200}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-white py-8 sm:py-10 lg:py-12 relative">
            <div className="pt-24 sm:pt-36 lg:pt-48">
              <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Logo and description */}
                <div className="col-span-1">
                  <img
                    src="/path-to-your-logo.png"
                    alt="Logo"
                    className="mb-4 w-24 sm:w-28"
                  />
                  <p className="text-gray-600 text-sm sm:text-base">
                    We are 300+ specialists across investment strategy and
                    business.
                  </p>
                  <div className="mt-6 relative">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="py-2 pl-4 pr-16 border rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 w-full text-sm sm:text-base"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-400 text-white px-4 py-2 rounded-full hover:bg-green-500 transition text-xs sm:text-sm">
                      Subscribe →
                    </button>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="col-span-1">
                  <h3 className="text-gray-800 font-semibold mb-4 text-sm sm:text-base">
                    Quick Links
                  </h3>
                  <ul className="text-gray-600 space-y-2 text-sm sm:text-base">
                    <li>
                      <a href="#" className="hover:text-gray-800">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-800">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-800">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-800">
                        Projects
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-800">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Services */}
                <div className="col-span-1">
                  <h3 className="text-gray-800 font-semibold mb-4 text-sm sm:text-base">
                    Services
                  </h3>
                  <ul className="text-gray-600 space-y-2 text-sm sm:text-base">
                    <li>
                      <a href="#" className="hover:text-gray-800">
                        Web Design
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-800">
                        Digital Marketing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-800">
                        Business Investment
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-800">
                        Financial Consulting
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="col-span-1">
                  <h3 className="text-gray-800 font-semibold mb-4 text-sm sm:text-base">
                    Contact Us
                  </h3>
                  <p className="text-gray-600 mb-2 text-sm sm:text-base">
                    500 E Las Olas Blvd
                  </p>
                  <p className="text-gray-600 mb-2 text-sm sm:text-base">
                    Fort Lauderdale, FL 33301
                  </p>
                  <a
                    href="mailto:info@example.com"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    info@example.com
                  </a>
                  <p className="text-green-500 font-semibold mt-2 text-sm sm:text-base">
                    +123-456-789
                  </p>
                </div>
              </div>

              <div className="container mx-auto px-4 sm:px-6 mt-10 border-t border-gray-300 pt-6 flex flex-col lg:flex-row justify-between items-center text-gray-600 text-sm sm:text-base">
                <p>Copyright © 2024. All Rights Reserved.</p>
                <div className="space-x-4 mt-4 lg:mt-0">
                  <a href="#" className="hover:text-gray-800">
                    Team
                  </a>
                  <a href="#" className="hover:text-gray-800">
                    FAQ's
                  </a>
                  <a href="#" className="hover:text-gray-800">
                    Price
                  </a>
                </div>
              </div>

              <div className="absolute bottom-4 right-4">
                <a
                  href="#top"
                  className="block p-2 rounded-full bg-gray-300 hover:bg-gray-400 text-gray-800"
                >
                  ↑
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-screen-xl bg-[#E1FE6E] border border-black rounded-2xl px-6 lg:px-10 mx-auto flex flex-col lg:flex-row py-8 lg:py-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex-[3] mb-6 lg:mb-0">
              <h4 className="text-sm sm:text-lg lg:text-xl">
                LET'S WORK TOGETHER
              </h4>
              <h1 className="text-2xl sm:text-3xl lg:text-5xl w-full lg:w-[28ch] font-semibold">
                Subscribe for our upcoming latest articles
              </h1>
            </div>
            <div className="flex-1 group">
              <div className="bg-white py-4 lg:py-7 px-6 lg:px-10 flex rounded-xl">
                <div className="w-44 sm:w-60 px-4">
                  <h5 className="text-gray-500 text-sm sm:text-base">
                    Email Address
                  </h5>
                  <input
                    type="text"
                    placeholder="name@example.com"
                    className="outline-none placeholder-black text-sm sm:text-base lg:text-xl w-full"
                  />
                </div>
                <div className="flex relative">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 rounded-full bg-gray-300 flex items-center group-hover:bg-[#e1fe6e]  duration-500 transition-all">
                    <h6 className="relative z-20 pl-4 font-medium">
                      Subscribe
                    </h6>
                  </div>
                  <div className="h-10 w-10 flex items-center justify-end sm:h-12 sm:w-12 lg:h-16 lg:w-16 rounded-full bg-[#e1fe6e] group-hover:bg-gray-300 duration-500 transition-all relative right-2 lg:right-3">
                    <h1 className="">
                      <ArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

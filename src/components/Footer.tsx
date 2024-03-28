import { FC } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

export const Footer: FC = () => {
  const [state, handleSubmit] = useForm("xayrdgob");
  if (state.succeeded) {
    return (
      <h1 className="md:text-5xl/tight my-4 max-w-lg text-4xl font-medium text-white">
        Thanks for sending your message!
      </h1>
    );
  }
  const menuOne = [
    "Support Center",
    "Customer Support",
    "About Us",
    "Project",
    "Return Policy",
  ];

  const menuTwo = [
    "Press Inquiries",
    "Social Media Directories",
    "Images & B-roll",
    "Site Map",
  ];
  ///
  return (
    <footer className="bg-blue-700 backdrop-blur-3xl">
      <div className="container py-20 lg:px-20">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="col-span-2 sm:col-span-1 lg:col-span-3">
            <ul className="flex flex-col gap-3">
              <h5 className="text-default-200 mb-2 font-medium lg:text-lg xl:text-xl">
                About Us
              </h5>
              {menuOne.map((list, index) => (
                <li>
                  <a
                    href="#"
                    className="text-default-300 text-base transition-all hover:text-white"
                  >
                    <i
                      data-lucide="gauge-circle"
                      className="me-2 inline-block h-4 w-4"
                    ></i>
                    {list}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1 lg:col-span-3">
            <ul className="flex flex-col gap-3">
              <h5 className="text-default-200 mb-2 font-medium lg:text-lg xl:text-xl">
                My Account
              </h5>
              {menuTwo.map((list, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-default-300 text-base transition-all hover:text-white"
                  >
                    <i
                      data-lucide="gauge-circle"
                      className="me-2 inline-block h-4 w-4"
                    ></i>
                    {list}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-6">
            <div className="bg-blue-900 rounded-xl">
              <div className="p-10">
                <h6 className="mb-4 text-xl text-white">Newsletter</h6>
                <p className="text-default-200 mb-6 text-base font-medium">
                  Sign up and receive the latest tips via email.
                </p>
                <form onSubmit={handleSubmit} className="mb-6 space-y-2">
                  <label htmlFor="email" className="text-base text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="bg-blue-600 pe-40 ps-4 h-12 w-full rounded-lg border-white/10 py-4 text-white backdrop-blur-3xl focus:border-white/10 focus:ring-0"
                      placeholder="Enter your email :"
                    />
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="hover:bg-blue-500 hover:border-blue-500 border-primary bg-primary end-[6px] absolute top-[6px] inline-flex h-9 items-center justify-center gap-2 rounded-md px-6 text-white transition-all">

                      Subscribe
                    </button>
                  </div>
                </form>
                <div>
                  <h6 className="mb-4 text-base text-white">Follow US :</h6>
                  <ul className="flex flex-wrap items-center gap-1">
                    {[
                      <TiSocialInstagram />,
                      <TiSocialLinkedin />,
                      <TiSocialTwitter />,
                      <TiSocialYoutube />,
                    ].map((social, index) => (
                      <li>
                        <a
                          href="#"
                          className="hover:bg-blue-700 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 transition-all duration-500"
                        >
                          <i
                            data-lucide="facebook"
                            className="text-default-300  group-hover:text-white"
                          >
                            {social}
                          </i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="md:text-start container flex h-full flex-wrap items-center justify-center gap-4 text-center md:justify-between lg:px-20">
          <p className="text-default-200 text-base font-medium">
            ©
            <a href="#">
              Design&Created
              <i
                data-lucide="heart"
                className="inline h-4 w-4 fill-red-500 text-red-500"
              ></i>
              by @SolanaGenius
            </a>
          </p>
          <p className="text-default-200 text-base font-medium">
            <a href="#">Terms Conditions & Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

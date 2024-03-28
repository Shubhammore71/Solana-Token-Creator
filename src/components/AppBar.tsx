import { FC } from "react";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import NetworkSwitcher from "./NetworkSwitcher";

export const AppBar: FC = (props) => {
  const menu = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Tools",
      link: "#tools",
    },
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Price",
      link: "#price",
    },
    {
      name: "Faq",
      link: "#faq",
    },
  ];

  return (
    <div>
      <header id="navbar-sticky" className="bg-blue-600 navbar">
        <div className="container">
          <nav>
            <a href="/" className="logo">
              <img
                src="assets/images/newlogosol.png"
                className="h-10"
                alt="Logo"
              />
            </a>

            <div className="ms-auto flex items-center px-2.5 lg:hidden">
              <button
                className="hs-collapse-toggle  bg-default-100/5 inline-flex h-9 w-12 items-center justify-center rounded-md border border-white/20"
                type="button"
                id="hs-unstyled-collapse"
                data-hs-collapse="#mobileMenu"
                data-hs-type="collapse"
              >
                <i data-lucide="menu" className="  stroke-white">
                  <LuMenu />
                </i>
              </button>
            </div>

            <div
              id="mobileMenu"
              className="hs-collapse mx-auto mt-2 hidden grow basis-full items-center justify-center transition-all duration-300 lg:mt-0 lg:flex lg:basis-auto"
            >
              <ul id="navbar-navlist" className="navbar-nav">
                {menu.map((list, index) => (
                  <li className=" nav-item" key={index}>
                    <a className="hover:bg-blue-500 nav-link inline-block" href={list.link}>
                      {list.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <NetworkSwitcher />
          </nav>
        </div>
      </header>
      {props.children}
    </div>
  );
};

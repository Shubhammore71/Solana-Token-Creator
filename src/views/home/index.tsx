// };
import { FC } from "react";
import { MdGeneratingTokens } from "react-icons/md";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

interface HomeViewProps {
    setOpenCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
}

import pkg from "../../../package.json";

export const HomeView: FC<HomeViewProps > = ({ setOpenCreateModal }) => {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-[72px] bg-blue-800">
        <div className="px-6 py-4">
            <div className="bg-default-950/40 rounded-2xl">
                <div className="container">
                    <div className="p-6">
                        <div className="relative grid grid-cols-1 items-center
                        gap-12 lg:grid-cols-2">
                            <div className="bg-primary/10 -z-1
                            start-0 absolute top-0 h-14 w-14
                            animate-[spin_10s_linear_infinite]
                            rounded-2xl rounded-br-none rounded-tl-none">
                            </div>
                            <div className="bg-primary/20 -z-1
                            end-0 absolute bottom-0 h-14 w-14
                            animate-ping rounded-full">
                            </div>
                            <div>
                                <span className="text-white bg-blue-700 
                                rounded-md px-3 py-1 text-sm font-md
                                uppercase tracking-wider">
                                    CREATE SOLANA TOKEN {pkg.version}
                                </span>

                                <h1 className="md:text-5xl/tight
                                my-4 max-w-lg text-4xl font-md text-white">
                                    Transform your vision into tokens instantly on Solana.
                                </h1>
                                <p className="text-default-300
                                md:text-lg">
                                    "Launch your Solana token easily with our all-in-one development and deployment solution. Get started quickly on the fast and scalable Solana blockchain."
                                </p>

                                <div className="new_add_css">
                                <a
                                    onClick={() => setOpenCreateModal(true)}
                                    className="hover:bg-blue-hover pe-4 group mt-10 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-1 py-1 text-white transition-all duration-500"
                                    >
                                    <span className="bg-blue text-white me-2 flex h-11 w-11 items-center justify-center rounded-full group-hover:bg-white/10 group-hover:text-white">
                                        <i data-lucide="image" className="">
                                        <MdGeneratingTokens />
                                        </i>
                                    </span>
                                    Create
                                    </a>
                                    <a className="mt-8">
                                    <WalletMultiButton />
                                    </a>
                                </div>
                            </div>
                            <div className="mx-auto h-[595px] overflow-hidden">
                  <div className="marquee grid grid-cols-2 gap-6">
                    <div className="relative m-auto flex flex-col gap-6 overflow-hidden">
                      <div className="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6">
                        {["img-30", "img-31", "img-33", "img-42", "img-43"].map(
                          (image, index) => (
                            <img
                              key={index}
                              className="aspect-1 h-full w-60 rounded-xl object-cover"
                              src={`assets/images/ai/${image}.avif`}
                              alt=""
                            />
                          )
                        )}
                      </div>

                      <div
                        aria-hidden="true"
                        className="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6"
                      >
                        {["img-30", "img-31", "img-33", "img-42", "img-43"].map(
                          (image, index) => (
                            <img
                              key={index}
                              className="aspect-1 h-full w-60 rounded-xl object-cover"
                              src={`assets/images/ai/${image}.avif`}
                              alt=""
                            />
                          )
                        )}
                      </div>
                    </div>

                    <div className="marquee-reverse m-auto flex flex-col gap-6 overflow-hidden">
                      <div className="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6">
                        {["img-30", "img-31", "img-33", "img-42", "img-43"].map(
                          (image, index) => (
                            <img
                              key={index}
                              className="aspect-1 h-full w-60 rounded-xl object-cover"
                              src={`assets/images/ai/${image}.avif`}
                              alt=""
                            />
                          )
                        )}
                      </div>

                      <div
                        aria-hidden="true"
                        className="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6"
                      >
                        {["img-30", "img-31", "img-33", "img-42", "img-43"].map(
                          (image, index) => (
                            <img
                              key={index}
                              className="aspect-1 h-full w-60 rounded-xl object-cover"
                              src={`assets/images/ai/${image}.avif`}
                              alt=""
                            />
                          )
                        )}
                      </div>
                    </div>
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


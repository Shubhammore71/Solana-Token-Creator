import { FC } from "react";
import pkg from "../../../package.json";

export const OfferView: FC = ({})=>{

    return(
        <section id="features" className="bg-blue-900 py-20">
            <div className="container">
                <div className="mb-10 flex items-end justify-between">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="mb-4 text-3xl font-medium capitalize text-white">
                            Solana token popularity
                        </h2>
                        <p className="text-default-200 text-sm font-medium">
                        Start working with Solana Genius's Token Creator, It allows you to create
                        solana token by Creating, deploying, airdrop, transfering and
                        updating metadata.
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="space-y-6">
                        <div className="bg-blue-800 hover:translate-y-2  border-s-2 rounded-xl backdrop-blur-3xl transition-all duration-500">
                            <div className="p-10">
                                <i data-lucid="file-text" className="text-primary h-10 w-10"></i>
                                <h3 className="mb-4 mt-8 text-2xl font-medium text-white">
                                Efficient Token Creation
                                </h3>
                                <p className="text-default-100 mb-4 text-sm font-medium">
                                Solana Genius's Token Creator simplifies the process of creating Solana tokens, allowing you to define parameters such as name, symbol, and supply effortlessly.
                                </p>
                                <a
                                href="#"
                                className="text-blue-400 group relative inline-flex items-center gap-2"
                                >
                                <span className="bg-white absolute -bottom-0 h-px w-7/12 rounded transition-all duration-500 group-hover:w-full"></span>
                                Read More <i data-lucide="move-right" className="h-4 w-4"></i>
                                </a>
                            </div>
                        </div>
                        <div className="bg-blue-800 hover:translate-y-2  border-s-2 rounded-xl backdrop-blur-3xl transition-all duration-500">
                            <div className="p-10">
                                <i data-lucid="file-text" className="text-primary h-10 w-10"></i>
                                <h3 className="mb-4 mt-8 text-2xl font-medium text-white">
                                Seamless Deployment
                                </h3>
                                <p className="text-default-100 mb-4 text-sm font-medium">
                                With Solana Genius, deploying your tokens onto the Solana blockchain is a smooth and hassle-free experience, ensuring rapid access to the Solana ecosystem.
                                </p>
                                <a
                                href="#"
                                className="text-blue-400 group relative inline-flex items-center gap-2"
                                >
                                <span className="bg-white absolute -bottom-0 h-px w-7/12 rounded transition-all duration-500 group-hover:w-full"></span>
                                Read More <i data-lucide="move-right" className="h-4 w-4"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-blue-800 hover:translate-y-2  border-s-2 rounded-xl backdrop-blur-3xl transition-all duration-500">
                            <div className="p-10">
                                <i data-lucid="file-text" className="text-primary h-10 w-10"></i>
                                <h3 className="mb-4 mt-8 text-2xl font-medium text-white">
                                Airdrop Support
                                </h3>
                                <p className="text-default-100 mb-4 text-sm font-medium">
                                Solana Genius facilitates airdrops, enabling you to distribute tokens to a wide audience quickly and efficiently, fostering community engagement and adoption.
                                </p>
                                <a
                                href="#"
                                className="text-blue-400 group relative inline-flex items-center gap-2"
                                >
                                <span className="bg-white absolute -bottom-0 h-px w-7/12 rounded transition-all duration-500 group-hover:w-full"></span>
                                Read More <i data-lucide="move-right" className="h-4 w-4"></i>
                                </a>
                            </div>
                        </div>
                        <div className="bg-blue-800 hover:translate-y-2  border-s-2 rounded-xl backdrop-blur-3xl transition-all duration-500">
                            <div className="p-10">
                                <i data-lucid="file-text" className="text-primary h-10 w-10"></i>
                                <h3 className="mb-4 mt-8 text-2xl font-medium text-white">
                                Secure Transfer Mechanism
                                </h3>
                                <p className="text-default-100 mb-4 text-sm font-medium">
                                Our platform offers secure mechanisms for transferring tokens, ensuring that transactions on the Solana blockchain are fast, reliable, and secure.
                                </p>
                                <a
                                href="#"
                                className="text-blue-400 group relative inline-flex items-center gap-2"
                                >
                                <span className="bg-white absolute -bottom-0 h-px w-7/12 rounded transition-all duration-500 group-hover:w-full"></span>
                                Read More <i data-lucide="move-right" className="h-4 w-4"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-blue-800 hover:translate-y-2  border-s-2 rounded-xl backdrop-blur-3xl transition-all duration-500">
                            <div className="p-10">
                                <i data-lucid="file-text" className="text-primary h-10 w-10"></i>
                                <h3 className="mb-4 mt-8 text-2xl font-medium text-white">
                                Metadata Updates
                                </h3>
                                <p className="text-default-100 mb-4 text-sm font-medium">
                                Solana Genius allows for easy updating of token metadata, ensuring that your token's information remains accurate and up-to-date as your project evolves.
                                </p>
                                <a
                                href="#"
                                className="text-blue-400 group relative inline-flex items-center gap-2"
                                >
                                <span className="bg-white absolute -bottom-0 h-px w-7/12 rounded transition-all duration-500 group-hover:w-full"></span>
                                Read More <i data-lucide="move-right" className="h-4 w-4"></i>
                                </a>
                            </div>
                        </div>
                        <div className="bg-blue-800 hover:translate-y-2  border-s-2 rounded-xl backdrop-blur-3xl transition-all duration-500">
                            <div className="p-10">
                                <i data-lucid="file-text" className="text-primary h-10 w-10"></i>
                                <h3 className="mb-4 mt-8 text-2xl font-medium text-white">
                                Comprehensive Support
                                </h3>
                                <p className="text-default-100 mb-4 text-sm font-medium">
                                With Solana Genius, you'll have access to comprehensive support to address any questions or issues you encounter during the token creation process, ensuring a smooth experience from start to finish.
                                </p>
                                <a
                                href="#"
                                className="text-blue-400 group relative inline-flex items-center gap-2"
                                >
                                <span className="bg-white absolute -bottom-0 h-px w-7/12 rounded transition-all duration-500 group-hover:w-full"></span>
                                Read More <i data-lucide="move-right" className="h-4 w-4"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
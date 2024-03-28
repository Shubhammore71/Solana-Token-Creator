import { FC } from "react";
import pkg from "../../../package.json";
import { LuArrowRightFromLine } from "react-icons/lu";
import { MdGeneratingTokens, MdToken } from "react-icons/md";
import { RiTokenSwapFill } from "react-icons/ri";
import { RxTokens } from "react-icons/rx";

interface FeatureViewProps {
    setOpenTokenMetaData: (value: boolean) => void;
    setOpenContact: (value: boolean) => void;
    setOpenAirdrop: (value: boolean) => void;
    setOpenSendTransaction: (value: boolean) => void;
    setOpenCreateModal: (value: boolean) => void;
  }

export const FeatureView: FC<FeatureViewProps> =({
  setOpenTokenMetaData,
  setOpenContact,
  setOpenAirdrop,
  setOpenSendTransaction,
  setOpenCreateModal,
})=>{
    const feature=[
        {
            name: "Token Generator",
            icon: <MdGeneratingTokens/>,
            description:"Commence your journey with the Solana Genius Token Creator, empowering you to seamlessly craft Solana tokens through functionalities including creation, deployment, airdrops, transfers, and metadata updates.",
            function: setOpenCreateModal,
        },
        {
            name: "Get Airdrop",
            icon: <MdToken/>,
            description:"Commence your journey with the Solana Genius Token Creator, empowering you to seamlessly craft Solana tokens through functionalities including creation, deployment, airdrops, transfers, and metadata updates.",
            function: setOpenAirdrop,
        },
        {
            name: "Transfer Sol",
            icon: <RiTokenSwapFill />,
            description:"Commence your journey with the Solana Genius Token Creator, empowering you to seamlessly craft Solana tokens through functionalities including creation, deployment, airdrops, transfers, and metadata updates.",
            function: setOpenSendTransaction,
        },
        {
            name: "Metadata Token",
            icon: <RxTokens />,
            description:"Commence your journey with the Solana Genius Token Creator, empowering you to seamlessly craft Solana tokens through functionalities including creation, deployment, airdrops, transfers, and metadata updates.",
            function: setOpenTokenMetaData,
        },
    ];

    return(
        <section className="py-20 bg-blue-800">
            <div className="container">
                <div className="mb-10 flex items-end justify-between">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="mb-4 text-3xl font-medium capitalize text-white">
                    Choose Solana Blockchain generator
                    </h2>
                    <p className="text-default-200 text-sm font-medium">
                    Now you can create Solana Token <br />
                    without code instantly.
                    </p>
                </div>
                </div>
                <div className="bg-blue-900 flex flex-wrap items-center rounded-3xl backdrop-blur-3xl">
                    {feature.map((list, index) => (
                        <div
                        key={list.name}
                        className={` w-auto grow border-b border-white/10  md:w-1/2
                        ${
                            index == 0
                            ? "md:border-e   "
                            : index == 1
                            ? " "
                            : index == 2
                            ? "md:border-e md:border-b-0"
                            : " "
                        } `}
                        >
                        <div className="p-8 sm:p-10">
                            <div className="bg-white text-blue-900 mb-10 inline-flex h-16 w-16 items-center justify-center rounded-xl">
                            <i data-lucide="framer" className="icon">
                                {list.icon}
                            </i>
                            </div>
                            <h2 className="mb-4 text-2xl font-medium text-white">
                            {list.name}
                            </h2>
                            <p className="text-default-200 mb-6 text-base">
                            {list.description}
                            </p>
                            <a
                            onClick={() => list.function(true)}
                            className="hover:bg-black inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300"
                            >
                            More Tools{" "}
                            <i data-lucide="move-right" className="">
                                <LuArrowRightFromLine />
                            </i>
                            </a>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};
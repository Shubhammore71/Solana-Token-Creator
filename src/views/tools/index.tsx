import React, { FC, ReactNode } from 'react';
import { MdGeneratingTokens } from 'react-icons/md';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { LuArrowRightFromLine } from 'react-icons/lu';

interface ToolViewProps {
  setOpenTokenMetaData: (value: boolean) => void;
  setOpenContact: (value: boolean) => void;
  setOpenAirdrop: (value: boolean) => void;
  setOpenSendTransaction: (value: boolean) => void;
  setOpenCreateModal: (value: boolean) => void;
}


export const ToolView: FC<ToolViewProps> = ({
  setOpenTokenMetaData,
  setOpenContact,
  setOpenAirdrop,
  setOpenSendTransaction,
  setOpenCreateModal,
}) => {

  const tools =[
    {
      name : "Create Token",
      icon: <MdGeneratingTokens/>,
      function: setOpenCreateModal,
    },
    {
      name : "Token Metadata",
      icon: <MdGeneratingTokens/>,
      function: setOpenTokenMetaData,
    },
    {
      name : "Contact Us",
      icon: <MdGeneratingTokens/>,
      function: setOpenContact,
    },
    {
      name : "Airdrop",
      icon: <MdGeneratingTokens/>,
      function: setOpenAirdrop,
    },
    {
      name : "Send Transaction",
      icon: <MdGeneratingTokens/>,
      function: setOpenSendTransaction,
    },
    {
      name: "Buddy Tokens",
      icon: <MdGeneratingTokens />,
      function: setOpenCreateModal,
    },
    {
      name : "Top Tokens",
      icon: <MdGeneratingTokens/>,
      function: setOpenCreateModal,
    },
    {
      name : "Solana Explore",
      icon: <MdGeneratingTokens/>,
      function: setOpenCreateModal,
    },
  ];
  


  return(
    <section id='tools' className='py-20 bg-blue-900'>
      <div className='container'>
        <div className='mb-10 flex items-end justify-between'>
          <div className='mx-auto max-w-2xl text center'>
            <h2 className='mb-4 text-3xl font-medium capitalize text-white'>
              Solana Powerfull Tools
            </h2>
            <p className='text-default-200 text-sm font-medium'>
            Welcome to Solana Genius's Token Creator platform, 
            where you can effortlessly create, deploy, airdrop, transfer, and 
            update Solana tokens. <br/>
            Empower your projects with our comprehensive token 
            management solutions.
            </p>
          </div>
        </div>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {tools.map((tool,index)=>(
            <div onClick={()=>tool.function(true)}
              className='bg-blue-700 rounded-xl backdrop-blur-3xl'>
                <div className='p-6'>
                  <div className='mb-4 flex items-center gap-4'>
                    <div
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white ${
                      index == 0
                        ? "text-red-500"
                        : index == 1
                        ? "text-sky-500"
                        : index == 2
                        ? "text-indigo-500"
                        : index == 3
                        ? " text-yellow-500"
                        : "text-teal-500"
                    } `}>
                      <i data-lucide="dribbble" className="toolicon">
                      {tool.icon}
                      </i>
                    </div>
                    <h3 className="text-default-200 text-xl font-medium">
                    {tool.name}
                  </h3>
                  </div>
                  <a className="text-white group relative inline-flex items-center gap-2">
                  <span className="bg-blue-500 absolute -bottom-0 h-px w-7/12 rounded transition-all duration-500 group-hover:w-full"></span>
                  Select & try{" "}
                  <i data-lucide="move-right">
                    <LuArrowRightFromLine />
                  </i>
                </a>
                </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a className="hover:bg-black bg-blue-700 inline-flex items-center justify-center gap-2 rounded-full px-6 py-2 text-white transition-all duration-300">
            More Tools{" "}
            <i data-lucide="move-right" className="">
              <IoIosArrowRoundForward />
            </i>
          </a>
        </div>
      </div>

    </section>
  );
};

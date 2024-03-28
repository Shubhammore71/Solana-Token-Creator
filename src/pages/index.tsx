import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import {
  HomeView,
  ToolView,
  FeatureView,
  OfferView,
  FaqView,
  CreateView,
  TokenMetadata,
  ContactView,
  AirdropView,
  DonateView,
} from "../views";

const Home: NextPage = (props) => {
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
  const [openTokenMetaData, setOpenTokenMetaData] = useState<boolean>(false);
  const [openContact, setOpenContact] = useState<boolean>(false);
  const [openAirdrop, setOpenAirdrop] = useState<boolean>(false);
  const [openSendTransaction, setOpenSendTransaction] =useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Solana Genius's Token Creator</title>
        <meta name="description" content="Solana token creator" />
      </Head>
      <HomeView setOpenCreateModal={setOpenCreateModal} />
      <ToolView
        setOpenCreateModal={setOpenCreateModal}
        setOpenTokenMetaData={setOpenTokenMetaData}
        setOpenContact={setOpenContact}
        setOpenAirdrop={setOpenAirdrop}
        setOpenSendTransaction={setOpenSendTransaction}
      />
      <FeatureView
        setOpenCreateModal={setOpenCreateModal}
        setOpenTokenMetaData={setOpenTokenMetaData}
        setOpenContact={setOpenContact}
        setOpenAirdrop={setOpenAirdrop}
        setOpenSendTransaction={setOpenSendTransaction}
      />

      <OfferView />
      <FaqView />
      {openCreateModal && (
        <div className="new_loader relative h-full   bg-blue-900">
          <CreateView setOpenCreateModal={setOpenCreateModal} />
        </div>
      )}

      {openTokenMetaData && (
        <div className="new_loader relative h-full bg-blue-900">
          <TokenMetadata setOpenTokenMetaData={setOpenTokenMetaData} />
        </div>
      )}
      {openContact && (
        <div className="new_loader relative h-full bg-blue-900">
          <ContactView setOpenContact={setOpenContact} />
        </div>
      )}

      {openAirdrop && (
        <div className="new_loader relative h-full bg-blue-900">
          <AirdropView setOpenAirdrop={setOpenAirdrop} />
        </div>
      )}
      {openSendTransaction && (
        <div className="new_loader relative h-full bg-blue-900">
          <DonateView setOpenSendTransaction={setOpenSendTransaction} />
        </div>
      )}
    </>
  );
};

export default Home;

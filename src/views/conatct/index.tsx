import { FC, useCallback, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Transaction, PublicKey } from "@solana/web3.js";
import { AiOutlineClose } from "react-icons/ai";
import { notify } from "../../utils/notifications";
import {
  DataV2,
  createUpdateMetadataAccountV2Instruction,
  PROGRAM_ID,
} from "@metaplex-foundation/mpl-token-metadata";
import { InputView } from "../index";
import Branding from "../../components/Branding";
//
export const ContactView: FC = ({ setOpenContact }) => {
  //FORM
  const [state, handleSubmit] = useForm("xayrdgob");
  if (state.succeeded) {
    return (
      <h1 class="md:text-5xl/tight my-4 max-w-lg text-4xl font-medium text-white">
        Thanks for sending your message!
      </h1>
    );
  }

  //COMPONENT
  const CloseModal = () => (
    <a
      onClick={() => setOpenContact(false)}
      class="absolute top-4 right-4 group mt-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-2xl transition-all duration-500 hover:bg-blue-600/60"
    >
      <i class="mdi mdi-facebook text-2xl text-white group-hover:text-white">
        <AiOutlineClose />
      </i>
    </a>
  );
  return (
    <>
    <CloseModal />
      <section class="flex w-full items-center py-6 px-0 lg:h-screen lg:p-10">
        <div class="container">
          <div class="bg-default-950/40 mx-auto max-w-5xl overflow-hidden rounded-2xl backdrop-blur-2xl">
            <div class="grid gap-10 lg:grid-cols-2">
              <Branding
                image="img-51"
                title="to build your marketing strategy"
                message="Try all paid functions for free. just register and
                            create your first widget, it simple and fast."
              />

              <div class="lg:ps-0 flex h-full flex-col p-10">
                <div class="pb-10">
                  <a href="index.html" class="flex">
                    <img
                      src={"assets/images/newlogosol.png"}
                      alt="dark logo"
                      class="h-10"
                    />
                  </a>
                </div>
                <div class="my-auto pb-6 text-center">
                  <h4 class="mb-4 text-2xl font-bold text-white">
                    Update Your Token MetaData
                  </h4>
                  <p class="text-default-300 mx-auto mb-5 max-w-sm">
                    Kindly provide all the details down below to update token
                    metadata
                  </p>
                  <div class="text-start">
                    <form onSubmit={handleSubmit}>
                      <div class="mb-4">
                        <label
                          htmlFor="email"
                          class="text-base/normal text-default-200 mb-2 block font-semibold"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          class="border-default-200 block w-full rounded border-white/10 bg-transparent py-1.5 px-3 text-white/80 focus:border-white/25 focus:ring-transparent"
                          placeholder={"email"}
                        />
                      </div>
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                      <textarea
                        id="message"
                        name="message"
                        class="border-default-200 relative  block w-full w-full rounded border-white/10 bg-transparent py-1.5 px-3 text-white/80 focus:border-white/25 focus:ring-transparent"
                        rows="6"
                        placeholder="message.."
                      ></textarea>
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />

                      <div class="mb-6 text-center">
                        <button
                          type="submit"
                          disabled={state.submitting}
                          class="bg-primary-600/90 hover:bg-primary-600 group mt-5 inline-flex w-full items-center justify-center rounded-lg px-6 py-2 text-white backdrop-blur-2xl transition-all duration-500"
                        >
                          <span class="fw-bold">Send Message</span>{" "}
                        </button>
                        
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

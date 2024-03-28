import {FC} from "react";


export const FaqView: FC = ({})=>{
    const question = [
        {
          question: "How does the token creation process work?",
          answer:
            "The token creation process on Solana involves designing token parameters, developing a smart contract, testing it thoroughly, deploying it to the Solana blockchain, and distributing the tokens to users.",
          id: "faq-1",
        },
        {
          question: "What information do I need to provide to create a token?",
          answer:
            "To create a token, you typically need to provide information such as the token's name, symbol, total supply, divisibility (decimal places), and any additional parameters specific to the blockchain platform being used, such as Solana.",
          id: "faq-2",
        },
        {
          question: "Is there a fee for token creation?",
          answer:
            "Yes, there may be a fee associated with token creation on the Solana blockchain, which typically covers network transaction costs and may vary depending on network congestion and the complexity of the token's smart contract.",
          id: "faq-3",
        },
        {
          question: "How long does it take for a token to be created?",
          answer:
            "The time it takes for a token to be created on the Solana blockchain can vary depending on factors such as network congestion, the complexity of the token's smart contract, and the efficiency of the deployment process, but it generally ranges from a few minutes to several hours.",
          id: "faq-4",
        },
        {
          question: "Can I edit or update token details after creation?",
          answer:
            "In most cases, token details such as name, symbol, and supply cannot be edited or updated after creation on the Solana blockchain due to the immutable nature of blockchain transactions. However, Solana Genius allow you to update.",
          id: "faq-5",
        },
        {
          question: "Is there support available if I encounter issues during token creation?",
          answer:
            "Yes, Solana Genius always available for you.",
          id: "faq-6",
        },
      ];
      

      return (
        <section id="faq" className="py-20 bg-blue-800">
            <div className="container">
                <div className="mb-10 flex items-end justify-between">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="mb-4 text-3xl font-medium capitalize text-white">
                            Any questions
                        </h2>
                        <p className="text-default-200 text-sm font-medium">
                            Don't worry Solana Genius is here to clear your doubts.
                        </p>
                    </div>
                </div>

                <div className="mx-auto max-w-3xl">
                    <div className="hs-accordion-group space-y-4">
                        {question.map((question,index)=>(

                            <div key={index}
                            className={`hs-accordion bg-default-950/40   overflow-hidden rounded-lg border border-white/10 backdrop-blur-3xl`}
                            id={question.id}
                            >
                                <button className="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-white transition-all"
                                aria-controls={`faq-accordion-${index + 1}`}>
                                    <h5 className="flex text-base font-semibold">
                                <i
                                data-lucide="help-circle"
                                className="me-3 h-5 w-5 stroke-white align-middle"
                                ></i>
                                {question.question}
                                </h5>
                                <i
                                    data-lucide="chevron-up"
                                    className="hs-accordion-active:-rotate-180 h-4 w-4 transition-all duration-500"
                                ></i>
                                </button>
                                <div id={`faq-accordion-${index + 1}`}
                                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                                aria-labelledby={question.id}>
                                    <div className="px-6 pb-4 pt-0">
                                        <p className="text-default-300 mb-2 text-sm font-medium">
                                        {question.answer}
                                        </p>
                                        <p className="text-default-300 text-sm font-medium">
                                        Have you ever wanted to become NFT creator?
                                        Create your first NFT on Solana Genius's Solana token creator. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
      )
}
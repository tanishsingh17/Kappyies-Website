import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is KAPPYIES?",
    answer:
      "KAPPYIES is a collection of 3333 unique Capybara NFTs built on Ethereum.",
  },
  {
    question: "How many NFTs are available?",
    answer:
      "There will be a total supply of 3333 unique KAPPYIES NFTs.",
  },
  {
    question: "What blockchain is KAPPYIES on?",
    answer:
      "KAPPYIES is deployed on the Ethereum blockchain.",
  },
  {
    question: "How do I join the whitelist?",
    answer:
      "Follow us on X, complete the campaign task, and submit your EVM wallet on the whitelist page.",
  },
  {
    question: "When is the mint?",
    answer:
      "The mint date will be announced after the whitelist campaign ends.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  return (
    <section
      id="faq"
      className="py-15 px-6 bg-[#080B14]"
    >
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="uppercase tracking-[5px] text-cyan-400">
            FAQ
          </span>

          <h2 className="font-bangers tracking-wider text-5xl font-black text-white mt-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 font-merienda mt-5">
            Everything you need to know before joining KAPPYIES.
          </p>
        </motion.div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-[#131A2A] rounded-2xl border border-cyan-500/20 overflow-hidden"
            >

              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <h3 className="text-white text-xl font-semibold">
                  {faq.question}
                </h3>

                <span className="text-cyan-400 text-3xl">
                  {active === index ? "-" : "+"}
                </span>

              </button>

              <AnimatePresence>

                {active === index && (

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >

                    <div className="px-6 pb-6 text-gray-400 leading-8">

                      {faq.answer}

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQ;
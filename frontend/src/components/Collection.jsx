import { motion } from "framer-motion";

import nft1 from "../assets/images/10.png";
import nft2 from "../assets/images/16.png";
import nft3 from "../assets/images/20.png";
import nft4 from "../assets/images/12.png";

const nfts = [
  nft1,
  nft2,
  nft3,
  nft4,
];

const Collection = () => {
  return (
    <section
      id="collection"
      className="bg-[#080B14] py-15 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-cyan-400 uppercase tracking-[4px]">
            Collection
          </span>

          <h2 className="font-bangers tracking-wider text-5xl font-black text-white mt-4">
            Discover KAPPYIES
          </h2>

          <p className="text-gray-400 font-merienda mt-5 max-w-2xl mx-auto">
            Every Kappy is generated from hundreds of unique traits,
            creating a one-of-a-kind NFT collection.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {nfts.map((image, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -12,
                rotate: 2,
                scale: 1.05,
              }}
              transition={{
                duration: 0.3,
              }}
              className="group rounded-3xl overflow-hidden bg-[#131A2A] border border-cyan-500/20"
            >

              <img
                src={image}
                alt="NFT"
                className="w-full h-[360px] object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="p-6">

                <h3 className="text-white font-bold text-2xl">
                  KAPPY #{index + 1}
                </h3>

                <p className="text-gray-400 mt-2">
                  Legendary Collection
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Collection;
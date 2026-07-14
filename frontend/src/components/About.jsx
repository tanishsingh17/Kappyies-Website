import { motion } from "framer-motion";
import heroImage from "../assets/7.png";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#0B1020] py-15 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-cyan-400 font-semibold uppercase tracking-widest">
            About KAPPYIES
          </span>

          <h2 className="font-montenegrin text-5xl font-bold text-white mt-4 leading-tight">
            More Than NFTs.
            <br />
            A Chill Community.
          </h2>

          <p className="text-gray-400 font-merienda mt-8 text-lg leading-8">
            KAPPYIES is a collection of 3333 unique Capybara NFTs built on
            Ethereum. Every Kappy is generated from a wide range of traits,
            making each NFT unique.
          </p>

          <p className="text-gray-400 font-merienda mt-6 text-lg leading-8">
            Our goal is to build a fun, welcoming Web3 community where holders
            gain access to exclusive events, future rewards, and ecosystem
            benefits.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-12">

            <div className="bg-[#12192D] rounded-2xl p-6 border border-cyan-500/20">
              <h3 className="text-4xl font-bold text-cyan-400">
                3333
              </h3>

              <p className="text-gray-400 mt-2">
                Unique NFTs
              </p>
            </div>

            <div className="bg-[#12192D] rounded-2xl p-6 border border-cyan-500/20">
              <h3 className="text-4xl font-bold text-cyan-400">
                100+
              </h3>

              <p className="text-gray-400 mt-2">
                Traits
              </p>
            </div>

            <div className="bg-[#12192D] rounded-2xl p-6 border border-cyan-500/20">
              <h3 className="text-4xl font-bold text-cyan-400">
                ETH
              </h3>

              <p className="text-gray-400 mt-2">
                Blockchain
              </p>
            </div>

            <div className="bg-[#12192D] rounded-2xl p-6 border border-cyan-500/20">
              <h3 className="text-4xl font-bold text-cyan-400">
                24/7
              </h3>

              <p className="text-gray-400 mt-2">
                Community
              </p>
            </div>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >

          <div className="absolute w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full" />

          <motion.img
            src={heroImage}
            alt="KAPPYIES"
            animate={{
              rotate: [-3, 3, -3],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
            }}
            className="relative w-[500px] rounded-[15px] drop-shadow-[0_0_60px_rgba(34,211,238,.5)]"
          />

        </motion.div>

      </div>
    </section>
  );
};

export default About;
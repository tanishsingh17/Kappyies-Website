import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#080B14] overflow-hidden pt-24 md:pt-20">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/20 blur-[120px] rounded-full" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 min-h-[calc(100vh-80px)] items-center gap-14">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >

            <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 mb-6">
              🐹 3333 Unique NFTs
            </span>

            <h1 className="font-uncial text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-none">
              KAPPYIES
            </h1>

            <p className="text-cyan-400 font-merienda text-xl sm:text-2xl mt-5">
              The Chillest NFT Collection
            </p>

            <p className="text-gray-400 font-merienda mt-8 max-w-lg mx-auto lg:mx-0 text-base sm:text-lg leading-8">
              Discover 3333 hand-crafted Capybaras built for collectors,
              Web3 enthusiasts and the KAPPY community.
            </p>

            <div className="mt-12">
              <Link
                to="/whitelist"
                className="inline-block bg-cyan-400 hover:bg-cyan-300 text-black px-8 py-4 rounded-2xl font-bold transition hover:scale-105"
              >
                Join Whitelist
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-14 text-center lg:text-left">

              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  3333
                </h2>
                <p className="text-gray-400">NFT Supply</p>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  100+
                </h2>
                <p className="text-gray-400">Traits</p>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  ETH
                </h2>
                <p className="text-gray-400">Blockchain</p>
              </div>

            </div>

          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mt-10 lg:mt-0"
          >

            <motion.img
              src={heroImage}
              alt="KAPPYIES NFT"
              loading="eager"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full max-w-[500px] rounded-xl drop-shadow-[0_0_60px_rgba(34,211,238,0.6)]"
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
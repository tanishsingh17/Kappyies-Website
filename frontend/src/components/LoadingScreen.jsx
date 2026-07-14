import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] bg-[#080B14] flex items-center justify-center"
    >
      <div className="text-center">

        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
          }}
          className="font-uncial text-6xl font-black text-white"
        >
          🐹 KAPPYIES
        </motion.h1>

        <p className="font-merienda mt-6 text-cyan-400 text-lg tracking-widest">
          THE CHILLEST NFT COLLECTION
        </p>

        <p className="mt-10 text-gray-400">
          Loading Kappyies Town...
        </p>

        {/* Loading Bar */}

        <div className="w-72 h-2 bg-gray-700 rounded-full mt-8 overflow-hidden mx-auto">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.5,
            }}
            className="h-full bg-cyan-400"
          />

        </div>

      </div>
    </motion.div>
  );
};

export default LoadingScreen;
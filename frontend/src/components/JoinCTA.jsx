import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const JoinCTA = () => {
  return (
    <section className="relative py-18 px-6 overflow-hidden bg-[#080B14]">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#121826] border border-cyan-500/20 rounded-[40px] p-16 text-center shadow-2xl"
        >

          <span className="inline-block bg-cyan-500/10 text-cyan-400 px-5 py-2 rounded-full font-semibold">
            🚀 WHITELIST OPEN
          </span>

          <h2 className="font-rakkas tracking-wider text-5xl md:text-6xl font-black text-white mt-8">
            Ready To Become
            <br />
            A KAPPY?
          </h2>

          <p className="text-gray-400 font-merienda text-lg max-w-2xl mx-auto mt-8 leading-8">
            Join thousands of collectors and secure your whitelist spot
            before the public mint begins.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-12">

            <Link
              to="/whitelist"
              className="bg-cyan-400 hover:bg-cyan-300 text-black px-10 py-4 rounded-2xl font-bold transition hover:scale-105"
            >
              Join Whitelist
            </Link>

            <a
              href="https://x.com/Kappyies"
              target="_blank"
              rel="noreferrer"
              className="border border-cyan-400 text-cyan-400 px-10 py-4 rounded-2xl hover:bg-cyan-400 hover:text-black transition"
            >
              Follow on X
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default JoinCTA;

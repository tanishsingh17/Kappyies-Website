import { motion } from "framer-motion";

const roadmap = [
  {
    phase: "Phase 01",
    title: "Launch Website",
    description:
      "Launch the KAPPYIES website with collection preview and whitelist.",
    status: "Completed",
  },
  {
    phase: "Phase 02",
    title: "Whitelist",
    description:
      "Community members complete tasks and secure whitelist spots.",
    status: "Live",
  },
  {
    phase: "Phase 03",
    title: "Mint",
    description:
      "Public mint opens for all approved whitelist members.",
    status: "Coming Soon",
  },
  {
    phase: "Phase 04",
    title: "Marketplace",
    description:
      "NFT reveal and marketplace listing with holder benefits.",
    status: "Upcoming",
  },
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="bg-[#0B1020] py-15 px-6">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-cyan-400 uppercase tracking-[4px]">
            Roadmap
          </span>

          <h2 className="font-bangers tracking-wider text-5xl font-black text-white mt-4">
            The Journey Ahead
          </h2>

          <p className="text-gray-400 font-merienda mt-5 max-w-2xl mx-auto">
            Every milestone is designed to grow the KAPPYIES ecosystem
            and reward our community.
          </p>

        </motion.div>

        <div className="mt-20 grid lg:grid-cols-2 gap-8">

          {roadmap.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="bg-[#131A2A] rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400 transition"
            >

              <span className="text-cyan-400 font-semibold">
                {item.phase}
              </span>

              <h3 className="text-white text-3xl font-bold mt-3">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-5 leading-7">
                {item.description}
              </p>

              <div className="mt-8">

                <span className="inline-block bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">
                  {item.status}
                </span>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Roadmap;
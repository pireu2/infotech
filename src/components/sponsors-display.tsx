import { motion } from "framer-motion";


 const sponsors: string[] = [
   "src/assets/sponsors/bsides.svg",
   "src/assets/sponsors/msg.svg",
   "src/assets/sponsors/yardi.svg",
   "src/assets/sponsors/finshape.png",
   "src/assets/sponsors/irsap.png",
   "src/assets/sponsors/kesz.png",
   "src/assets/sponsors/mindit.png",
   "src/assets/sponsors/synopsys.png",
   "src/assets/sponsors/ulma.png",
 ];

export default function SponsorsDisplay() {
  return (
    <section
      id="sponsors"
      className="py-20 px-4 md:px-8 overflow-hidden relative z-10"
    >
      {/* Glass card container for sponsors */}
      <div className="max-w-6xl mx-auto relative">
        <div className="absolute inset-0 -m-6 bg-gradient-to-br from-purple-900/20 to-blue-900/10 rounded-xl backdrop-blur-sm border border-white/10 shadow-lg shadow-purple-500/10"></div>

        <div className="relative p-8">
          {/* Main sponsors grid */}
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent">
            Sponsors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {sponsors.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-4 bg-gray-800/30 backdrop-blur-md rounded-lg border border-gray-700 hover:border-purple-400 transition-all group"
              >
                <motion.img
                  src={src || "/placeholder.svg"}
                  className="h-16 md:h-20 opacity-80 p-2 group-hover:opacity-100 transition-all filter group-hover:brightness-110"
                  alt={`Sponsor ${i + 1}`}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                />
              </motion.div>
            ))}
          </div>


          {/* Subtle gradient pulse effect */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-purple-600/10 rounded-full blur-[60px] animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-600/10 rounded-full blur-[50px] animate-pulse-slow" />
          </div>
        </div>
      </div>
    </section>
  );
};


// Hero.jsx
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0A1628] overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#00A86B 1px, transparent 1px), linear-gradient(90deg, #00A86B 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6 inline-block">
            Global Energy Transition Partners
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Engineering the <span className="text-primary italic">Foundation</span> of Renewables
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg">
            Specialized structural and geotechnical consultancy for utility-scale wind, solar, and grid infrastructure. 
          </p>
          <div className="flex gap-4">
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:-translate-y-1">
              Start Project
            </button>
            <button className="border border-white/10 hover:border-primary/50 text-white px-8 py-4 rounded-lg font-semibold transition-all">
              View Expertise
            </button>
          </div>
        </motion.div>

        {/* Dynamic Stats Dashboard */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Years Experience", value: "17+" },
            { label: "Projects Delivered", value: "50+" },
            { label: "Global Reach", value: "10+ Countries" },
            { label: "Technical Experts", value: "Consultant Led" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"
            >
              <div className="text-3xl font-mono text-primary mb-2">{stat.value}</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

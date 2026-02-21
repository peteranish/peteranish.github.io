import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wind, Sun, TowerControl as Tower, Building2, Anchor, 
  ShieldCheck, HardHat, Microscope, Mail, MapPin, Menu, X, ChevronRight 
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Services", "Projects", "Team", "Careers", "Contact"];

  return (
    <nav className="fixed w-full z-50 bg-[#0A1628]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-[#00A86B] tracking-tighter">RENERBASE</a>
        
        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium hover:text-[#00A86B] transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#162236] p-6 flex flex-col gap-4 border-b border-white/10">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-lg">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,168,107,0.15),transparent_40%)]" />
    <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-[#00A86B]/10 border border-[#00A86B] text-[#00A86B] rounded-full">
          Structures Powering the Energy Transition
        </span>
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-[1.1]">
          Civil Engineering for <span className="text-[#00A86B]">Renewable Energy</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-xl">
          Expert consultancy in structural and geotechnical engineering for utility-scale wind, solar, and grid infrastructure projects worldwide.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="px-8 py-4 bg-[#00A86B] hover:bg-[#008555] rounded-lg font-bold transition-all transform hover:-translate-y-1">Start Your Project</a>
          <a href="#services" className="px-8 py-4 border border-white/10 hover:border-[#00A86B] rounded-lg font-bold transition-all">Our Services</a>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { num: "17+", label: "Years of Experience" },
          { num: "50+", label: "Completed Projects" },
          { num: "10+", label: "Global Clients" },
          { num: "Expert", label: "Technical Support" }
        ].map((stat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.2 + (i * 0.1) }}
            className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#00A86B]/50 transition-colors"
          >
            <div className="text-4xl font-mono text-[#00A86B] font-bold mb-2">{stat.num}</div>
            <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, desc, items }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="p-8 bg-[#162236] border border-white/10 rounded-2xl flex flex-col h-full"
  >
    <div className="w-14 h-14 bg-[#00A86B]/10 rounded-xl flex items-center justify-center mb-6">
      <Icon className="text-[#00A86B]" size={28} />
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 text-sm mb-6 leading-relaxed">{desc}</p>
    <ul className="mt-auto space-y-2">
      {items.map((item, i) => (
        <li key={i} className="text-sm text-gray-500 flex items-start gap-2">
          <ChevronRight size={14} className="text-[#00A86B] mt-1 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Services = () => (
  <section id="services" className="py-24 bg-[#0A1628]">
    <div className="max-w-7xl mx-auto px-6 text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">Our <span className="text-[#00A86B]">Services</span></h2>
      <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive civil engineering consultancy for renewable energy and grid infrastructure projects.</p>
    </div>
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ServiceCard 
        icon={Tower}
        title="WTG Foundation Design"
        desc="Complete engineering services including detailed design and design evaluation."
        items={["Standard Gravity base", "Slab/Ribbed foundations", "Lattice & Concrete towers", "Pile/Anchor foundations"]}
      />
      <ServiceCard 
        icon={Wind}
        title="Steel Towers Design"
        desc="Detailed design and evaluation of tubular steel towers with certification support."
        items={["Structural verification", "Certification compliance", "Manufacturing inspection"]}
      />
      <ServiceCard 
        icon={Building2}
        title="Substation Structures"
        desc="Civil structural engineering for substations, transmission lines, and gantries."
        items={["Transformer foundations", "Substation buildings", "OHTL & Gantry design", "Infrastructure (Roads/Drainage)"]}
      />
      <ServiceCard 
        icon={Anchor}
        title="Offshore Sub-structures"
        desc="Design evaluation of wind turbine offshore sub-structures."
        items={["Monopile foundations", "Jacket structures", "Secondary Steel structures", "Feasibility studies"]}
      />
      <ServiceCard 
        icon={Sun}
        title="Solar Structures"
        desc="Design review of detailed engineering for solar structures and foundations."
        items={["Module Mounting Structures", "Tracker foundations", "Site studies review", "Corrosion studies"]}
      />
      <ServiceCard 
        icon={ShieldCheck}
        title="Owner's Engineering"
        desc="Expert representation for civil and structural aspects of renewable projects."
        items={["Technical compliance", "Design oversight", "Project management support"]}
      />
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-[#162236]">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
      <div>
        <h2 className="text-4xl font-bold mb-6">Let's Discuss Your <span className="text-[#00A86B]">Project</span></h2>
        <p className="text-gray-400 text-lg mb-10">We would be pleased to discuss how we can support your renewable energy project.</p>
        
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-[#00A86B]"><Mail /></div>
            <div>
              <h4 className="font-bold">Email</h4>
              <p className="text-gray-400">info@renerbase.com</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-[#00A86B]"><MapPin /></div>
            <div>
              <h4 className="font-bold">Address</h4>
              <p className="text-gray-400">HBR Layout 5th Block, Bengaluru, India</p>
            </div>
          </div>
        </div>
      </div>

      <form className="bg-[#0A1628] p-10 rounded-3xl border border-white/10 space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Full Name</label>
          <input type="text" className="w-full bg-[#162236] border border-white/10 rounded-lg p-3 focus:border-[#00A86B] outline-none transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email Address</label>
          <input type="email" className="w-full bg-[#162236] border border-white/10 rounded-lg p-3 focus:border-[#00A86B] outline-none transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea rows="4" className="w-full bg-[#162236] border border-white/10 rounded-lg p-3 focus:border-[#00A86B] outline-none transition-colors"></textarea>
        </div>
        <button className="w-full bg-[#00A86B] hover:bg-[#008555] py-4 rounded-lg font-bold transition-all">Send Inquiry</button>
      </form>
    </div>
  </section>
);

// --- Main App ---

export default function App() {
  return (
    <div className="bg-[#0A1628] text-white font-sans selection:bg-[#00A86B]/30">
      <Navbar />
      <Hero />
      <Services />
      {/* Add Project and Team sections here following similar patterns */}
      <Contact />
      <footer className="py-12 text-center border-t border-white/10 text-gray-500 text-sm">
        <p>© 2026 Renerbase Consulting Engineers. All rights reserved.</p>
      </footer>
    </div>
  );
}
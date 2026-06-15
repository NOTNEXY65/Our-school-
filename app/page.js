'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Eye, Rocket, Phone } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Smooth scroll animations variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <div className="bg-white text-[#2d3748] font-serif antialiased selection:bg-blue-100">
      
      {/* --- Navbar --- */}
      <header className="bg-[#004080] py-4 px-[5%] flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="text-white text-2xl font-bold font-sans">🏫 Our School</div>
        <button className="text-white text-3xl focus:outline-none" onClick={toggleMenu} aria-label="Toggle Menu">
          <Menu size={28} />
        </button>
      </header>

      {/* Sidebar Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-[150] transition-opacity" 
          onClick={toggleMenu}
        />
      )}

      {/* Sidebar Menu */}
      <div className={`fixed top-0 right-0 w-[300px] h-screen bg-[#004080] z-[200] p-8 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button className="text-white float-right focus:outline-none" onClick={toggleMenu} aria-label="Close Menu">
          <X size={32} />
        </button>
        <div className="flex flex-col gap-6 clear-both mt-12">
          {['Home', 'About', 'Academics'].map((link) => (
            <a 
              key={link} 
              href="#" 
              onClick={toggleMenu}
              className="text-white text-xl font-medium py-2.5 border-b border-white/10 font-sans hover:text-blue-200 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* --- Section 1: Introduction (Our Legacy) --- */}
      <motion.div 
        className="max-w-[900px] mx-auto my-16 px-[6%] leading-[1.85]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={fadeInUp}
      >
        <h2 className="text-[#1a3a5f] font-sans font-bold text-[2.3rem] mb-8 uppercase tracking-wide">
          Our Legacy
        </h2>
        <p className="text-xl font-light text-[#2d3748] mb-9 text-left">
          <strong className="font-bold text-[#111111]">Our School</strong> was established in the year 2008 under the aegis of <em className="italic">Harkul Educational and Welfare Society</em> &ndash; run by the <em className="italic">Kairon family</em> dedicated to school education, and through it - upliftment of remote areas of Patti and Kairon since one hundred years.
        </p>
        <p className="text-xl font-light text-[#2d3748] mb-9 text-left">
          The school, therefore upholds a long-term ethos of excellence in education. The serene farms of Kairon, Tarn Taran, Punjab are home to Our School that expertly merges academic ambition with a range of rich extra-curricular pursuits, shaping children into well rounded, socially active, global citizens. Our keen focus on personal development, commitment to quality and dedication to continuous improvement empowers our students to handle whatever life may throw at them. Our greatest strength lies in our commitment to community &ndash; the crafting together of our shared vision. The cumulative experience of all these years has molded the school into a multi-disciplinary and multi-dimensional sanctum of learning and knowledge; where the students are shaped with love and care to elicit their talent, potential as well as to induce new skills to prepare them to face the world.
        </p>
        <p className="text-xl font-light text-[#2d3748] mb-9 text-left">
          <strong className="font-bold text-[#111111]">Our School Board and Philosophy:</strong> Our School is affiliated to Central Board of Secondary Education (C.B.S.E), New Delhi and has students across Elementary to Senior Secondary Grade levels. The school has a well maintained, state of the art infrastructure that is surrounded by lush green farm lands providing a serene educational atmosphere for our students. The school is equipped with Science Laboratories, Composite, Math and Language labs, IT labs, Library and Activity halls. The classrooms are spacious and the school follows a 1:30 teacher to student ratio. The sports infrastructure at Our School supports the following sports: Basketball, Badminton, Boxing, Shot Put, Volleyball, athletics spaces, skating to name a few. Indoor games like Chess, Carrom, Table Tennis etc are supported by the school. The school is constantly trying to integrate and align itself with the NEP 2020 and NCF norms.
        </p>
      </motion.div>

      {/* --- Section 2: Goals --- */}
      <div className="text-center mt-16 mb-8 flex flex-col items-center">
        <h2 className="text-[#004080] text-[2.4rem] font-bold font-sans">Our Goals</h2>
        <div className="w-[60px] h-[4px] bg-[#0066cc] mt-3 rounded-sm"></div>
      </div>
      
      <div className="max-w-[800px] mx-auto px-[5%] flex flex-col gap-10">
        
        {/* Our Vision Card */}
        <motion.div 
          className="bg-white rounded-xl p-10 text-center shadow-[0_10px_30px_rgba(0,64,128,0.08)] border border-[#e2e8f0]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={slideInRight}
        >
          <div className="w-20 h-20 bg-[#004080] rounded-full mx-auto mb-6 flex items-center justify-center text-white">
            <Eye size={40} />
          </div>
          <h2 className="text-[#004080] text-3xl font-bold font-sans mb-4">Our Vision</h2>
          <p className="text-[1.15rem] leading-[1.85]">Empower students with meaningful experiences that enable them to become reflective practitioners and lifelong learners who will uphold the universal values of empathy, service and discipline.</p>
        </motion.div>

        {/* Our Mission Card */}
        <motion.div 
          className="bg-white rounded-xl p-10 text-center shadow-[0_10px_30px_rgba(0,64,128,0.08)] border border-[#e2e8f0]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={slideInLeft}
        >
          <div className="w-20 h-20 bg-[#004080] rounded-full mx-auto mb-6 flex items-center justify-center text-white">
            <Rocket size={40} />
          </div>
          <h2 className="text-[#004080] text-3xl font-bold font-sans mb-4">Our Mission</h2>
          <p className="text-[1.15rem] leading-[1.85]">To provide a progressive, relevant and experiential educational environment where holistic education and learner autonomy is encouraged to develop competencies for life-long learning; enabling learners to be innovation minded.</p>
        </motion.div>
      </div>

      {/* --- Section 3: School Levels --- */}
      <div className="text-center mt-20 mb-8 flex flex-col items-center">
        <h2 className="text-[#004080] text-[2.4rem] font-bold font-sans">Our School Sections</h2>
        <div className="w-[60px] h-[4px] bg-[#0066cc] mt-3 rounded-sm"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-[5%] pb-20 max-w-[1200px] mx-auto">
        
        {/* Card 1 */}
        <motion.div 
          className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_25px_rgba(0,64,128,0.08)] border border-[#e2e8f0] text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={fadeInUp}
        >
          <div className="w-full h-60 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=600" alt="Kindergarten" className="w-full h-full object-cover" />
          </div>
          <div className="p-7">
            <h3 className="text-[#004080] text-2xl font-bold font-sans mb-2">Kindergarten @ WBS</h3>
            <p className="text-[#0066cc] text-lg font-semibold font-sans">FS1 &ndash; Nursery to FS3 &ndash; Upper KG</p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_25px_rgba(0,64,128,0.08)] border border-[#e2e8f0] text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={fadeInUp}
        >
          <div className="w-full h-60 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=600" alt="Secondary School" className="w-full h-full object-cover" />
          </div>
          <div className="p-7">
            <h3 className="text-[#004080] text-2xl font-bold font-sans mb-2">Secondary School</h3>
            <p className="text-[#0066cc] text-lg font-semibold font-sans">6th to 8th Class</p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div 
          className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_25px_rgba(0,64,128,0.08)] border border-[#e2e8f0] text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={fadeInUp}
        >
          <div className="w-full h-60 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600" alt="Senior Secondary" className="w-full h-full object-cover" />
          </div>
          <div className="p-7">
            <h3 className="text-[#004080] text-2xl font-bold font-sans mb-2">Senior Secondary</h3>
            <p className="text-[#0066cc] text-lg font-semibold font-sans">9th to 12th Class</p>
          </div>
        </motion.div>

      </div>

      {/* --- Floating WhatsApp Button --- */}
      <a 
        href="https://wa.me/#" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-[1000] text-white hover:scale-110 transition-transform duration-200"
        aria-label="Contact on WhatsApp"
      >
        <Phone size={28} className="fill-white stroke-none" />
      </a>

    </div>
  );
            }
          

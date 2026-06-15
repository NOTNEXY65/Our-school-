'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.05 };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-x-0', 'translate-y-0');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-trigger');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-white text-gray-800 min-h-screen font-serif overflow-x-hidden leading-relaxed">
      
      {/* --- Navbar --- */}
      <header className="bg-[#004080] px-[5%] py-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="text-white text-xl font-bold font-sans">🏫 Our School</div>
        <button className="text-white text-3xl font-sans focus:outline-none" onClick={toggleMenu}>
          &#9776;
        </button>
      </header>

      {/* --- Sliding Sidebar Menu --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 transition-opacity" onClick={toggleMenu} />
      )}
      <div className={`fixed top-0 right-0 w-[300px] h-screen bg-[#004080] z-50 p-8 transition-all duration-400 ease-in-out shadow-2xl ${isMenuOpen ? 'right-0' : '-right-[300px]'}`}>
        <button className="text-white text-3xl float-right focus:outline-none" onClick={toggleMenu}>
          &times;
        </button>
        <div className="flex flex-col gap-6 clear-both mt-12 font-sans">
          <a href="#" className="text-white text-xl font-medium py-2 border-b border-white/10" onClick={toggleMenu}>Home</a>
          <a href="#" className="text-white text-xl font-medium py-2 border-b border-white/10" onClick={toggleMenu}>About</a>
          <a href="#" className="text-white text-xl font-medium py-2 border-b border-white/10" onClick={toggleMenu}>Academics</a>
        </div>
      </div>

      {/* --- Section 1: Introduction (Down-to-Up Animation) --- */}
      <main className="max-w-[900px] mx-auto my-16 px-[6%]">
        <div className="animate-trigger opacity-0 translate-y-[50px] transition-all duration-800 ease-out">
          <h2 className="text-[#004080] text-3xl md:text-4xl font-semibold mb-8 uppercase tracking-wide font-sans">
            Our Legacy
          </h2>
          <p className="text-xl text-gray-700 mb-8 text-justify">
            <strong className="font-bold text-black">Our School</strong> was established in the year 2008 under the aegis of <em className="italic">Harkul Educational and Welfare Society</em> &ndash; run by the <em className="italic">Kairon family</em> dedicated to school education, and through it - upliftment of remote areas of Patti and Kairon since one hundred years.
          </p>
          <p className="text-xl text-gray-700 mb-8 text-justify">
            The school, therefore upholds a long-term ethos of excellence in education. The serene farms of Kairon, Tarn Taran, Punjab are home to Our School that expertly merges academic ambition with a range of rich extra-curricular pursuits, shaping children into well rounded, socially active, global citizens. Our keen focus on personal development, commitment to quality and dedication to continuous improvement empowers our students to handle whatever life may throw at them. Our greatest strength lies in our commitment to community &ndash; the crafting together of our shared vision. The cumulative experience of all these years has molded the school into a multi-disciplinary and multi-dimensional sanctum of learning and knowledge; where the students are shaped with love and care to elicit their talent, potential as well as to induce new skills to prepare them to face the world.
          </p>
          <p className="text-xl text-gray-700 mb-8 text-justify">
            <strong className="font-bold text-black">Our School Board and Philosophy:</strong> Our School is affiliated to Central Board of Secondary Education (C.B.S.E), New Delhi and has students across Elementary to Senior Secondary Grade levels. The school has a well maintained, state of the art infrastructure that is surrounded by lush green farm lands providing a serene educational atmosphere for our students. The school is equipped with Science Laboratories, Composite, Math and Language labs, IT labs, Library and Activity halls. The classrooms are spacious and the school follows a 1:30 teacher to student ratio. The sports infrastructure at Our School supports the following sports: Basketball, Badminton, Boxing, Shot Put, Volleyball, athletics spaces, skating to name a few. Indoor games like Chess, Carrom, Table Tennis etc are supported by the school. The school is constantly trying to integrate and align itself with the NEP 2020 and NCF norms.
          </p>
        </div>
      </main>

      {/* --- Section 2: Goals --- */}
      <section className="bg-gray-50/50 py-12">
        <h2 className="text-center text-[#004080] text-4xl font-bold mb-12 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-[#0066cc] after:mx-auto after:mt-3 after:rounded font-sans">
          Our Goals
        </h2>
        <div className="max-w-[800px] mx-auto px-5 flex flex-col gap-10">
          
          {/* Our Vision (Right-to-Left Animation) */}
          <div className="animate-trigger opacity-0 translate-x-[100px] transition-all duration-800 ease-out bg-white rounded-xl p-10 text-center shadow-lg border border-gray-100">
            <div className="w-20 h-20 bg-[#004080] rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 stroke-white stroke-2 fill-none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-[#004080] text-2xl font-bold mb-4 font-sans">Our Vision</h3>
            <p className="text-lg text-gray-600">Empower students with meaningful experiences that enable them to become reflective practitioners and lifelong learners who will uphold the universal values of empathy, service and discipline.</p>
          </div>

          {/* Our Mission (Left-to-Right Animation) */}
          <div className="animate-trigger opacity-0 -translate-x-[100px] transition-all duration-800 ease-out bg-white rounded-xl p-10 text-center shadow-lg border border-gray-100">
            <div className="w-20 h-20 bg-[#004080] rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 stroke-white stroke-2 fill-none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.92 14.92 0 01-9.82 3.17m9.82-3.17h-.01a6.01 6.01 0 00-2.7-5.18m1.2 5.18l-3.08-3.08m0 0a6.01 6.01 0 00-5.18-2.7h-.01a14.92 14.92 0 013.17 9.82m1.94-7.04L4 19.5" />
              </svg>
            </div>
            <h3 className="text-[#004080] text-2xl font-bold mb-4 font-sans">Our Mission</h3>
            <p className="text-lg text-gray-600">To provide a progressive, relevant and experiential educational environment where holistic education and learner autonomy is encouraged to develop competencies for life-long learning; enabling learners to be innovation minded.</p>
          </div>

        </div>
      </section>

      {/* --- Section 3: School Sections (Down-to-Up Animation) --- */}
      <section className="py-16 max-w-[1200px] mx-auto px-5">
        <h2 className="text-center text-[#004080] text-4xl font-bold mb-12 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-[#0066cc] after:mx-auto after:mt-3 after:rounded font-sans">
          Our School Sections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Card 1 */}
          <div className="animate-trigger opacity-0 translate-y-[50px] transition-all duration-800 ease-out bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 text-center hover:-translate-y-2 transform duration-300">
            <div className="h-[240px] w-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=600" alt="Kindergarten" className="w-full h-full object-cover" />
            </div>
            <div className="p-7">
              <h3 className="text-[#004080] text-2xl font-bold mb-2 font-sans">Kindergarten @ WBS</h3>
              <p className="text-[#0066cc] text-lg font-semibold font-sans">FS1 &ndash; Nursery to FS3 &ndash; Upper KG</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="animate-trigger opacity-0 translate-y-[50px] transition-all duration-800 ease-out bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 text-center hover:-translate-y-2 transform duration-300">
            <div className="h-[240px] w-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=600" alt="Secondary School" className="w-full h-full object-cover" />
            </div>
            <div className="p-7">
              <h3 className="text-[#004080] text-2xl font-bold mb-2 font-sans">Secondary School</h3>
              <p className="text-[#0066cc] text-lg font-semibold font-sans">6th to 8th Class</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="animate-trigger opacity-0 translate-y-[50px] transition-all duration-800 ease-out bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 text-center hover:-translate-y-2 transform duration-300">
            <div className="h-[240px] w-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600" alt="Senior Secondary" className="w-full h-full object-cover" />
            </div>
            <div className="p-7">
              <h3 className="text-[#004080] text-2xl font-bold mb-2 font-sans">Senior Secondary</h3>
              <p className="text-[#0066cc] text-lg font-semibold font-sans">9th to 12th Class</p>
            </div>
          </div>

        </div>
      </section>

      {/* --- Floating WhatsApp Icon --- */}
      <a href="#" className="fixed bottom-6 right-6 bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-xl z-50 hover:scale-105 transform duration-200">
        <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-3.41c1.656.982 3.511 1.5 5.409 1.5 5.415 0 9.82-4.405 9.824-9.822.002-2.623-1.017-5.089-2.871-6.944C17.094 3.47 14.637 2.45 12.005 2.45c-5.424 0-9.83 4.408-9.834 9.826-.001 1.989.519 3.93 1.508 5.655l-.99 3.615 3.7-.971z"/>
        </svg>
      </a>

    </div>
  );
}


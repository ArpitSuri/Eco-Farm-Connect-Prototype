// import React, { useEffect, useState } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { Leaf, Sprout, Factory } from 'lucide-react';

// export default function Home() {
//   const { scrollYProgress } = useScroll();
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
//   const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: e.clientX / window.innerWidth,
//         y: e.clientY / window.innerHeight,
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const features = [
//     {
//       icon: Sprout,
//       title: "Sustainable Farming",
//       description: "Convert agricultural waste into valuable resources"
//     },
//     {
//       icon: Factory,
//       title: "Industry Connect",
//       description: "Direct partnerships with biofuel producers"
//     },
//     {
//       icon: Leaf,
//       title: "Zero Waste",
//       description: "Complete utilization of farm waste"
//     }
//   ];

//   return (
//     <div className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
//       {/* Hero Section */}
//       <div className="relative min-h-screen">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute h-8 w-8 text-green-500/20"
//               initial={{ rotate: 0, scale: 0.5 }}
//               animate={{
//                 rotate: 360,
//                 scale: [0.5, 1, 0.5],
//                 x: mousePosition.x * 50,
//                 y: mousePosition.y * 50,
//               }}
//               transition={{
//                 duration: 8,
//                 repeat: Infinity,
//                 delay: i * 0.5,
//               }}
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//             >
//               <Leaf className="w-full h-full" />
//             </motion.div>
//           ))}
//         </div>

//         {/* Main Content */}
//         <div className="relative pt-20 pb-16 sm:pt-32 sm:pb-24">
//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
//               {/* Left Column */}
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="flex flex-col justify-center"
//               >
//                 <motion.h1
//                   className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   Transforming Bio-Waste into a
//                   <span className="text-green-600"> Sustainable Future</span>
//                 </motion.h1>
//                 <motion.p
//                   className="mt-6 text-lg text-gray-600"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.4 }}
//                 >
//                   Connecting farmers with industries to convert waste into bio-fuel and fertilizers,
//                   creating a circular economy that benefits both agriculture and the environment.
//                 </motion.p>
//                 <motion.div
//                   className="mt-8 flex gap-4"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.6 }}
//                 >
//                   <button className="rounded-full bg-green-600 px-8 py-3 text-white hover:bg-green-700 transition-colors">
//                     Get Started
//                   </button>
//                   <button className="rounded-full border-2 border-green-600 px-8 py-3 text-green-600 hover:bg-green-50 transition-colors">
//                     Learn More
//                   </button>
//                 </motion.div>
//               </motion.div>

//               {/* Right Column */}
//               <motion.div
//                 style={{ y: parallaxY }}
//                 className="relative rounded-2xl overflow-hidden shadow-2xl"
//               >
//                 <video
//                   className="w-full h-full object-cover rounded-2xl"
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                 >
//                   <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
//                 </video>
//                 <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="py-24 bg-white"
//       >
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2 }}
//                 className="relative p-8 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors"
//               >
//                 <div className="absolute -top-4 -left-4 p-4 bg-green-600 rounded-xl text-white">
//                   <feature.icon size={24} />
//                 </div>
//                 <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
//                 <p className="mt-2 text-gray-600">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Stats Section */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="py-24 bg-green-900 text-white"
//       >
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-center">
//             <div>
//               <motion.div
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 className="text-4xl font-bold"
//               >
//                 10,000+
//               </motion.div>
//               <div className="mt-2 text-green-200">Farmers Connected</div>
//             </div>
//             <div>
//               <motion.div
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-4xl font-bold"
//               >
//                 50,000
//               </motion.div>
//               <div className="mt-2 text-green-200">Tons of Waste Recycled</div>
//             </div>
//             <div>
//               <motion.div
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 transition={{ delay: 0.4 }}
//                 className="text-4xl font-bold"
//               >
//                 ₹100M+
//               </motion.div>
//               <div className="mt-2 text-green-200">Additional Revenue Generated</div>
//             </div>
//           </div>
//         </div>
//       </motion.section>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Sprout, Factory } from 'lucide-react';

export default function Home2() {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'en' // Load language from localStorage
  );

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Save language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Handle mouse movement for background animation
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Translations for English and Hindi
  const translations = {
    en: {
      title: "Transforming Bio-Waste into a Sustainable Future",
      description:
        "Connecting farmers with industries to convert waste into bio-fuel and fertilizers, creating a circular economy that benefits both agriculture and the environment.",
      getStarted: "Get Started",
      learnMore: "Learn More",
      features: [
        {
          icon: Sprout,
          title: "Sustainable Farming",
          description: "Convert agricultural waste into valuable resources",
        },
        {
          icon: Factory,
          title: "Industry Connect",
          description: "Direct partnerships with biofuel producers",
        },
        {
          icon: Leaf,
          title: "Zero Waste",
          description: "Complete utilization of farm waste",
        },
      ],
      stats: [
        { value: "10,000+", label: "Farmers Connected" },
        { value: "50,000", label: "Tons of Waste Recycled" },
        { value: "₹100M+", label: "Additional Revenue Generated" },
      ],
    },
    hi: {
      title: "जैव-अपशिष्ट को एक सतत भविष्य में बदलना",
      description:
        "किसानों को उद्योगों से जोड़ना ताकि अपशिष्ट को जैव-ईंधन और उर्वरकों में परिवर्तित किया जा सके, जिससे कृषि और पर्यावरण दोनों को लाभ हो।",
      getStarted: "शुरू करें",
      learnMore: "और जानें",
      features: [
        {
          icon: Sprout,
          title: "सतत कृषि",
          description: "कृषि अपशिष्ट को मूल्यवान संसाधनों में बदलें",
        },
        {
          icon: Factory,
          title: "उद्योग संपर्क",
          description: "जैव-ईंधन उत्पादकों के साथ प्रत्यक्ष भागीदारी",
        },
        {
          icon: Leaf,
          title: "शून्य अपशिष्ट",
          description: "कृषि अपशिष्ट का पूर्ण उपयोग",
        },
      ],
      stats: [
        { value: "10,000+", label: "किसानों से संपर्क" },
        { value: "50,000", label: "टन अपशिष्ट पुनर्नवीनीकरण" },
        { value: "₹100M+", label: "अतिरिक्त राजस्व उत्पन्न" },
      ],
    },
  };

  // Get the current translations based on the selected language
  const { title, description, getStarted, learnMore, features, stats } =
    translations[language];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-8 w-8 text-green-500/20"
              initial={{ rotate: 0, scale: 0.5 }}
              animate={{
                rotate: 360,
                scale: [0.5, 1, 0.5],
                x: mousePosition.x * 50,
                y: mousePosition.y * 50,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              <Leaf className="w-full h-full" />
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative pt-20 pb-16 sm:pt-32 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Language Selector Button */}
            <div className="absolute top-6 right-6 z-50">
              <button
                onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                className="px-4 py-2 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                {language === 'en' ? 'हिन्दी' : 'English'}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-center"
              >
                <motion.h1
                  className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {title}
                </motion.h1>
                <motion.p
                  className="mt-6 text-lg text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {description}
                </motion.p>
                <motion.div
                  className="mt-8 flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <button className="rounded-full bg-green-600 px-8 py-3 text-white hover:bg-green-700 transition-colors">
                    {getStarted}
                  </button>
                  <button className="rounded-full border-2 border-green-600 px-8 py-3 text-green-600 hover:bg-green-50 transition-colors">
                    {learnMore}
                  </button>
                </motion.div>
              </motion.div>

              {/* Right Column */}
              <motion.div
                style={{ y: parallaxY }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <video
                className="w-full h-full object-cover rounded-2xl"
                autoPlay
                loop
                playsInline
                >
                <source src="/invideo-ai-720 EcoFarm-Connect_ किसानों और उद्योगों के लिए एक क्रांति 2025-02-15 (1).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative p-8 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors"
              >
                <div className="absolute -top-4 -left-4 p-4 bg-green-600 rounded-xl text-white">
                  <feature.icon size={24} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-green-900 text-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-4xl font-bold"
                >
                  {stat.value}
                </motion.div>
                <div className="mt-2 text-green-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
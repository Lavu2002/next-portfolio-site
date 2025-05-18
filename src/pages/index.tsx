// src/pages/index.tsx
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiAngular,
  SiExpress,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiNestjs,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiVercel,
  SiPython,
  SiDjango,
  SiMongodb,
  SiGooglecloud,
  SiGit,
  SiDocker
} from 'react-icons/si';
import { JSX } from 'react/jsx-runtime';

const Home: NextPage = () => {
  const iconMap: Record<string, JSX.Element> = {
    HTML5: <SiHtml5 size={32} />,
    CSS3: <SiCss3 size={32} />,
    JavaScript: <SiJavascript size={32} />,
    Angular: <SiAngular size={32} />,
    'Express.js': <SiExpress size={32} />,
    TypeScript: <SiTypescript size={32} />,
    'Node.js': <SiNodedotjs size={32} />,
    React: <SiReact size={32} />,
    'Next.js': <SiNextdotjs size={32} />,
    'NestJS': <SiNestjs size={32} />,  
    'Vue.js': <SiVuedotjs size={32} />,
    'Nuxt.js': <SiNuxtdotjs size={32} />,
    Python: <SiPython size={32} />,
    Django: <SiDjango size={32} />,
    Vercel: <SiVercel size={32} />,
    MongoDB: <SiMongodb size={32} />,
    AWS: <SiGooglecloud size={32} />,
    Git: <SiGit size={32} />,
    Docker: <SiDocker size={32} />
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 pt-20 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-y-10 md:gap-y-0">
            <motion.div
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                I&apos;m <span className="text-primary">Lavanya Patial</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
                Software Development Engineer
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
              I develop performant, scalable web applications using a versatile tech stack — tailored for user experience and long-term maintainability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-primary text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
                  Contact Me <FaArrowRight />
                </Link>
                <Link href="/projects" className="border border-primary text-primary px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors">
                  View My Work
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="md:w-2/5"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <div className="bg-primary rounded-full w-full h-full flex items-center justify-center text-white text-8xl font-light">
                  <Image
                    src="/myImg/LP.jpeg"
                    alt="Lavanya Patial"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {Object.keys(iconMap).map((skill) => (
              <motion.div
                key={skill}
                className="bg-gray-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center"
                whileHover={{ y: -5 }}
              >
                <div className="mb-2">{iconMap[skill]}</div>
                <p className="font-medium">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ... Other sections remain unchanged (Projects, Experience, Education, Contact CTA) */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-8">Beyond the Code</h2>
    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
      Alongside my development expertise, I have a strong foundation in system design, scalable architecture, performance optimization, and clean code principles — enabling me to build solutions that are not only functional but robust and future-ready.
    </p>
  </div>
</section>
    </>
  );
};

export default Home;
// src/pages/about.tsx
import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaFileDownload,
} from 'react-icons/fa';

const About: NextPage = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">About Me</h1>
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="md:w-100">
                <p className="text-gray-700 mb-4 text-base md:text-lg leading-relaxed">
                  Hey there! I&apos;m <strong>Lavanya Patial</strong>, a Software Development Engineer (SDE-1) at <strong>IndiaP2P</strong>, where I build and maintain fintech applications that serve thousands of users across India.
                </p>
                <p className="text-gray-700 mb-4 text-base md:text-lg leading-relaxed">
                  I enjoy turning complex problems into clean, user-friendly web experiences. Whether it&apos;s creating interactive dashboards, crafting smooth user flows, or improving performance, I love bringing ideas to life through thoughtful design and efficient code.
                </p>
                <p className="text-gray-700 mb-4 text-base md:text-lg leading-relaxed">
                  With a Diploma in Computer Science and a Bachelor&apos;s degree from Chandigarh Group of Colleges, I bring strong technical fundamentals paired with a product-focused mindset. I&apos;m always eager to learn, collaborate, and build tools that make a real impact.
                </p>
                <p className="text-gray-700 mb-4 text-base md:text-lg leading-relaxed">
                  Outside of work, you&apos;ll usually find me exploring new ideas, learning something new, or just vibing to music while refining a UI.
                </p>
                <a
                  href="/resume.pdf"
                  download
                  className="bg-primary text-white px-5 py-3 rounded-md flex items-center justify-center gap-2 w-fit mt-4 hover:bg-blue-700 transition-colors"
                >
                  <FaFileDownload /> Download Resume
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800" >What I Do</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaLaptopCode size={36} />,
                  title: 'Frontend Development',
                  desc: 'Building responsive, scalable interfaces using Vue.js, Nuxt.js, and Tailwind CSS. Focused on UX and accessibility.',
                },
                {
                  icon: <FaServer size={36} />,
                  title: 'Backend Engineering',
                  desc: 'Creating REST APIs using Node.js & Express.js with proper authentication, validation, and business logic handling.',
                },
                {
                  icon: <FaDatabase size={36} />,
                  title: 'Database Management',
                  desc: 'Schema design and querying using MongoDB. I optimize for performance and ensure reliability at scale.',
                },
                {
                  icon: <FaCode size={36} />,
                  title: 'API Integrations',
                  desc: 'Integrating 3rd-party services like Karza, SignDesk, Befics, and payment gateways to streamline business flows.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                  <div className="text-primary mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm md:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">My Development Approach</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4 text-base md:text-lg">
                I follow a practical, results-driven approach to software engineering that includes:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 text-sm md:text-base">
                <li>Understanding user and business goals clearly before coding</li>
                <li>Designing clean architectures that scale well</li>
                <li>Writing reusable and modular code with performance in mind</li>
                <li>Conducting thorough testing and peer reviews</li>
                <li>Deploying and iterating quickly based on feedback</li>
              </ul>
              <p className="text-gray-700 mt-4 text-base md:text-lg">
                As an SDE-1, I strive to deliver stable features, collaborate effectively with cross-functional teams, and grow with every project I ship.
              </p>
            </div>
          </motion.div> */}
        </div>
      </section>
    </Layout>
  );
};

export default About;
// src/pages/projects.tsx
import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import { motion } from 'framer-motion';
import ProjectCard from '../components/Project/ProjectCard';

const Projects: NextPage = () => {
  const projects = [
    {
      title: 'IndiaP2P Website',
      description: 'A comprehensive fintech platform for P2P lending with integrated payment systems, user dashboards, and automated loan processing.',
      image: '#',
      technologies: ['Vue.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3'],
      liveUrl: 'https://www.indiap2p.com/',
      githubUrl: '#',
      highlights: [
        'Implemented third-party integrations with SignDesk for mandates',
        'Built dynamic document generation system with EJS templates',
        'Created dashboards for loan collection analytics',
        'Developed robust API ecosystem with fallback mechanism'
      ],
      showGitHubLink: false,
      showLiveLink: true,
      showLivePreview: true,
      hidePreview: true,
      liveLinkText: "Visit Website"
    },
    {
      title: 'Loan Collection Module',
      description: 'Internal tool for tracking field partner collections, providing accountability and efficiency in loan recovery processes.',
      image: '/images/loan-collection.jpg',
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Express.js', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      highlights: [
        'Developed dashboard for aggregating collection data',
        'Implemented reporting functionality for various metrics',
        'Built user permission system for different access levels',
        'Created API integrations with payment gateways'
      ],
      showGitHubLink: false,
      showLiveLink: true,
      showLivePreview: false,
      hidePreview: true
    },
    {
      title: 'Greenway eCommerce Website',
      description: 'An eCommerce platform built on Wix, showcasing sustainable products with integrated payment solutions, product catalogs, and user-friendly shopping experience.',
      image: '/images/greenway.jpg',
      technologies: ['Wix Editor', 'Wix Velo (Corvid)', 'Wix Stores', 'SEO Optimization', 'Payment Integration'],
      liveUrl: 'https://www.greenwayappliances.com/', // replace with actual URL
      githubUrl: '#',
      highlights: [
        'Developed product catalogs and category pages using Wix Stores',
        'Integrated secure payment gateways and checkout flows',
        'Optimized site SEO to boost organic traffic',
        'Implemented custom scripts and performance improvements with Wix Velo'
      ],
      showGitHubLink: false,
      showLiveLink: true,
      showLivePreview: true,
      liveLinkText: "Visit Website"
    },
    {
      title: 'OffsetFarm Website',
      description: 'Interactive web application for carbon offset solutions, featuring data visualization, user accounts, and environmental impact tracking.',
      image: 'https://www.offsetfarm.io/',
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Express.js'],
      liveUrl: 'https://www.offsetfarm.io/',
      githubUrl: '#',
      highlights: [
        'Designed and implemented intuitive user interface',
        'Created data visualization components for environmental metrics',
        'Built user authentication and account management system',
        'Implemented responsive design for mobile and desktop'
      ],
      showGitHubLink: false,
      showLiveLink: false,
      showLivePreview: true,
      liveLinkText: "Visit Website"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Layout>
      <section className="pt-40 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">My Projects</h1>
          <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Here&apos;s a showcase of my professional projects and personal works that demonstrate my skills and expertise.
          </p>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={item}>
                <ProjectCard
                  {...project}
                  showLivePreview={project.showLivePreview}
                  showGitHubLink={project.showGitHubLink}
                  showLiveLink={project.showLiveLink}
                  hidePreview={project.hidePreview}
                  liveLinkText={project.liveLinkText}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
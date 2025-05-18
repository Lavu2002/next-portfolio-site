import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import ExperienceCard from '../components/Experience/ExperienceCard';

const Experience: NextPage = () => {
  const experiences = [
    {
      title: 'Software Development Engineer-1',
      company: 'IndiaP2P',
      location: 'Chandigarh, India',
      period: 'Aug 2023 - Present',
      achievements: [
        'Built <strong>borrower onboarding</strong> workflows with <strong>Aadhaar and PAN verification</strong>, increasing application completion rates by <strong>35%</strong>.',
        'Automated <strong>document generation</strong> using <strong>EJS templates</strong> and <strong>AWS S3</strong>, reducing manual processing time by <strong>70%</strong>.',
        'Integrated <strong>CIBIL and credit bureau APIs</strong>, cutting loan evaluation from <strong>4 hours</strong> to <strong>20 minutes</strong>.',
        'Implemented fallback strategies for <strong>6+ APIs</strong>, increasing system stability by <strong>90%</strong>.',
        'Developed <strong>repayment dashboards</strong>, reducing report generation from <strong>2 days</strong> to <strong>10 minutes</strong>.',
        'Engineered auto-debit mandate system with <strong>SignDesk</strong>, improving cash flow predictability by <strong>65%</strong>.'
      ]
    },
    {
      title: 'Software Development Engineer Intern',
      company: 'Greenway Grameen Pvt. Ltd.',
      location: 'Chandigarh, India',
      period: 'Jan 2023 - Aug 2023',
      achievements: [
        'Built <strong>SEO-optimized</strong> sites with <strong>Nuxt.js</strong> and <strong>Vue.js</strong>, improving page load by <strong>40%</strong>.',
        'Applied <strong>lazy loading</strong>, <strong>image compression</strong>, improving conversion rate by <strong>12%</strong>.',
        'Integrated <strong>serverless APIs</strong> with MongoDB, enabling marketing to update content <strong>4x faster</strong>.',
        'Led project that grew organic traffic by <strong>30%</strong> and user engagement by <strong>20%</strong>.'
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section className="pt-40 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-2 text-center">Professional Experience</h1>
          <p className="text-gray-600 text-center">
            My journey as a software developer and the companies I've had the privilege to work with.
          </p>
        </div>

        <motion.div
          className="space-y-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
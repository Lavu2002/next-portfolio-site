// src/pages/skills.tsx
import type { NextPage } from 'next';
import { motion } from 'framer-motion';

const Skills: NextPage = () => {
  const skillCategories = [
    {
      name: "Programming Languages & Web Technologies",
      skills: [
        { name: "HTML5", proficiency: 90 },
        { name: "CSS3", proficiency: 85 },
        { name: "JavaScript (ES6+)", proficiency: 85 },
        { name: "TypeScript", proficiency: 80 },
        { name: "Python (Basics)", proficiency: 60 }
      ]
    },
    {
      name: "Frameworks & Libraries",
      skills: [
        { name: "Vue.js", proficiency: 90 },
        { name: "Nuxt.js", proficiency: 85 },
        { name: "Node.js", proficiency: 85 },
        { name: "Express.js", proficiency: 80 },
        { name: "Serverless Framework", proficiency: 75 }
      ]
    },
    {
      name: "Databases & Storage",
      skills: [
        { name: "MongoDB", proficiency: 85 },
        { name: "AWS S3", proficiency: 80 }
      ]
    },
    {
      name: "Tools & Technologies",
      skills: [
        { name: "Git", proficiency: 85 },
        { name: "Docker", proficiency: 75 },
        { name: "Jest", proficiency: 70 },
        { name: "Jenkins", proficiency: 65 },
        { name: "Postman", proficiency: 90 },
        { name: "AWS Lambda", proficiency: 80 }
      ]
    },
    {
      name: "Methodologies & Concepts",
      skills: [
        { name: "Agile Methodologies", proficiency: 85 },
        { name: "TDD (Test-Driven Development)", proficiency: 75 },
        { name: "REST APIs", proficiency: 90 },
        { name: "SEO & Web Optimization", proficiency: 80 },
        { name: "Responsive Design", proficiency: 85 }
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Technical Skills</h1>
          <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            My technical expertise spans across various programming languages, frameworks, tools, and methodologies.
            Here&apos;s a comprehensive overview of my skill set.
          </p>

          {/* Skill Categories Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6"
                variants={item}
              >
                <h2 className="text-xl font-bold mb-6 text-primary">{category.name}</h2>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-600">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <motion.div 
                          className="bg-primary h-2.5 rounded-full" 
                          style={{ width: `${skill.proficiency}%` }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Software and Tools Grid */}
          <div className="mt-16 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Software & Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['Git', 'Docker', 'VS Code', 'Postman', 'AWS', 'MongoDB', 'Jenkins', 'Jest', 'Figma', 'Jira', 'Slack', 'GitHub'].map((tool, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text-gray-700 font-medium">{tool}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
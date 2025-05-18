import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <motion.div className="bg-white rounded-lg shadow-md p-8" variants={item}>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">{experience.title}</h2>
          <h3 className="text-xl text-primary font-medium">{experience.company}</h3>
        </div>
        <div className="mt-2 md:mt-0">
          <div className="flex items-center text-gray-600 mb-1">
            <FaCalendarAlt className="mr-2" /> {experience.period}
          </div>
          <div className="flex items-center text-gray-600">
            <FaMapMarkerAlt className="mr-2" /> {experience.location}
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
          <FaBriefcase className="mr-2" /> Key Achievements
        </h4>
        <ul className="space-y-4">
          {experience.achievements.map((achievement: string, i: number) => (
            <li
              key={i}
              className="pl-4 border-l-2 border-primary"
              dangerouslySetInnerHTML={{ __html: achievement }}
            />
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
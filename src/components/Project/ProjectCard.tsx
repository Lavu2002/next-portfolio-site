import { FC } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
  showGitHubLink?: boolean;
  showLiveLink?: boolean;
  showLivePreview?: boolean;
  hidePreview?: boolean; 
  liveLinkText?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  highlights,
  showGitHubLink = true,
  showLiveLink = true,
  showLivePreview = false,
  hidePreview = false,
  liveLinkText
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {!hidePreview && (
        <div className="h-56 bg-gray-200 flex items-center justify-center relative overflow-hidden rounded-t-lg">
          {showLivePreview && liveUrl && liveUrl !== '#' ? (
            <iframe
              src={liveUrl}
              className="w-full h-full"
              frameBorder="0"
              loading="lazy"
              title={`${title} Live Preview`}
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
          ) : (
            <Image
              src={image && image !== '#' ? image : '/images/placeholder.jpg'}
              alt={`${title} preview`}
              className="object-cover h-full w-full"
            />
          )}
        </div>
      )}

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>

        <h3 className="font-medium text-gray-700 mb-2">Key Features:</h3>
        <ul className="list-disc list-inside mb-4 text-gray-600">
          {highlights.map((highlight, i) => (
            <li key={i}>{highlight}</li>
          ))}
        </ul>

        <div className="mb-4">
          <h3 className="font-medium text-gray-700 mb-2">Technologies:</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-blue-50 text-primary text-sm px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-6">
        {showLiveLink && liveUrl && liveUrl !== '#' && (
  <a
    href={liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-primary text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700 transition-colors"
  >
    {liveLinkText || 'Live Demo'} <FaExternalLinkAlt />
  </a>
)}

          {showGitHubLink && githubUrl && githubUrl !== '#' && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-900 transition-colors"
            >
              GitHub <FaGithub />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
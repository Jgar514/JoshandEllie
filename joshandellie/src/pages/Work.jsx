import React from 'react';
import projects from '../data/data';

const Work = () => {
  return (
    <div className=" mx-auto p-4 bg-gray-100 h-full w-full overflow-y-auto">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            {project.image && (
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            )}
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>

              <p className="text-gray-600 mb-2">{project.date}</p>
              <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mb-2 block">
                {project.website}
              </a>
              <ul className="px-2 list-disc list-outside mb-4 text-sm">
                {project.description.map((desc, i) => (
                  <li key={i} className="text-gray-700">{desc}</li>
                ))}
              </ul>
              {project.codeRepository && (
                <a href={project.codeRepository} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  Code Repository
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

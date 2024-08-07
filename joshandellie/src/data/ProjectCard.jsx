import React from 'react';

function ProjectCard({ title, description, imageUrl, demoUrl, githubUrl }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-gray-50">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <a href={demoUrl} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Demo</a>
        <a href={githubUrl} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">GitHub</a>
      </div>
    </div>
  );
}

export default ProjectCard;

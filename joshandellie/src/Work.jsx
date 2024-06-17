import React from 'react';
import ProjectCard from './ProjectCard'; // Adjust the import path as per your file structure

function Work() {
  // Example project data
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1.',
      imageUrl: 'https://placehold.it/300x200',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Project 2',
      description: 'Description of project 2.',
      imageUrl: 'https://placehold.it/300x200',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Project 3',
      description: 'Description of project 3.',
      imageUrl: 'https://placehold.it/300x200',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Project 1',
      description: 'Description of project 1.',
      imageUrl: 'https://placehold.it/300x200',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Project 2',
      description: 'Description of project 2.',
      imageUrl: 'https://placehold.it/300x200',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Project 3',
      description: 'Description of project 3.',
      imageUrl: 'https://placehold.it/300x200',
      demoUrl: '#',
      githubUrl: '#'
    },

    // Add more projects as needed
  ];

  return (
    <div className="container  p-4 bg-gray-50 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            demoUrl={project.demoUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Work;

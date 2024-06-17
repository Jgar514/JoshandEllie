import React from 'react';
import ProjectCard from './ProjectCard';
import blackline from "./assets/work/homie.png"
import jg from "./assets/work/joshuagarveydotcom.png"
import ui from "./assets/work/mobileui.png"

function Work() {
  // Example project data
  const projects = [
    {
      title: 'Project 1',
      description: 'Firebase for hosting, database, and serverless functions. Stripe payment api and name.com domain search api.',
      imageUrl: blackline,
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Project 2',
      description: 'Description of project 2.',
      imageUrl: jg,
      demoUrl: jg,
      githubUrl: '#'
    },
    {
      title: 'Project 3',
      description: 'Description of project 3.',
      imageUrl: ui,
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
    <div className=" p-4 bg-white w-full h-full overflow-y-auto">
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

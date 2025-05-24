import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import projects from '../data/data';
import videoDemos from '../data/videoDemos';

const Work = () => {
  const [activeTab, setActiveTab] = useState('videos');

  const regularVideos = videoDemos.filter(v => v.type !== 'short');
  const shorts = videoDemos.filter(v => v.type === 'short');

  return (
    <div className="w-full h-screen overflow-y-auto bg-gray-100">
      <Helmet>
        <title>Josh Garvey - My Work</title>
        <meta name="description" content="The work of Joshua Garvey - a fullstack developer based out of Annapolis, Maryland" />
        <meta name="keywords" content="projects, portfolio, web development, code, repositories" />
      </Helmet>

      {/* Sticky Tab Header */}
      <div className="sticky top-0 z-10 bg-gray-100 px-4 pt-4 pb-2 border-b flex gap-4">
        <button
          onClick={() => setActiveTab('videos')}
          className={`pb-2 px-4 font-medium ${activeTab === 'videos' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
        >
          Video Demos
        </button>
        <button
          onClick={() => setActiveTab('projects')}
          className={`pb-2 px-4 font-medium ${activeTab === 'projects' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
        >
          Projects
        </button>
      </div>

      {/* Tab Content */}
      <div className="px-4 pb-24 pt-6">
        {activeTab === 'videos' && (
          <>
            {/* Regular Videos */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-10">
              {regularVideos.map((video) => (
                <div key={video.youtubeId} className="bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="w-full aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{video.title}</h3>
                    <p className="text-sm text-gray-600">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Shorts */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {shorts.map((video) => (
                <div key={video.youtubeId} className="w-full aspect-[9/16] bg-black rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'projects' && (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                {project.image && (
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                )}
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-600 mb-2">{project.date}</p>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline mb-2 block"
                  >
                    {project.website}
                  </a>
                  <ul className="px-2 list-disc list-outside mb-4 text-sm">
                    {project.description.map((desc, i) => (
                      <li key={i} className="text-gray-700">{desc}</li>
                    ))}
                  </ul>
                  {project.codeRepository && (
                    <a
                      href={project.codeRepository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Code Repository
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;

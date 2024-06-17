import React from 'react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaDev } from "react-icons/fa";

export default function About() {
  // Define your skills data
  const skills = [
    {
      category: "Front End",
      skillsList: ["HTML", "CSS", "JavaScript", "TypeScript", "JSX", "React", "Tailwind CSS", "Vite", "Netlify"]
    },
    {
      category: "Back End",
      skillsList: ["Node.js", "Express", "Firebase Functions", "JSON Web Tokens", "bcrypt", "Firebase Authentication", "RESTful APIs", "Postman", "Sanity CMS"]
    },
    {
      category: "Databases",
      skillsList: ["MongoDB", "Mongoose", "Firebase Realtime Database", "Cloud Firestore"]
    },
    {
      category: "DevOps",
      skillsList: ["Git Version Control", "Google Cloud Platform (GCP)", "CI/CD pipelines", "Microsoft Azure", "Bash", "npm"]
    }
  ];

  return (
    <section className="w-full h-full bg-gray-100 p-8 flex flex-col items-center overflow-y-auto">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src="https://i.imgur.com/0QbtHg2.jpg"
            alt="Joshua Garvey"
            className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <h1 className="text-3xl font-bold mb-2">Joshua Garvey</h1>
            <p className="text-gray-600">Fullstack Developer from Annapolis, Maryland</p>

            {/* Social Icons Row */}
            <div className="flex items-center mt-4 gap-4 w-full">
              <a
                href="https://github.com/jgar514"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                <AiFillGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/josh-garvey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                <AiFillLinkedin size={24} />
              </a>
              <a
                href="mailto:josh.t.garvey@gmail.com"
                className="text-gray-700 hover:text-gray-900"
              >
                <AiOutlineMail size={24} />
              </a>
              <a
                href="https://www.instagram.com/joshgarvey/"
                className="text-gray-700 hover:text-gray-900"
              >
                <AiOutlineInstagram size={24} />
              </a>
              <a
                href="https://dev.to/jgar514"
                className="text-gray-700 hover:text-gray-900"
              >
                <FaDev size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 mb-4">
            My name is Joshua Garvey and I am based out of Annapolis, Maryland. I have always liked to build things. I use to build projects with wood and screws and now I build projects with Javascript and React. I am very goal oriented and most of my time is spent improving my developer skills. I value being a brother to 4 siblings and an uncle to 7 nephews and nieces.
          </p>
          <p className="text-gray-700 mb-4">
            If a project needs a database I use MongoDB/Mongoose or more recently started using firebase. I can style applications quickly with Tailwind CSS and I build all my UI components from scratch. I'm a big fan of netlify for both the ease of use and their generous free tier that has allowed me to code and publish a majority of my projects.
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          {/* Map over the skills array to render each category */}
          {skills.map((skillCategory) => (
            <div key={skillCategory.category} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{skillCategory.category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-0 md:gap-4">
                <ul className="list-disc list-inside">
                  {skillCategory.skillsList.slice(0, Math.ceil(skillCategory.skillsList.length / 2)).map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
                <ul className="list-disc list-inside">
                  {skillCategory.skillsList.slice(Math.ceil(skillCategory.skillsList.length / 2)).map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Certificates</h2>
          <p className="text-gray-700 mb-2">
            <strong>Responsive Web Design</strong> <br />
            freeCodeCamp.org
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Rapid Application Developer (RAD)</strong> <br />
            Mendix
          </p>
        </div>
      </div>
    </section>
  );
}

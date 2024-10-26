import React from 'react';

const projects = [
  { title: ' Doctor_Appointment', description: 'A streamlined Doctor Appointment Management application designed to simplify booking and managing patient appointments. Built with React and Tailwind for an intuitive and responsive user interface. Key features include appointment scheduling, patient information management, and notifications for upcoming appointments. This project highlights my skills in frontend development, efficient data handling, and creating user-friendly workflows tailored for healthcare applications, aiming to enhance the efficiency and convenience for both patients and doctors.', link: 'https://github.com/AkshayKencharaddi/Doctor_Appointment' },
  { title: ' Chat_APP ', description: 'A responsive and feature-rich chat application built with modern web technologies to enable real-time communication between users. This project leverages React for the frontend, Firebase for database and authentication, and Tailwind CSS for responsive styling. Key functionalities include user authentication, live messaging, and the ability to share images. Implemented efficient state management and data fetching to ensure smooth and seamless user experience. This project showcases my skills in frontend development, component-based design, and backend integration, demonstrating a full-cycle app development approach.', link: 'https://github.com/AkshayKencharaddi/Chat_APP' },
];

const Projects = () => (
  <section id="projects" className="py-1 bg-gray-100">
    <h3 className="text-3xl font-extrabold mb-6 text-green-600 border-b-2 border-green-400 pb-2 text-center">My Projects</h3>
    <div className="container mx-auto text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 bg-amber-200 shadow-md rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h4 className="text-xl font-bold ">{project.title}</h4>
            <p className="text-gray-700 my-4">{project.description}</p>
            <a href={project.link} className="text-blue-500">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;

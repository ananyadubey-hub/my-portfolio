import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Resturent-Website"
          main="Developed using Python and Django, this website features an interactive menu, online table reservation, and admin panel for managing dishes and bookings."
        />
        <ProjectCard
          title="Job-portal"
          main="MERN stack job portal with user authentication, job search, application tracking, and recruiter dashboard."

        />
        <ProjectCard
          title="News-portal"
          main="A responsive news portal developed with Python (Django), featuring categorized news, user-friendly UI, and admin controls."
        />
      </div>
    </div>
  );
};

export default Projects;

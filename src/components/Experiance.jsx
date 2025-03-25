import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Full Stack Developer",
      company: "Revolution Software Services Pvt. Ltd. Jaipur",
      duration: "Aug 2024 - Present",
      description: "Developed and maintained web applications using MERN stack.",
    },
    {
      id: 2,
      position: "MERN Stack Developer",
      company: "Global IT Providers, Jaipur",
      duration: "Jan 2024 - Aug 2024",
      description:
        "Built and optimized scalable RESTful APIs using Node.js and Express.",
    },
    {
      id: 3,
      position: "MERN Stack Developer Intern",
      company: "Grras Solutions (P) Ltd. Jaipur",
      duration: "Sep 2023 - Jan 2024",
      description: "Worked on integrating third-party APIs and database management.",
    },
  ];

  return (
    <div name="Experiance" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-center mb-6">My Experience</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-white p-6 rounded-xl shadow-md transition-transform transform hover:scale-105"
          >
            <p className="text-lg font-bold text-green-600">{exp.position}</p>
            <p className="text-md font-semibold text-gray-700">{exp.company}</p>
            <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
            <p className="text-sm text-gray-600">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

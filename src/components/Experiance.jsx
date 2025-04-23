import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Full Stack Developer",
      company: "Revolution Software Services Pvt. Ltd. Jaipur",
      duration: "April 2024 - Present",
      description: "*Developed and deployed scalable web applications using the MERN stack with TypeScript, focusing on performance and maintainability. *Implemented RESTful APIs and integrated third-party services to enhance application functionality. *Contributed to architecture decisions and worked on Docker and CI/CD pipelines. *Led frontend initiatives using React, Redux Toolkit, and TailwindCSS, ensuring a responsive and user-centric design. *Collaborated with DevOps team to automate testing and streamline deployment using GitHub Actions and AWS. ",
    },
    {
      id: 2,
      position: "Full Stack Developer Intern",
      company: "Global IT Providers, Jaipur",
      duration: "Nov 2023 - April 2024",
      description: "*Assisted in building and maintaining full-stack features using React.js, Node.js, and MongoDB. *Worked on implementing JWT-based authentication and authorization systems. *Integrated APIs and improved existing backend logic for better performance and scalability. *Collaborated closely with UI/UX designers to align the user interface with business requirements",
    },
    {
      id: 3,
      position: "Full Stack Developer Trainee",
      company: "Grras Solutions (P) Ltd. Jaipur",
      duration: "Aug 2023 - Nov 2023",
      description: "*Learned and practiced core MERN stack development through real-world projects. *Created responsive UIs with React and styled-components, gaining hands-on experience with frontend development. *Wrote and consumed RESTful APIs using Express.js and MongoDB. *Gained practical knowledge of Git version control and agile development methodologies. *Built basic authentication and CRUD functionalities for internal web applications.",
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

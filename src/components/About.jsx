import React from "react";

function About() {
  return (
    <div name="About" className="bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          About Me
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          My name is <b>Shah Rukh Khan</b>, and I am a{" "}
          <b>Software Engineer & Full Stack Developer</b> with 1.5+ years of
          experience. I specialize in <b>scalable web applications</b>, with a
          strong foundation in <b>backend development</b>,{" "}
          <b>dynamic frontends</b>, and <b>API integrations</b>.
          <br />
          <br />
          Passionate about problem-solving and performance optimization, I am
          continuously learning and exploring{" "}
          <b>TypeScript, Docker, CI/CD, AWS, and system design</b>.
        </p>

        <h2 className="text-xl font-bold text-green-600 mt-8">
          🎓 Education & Training
        </h2>
        <p className="text-lg text-gray-700">
          <b>Institute Of Engineering And Technology, Alwar, Rajasthan</b>{" "}
          <br />
          <i>B.Tech (Computer Science Engineering), July 2019 - July 2023</i>
          <br />
          <b>CGPA:</b> 8.01
        </p>

        <h2 className="text-xl font-bold text-green-600 mt-8">
          🛠 Skills & Expertise
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>
            <b>Programming Languages:</b> JavaScript, TypeScript, HTML5, CSS3,
            JSON{" "}
          </li>
          <li>
            <b>Frontend:</b> React.js, Next.js, Material-UI, Tailwind CSS, Redux
            Toolkit, Bootstrap, Responsive Design
          </li>
          <li>
            <b>Backend:</b> Node.js, Express.js, NestJS, Socket.io, RESTful APIs
          </li>
          <li>
            <b>Database:</b> MongoDB, Mongoose, Redis, MongoDB-Atlas, PostgreSQL
          </li>
          <li>
            <b>DevOps:</b> Docker, GitHub Action(CI/CD), Nginx, AWS (EC2, S3,
            ECS, IAM, Route53)
          </li>
          <li>
            <b>Other Tools:</b> Git&GitHub, Postman, Vercel, Npm, JWT
            Authentication, Third-Party API Integration, Gateways-Integration,
            OpenAi API Integration
          </li>
        </ul>
        <h2 className="text-xl font-bold text-green-600 mt-8">
          🚀 What I Can Do for You
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>✔ Build modern, high-performance web applications</li>
          <li>✔ Optimize performance for faster load times</li>
          <li>✔ Secure APIs with authentication & authorization</li>
          <li>✔ Implement scalable architectures for high-traffic apps</li>
          <li>✔ Deploy applications on cloud platforms with CI/CD</li>
        </ul>
        <h2 className="text-xl font-bold text-green-600 mt-8">
          🎯 Future Goals
        </h2>
        <p className="text-lg text-gray-700">
          I aim to leverage my skills to deliver{" "}
          <b>innovative software solutions</b> that exceed expectations and
          contribute to the tech industry. I am committed to{" "}
          <b>continuous learning</b>, exploring new challenges, and mastering{" "}
          <b>backend & cloud technologies</b> to create enterprise-grade
          applications.
        </p>
      </div>
    </div>
  );
}

export default About;

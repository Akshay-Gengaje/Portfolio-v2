import React from "react";

const WorkExperience = () => {
  const experiences = [
    {
      role: "Software Developer Intern",
      company: "Persausive Technologies",
      location: "Pune",
      duration: "03/2023 - Present",
      tasks:
        "Developed 3 web apps using React JS to deliver data insights and improve decision-making, utilized data visualization to present complex information clearly, integrated REST APIs to streamline data exchange, resolved performance bottlenecks to enhance speed and user experience, and assisted in troubleshooting performance, security, and UX issues.",
    },
    {
      role: "Frontend Development Intern",
      company: "AI4M Technology Private Limited",
      location: "Pune",
      duration: "10/2022 - 01/2023",
      tasks:
        "Architected and developed analytical dashboards using ReactJS and Bootstrap, implemented AWS REST API Gateway and Serverless Lambda functions with DynamoDB, utilized AWS Amplify for cloud hosting, managed and delivered multiple projects on time, and applied software engineering process improvements and best practices.",
    },
  ];

  return (
    <div className="h-full md:h-screen w-full">
      <div className=" h-full max-w-full flex flex-col items-center justify-evenly">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Work Experience
        </h1>
        <div className="flex flex-wrap justify-center px-2 w-full md:w-[80%] text-4xl md:text-6xlw lg:text-8xl gap-10 md:max-h-[calc(100vh-35vh)] md:overflow-y-auto">
          {experiences.map((experience, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold dark:text-white text-black">
                {experience.role}
              </h3>
              <p className="text-gray-700 text-sm">{experience.company}</p>
              <p className="text-gray-500 text-sm">{experience.location}</p>
              <p className="text-gray-400 text-sm">{experience.duration}</p>
              <p className="mt-4 list-disc list-inside text-gray-600 space-y-2 text-lg">
                {experience.tasks}
              </p>
              {/* <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2 text-lg">
                {experience.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;

/*
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Work Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-blue-600">
                {experience.role}
              </h3>
              <p className="text-gray-700">{experience.company}</p>
              <p className="text-gray-500">{experience.location}</p>
              <p className="text-gray-400">{experience.duration}</p>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                {experience.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
*/

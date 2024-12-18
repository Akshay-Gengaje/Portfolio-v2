import React from "react";

const WorkExperience = () => {
  const experiences = [
    {
      role: "Software Developer",
      company: "Woxi Software LLP",
      location: "Pune",
      duration: "03/2023 - Present",
      tasks:
        "Developed dynamic web applications using React JS and Spring Boot to deliver actionable data insights, empowering clients to make informed business decisions. Simplified complex datasets through advanced data visualization, helping clients identify trends and growth opportunities. Integrated REST APIs to enhance data exchange and platform efficiency, while proactively diagnosing performance issues to improve speed, responsiveness, and user experience. Additionally, supported troubleshooting efforts across performance, security, and user interface areas, bolstering system reliability and client confidence.",
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
        <div className="flex flex-wrap justify-center pl-5 w-full md:w-[80%] text-4xl md:text-6xlw lg:text-8xl gap-10 md:max-h-[calc(100vh-35vh)] md:overflow-y-auto">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;

import React from "react";

const sections = [
  {
    title: "Overview",
    content: (
      <>
        <p>
          <em>The Wild Oasis</em> is a high-end, boutique hotel featuring eight
          luxurious, nature-inspired cabins. The hotel management team required
          a custom internal application to streamline day-to-day operations,
          including managing bookings, cabins, and guest check-ins/check-outs.
        </p>
        <p>
          Our project’s goal was to deliver an intuitive, efficient tool for
          hotel employees to handle all aspects of hotel management in one
          place, providing a scalable solution that can later integrate with a
          customer-facing booking site.
        </p>
      </>
    ),
    image: "/images/case_studies/dashboard.png",
  },
  {
    title: "Project Goals",
    content: (
      <ul className="list-disc list-inside">
        <li>Create an internal hotel management application for staff.</li>
        <li>Develop a scalable backend with a robust API.</li>
        <li>Implement a high-performance, easy-to-use frontend.</li>
      </ul>
    ),
    image: "/images/case_studies/goals.jpg",
  },
  {
    title: "Project Requirements & Features",
    content: (
      <ul className="list-disc list-inside">
        <li>Authentication</li>
        <li>Cabin Management</li>
        <li>Booking Management</li>
        <li>Check-In/Check-Out Management</li>
        <li>Guest Profiles</li>
        <li>Dashboard & Statistics</li>
        <li>Settings</li>
      </ul>
    ),
    image: "/images/case_studies/requirements.jpg",
  },
  {
    title: "Planning the Application Architecture",
    content: (
      <p>
        The application architecture was designed with both current and future
        needs in mind, allowing us to build the internal system while making
        room for future enhancements.
      </p>
    ),
    image: "/images/case_studies/architecture.jpg",
  },
  {
    title: "Technology Stack",
    content: (
      <ul className="list-disc list-inside">
        <li>
          <strong>Frontend Framework:</strong> React
        </li>
        <li>
          <strong>Routing:</strong> React Router
        </li>
        <li>
          <strong>Styling:</strong> Styled Components
        </li>
        <li>
          <strong>State Management:</strong> React Query & Context API
        </li>
        <li>
          <strong>Form Handling:</strong> React Hook Form
        </li>
        <li>
          <strong>Charting:</strong> Recharts
        </li>
        <li>
          <strong>Backend & Database:</strong> Supabase
        </li>
      </ul>
    ),
    image: "/images/case_studies/techstack.jpg",
  },
  {
    title: "Development Process",
    content: (
      <p>
        Our approach focused on a user-friendly UI, scalable backend, and robust
        security. We integrated features incrementally to ensure functionality
        was tested at each step.
      </p>
    ),
    image: "/images/case_studies/development.jpg",
  },
  {
    title: "Key Challenges & Solutions",
    content: (
      <ul className="list-disc list-inside">
        <li>
          <strong>Scalability:</strong> Ensuring the app could expand with
          additional features.
        </li>
        <li>
          <strong>Data Synchronization:</strong> Used React Query to keep
          frontend data fresh.
        </li>
        <li>
          <strong>User-Friendly UI:</strong> Simplified the design for non-tech
          users.
        </li>
      </ul>
    ),
    image: "/images/case_studies/challenges.jpg",
  },
  {
    title: "Future Roadmap",
    content: (
      <ul className="list-disc list-inside">
        <li>Public Booking Portal</li>
        <li>Advanced Analytics</li>
        <li>Mobile Optimization</li>
      </ul>
    ),
    image: "/images/case_studies/roadmap.jpg",
  },
];

const CaseStudies = () => {
  return (
    <div className="case-study max-w-6xl mx-auto space-y-16">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          } items-center justify-between md:py-16 px-2 md:px-4`}
        >
          {/* Image Container */}
          <div
            className="w-full md:w-1/2 h-96 bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${section.image})`,
              // backgroundImage: 'url("/images/case_studies/dashboard.png")',
            }}
          ></div>

          {/* Text Container */}
          <div className="w-full md:w-1/2 p-8 md:p-16 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-300 mb-4">
              {section.title}
            </h2>
            <div className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              {section.content}
            </div>
          </div>
        </div>
      ))}

      {/* Conclusion Section */}
      <footer className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-center px-4 py-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-300 mb-4">
            Conclusion
          </h2>
          <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed max-w-2xl mx-auto">
            <em>The Wild Oasis</em> management app is a powerful, real-world
            solution tailored to the needs of a boutique hotel. By focusing on
            user-friendly design, modular code, and scalability, we created a
            valuable tool for hotel staff to efficiently manage day-to-day
            operations.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudies;

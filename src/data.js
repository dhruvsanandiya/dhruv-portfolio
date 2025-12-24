export const config = {
  portfolio: {
    portfolioLogo: "Portfolio",
    projectCard: {
      cards: [
        {
          heading: "AI Trip Planner",
          description:
            "AI-powered trip planner generating personalized itineraries based on budget and preferences. Built with React.js, Firebase, LangChain, and Gemini API. Features intelligent route optimization, budget management, and real-time recommendations.",
          animationDelay: "300",
          buttonLink: "https://github.com/dhruvsanandiya",
          buttonText: "VIEW PROJECT",
        },
        {
          heading: "Multi-Agent RAG System",
          description:
            "Collaborative multi-agent system for semantic search, summarization, and contextual Q&A. Built with Python, FastAPI, LangChain, OpenAI API, and Redis vector database. Implements advanced RAG architecture for intelligent information retrieval.",
          animationDelay: "500",
          buttonLink: "https://github.com/dhruvsanandiya",
          buttonText: "VIEW PROJECT",
        },
        {
          heading: "Loan Management Platform",
          description:
            "Automated loan processing system with document verification, EMI calculation, and payment integration. Built with React.js, Node.js, MySQL, and JWT authentication. Features role-based access control, real-time notifications, and Razorpay/Stripe integration.",
          animationDelay: "700",
          buttonLink: "https://github.com/dhruvsanandiya",
          buttonText: "VIEW PROJECT",
        },
        {
          heading: "Learning Management System (LMS)",
          description:
            "Secure LMS with quizzes, assignments, dashboards, and automated certificates. Built with React.js, ASP.NET Core, and MSSQL. Features JWT authentication, role-based access, student/teacher dashboards, and automated certificate generation.",
          animationDelay: "900",
          buttonLink: "https://github.com/dhruvsanandiya",
          buttonText: "VIEW PROJECT",
        },
      ],
    },
    internships: {
      internship: [
        {
          companyName: "Xelentor Technologies Pvt. Ltd.",
          role: "Full Stack Developer Intern",
          introText: "",
          duration: "Jul 2025 – Sep 2025",
          keyPointOne:
            "Built full-stack LMS using React.js, ASP.NET Core, and MSSQL with JWT authentication and role-based access control.",
          keyPointTwo:
            "Implemented automated certificate generation, optimized APIs for performance, and created comprehensive dashboards for students and instructors.",
          keyPointThree:
            "Enhanced system scalability and maintainability through modular architecture and efficient database design.",
          keyPointFour:
            "Delivered production-ready features with focus on security, performance, and user experience.",
          offsetValue: "-1000",
        },
        {
          companyName: "Ruhiverse Technologies",
          role: "React.js Developer Intern",
          introText: "",
          duration: "Jan 2025 – Jun 2025",
          keyPointOne:
            "Built loan management platform using React, Node.js, and MySQL with document verification and EMI scheduling.",
          keyPointTwo:
            "Integrated Razorpay and Stripe payment gateways, implemented real-time notifications, and developed secure authentication systems.",
          keyPointThree:
            "Created responsive admin dashboards with advanced filtering, search, and data management capabilities.",
          keyPointFour:
            "Ensured code quality, maintainability, and scalability throughout the development lifecycle.",
          offsetValue: "0",
        },
      ],
    },
  },
};

export default config;

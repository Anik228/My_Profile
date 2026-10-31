export const profile = {
  name: "Anik Lal Dey",
  role: "Software Engineer",
  tagline:
    "I build secure, scalable banking and payment systems with Java Spring Boot, Oracle and ASP.NET.",
  email: "aniklal2020@gmail.com",
  phone: "+8801973174426",
  cv: "/Anik%20Lal%20Dey_CV.pdf",
  github: "", // add your GitHub URL
  linkedin: "https://www.linkedin.com/in/anik-lal-dey-09b684200/",
  about:
    "I’m a software engineer in the Digital Banking Division at Mutual Trust Bank PLC, turning complex banking workflows into secure, reliable software. I work across the full stack: backend services and APIs, frontend applications, the Corporate Banking Solution, and core middleware that connects digital channels with core banking and payment services. I design, build, integrate and maintain the systems that keep payments, monitoring and digital services running smoothly. I enjoy working across teams, taking problems end to end, and shipping solutions that scale today and stay easy to maintain tomorrow.",
};

export const stats = [
  { value: "5", label: "Banking systems in production" },
  { value: "3", label: "Companies" },
  { value: "6+", label: "Backend & DB technologies" },
];

export const experience = [
  {
    company: "Mutual Trust Bank PLC",
    title: "Associate Officer / Software Engineer",
    team: "Digital Banking Division",
    logo: "/logos/mtb.png",
    period: "17 May 2026 – Present",
    current: true,
    summary:
      "As a Software Engineer/Associate in the Digital Banking Division, I contribute to the design, development, integration, and maintenance of secure and scalable Corporate Banking Software solutions and Core Middleware application. I work with technologies such as Java Spring Boot, ASP.NET, Oracle and MSSQL to develop APIs, backend services, and digital banking applications. I collaborate with cross-functional teams to deliver reliable solutions that support banking operations and digital services.",
    points: [
      "Corporate Banking Solution: working on development and maintenance of the MTB eBank Corporate Banking Solution.",
      "Transaction Monitoring System: building a dashboard to monitor and report on transactions across digital banking channels.",
      "Developer Sandbox: building an internal portal where developers explore and test bank APIs.",
      "Job Scheduler Application: building a web-based system to schedule and track automated jobs.",
      "Core Middleware: working on the integration layer that connects digital banking channels with core banking and payment services.",
    ],
  },
  {
    company: "LEADS Corporation Limited",
    title: "Software Engineer",
    team: "Core Banking Solutions (Payment System)",
    logo: "/logos/leads.png",
    period: "15 May 2025 – 14 May 2026",
    summary:
      "I worked as a Software Engineer in the Core Banking Solutions department, where I developed and maintained core banking systems using technologies such as ASP.NET, Java Spring Boot, Angular, Oracle, REST APIs, and SOAP services. My role involved direct collaboration with banking clients, allowing me to gain hands-on experience and a deeper understanding of real-world financial operations. I actively contributed to system development and integration while following Agile Software Development Lifecycle (SDLC) methodologies to ensure efficient and structured project delivery.",
    points: [
      "ASP.NET: core banking development, BACH / BEFT / RTGS payment integration, Web API",
      "Windows Forms XML generator and reader for BACH, BEFT and RTGS files",
      "Customer Account Verification System (AVS)",
      "Java Spring Boot: scalable microservices platform and cheque processing system",
      "Oracle: stored procedures, functions, triggers, complex queries, PL/SQL design",
      "Angular: robust frontend architectures",
    ],
  },
  {
    company: "Supernova Techno Limited",
    title: "Software Engineer",
    team: "Software Development · Clients: Robi, bKash, Banglalink",
    logo: "/logos/supernova.png",
    period: "1 Jan 2024 – 14 May 2025",
    summary:
      "As a Software Engineer at Supernova Techno Limited, I worked with clients including Robi Axiata Limited, bKash, and Banglalink, handling project requirements and delivering scalable solutions. I used technologies such as ASP.NET, NestJS, Node.js, Java, PHP, Next.js, Angular, Tailwind CSS, Oracle, MSSQL, and PostgreSQL.",
    points: [
      "ASP.NET: VAS charging app (IVR, WEB, SMS), message sender and Firebase push-notification workers",
      "NestJS / Node.js: BlCare, Robi Healthplus, Purno Health, network monitoring",
      "Java: mail senders, billing generation and file-fetch processors, Linux JAR deployment",
      "Databases: large Messaging, Billing and VAS databases across IVR, SMS, USSD and WEB (Oracle, MSSQL, PostgreSQL)",
      "Frontend: Next.js, Tailwind CSS, daisyUI, Bootstrap, Angular",
    ],
  },
];

export const companies = ["All", "MTB", "LEADS", "Supernova"] as const;

export const projects = [
  // MTB
  { company: "MTB", title: "Corporate Banking Solution (MTB eBank)", desc: "MTB eBank is a secure digital banking platform for business customers. It covers real-time payments, reporting, document management and system integration, on the web and in a companion mobile app.", points: ["Payments: MTB-to-MTB, BEFTN, RTGS and NPSB transfers, payroll cards, MFS wallets (bKash, Nagad, Rocket and more), custom duty, bill payments and virtual accounts", "Collections and reporting: BEFTN pull collections, OTC bill collection, and transaction, paid, beneficiary and file-wise reports, downloadable as PDF or Excel", "Integration and automation: SFTP and host-to-host API integration, bulk file processing, scheduled payments and pulls, and real-time notifications", "Control and security: maker-checker approvals, beneficiary management, payment authorization"], stack: ["Spring MVC", "JSP", "Oracle"] },
  { company: "MTB", title: "Transaction Monitoring System", desc: "A live dashboard that gives operations teams visibility into every transaction flowing through the middleware, from channel-level totals down to the raw request and response.", points: ["Filterable transaction report with request/response modal across multiple services", "Period toggle for today, last 7 days and this month", "Channel-wise breakdown panels for NPSB, BEFTN, RTGS, MTB2MTB and wallet/MFS", "Charts for success, failure and reversed transactions"], stack: ["Spring MVC", "JSP", "Chart.js", "Oracle"] },
  { company: "MTB", title: "Developer Sandbox", desc: "An internal portal where developers read API documentation, try endpoints and manage sandbox users without touching production systems.", points: ["Manage API Documentation with endpoint trees and an Apidog-style viewer", "Postman-style API tester with request tabs, environment variables and code snippets (cURL, Java, Python, C#)", "User management, project management, company management, access permission management with validity dates, pagination and tester activity logs", "Deployed and tested"], stack: ["Spring Boot", "Thymeleaf", "Oracle", "Tailwind CSS"] },
  { company: "MTB", title: "Job Scheduler Application", desc: "A digital replacement for server cron jobs: schedule, run and audit jobs from a web UI instead of editing crontab files.", points: ["Quartz scheduler with Kafka decoupling and a Spring Boot UI", "Crontab-style builder: daily, weekly or monthly, with a fixed time or a repeat interval", "Two Oracle tables for schedules and execution logs, with Quartz running in memory", "Execution history for auditing and troubleshooting"], stack: ["Quartz", "Kafka", "Spring Boot", "Oracle"] },
  { company: "MTB", title: "Core Middleware", desc: "The integration layer between digital banking channels and the systems behind them, exposing banking and payment services through secure APIs.", points: ["REST and SOAP APIs consumed by digital channels and partner services", "Payment channel connectivity including NPSB, BEFTN, RTGS and wallet/MFS", "Request and response logging that feeds the Transaction Monitoring System", "Java Spring Boot services backed by Oracle"], stack: ["Java", "Spring Boot", "Oracle"] },
  // LEADS
  { company: "LEADS", title: "Cheque Processing System", desc: "Cheque processing system built for a banking client on the Spring Boot framework.", stack: ["Spring Boot", "Oracle"] },
  { company: "LEADS", title: "Account Verification System (AVS)", desc: "Customer account verification system for core banking and payment flows.", stack: ["ASP.NET", "Oracle"] },
  { company: "LEADS", title: "BACH / BEFT / RTGS Integration", desc: "Core payment system integration plus a desktop XML generator and reader for BACH, BEFT and RTGS files.", stack: ["ASP.NET", "Windows Forms", "Web API"] },
  { company: "LEADS", title: "Spring Boot Microservices Platform", desc: "Scalable microservices platform for core banking solutions, with an Angular frontend.", stack: ["Spring Boot", "Angular", "Oracle"] },
  // Supernova
  { company: "Supernova", title: "DSDP Charging Implementation", desc: "Charging implementation for a telecom VAS platform across multiple channels.", stack: ["ASP.NET", "MSSQL", "SOAP"] },
  { company: "Supernova", title: "DND", desc: "DND service work on the telecom VAS platform for Robi, bKash and Banglalink clients.", stack: ["ASP.NET", "MSSQL"] },
  { company: "Supernova", title: "BMS: Billing Management", desc: "Large billing and messaging databases with billing generation and file-fetch processors.", stack: ["Java", "Oracle", "MSSQL"] },
  { company: "Supernova", title: "VAS Charging Platform", desc: "VAS charging application serving IVR, WEB, SMS and USSD channels via a SOAP-based API.", stack: ["ASP.NET", "MSSQL", "SOAP"] },
  { company: "Supernova", title: "BlCare, Robi Healthplus, Purno Health", desc: "Health service platforms for Banglalink, Robi and Purno Health.", stack: ["NestJS", "Node.js", "MSSQL"] },
  { company: "Supernova", title: "bKash ImageMerging Service", desc: "New features and change requests on a desktop image-merging service, plus a bulk inserter and QR banner generator demo.", stack: ["ASP.NET", "NestJS"] },
  { company: "Supernova", title: "Push Notification & Message Workers", desc: "Android push notification (Firebase) and message sender worker services deployed to production.", stack: ["ASP.NET", "Firebase", "MSSQL"] },
];

export const skills = [
  { name: "Java", icon: "java", color: "#f89820" },
  { name: "Spring Boot", icon: "spring", color: "#6db33f" },
  { name: "Oracle", icon: "oracle", color: "#f80000" },
  { name: "MSSQL", icon: "mssql", color: "#cc2927" },
  { name: "PostgreSQL", icon: "pg", color: "#4f8dc9" },
  { name: "ASP.NET", icon: "dotnet", color: "#7c5cff" },
  { name: "Kafka", icon: "kafka", color: "#e5e7eb" },
  { name: "Node.js", icon: "node", color: "#6cc24a" },
];

export const education = [
  { degree: "MS in Computer Science & Engineering", school: "North South University", year: "Running", current: true },
  { degree: "BSc in Computer Science & Engineering", school: "East West University", year: "Passing year 2023" },
  { degree: "HSC", school: "Birshreshtha Munshi Abdur Rouf Public College", year: "2018" },
  { degree: "SSC", school: "Manikganj Govt. High School", year: "2016" },
];
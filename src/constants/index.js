import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Backend Engineer",
    icon: mobile,
  },
  {
    title: "AI, Cloud & DevOps Enthusiast",
    icon: backend,
  },
  {
    title: "Full Stack developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineering Intern – Cloud & AI",
    company_name: "Celebal Technologies",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2025 - Ongoing",
    points: [
      " Collaborated with cross-functional teams to modernize legacy enterprise systems into microservice-based architectures.",
      " Reducing deployment time by 30% and improving team velocity.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      " Partnered with DevOps engineers to implement CI/CD pipelines using Docker, Kubernetes, and Azure.",
      " Improving system scalability and maintainability by 25%.",
    ],
  },
  {
    title: "Student Intern AI & Cloud",
    company_name: "AICTE – TechSaksham (Microsoft & SAP)",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Feb 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      " Designed and launched a cloud-native AI virtual health assistant that scaled to 10,000+ active users, leveraging real-time wearable data through AWS for personalized wellness tracking.",
      "Optimized machine learning pipelines to improve health insight accuracy to 90%, contributing to a 20% boost in user wellness metrics across a monitored user base.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Gaurav showed an impressive ability to learn fast and take ownership. Even as a fresher, he worked like a trained engineer.",
    name: "Priya Sharma",
    designation: "Project Mentor",
    company: "AICTE - TechSaksham(Microsoft & SAP)",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "We were genuinely impressed with Gaurav’s dedication. He quickly adapted to cloud and DevOps concepts with a positive attitude.",
    name: "Kuldeep Chobey",
    designation: "Assistant Vice President-HR",
    company: "Celebal Technologies",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Working with Gaurav felt effortless — he takes responsibility and gets things done.",
    name: "Priyanshi Jain",
    designation: "HR Executive",
    company: "Celebal Technologies",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "IntervueAI",
    description:
      "IntervueAI is a cutting-edge platform that helps users practice job interviews through AI-powered conversations and receive detailed feedback on their performance.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
      {
        name: "VapiSDK",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/gaurav-shinde-07/interview-ai",
  },
  {
    name: "Career_AI",
    description:
      "An interactive Next.js dashboard that identifies skill gaps, generates career roadmaps, and shows real-time tech news in one place.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "orange-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/gaurav-shinde-07/career_ai",
  },
  {
    name: "Cloud Agnostic K8s",
    description:
      "Built a cross-cloud deployment tool for containerized applications, automating rollouts on Kubernetes clusters across AWS, Azure, and GCP.",
    tags: [
      {
        name: "AWS EKS",
        color: "blue-text-gradient",
      },
      {
        name: "Azure AKS",
        color: "green-text-gradient",
      },
      {
        name: "GCP GKE",
        color: "pink-text-gradient",
      },
      {
        name: "Terraform",
        color: "orange-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/gaurav-shinde-07/cloud-agnostic-k8s-deployment-main",
  },
];

export { services, technologies, experiences, testimonials, projects };

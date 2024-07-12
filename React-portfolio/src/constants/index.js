import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Web developer with a passion for learning new technologies. Experienced in building dynamic and responsive websites, I've successfully completed numerous projects across various domains. Committed to continuous improvement and staying updated with industry trends to deliver high-quality, innovative solutions.`;

export const ABOUT_TEXT = `I am a passionate web developer with extensive experience in creating dynamic and responsive websites. Over the years, I've worked on numerous projects, honing my skills in HTML, CSS, JavaScript, Tailwind, and React. My expertise spans from crafting sleek and modern front-end interfaces to implementing robust and efficient back-end solutions. I'm committed to continuous learning and constantly exploring new technologies and frameworks to stay ahead in the fast-evolving tech landscape. Whether it's enhancing user experience or optimizing performance, I strive to deliver high-quality, innovative solutions. My dedication to growth and improvement drives me to tackle new challenges and embrace opportunities to expand my knowledge and skill set in web development and beyond.`;

export const EXPERIENCES = [
  {
    year: "Jun 2023 - Present",
    role: "Frontend Developer",
    company: "Skyscanner Virtual Internship",
    description: `Completed a job simulation where I built a web application using React as a front-end engineer at Skyscanner.
    Developed a page for picking a travel date using Skyscanner’s open-source Backpack React library.
    Customised my application and ran automated tests to ensure it rendered properly`,
    technologies: ["HTML", "CSS", "JS"],
  },
  {
    year: "Sept 2023",
    role: "Frontend Developer",
    company: "GE Aerospace Virtual Internship",
    description: `Completed a Vue.js UI development simulation for the Frontend Development Team, demonstrating proficiency in Vue SFC Playground.
    Applied Vue.js skills by adding features like headings, images, and dynamic variable displays. Implemented a compute button for efficient user interactions.
    Drafted clear technical requirements for a feature, suggesting optimal order times for plane parts.
    Explored strategies to align technical specifications with business requirements, ensuring effective solutions.`,
    technologies: ["HTML", "CSS", "Vue.js"],
  },
  {
    year: "Jan 2024",
    role: "Frontend Developer",
    company: "JP Morgan Virtual Internship",
    description: `Set up a local dev environment by downloading the necessary files, tools and dependencies.
    Fixed broken files in the repository to make web application output correctly.
    Used JPMorgan Chase’s open source library called Perspective to generate a live graph that displays a data feed in a clear and visually appealing way for traders to monitor.`,
    technologies: ["HTML", "CSS", "JS", "Vue.js"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: " Kharegaon, Kalwa, MH 400605 ",
  phoneNo: "+918104610045 ",
  email: "changansarvesh0@gmail.com",
};

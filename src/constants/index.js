import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Software Developer",
    company: "AICTE,India",
    description: `Working on developing a public-facing portal for students of AICTE-affiliated colleges, providing comprehensive overview of syllabus topics and subtopics.`,
    technologies: ["Javascript", "React.js", "Mongodb", "Laravel"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Idemia Syscom Pvt Ltd.",
    description: `Developed responsive and visually appealing web pages using HTML, CSS, and JavaScript.
                  Worked closely with the design team to translate wireframes and mockups into functional webpages,
                  ensuring consistency with the client’s brand guidelines.`,
    technologies: ["HTML", "CSS", "Javascript"]
  },
  
];

export const PROJECTS = [
  {
    title: "CircleUp",
    image: project1,
    description:
      "Created a user-friendly and interactive social networking platform aimed at fostering connections and sharing among users.",
    technologies: ["Reactjs","Express", "Node.js", "MongoDB","GCP"],
  },
  {
    title: "HyperX",
    image: project2,
    description:
      "Integrated multiple databases of AICTE by creating a search engine and using various indexing algorithms.",
    technologies: ["React", "Mongodb","AWS"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwindcss"],
  },
  {
    title: "TicTacToe Online",
    image: project4,
    description:
      "Made a simple Tic Tac Toe game that leverages Websockets to enable online playing functionality.",
    technologies: ["React" ,"Express", "Websockets"],
  },
];

export const CONTACT = {
  address: "Indirapuram,Ghaziabad",
  email: "heisenberg.03123@gmail.com",
};

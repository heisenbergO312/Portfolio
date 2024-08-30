import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = ` As a passionate and dedicated software developer, I specialize in the MERN stack with a particular focus on frontend technologies such as HTML, CSS, JavaScript, and React. My journey in software development has been driven by a deep commitment to continuous improvement and excellence, both in my technical skills and in my professional growth..`;

export const ABOUT_TEXT = `With a strong foundation in data structures and algorithms, I bring a problem-solving mindset to every project I work on. I thrive on tackling complex challenges and delivering clean, efficient code that enhances user experience and meets business objectives.

Hard work is at the core of my approach. I am constantly seeking new opportunities to learn and grow, whether it's by mastering the latest frontend technologies, refining my coding practices, or collaborating with others to build innovative solutions. I believe that true success comes from not just doing the work, but from pushing myself to achieve more, learn more, and contribute more with every project.

I am excited about the future of technology and am committed to playing an active role in shaping it. As I continue to hone my skills and expand my knowledge, I look forward to making a meaningful impact in the tech industry and contributing to the success of the teams and projects I am part of.`;

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

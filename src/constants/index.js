import {
  mobilefr,
  frontendfr,
  backendfr,
  systemdesign,
  research_paper,
  intership,
  javascript,
  java_oop,
} from "../assets";
import {
  academix,
  airbnb,
  social,
  spotify,
  stage,
  urbanstore,
} from "../assets/projects";

export const services = [
  {
    title: "Web",
    image: frontendfr,
    desc: "As a Frontend Developer,I specialize in crafting captivating user experiences with technologies like React.js. Proficient in HTML, CSS, and JavaScript, I create responsive designs using frameworks like Tailwind CSS. My focus on detail ensures seamless navigation and engagement across devices",
  },
  {
    title: "Mobile",
    image: mobilefr,
    desc: "In the realm of Mobile Development,Specializing in Android, React Native, and Flutter, I create cross-platform applications with native-like experiences. By leveraging frontend expertise, I prioritize performance and usability, delivering engaging mobile solutions across devices.",
  },
  {
    title: "Backend",
    image: backendfr,
    desc: "In my role as a Backend Developer,With expertise in Express.js, Node.js, and java spring boot, I architect robust server-side solutions for dynamic web applications. I excel in database management with SQL, Firebase, and MongoDB, optimizing performance and reliability. My REST API proficiency ensures smooth interactions and scalability.",
  },
  {
    title: "System Design",

    image: systemdesign,
    desc: "I have a foundational understanding of system design, focusing on building scalable and efficient web applications.I can create basic architectures involving frontend, backend, databases, APIs, and load handling.Through my projects, I’ve practiced designing reliable, modular systems that ensure smooth user experiences.",
  },
];
const frontend = [
  {
    name: "HTML5",
    color: "#E74C3C",
  },
  {
    name: "CSS3",
  },
  {
    name: "JavaScript",
    color: "#FFEB3B",
  },
  {
    name: "TypeScript",
    color: "#2980B9",
  },

  {
    name: "Tailwind CSS",
    color: "#48C9B0",
  },

  {
    name: "React Js",
    color: "#2196F3",
  },

  {
    name: "figma",
    color: "#EC407A",
  },
];

const webtools = [
  {
    name: "Redux Toolkit",
    color: "#7E57C2",
  },
  {
    name: "git /GitHub",
  },
  {
    name: "postman",
    color: "#FB8C00",
  },
];

const mobiletech = [
  {
    name: "Android",
    color: "#4CAF50",
  },

  {
    name: "React Native",
    color: "#2196F3",
  },
];
const backendtech = [
  {
    name: "Node JS",
    color: "#4CAF50",
  },

  {
    name: "Java",
    color: "#FFEB3B",
  },

  {
    name: "express Js",
    color: "#B0BEC5",
  },
];

const database = [
  {
    name: "MongoDB",
    color: "#4CAF50",
  },
  {
    name: "Firebase",
    color: "#FFEB3B",
  },
  {
    name: "MySQL",
  },
  {
    name: "GraphQL",
  },
  {
    name: "PostgreSQL",
    color: "#2196F3",
  },
  {
    name: "Redis",
    color: "#F44336",
  },
];
const devops = [
  {
    name: "GIT",
    color: "#B0BEC5",
  },
];

export { frontend, database, devops, backendtech, webtools, mobiletech };

export const certificates = [
  {
    title: "research paper",
    link: "",
    img: research_paper,
  },
  {
    title: "intership",
    link: "",
    img: intership,
  },
  {
    title: "javascript ",
    link: "",
    img: javascript,
  },

  {
    title: "java oop",
    link: "",
    img: java_oop,
  },
];
// export const certificates2 = [
//   {
//     title: ".NET Certificate",
//     link: "https://www.hackerrank.com/certificates/c3536b132243",
//     img: netfundamentalscertificate,
//   },
//   {
//     title: "Android Certificate",
//     link: "",
//     img: androidcertificate,
//   },
//   {
//     title: "Data Mining Certificate",
//     link: "",
//     img: dataminingcertificate,
//   },
//   {
//     title: "Cloud Computing",
//     link: "",
//     img: cloudcomputing,
//   },
// ];
export const projects = [
  {
    title: "Pintrest",
    image: stage,
    gitlink: "https://github.com/kritikaVijaysinghRajput/PINTREST",
  },
  {
    title: "Electronic_store",
    image: urbanstore,
    gitlink:
      "https://github.com/kritikaVijaysinghRajput/Mobile-Shopee-Variables",
  },
  {
    title: "spotify",
    gitlink: "https://github.com/kritikaVijaysinghRajput/Spotify-Clone",
    deploylink: "https://spotify-clone-iota-self.vercel.app/",
    image: spotify,
  },
  {
    title: "ACADEMIX",
    image: academix,
    gitlink:
      "https://github.com/kritikaVijaysinghRajput/academix-education_platform",
  },
  {
    title: "Airbnb",
    gitlink: "https://github.com/kritikaVijaysinghRajput/Traveler-Booking-app",
    image: airbnb,
  },
  {
    title: "social",
    image: social,
    gitlink: "https://github.com/kritikaVijaysinghRajput/tumbler-frontend",
    deploylink: "https://tumbler-frontend.vercel.app/",
  },
];

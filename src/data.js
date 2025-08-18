import HeroImage from "/assets/hero-photo.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/vuejs.png";
import Tools3 from "/assets/tools/reactjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    image: Tools1,
    name: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    image: Tools2,
    name: "Vue JS",
    ket: "Library",
    dad: "200",
  },
  {
    id: 3,
    image: Tools3,
    name: "React JS",
    ket: "Library",
    dad: "300",
  },
  {
    id: 4,
    image: Tools4,
    name: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    image: Tools5,
    name: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    image: Tools6,
    name: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    image: Tools7,
    name: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    image: Tools8,
    name: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    image: Tools11,
    name: "Figma",
    ket: "Design App",
    dad: "900",
  },
];

import Project1 from "/assets/proyek/project1.webp";
import Project2 from "/assets/proyek/project2.webp";
import Project3 from "/assets/proyek/project3.webp";
import Project4 from "/assets/proyek/project4.webp";

export const listProjects = [
  {
    id: 1,
    image: Project1,
    name: "Work App",
    desc: "Vue WorkApp is a simple timer-based task management appilcation that helps users get work finished in a more focus and structured way.",
    tools: ["HTML", "Tailwindcss", "Vue", "JSON-Server"],
    link: "https://github.com/rysryptr/vue-workapp",
    dad: "200",
  },
  {
    id: 2,
    image: Project2,
    name: "Shoppeeng",
    desc: "Shoppeeng App is a simple e-commerce application that allow user to browse a variety of electronic products, view product details, add items to the cart, and proceed to checkout. The app is designed with a responsive user interface and intuitive shopping flow.",
    tools: ["HTML", "Tailwindcss", "Vite", "Vue", "Pinia", "JSON-Server"],
    link: "https://github.com/rysryptr/vue-shoppeeng",
    dad: "300",
  },
  {
    id: 4,
    image: Project4,
    name: "Jobleenked",
    desc: "Job search website that allows users to find vacancies based on job title, city, or company, and displays detailed job information with a responsive and user-friendly interface.",
    tools: ["Vite", "Vue Js", "TailwindCSS", "Javascript", "JSON-Server"],
    link: "https://github.com/rysryptr/minimalism-ecomm",
    dad: "400",
  },
  {
    id: 3,
    image: Project3,
    name: "minimalizm",
    desc: "minimalizm is a simple e-commerce application that allow user to browse a variety of furniture products, view product details, add items to the cart, and proceed to checkout. The app is designed with a responsive user interface and intuitive shopping flow with async custom hooks and etc.",
    tools: [
      "Vite",
      "ReactJS",
      "TailwindCSS",
      "Javascript",
      "Custom Hooks",
      "JSON-Server",
    ],
    link: "https://github.com/rysryptr/minimalism-ecomm",
    dad: "400",
  },
];

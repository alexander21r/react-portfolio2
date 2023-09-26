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
  angular,
  git,
  sass,
  styledcomponents,
  kyh,
  qte,
  tripguide,
  next,
  gatsby,
  tenziesgames,
  cryptoapp,
  blog,
  huluclone,
  ecommerce,
  gamesportal,
  chatgptclone,
  portfolio,
  threads,
  messengerclone,
} from "../assets";

export const navLinks = [
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "about",
    title: "About",
  },

  {
    id: "work",
    title: "Work & Education",
  },

  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "CV",
    title: "Download CV",
  },
];

const characteristics = [
  {
    title: "Talented",
    icon: web,
  },
  {
    title: "Dedicated",
    icon: mobile,
  },
  {
    title: "Innovative",
    icon: backend,
  },
  {
    title: "Detail-Oriented",
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
    name: "Next",
    icon: next,
  },
  {
    name: "Gatsby",
    icon: gatsby,
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
    name: "Angular",
    icon: angular,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "sass",
    icon: sass,
  },
  {
    name: "styled-components",
    icon: styledcomponents,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "KYH Yrkeshögskola",
    icon: kyh,
    iconBg: "#383E56",
    date: "August 2021 - June 2023",
    points: [
      "I completed a Frontend Developer program at KYH yrkeshögskola, gaining expertise in web technologies, responsive design, and JavaScript. I can create user-friendly web pages, ensure cross-device compatibility, and build interactive web applications using popular frameworks like React and Angular. Proficient in Git for version control, I have hands-on experience integrating external APIs, testing, and debugging. With project-based learning and teamwork skills, I'm well-prepared to contribute as a Frontend Developer.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "qte Development, internship",
    icon: qte,
    iconBg: "#E6DEDD",
    date: "November 2022 - April 2023",
    points: [
      "Developed and maintained web applications using React.js, Node.js and other related technologies.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Chat GPT clone",
    description: "",
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
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: chatgptclone,
    demo: "https://next-chatgpt-clone-beige.vercel.app/",
  },
  {
    name: "Messenger clone",
    description: "",
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
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Pusher",
        color: "pink-text-gradient",
      },
      {
        name: "Prisma",
        color: "pink-text-gradient",
      },
    ],
    image: messengerclone,
    demo: "https://next-clone-messenger.vercel.app/",
  },
  {
    name: "React portfolio",
    description: "",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },

      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    demo: "",
  },
  {
    name: "Threads clone",
    description: "",
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
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      ,
    ],
    image: threads,
    demo: "https://next-threads-clone.vercel.app/",
  },
  {
    name: "Hulu clone",
    description: "",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },

      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
    ],
    image: huluclone,
    demo: "https://nextjs-hulu-clone.netlify.app/",
  },
  {
    name: "Pern crud",
    description: "",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },

      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "grey-text-gradient",
      },
      {
        name: "Sequelize",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    demo: "https://github.com/alexander21r/pern-crud",
  },
  {
    name: "E-commerce",
    description: "",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },

      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },

      {
        name: "Express",
        color: "grey-text-gradient",
      },
      {
        name: "Stripe",
        color: "grey-text-gradient",
      },
    ],
    image: ecommerce,
    demo: "https://angular-eecommerce.netlify.app/",
  },
  {
    name: "Blog",
    description: "",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: blog,
    demo: "http://blog-next-js-mongodb.vercel.app/",
  },
  {
    name: "Tenzies game",
    description: "",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: tenziesgames,
    demo: "https://tenziesgame-react.netlify.app/",
  },
  {
    name: "Crypto App",
    description: "",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: cryptoapp,
    demo: "https://crypto-finder-react.netlify.app/",
  },

  {
    name: "Games Portal",
    description: "",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },

      {
        name: "SCSS",
        color: "green-text-gradient",
      },
    ],
    image: gamesportal,
    demo: "https://angular-games-portal.netlify.app/",
  },
];

export { characteristics, technologies, experiences, testimonials, projects };

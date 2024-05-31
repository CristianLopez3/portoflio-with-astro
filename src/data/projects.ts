export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const colors: string[] = [
  "#FF7F50",
  "#dd6236",
  "#8f1e00",
  "#8B4513",
  "#ffd299",
  "#c4bcab",
  "#000000",
  "#2c2c2c"
]

const projects: Project[] = [
  {
    title: "Menu EASY",
    techs: ["Spring Boot", "ReactJS", "AWS", "Docker"],
    link: "https://github.com/CristianLopez3/ADSO-PROJECT",
  },
  {
    title: "API Med",
    techs: ["Spring Boot", "MySQL"],
    link: "https://github.com/CristianLopez3/API-MED-SPRINGBOOT",
  },
  {
    title: "SenaSoft - ByteBandis",
    techs: ["Spring Boot", "MySQL"],
    link: "https://github.com/CristianLopez3/SENASOFT-BYTE-BANDITS"
  },
  {
    title: "E-Commerce",
    techs: ["Spring Boot", "Astro (ReactJS), Microservices"],
    link: "/",
    isComingSoon: true
  },
  {
    title: "Portfolio",
    techs: ["Astro"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;

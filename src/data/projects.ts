export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Menu EASY",
    techs: ["Spring Boot", "ReactJS", "AWS"],
    link: "https://github.com/CristianLopez3/ADSO-PROJECT",
  },
  {
    title: "API Med",
    techs: ["Spring Boot", "MySQL"],
    link: "https://github.com/CristianLopez3/",
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

import LinkedinIcon from "@/components/icons/LinkedinIcon.astro";

type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "cristian.c.lopez.m@gmail.com",
  title: "Hi There, I’m Cristian 👋",
  // profile: "/profile.webp",
  description:
    "Hello everyone, I'm a 🇨🇴 Colombian Java developer with over 1 year of web experience. I'm currently working with Java and Spring Boot, building robust and scalable applications. Outside of work, I'm diving into microservices architecture to enhance my skills. I'm passionate about coding and always eager to learn new technologies. In my free time, I enjoy exploring new tech trends and contributing to open-source projects. 🚀💻",
  socials: [
    {
      label:"Linkedin",
      link: "https://www.linkedin.com/in/cristian-lopez-software",
    },
    {
      label: "Bento",
      link: "https://bento.me/cristian-lopez",
    },
    {
      label: "Github",
      link: "https://github.com/CristianLopez3",
    },
  ],
};

export default presentation;

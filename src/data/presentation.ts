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
    "Hello everyone, i'm a *colombian backend developer* with over *1 years* of web experience. I am currently working with *Java and Spring Boot*. Outside of work I'm building an e-commerce site and learning microservices and AWS.",
  socials: [
    {
      label: "Linkedin",
      link: "www.linkedin.com/in/cristian-lopez-software",
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

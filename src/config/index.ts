import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Sarah Godil — Aspiring Software Engineer",
  author: "Sarah Godil",
  description:
    "Software Engineer based in Karachi, Pakistan. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/Sarah-small.jpeg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/sarah-godil-4b719a2a4/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BI5r7pYXUQP%2Bj81H2pydBIA%3D%3D" },
    { text: "Github", href: "https://github.com/Sarah-Godil" },

  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Sarah Godil",
    specialty: "Aspiring Software Engineer",
    summary:
      "Developer based in Karachi, Pakistan. I have worked in web and mobile application development and maintenance and currently pursuing a career in software engineering.",
    email: "sarahgodil07@email.com",
  },
  experience: [
    {
      projectName: "University Carpooling Application",
      Skills: ["Java", "OOP", "Supabase", "React", "REST APIs"],
      summary: [
        "Designed and engineered a modular carpooling system utilizing Object-Oriented Programming (OOP) principles and robust design patterns to ensure clean, maintainable architecture.",
        "Integrated Supabase for secure user authentication, real-time database management, and cloud backend communication layers",
        "Developed a dynamic pricing and routing engine across six distinct system modules to streamline campus ride-sharing logistics." 
      ]
    },
    {
      projectName: "B2B Global Trading Platform",
      Skills: [".NET", "C#", "html", "css", "javascript", "REST APIs"],
      summary: [
        "Architected a business-to-business global trading concept featuring a functional frontend and a connected backend architecture.",
        "Implemented and consumed REST APIs to facilitate seamless data communication, product fetching, and state management between client and server layers.",
        "Utilized structured backend logic to simulate trade workflows, order tracking, and international merchant interactions."
      ]
    },
    {
      projectName: "FlappyPlane Web Game",
      Skills: ["Java", "OOP", "Supabase", "React", "REST APIs"],
      summary: [
      "Created a 2D side-scroller game using vanilla JavaScript for physics and collision logic.",
      "Built a local storage system to calculate and persist the highest score on the localhost."
      ]
    }
  ],
  projects: [
    {
      name: "B2B E-commerce App",
      summary: "A comprehensive e-commerce solution for businesses.",
      linkPreview: "https://global-trade-center.onrender.com/",
      linkSource: "https://github.com/Sarah-Godil/Global-Trade-Center",
      image: "/b2b.jpg",
    },
    {
      name: "Youtube Clone",
      summary: "A video streaming platform that replicates YouTube's core features.",
      linkPreview: "https://youtube-clone-umber-two-52.vercel.app/",
      linkSource: "https://github.com/Sarah-Godil/YoutubeClone",
      image: "/youtube-clone.jpg",
    },
    {
      name: "Flappy Bird Clone",
      summary: "A mobile game that replicates the features of Flappy Bird",
      linkPreview: "https://flappy-plane-lilac.vercel.app/",
      linkSource: "https://github.com/Sarah-Godil/FlappyPlane",
      image: "/flappyPlane.jpg",
    },
  ],
  about: {
    description: `
      Hi, I’m Sarah Godil, an aspiring Software Engineer with a passion for creating innovative solutions. With a strong foundation in both mobile and web development, as well as front-end web technologies and backend development.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/Sarah-big.jpeg",
  },
};

// #5755ff

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
      company: "Zalmart",
      position: "Lead Android Developer",
      startDate: "May 2018",
      endDate: "Sept 2020",
      summary: [
        "Implemented advanced memory management and code optimization techniques, resulting in a reduction in application load time by 40% and a decrease in crashes by 25%. This significantly improved user experience and increased user retention by 20%.",
        "I led a team of developers in building and integrating new features using Jetpack Android components such as LiveData and ViewModel. This enabled us to build scalable and maintainable applications, reducing the crash rate by 20% and speeding up the time to delivery of new features by 15%.",
        "Integrated Google Pay for in-app purchases, resulting in a 35% increase in mobile transaction revenue. Additionally, implemented Firebase Analytics to gain insights into user behavior, enabling data-driven optimizations and a 30% increase in user retention.",
      ],
    },
    {
      company: "Bankit",
      position: "Mobile Developer",
      startDate: "Feb 2017",
      endDate: "May 2018",
      summary: [
        "I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.",
        "I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts.",
      ],
    },
    {
      company: "Driveer",
      position: "Frontend Developer",
      startDate: "Jun 2015",
      endDate: "Oct 2016",
      summary:
        "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
    },
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
      image: "/flappy-bird-clone.jpg",
    },
  ],
  about: {
    description: `
      Hi, I’m Sarah Godil, an aspiring Software Engineer with a passion for creating innovative solutions. With a strong foundation in both mobile and web development, as well as front-end web technologies and backend development.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/sarah-big.jpeg",
  },
};

// #5755ff

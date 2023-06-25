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
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    movieInfo,
    careFree,
    dashboard,
    threejs,
    sunshinefly,
    jobmie,
    nextjs
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "MERN Stack Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Three js developer (beginner)",
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
      name: 'Next.js',
      icon: nextjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
   
  ];
  
  const experiences = [
    {
      title: "React.js and Next.js Developer",
      company_name: "Self_learnt",
      icon: reactjs,
      iconBg: "#383E56",
      date: "November 2022 - Present ( 7 months )",
      points: [
        "Developing and learning web applications using Next.js,React.js and other related technologies.",
        "Exploring related librabies and packages",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "ReduxToolkit, React and Redux toolkit query , SCSS, Primsa, NextJs, TypeScript",
        "Error and  problems solving ",
      ],
    },
   
    {
      title: "Full stack  MERN Developer",
      company_name: "Self_learnt",
      icon: mongodb,
      iconBg: "#E6DEDD",
      date: "November - Present ( 7 months )",
      points: [
        "Developing and maintaining web applications using MERN Stack  and noSql database",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "ServerSide Aggregation and Pagination",
        "MONGOOSE",
        "Making sure good communication for calls and response between backend and Frontend"

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
      name: "SunshineFly",
      description:
        "SunshineFly is an airbnb clone. This is my largest project yet.",
      tags: [

        {
          name: "Next.js",
          color: "blue-text-gradient",
        },

        {
          name:"Prisma",
          color: "green-text-gradient"
        },

        {
          name:"Cloudinary",
          color:"orange-text-gradient"
        },

        {
          name:"Mongodb",
          color:""
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: sunshinefly,
      source_code_link: "https://github.com/Rajeeb321123/SunshineFly-airbnbClone",
      website_link: "https://sunshinefly.vercel.app/",
      youtube_link: "https://youtu.be/NyT-cSqOCug",
    },
    {
      name: "Jobmie",
      description:
        "Jobmie (fiverr clone) is  services marketplace that connects businesses with freelancers offering digital services like Stripe payment, messaging, gigs upload. ",
      tags: [

        {
          name: "React",
          color: "blue-text-gradient",
        },

        {
          name:"MERN",
          color: "green-text-gradient"
        },

        {
          name:"Cloudinary",
          color:"orange-text-gradient"
        },

        {
          name:"tanstack-react-query",
          color:""
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobmie,
      source_code_link: "https://github.com/Rajeeb321123/fullstack-Jobmie",
      website_link: "https://jobmie.onrender.com/",
      youtube_link: "https://youtu.be/7W5q2wP4vjE",
    },
    {
      name: "MovieInfo",
      description:
        "Web application that enables users to get information on any movie and series and its trailer and cast memeber, view trending & popular movie and series sorted by today or week, and highest rated movies and series as well in accordance to tmdb api",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
          {
          name:"TDMB api",
          color:"orange-text-gradient"
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: movieInfo,
      source_code_link: "https://github.com/Rajeeb321123/movieInfo",
      website_link: "https://movie-info-kappa.vercel.app/",
      youtube_link: "https://youtu.be/e-HuBENJKiA",
    },
    {
      name: "Dashboard_Mern_app",
      description:
        "A comprehensive dashboard web application showing admin products , client and sales .",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MERN",
          color: "green-text-gradient",
        },

        {
          name:"redux-query",
          color:""
        },

        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
      ],
      image: dashboard,
      source_code_link: "https://github.com/Rajeeb321123/Dashboard_mern",
      website_link: "https://dashboardmern-frontend.onrender.com/",
      youtube_link: "https://youtu.be/acBrX9zBtVc",
    },
 
    {
      name: "CareFree_VideoSharing",
      description:
        "Web-based Social meida platform that allows users to share videos , login with google login , comment and like the post.",
      tags: [
        {
          name: "nextjs and typescript",
          color: "blue-text-gradient",
        },
        {
          name: "Sanity_backend",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: careFree,
      source_code_link: "https://github.com/Rajeeb321123/carefree",
      website_link: "https://carefree.vercel.app/",
      youtube_link: "https://youtu.be/_6fI9P10vKc",
    },
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };
import Mock from "../mock";

const database = {
  information: {
    name: "Abdi Mohamud",
    aboutContent:
      "I am a Full-Stack Engineer. Abdi Mohamud is my name, building amazingly fun interactive applications is my game!",
    age: 27,
    phone: "",
    nationality: "Somali",
    language: "English, Somali",
    email: "amohamud23@gmail.com",
    address: "",
    freelanceStatus: "Available",
    socialLinks: {
      facebook: "",
      twitter: "",
      pinterest: "",
      behance: "",
      linkedin: "https://www.linkedin.com/in/abdi-mohamud-59586b15a/",
      dribbble: "",
      github: "https://github.com/amohamud23",
    },
    brandImage: "/images/profile_img.jpg",
    aboutImage: "/images/about-image-me.JPG",
    aboutImageLg: "/images/about-image-me-lg.JPG",
    resumefile: "/files/Abdi_Mohamud_Resume.pdf",
  },
  services: [
    // {
    //   title: "Web Design",
    //   icon: "color-pallet",
    //   details:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    // },
    {
      title: "Web Development",
      icon: "code",
      details:
        "I have been doing web development since I finished school with a majority working on frontend but I have developed the skills to work on the backend.",
    },
    {
      title: "Mobile Application",
      icon: "mobile",
      details:
        "I have been recently developing Mobile Applications and Games. I mainly work on the backend and database but I hop on UI development as well.",
    },
  ],

  skills: [
    {
      title: "HTML5",
      value: 80,
    },
    {
      title: "CSS3",
      value: 90,
    },
    {
      title: "Javascript",
      value: 80,
    },
    {
      title: "Node.js",
      value: 85,
    },
    {
      title: "ReactJS",
      value: 80,
    },
    {
      title: "Python",
      value: 65,
    },
    {
      title: "Swift",
      value: 60,
    },
    {
      title: "Java",
      value: 80,
    },
    {
      title: "Django",
      value: 60,
    },
  ],
  Projects: [
    {
      id: 1,
      title: "Patcher Web App",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/project-image-1.jpg",
      largeImageUrl: [
        "/images/project-image-1-lg.jpg",
        "/images/project-image-1-lg2.jpg",
      ],
      url: "https://patcherlogistics.github.io/patcherfrontend/",
    },
    {
      id: 2,
      title: "Patcher Mobile App",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/project-image-2.jpg",
      // largeImageUrl: [
      //   "/images/project-image-2-lg.jpg",
      //   "/images/project-image-2-lg2.jpg",
      // ],
      url: "https://github.com/amohamud23/patcher_app",
    },
    {
      id: 3,
      title: "Lidar Mapping Vehicle",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/project-image-3.jpg",
      largeImageUrl: ["/images/project-image-3-lg.jpg"],
      url: "https://github.com/ibriseno/697-LiDar",
    },
    {
      id: 4,
      title: "Self Rotating Media Platform",
      subtitle: "A cool platform that turns a TV / Laptop",
      imageUrl: "/images/project-image-4.jpg",

      url: "https://github.com/amohamud23/SFHacks2019",
    },
    // {
    //   id: 5,
    //   title: "Mug",
    //   subtitle: "Mug with awesome style",
    //   imageUrl: "/images/project-image-5.jpg",
    //   largeImageUrl: ["/images/project-image-5-lg.jpg"],
    // },
    // {
    //   id: 6,
    //   title: "Pendrive",
    //   subtitle: "Free pendrive mockup design.",
    //   imageUrl: "/images/project-image-6.jpg",
    //   largeImageUrl: ["/images/project-image-6-lg.jpg"],
    // },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "Sep 2020 - Present",
        position: "Full Stack Engineer",
        company: "Guess Who",
        details:
          "Lead Engineer on a mobile game project designing the software and design the database models using Swift and Mongo. Built the entire backend service that handles http requests from our game and deployed it on GCP and MongoDB. Responsible for integrating our backend service on the app and testing game functionality ensure user satisfaction.",
        description: [
          "Lead Engineer on a mobile game project designing the software and design the database models using Swift and Mongo.",
          "Built the entire backend service that handles http requests from our game and deployed it on GCP and MongoDB.",
          "Responsible for integrating our backend service on the app and testing game functionality ensure user satisfaction.",
        ],
      },
      {
        id: 2,
        year: "May 2020 - Aug 2020",
        position: "Software Engineer Intern",
        company: "Adventure Corporation",
        details:
          "Led a team of software engineer interns to implement a prototype Text to Speech feature using agile methodologies. Used React, NodeJS, and Twitch to send Ethereum tokens to user's Metamask Wallet on the Rinkeby Test Network. Developed on a team to build a game using Web-sockets to send real time player updates to multiple game rooms.",
        description: [
          "Led a team of software engineer interns to implement a prototype Text to Speech feature using agile methodologies.",
          "Used React, NodeJS, and Twitch to send Ethereum tokens to user's Metamask Wallet on the Rinkeby Test Network.",
          "Developed on a team to build a game using Web-sockets to send real time player updates to multiple game rooms.",
        ],
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2017 - 2019",
        graduation: "Bachelors of Science",
        university: "San Francisco State University",
        details:
          "Graduated with a degree in Computer Engineering in 2 years after I transferred. Relevent courses I took to my skills were Software Engineering, Software Development, Data Structures, Programming Methodology, Design with Microprocessors, Digital Design",
      },
      {
        id: 2,
        year: "2012 - 2016",
        graduation: "Transfer",
        university: "San Diego Mesa College",
        details:
          "Finished community college and transferred to a 4 year University. Completed most of my science and math courses in college and decided on majoring in Computer Engineering. ",
      },
    ],
  },
  blogs: [],
  contactInfo: {
    phoneNumbers: ["+012-3456-7891", "+012-3456-7892"],
    emailAddress: ["amohamud23@gmail.com"],
    address: "121 King Street, Melbourne, Victoria 3000, Australia",
  },
};

Mock.onGet("/api/information").reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/Projects").reply((config) => {
  const response = database.Projects;
  return [200, response];
});

Mock.onGet("/api/experience").reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});

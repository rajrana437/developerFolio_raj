/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Raj Rana",
  title: "Hi all, I'm Raj",
  subTitle: emoji(
    "🚀 Architecting web and mobile realms with JavaScript, React.js, Node.js, and enchanting frameworks. Let's innovate!"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1g5f8DJTaSqHldnExzCIFoAaZYtCnNyplhj_1sP4MLHE/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rajrana437",
  linkedin: "https://www.linkedin.com/in/raj-rana-a9b8a5138/",
  gmail: "rajrana437@gmail.com",
  gitlab: "",
  facebook: "https://www.facebook.com/raj.rana.9235199/",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Single Page Applications ( SPA ) Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase / AWS / Azure"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Fanshawe College",
      logo: require("./assets/images/fanshawe-college-logo-7837AF18B8-seeklogo.com.png"),
      subHeader: "Mobile Application Development",
      duration: "September 2022 - December 2023",
      desc: "Attained post-grad certificate in Mobile App Dev, mastering Java, Swift, Kotlin, and UX/UI design, plus app deployment, project management, and monetization savvy.",
      descBullets: [
        "Completed post-graduate certificate program in Mobile Application Development.",
        "Gained proficiency in Java, Swift, Kotlin, and hybrid app development frameworks like React Native.",
        "Developed understanding of mobile interface design, user experience (UX), usability testing, information security and data management within mobile application development.",
        "Trained in app deployment strategies, project management, app monetization strategies, and understanding the mobile app market."

      ]
    },
    {
      schoolName: "SITRC College",
      logo: require("./assets/images/sitrc.jpeg"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "September 2016 - April 2020",
      desc: "Attained holistic computer education encompassing systems, engineering, programming prowess in C++, Java, Python, and adeptness in architecture, software, algorithms, and networks.",
      descBullets: ["Acquired comprehensive education in computer systems and engineering principles.",
        "Proficiency in programming languages such as C++, Java, Python.",
        "Understanding of computer architecture, hardware design, software development, and software engineering principles.",
        "Ability to design and implement algorithms and data structures, operate systems and network protocols."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "React Native Developer - Intern",
      company: "AIM Colors",
      companylogo: require("./assets/images/aims.avif"),
      date: "Jan 2023 - Mar 2023",
      desc: "Designed and coded user-friendly cross-platform mobile apps, integrating Redux for state, conducting tests, and collaborating for seamless API integration.",
      descBullets: [
        "Developed cross-platform mobile apps for iOS and Android, translating wireframes into user-friendly interfaces.",
        "Wrote clean code, used Redux for state management, and integrated third-party libraries.",
        "Conducted unit and integration tests, collaborating with backend developers for RESTful API integration.",
        "Contributed to planning sessions, staying updated with the latest React Native trends.",        
      ]
    },
    {
      role: "Full Stack Developer",
      company: "iPangram",
      companylogo: require("./assets/images/ipangram.webp"),
      date: "Feb 2021 - Aug 2022",
      desc: "Led end-to-end CRM project; React UIs, Node.js backend, GraphQL integration, microservices, CI/CD.",
      descBullets: [
        "Integral role in developing and maintaining a dynamic CRM project, managing frontend to backend development.",
        "Developed responsive and interactive user interfaces using React.js.",
        "Utilized Node.js and Sequelize MySQL for backend operations and efficient database management.",
        "Resolved technical issues, optimized app performance, and ensured code quality through rigorous testing."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/surveyBooker.jpeg"),
      projectName: "Survey Booker",
      projectDesc: "Survey Booker is ISO 27001 Information Management Security certified as well as certified carbon neutral.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://surveybooker.co.uk/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/aims.avif"),
      projectName: "AIMS",
      projectDesc: "Press-on nails that can be instantly customized from a mobile app",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.aimcolours.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Responsive Web Design",
      subtitle:
        "Learn Web Dev: HTML/CSS, Build Apps, Responsive Design, Layout Techniques.",
      image: require("./assets/images/freeCodeCamp.png"),
      imageAlt: "FreecodeCamp Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.freecodecamp.org/certification/fcc83592d62-9c7c-4efc-8fb4-e655ee69d3ed/responsive-web-design"
        }
      ]
    },
    {
      title: "Introduction to Git and GitHub",
      subtitle:
        "Git & GitHub: Exploring Version Control and Collaborative Development Platform",
      image: require("./assets/images/google.webp"),
      imageAlt: "google logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/SR9VWE3FQ8EC"
        }
      ]
    },

    {
      title: "Google Cloud Platform Fundamentals: Core Infrastructure",
      subtitle: "Google Cloud Platform: Core infrastructure explored for a strong cloud foundation. Learn foundational concepts.",
      image: require("./assets/images/gc2.png"),
      imageAlt: "google cloud logo",
      footerLink: [
        { name: "Certification", url: "https://www.coursera.org/account/accomplishments/certificate/FQTQYMMBRPN4" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 519-701-9301",
  email_address: "rajrana437@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "RajRana9", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};

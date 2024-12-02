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
  title: "Hello, I'm Raj",
  subTitle: emoji(
    "🚀 Full Stack Developer specializing in architecting web and mobile applications with JavaScript, React, Node.js, and modern technologies. Let's create impactful solutions together!"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1_VBnXKh8W-O6ibHiEenQe7YGNJ7aIUNP0anllgjcuG8/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rajrana437",
  linkedin: "https://www.linkedin.com/in/raj-rana-a9b8a5138/",
  gmail: "rajrana437@gmail.com",
  gitlab: "",
  facebook: "https://www.facebook.com/raj.rana.9235199/",
  medium: "https://medium.com/@rajrana437",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "FULL STACK DEVELOPER WITH A PASSION FOR SCALABLE, EFFICIENT, AND INNOVATIVE SOLUTIONS",
  skills: [
    emoji(
      "⚡ Build responsive, dynamic, and intuitive user interfaces for web and mobile applications."
    ),
    emoji("⚡ Develop and maintain scalable Single Page Applications (SPA) with modern frameworks."),
    emoji(
      "⚡ Integrate cloud services (AWS, Firebase, Azure) to enhance application functionality and performance."
    ),
    emoji(
      "⚡ Design and implement backend services, ensuring security and performance through microservices and serverless architectures."
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
      descBullets: []
    },
    {
      schoolName: "SITRC College",
      logo: require("./assets/images/sitrc.jpeg"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "September 2016 - April 2020",
      desc: "Completed a comprehensive computer education covering systems, engineering, programming in C++, Java, and Python, as well as skills in software, algorithms, and networks.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Cloud",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "React Native Developer Intern",
      company: "AIM Colours",
      companylogo: require("./assets/images/aims.avif"),
      date: "Jan 2023 - Mar 2023",
      desc: "Collaborated on beauty tech solutions, delivering cross-platform mobile apps with React Native, Redux, and Redux-Saga.",
      descBullets: []
    },
    {
      role: "Full Stack Developer",
      company: "iPangram",
      companylogo: require("./assets/images/ipangram.webp"),
      date: "Feb 2019 - Aug 2022",
      desc: "Led development of CRM project using React.js, Node.js, and microservices architecture to deliver scalable, high-performing applications.",
      descBullets: []
    },
    {
      role: "Jr. Web Developer",
      company: "GrowIt Labs",
      companylogo: require("./assets/images/growit.jpeg"),
      date: "Mar 2017 - Jan 2019",
      desc: "Developed and maintained a React-based shopping website with a focus on responsive and user-friendly interfaces.",
      descBullets: []
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
  subtitle: "PROJECTS I HAVE WORKED ON",
  projects: [
{
      image: require("./assets/images/flashcard.gif"), 
      projectName: "ThinkStack",
      projectDesc: "ThinkStack is a flashcard web app powered by OpenAI's Large Language Model, designed to simplify learning.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ai-flash-cards-n1pi.vercel.app/en"
        },
        {
          name: "Visit Github",
          url: "https://github.com/rajrana437/ai-flash-cards"
        }
      ]
    },
    {
      image: require("./assets/images/quickSurvey.gif"), // Add appropriate image path
      projectName: "QuickSurvey",
      projectDesc: "QuickSurvey is a dynamic survey creation and management platform offering real-time insights.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://quicksurvey.vercel.app/en/" 
        },
        {
          name: "Visit Github",
          url: "https://github.com/rajrana437/quicksurvey" 
        }
      ]
    },
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
      image: require("./assets/images/aim.gif"),
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
        title: "AWS Certified Solutions Architect – Associate",
        subtitle: "Designing and deploying scalable systems on AWS. Mastering cloud architecture.",
        image: require("./assets/images/aws_logo.png"),
        imageAlt: "AWS Logo",
        footerLink: [
          {
            name: "Certification",
            url: "https://www.aws.training/Certification"
          }
        ]
      },
      {
        title: "Certified Kubernetes Administrator (CKA)",
        subtitle: "Proficient in managing Kubernetes clusters and understanding core concepts.",
        image: require("./assets/images/kubernetes_logo.png"),
        imageAlt: "Kubernetes Logo",
        footerLink: [
          {
            name: "Certification",
            url: "https://www.cncf.io/certification/cka/"
          }
        ]
      },
      {
        title: "HashiCorp Certified: Terraform Associate",
        subtitle: "Expertise in infrastructure as code using HashiCorp Terraform for cloud provisioning.",
        image: require("./assets/images/hashicorp_logo.png"),
        imageAlt: "HashiCorp Logo",
        footerLink: [
          {
            name: "Certification",
            url: "https://www.hashicorp.com/certification/terraform-associate"
          }
        ]
      },
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
    ]
  ,
  display: true // Set false to hide this section, defaults to true
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@rajrana437/it-industry-the-bubble-finally-burst-34414c7c77a7",
      title: "IT Industry: The Bubble Finally Burst",
      description:
        "An exploration of the IT industry's turbulent journey and its future after the bubble burst."
    },
    {
      url: "https://medium.com/@rajrana437/yet-another-rideshare-app-reinvented-cfcf63fd6b02",
      title: "Yet Another Rideshare App: Reinvented",
      description:
        "A deep dive into reinventing rideshare apps and lessons from the industry."
    },
    {
      url: "https://medium.com/@rajrana437/global-cooling-a-utopian-future-fa8a6acffd8b",
      title: "Global Cooling: A Utopian Future",
      description:
        "A thought-provoking look at global cooling and its implications for the future."
    },
    {
      url: "https://medium.com/@rajrana437/the-smartphone-paradox-connected-yet-isolated-dce1f454d5c3",
      title: "The Smartphone Paradox: Connected Yet Isolated",
      description:
        "How smartphones have changed human interaction, for better or worse."
    },
    {
      url: "https://medium.com/@rajrana437/life-hacked-190953f3072b",
      title: "Life, Hacked",
      description:
        "Exploring life hacks and how they've transformed modern life."
    },
    {
      url: "https://medium.com/@rajrana437/open-source-the-heart-of-innovation-8476b1b03ee1",
      title: "Open Source: The Heart of Innovation",
      description:
        "Why open source is the driving force behind technological innovation."
    }
  ],
  display: true // Set true to display this section
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

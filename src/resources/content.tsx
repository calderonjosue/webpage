import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Josué",
  lastName: "Calderón",
  name: `Josué Calderón`,
  role: "QA Automation Engineer",
  avatar: "/images/Foto de perfil de LinkedIn.jpg",
  email: "Luisjosue1205@gmail.com",
  location: "America/Bogota", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Spanish", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Contáctame por WhatsApp</>,
  description: <>¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte con QA y automatización</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/calderonjosue",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/calderon-josue-qa-analyst/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Quality-driven testing with automation expertise</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">UPEX</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
    I'm Josué, a QA Automation Engineer with expertise in <Text as="span" size="xl" weight="strong">Cypress, Playwright & Selenium</Text>. <br /> 
    I combine technical testing skills with UX/UI design knowledge and business acumen to deliver quality products.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Bogotá, Colombia`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a Bogotá-based QA Automation Engineer with a unique background in Literature and UX/UI Design. 
        Originally from Venezuela, I combine analytical thinking from my humanities education with technical 
        expertise in automated testing. My approach goes beyond finding bugs—I validate products from a 
        user-centered perspective, ensuring quality aligns with business goals.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "UPEX",
        timeframe: "September 2023 - March 2025",
        role: "Quality Assurance Analyst",
        achievements: [
          <>
            I designed and maintained End-to-End automation scripts using Cypress, Playwright, and Selenium, 
            significantly increasing test coverage across web and mobile products.
          </>,
          <>
            I integrated automated test suites into CI/CD pipelines (GitLab/Jenkins), establishing Quality Gates 
            for continuous delivery and reducing critical production defects.
          </>,
          <>
            I managed the complete defect lifecycle using Jira and Xray, improving documentation traceability and 
            streamlining quality control processes.
          </>,
          <>
            I collaborated in Agile ceremonies (Scrum/Kanban) with multidisciplinary teams, performing full-stack 
            testing across data layers, APIs, and UI.
          </>,
        ],
        images: [],
      },
      {
        company: "The Vibe Tribe",
        timeframe: "May 2023 - May 2024",
        role: "Junior Manual QA Tester",
        achievements: [
          <>
            I executed manual functional and regression testing for a travel mobile application MVP, ensuring 
            visual consistency and accessibility compliance against Figma designs.
          </>,
          <>
            I performed comprehensive API testing using Postman to validate stable data flow between backend 
            and mobile frontend.
          </>,
          <>
            I documented and tracked bugs in Jira within a continuous Scrum environment, participating in daily 
            standups and technical reviews with Development and Design teams.
          </>,
          <>
            I significantly reduced visual defects (UI/UX) through early defect detection (Shift Left approach).
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education & Certifications",
    institutions: [
      {
        name: "University of the Andes, Mérida",
        description: <>Bachelor's Degree in Hispanic American Literature (2014-2018). Developed critical analysis, research, and communication skills.</>,
      },
      {
        name: "Testing & QA Certifications",
        description: <>16 Professional Certifications from Platzi, UPEX, Postman, AICS, and QAlified (2023-Present) in Manual & Automated Testing.</>,
      },
      {
        name: "UX/UI Design",
        description: <>20 Certifications from Platzi (2021) covering user-centered design, accessibility (WCAG), Lean UX, and iterative prototyping.</>,
      },
      {
        name: "Digital Marketing & Growth",
        description: <>16 Certifications from Platzi and Google Digital Garage (2021-2025) in data-driven marketing, AARRR funnels, and A/B testing.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Test Automation",
        description: (
          <>I'm an expert in E2E automation with Cypress, Playwright, and Selenium. I have experience in CI/CD integration and Quality Gates.</>
        ),
        tags: [
          {
            name: "Cypress",
            icon: "cypress",
          },
          {
            name: "Playwright",
            icon: "playwright",
          },
          {
            name: "Selenium",
            icon: "selenium",
          },
        ],
        images: [],
      },
      {
        title: "API & Performance Testing",
        description: (
          <>I'm proficient in API testing with Postman, performance testing with JMeter, and monitoring with Grafana.</>
        ),
        tags: [
          {
            name: "Postman",
            icon: "postman",
          },
          {
            name: "Grafana",
            icon: "grafana",
          },
          {
            name: "Jira",
            icon: "jira",
          },
        ],
        images: [],
      },
      {
        title: "Development & Tools",
        description: (
          <>I have working knowledge of JavaScript, Python, TypeScript, SQL, and Agile tools like Jira, Confluence, and Xray.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
        ],
        images: [],
      },
      {
        title: "UX/UI & Design",
        description: (
          <>I have a strong foundation in UX/UI design, Figma, accessibility standards (WCAG), and user-centered validation.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
          {
            name: "UX Design",
            icon: "design",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about the multiple connections between Engineering, Science, Poetry, and Philosophy",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `QA and automation projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/certifications",
  label: "Certifications",
  title: `Certifications – ${person.name}`,
  description: `Professional certifications and credentials by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "Testing & Quality Assurance certifications",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "Programming certifications",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "UX/UI Design certifications",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "Digital Marketing certifications",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "Professional development",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "Technical skills certifications",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "Automation testing credentials",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "Quality assurance expertise",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
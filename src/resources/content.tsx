import { About, Home, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Jasem",
  lastName: "Khan",
  name: `Jasem Khan`,
  role: "XR Developer, Game Designer and 3D Artist",
  avatar: "/images/profile.jpg",
  email: "jasemajkhan@gmail.com",
  location: "America/Toronto", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French", "Hindi", "Arabic", "Urdu"], // optional: Leave the array empty if you don't want to display languages
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/jasemkhan2",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jasem-abdul-javeed-khan-08b13b203/",
  },
  {
    name: "Itch.io",
    icon: "itch.io",
    link: "https://jasemkhan.itch.io/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at{" "}
      <Logo
        dark
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
      , where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
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
        I'm an XR designer, game developer and creative technologist specializing in immersive experiences that blur the line between digital and physical worlds. I’ve completed a graduate degree in Information Technology spec. Gaming, AR and VR at Algoma University, with hands-on experience building games and experiences for Console, VR, MR, and real-time 3D. I design virtual worlds that aren’t just seen, they’re felt. From high-intensity VR sports simulations to psychological experiences where motion itself is a mechanic, I love exploring how space, sound, interaction, and story come together in immersive design.
        🧠What I focus on:
        Spatial storytelling & user experience in VR/MR
        Interaction systems, Blueprint/C# scripting & custom mechanics
        Real-time 3D environments (Unreal Engine, Unity, Twinmotion, Spatial.io)
        Performance-aware design for Oculus/Meta Quest & WebXR
        Collaborative prototyping with cross-functional teams
        
        I’ve built projects ranging from Olympic VR games to ambient tension-based simulations to confidential Spatial.io experiences; all with an eye toward emotion, interaction, and impact. If you're building something in XR, immersive media, or creative tech, let's connect. I’m always up for pushing boundaries, one headset at a time!
        In my free time, I enjoy playing soccer, going to the gym, and exploring restaurants & cafes around Toronto.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Confidential Client/Research Institution, Toronto, Canada",
        timeframe: "Jan 2025 - Aug 2025",
        role: "XR Researcher & Developer",
        achievements: [
          <>
            Spearheaded the end-to-end creation of an interactive 3D/XR environment in Spatial.io for a confidential institution, translating their vision into an immersive and navigable virtual space.
          </>,
          <>
            Designed and implemented real-time interaction logic for objects and exhibits, enabling users to engage with the environment in meaningful ways that drive spatial storytelling. - Built modular architectural layouts and user flow systems, ensuring the virtual space was intuitive to navigate and could be easily scaled or modified for future updates.
          </>,
          <>
          Managed the complete 3D asset pipeline, from integrating models and textures to optimizing them for the WebXR platform, ensuring smooth performance across desktop and standalone VR headsets.
          </>,
          <>
          Collaborated daily in a cross-functional team of artists, designers, and stakeholders, participating in agile sprints and feedback loops to deliver a polished and performance-optimized final product.
          </>,
          
        ],
      },
      {
        company: "Amazon IN, Hyderabad, India",
        timeframe: "Sep 2022 - Sep 2023",
        role: "Data Analyst",
        achievements: [
          <>
            Analyzed User Behaviour Funnels: Deconstructed complex customer purchase funnels to identify user drop-off points and friction in the user journey. This process is directly applicable to optimizing player onboarding, quest progression, and identifying where players get stuck in a game loop.
          </>,
          <>
            A/B Testing and Iterative Design: Designed and executed rigorous A/B tests for product listings and promotional campaigns to measure impact on user engagement. This experience provides a strong foundation for data-driven validation of game features, UI/UX changes, and in-game store effectiveness.
          </>,
          <>
          User Segmentation and Archetyping: Segmented large-scale user datasets into distinct behavioural archetypes based on purchasing habits and engagement patterns. This is the same methodology used to identify player personas (e.g., 'Whales', 'Dolphins', casuals) to tailor gameplay experiences and monetization strategies.
          </>,
          <>
          KPI Dashboarding for Live Operations: Built and maintained performance dashboards to provide stakeholders with actionable insights into product performance. This is identical to the process of creating live-ops dashboards to monitor a game's health, tracking KPIs like player retention, engagement, and economy balance.
          </>,
          <>
          Predictive Modelling and Forecasting: Developed data-driven projections based on historical user data to forecast future trends. This skill is essential for predicting player churn, forecasting content update engagement, and modelling the long-term health of an in-game economy.
          </>,
          <>
          Collaborated with Cross-Functional Teams: Worked with diverse teams to interpret datasets and drive iterative improvements, honing the problem-solving skills essential to game balancing and tuning technical systems.
          </>,
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Algoma University, Brampton, Canada",
        timeframe: "2023 - 2025",
        description:
        <>
        Obtained a Graduate Certificate in Information Technology: Gaming, AR & VR.
        Specialized in developing interactive experiences using industry-standard tools like Unity and Unreal Engine, focusing on C# scripting, level design, and system architecture.
        Gained hands-on expertise in AR/VR development, mastering SDKs like the XR Interaction Toolkit (XRI) and Meta Quest SDK to build immersive applications from the ground up.
        Mastered the 3D content pipeline, including asset optimization, material creation, lighting techniques (baked and real-time), and post-processing to create visually compelling and performant scenes.
        Capstone Project: Led a team to design, develop, and deliver a fully functional VR game prototype. Managed the project from concept and documentation (GDD) to final presentation, demonstrating proficiency in project management, teamwork, and shipping a complete product.
        </>,
      },
      {
        name: "Mahindra University, Hyderabad, India",
        timeframe: "2018 - 2022",
        description:
        <>
        Bachelor of Technology in Electrical & Electronic Engineering.
        Developed a strong foundation in software development through core coursework in Data Structures, Algorithms, and Object-Oriented Programming using C++ and Python.
        Specialized in Data Systems, gaining proficiency in SQL database management and data analysis, providing a quantitative and analytical approach to problem-solving.
        Studied low-level systems through courses in Computer Architecture and Digital Logic, providing a deep understanding of the hardware-software interface crucial for performance optimization.
        Completed extensive project-based labs that involved applying theoretical engineering principles to solve practical, real-world challenges.
        </>,
      },
    ],
  },
  certifications: {
    display: true, // Set to true to show this section on your About page
    title: "Certifications",
    items: [
      {
        name: "Unity Pro Training",
        issuer: "Unity",
        timeframe: "2025",
        description: (
          <>
          Key Skills Acquired:
          Advanced C# Scripting: Implemented complex gameplay mechanics and systems using advanced C# features, including events, delegates, interfaces, and asynchronous programming for robust and scalable code architecture.
          Editor Scripting & Tool Development: Extended the Unity Editor's functionality by creating custom inspectors, property drawers, and editor windows to streamline development workflows and build tools for content creators.
          Performance Profiling & Optimization: Mastered the use of the Unity Profiler to identify and resolve CPU, GPU, and memory bottlenecks. Applied advanced optimization techniques such as object pooling, mesh combining, and occlusion culling to ensure high performance across target platforms.
          Render Pipeline Customization (URP/HDRP): Gained in-depth knowledge of the Universal Render Pipeline (URP) and High Definition Render Pipeline (HDRP), including custom shader development using Shader Graph and HLSL for creating unique visual styles.
          Advanced Animation & AI Systems: Developed complex character controllers and AI behaviours using the Animator, State Machine Behaviours, Timelines, and NavMesh components for creating dynamic and intelligent non-player characters.
          Multiplayer Networking: Acquired foundational skills in creating multiplayer experiences using modern networking solutions like Netcode for GameObjects, focusing on state synchronization, client-side prediction, and server authority.
          </>
        ),
      },
      {
        name: "The Ultimate Guide to VR with Unity",
        issuer: "Udemy",
        timeframe: "2024",
        description: (
          <>
           Key skills acquired:
           Visual Scripting for XR: Developed interactive VR experiences from the ground up using Unity's Visual Scripting, creating complex logic for object interactions, UI, and game events without writing traditional code.
           XR Interaction Toolkit (XRI): Mastered the configuration and implementation of the XR Interaction Toolkit to create core VR mechanics, including grabbing, throwing, teleportation, and smooth locomotion.
           VR-Centric UI/UX Design: Designed and implemented intuitive and immersive user interfaces in world-space, ensuring legibility, comfort, and ease of interaction within a 3D virtual environment.
           Cross-Platform VR Development: Configured Unity projects for deployment on major VR platforms, with a focus on Meta Quest (Oculus) and SteamVR, ensuring proper hardware integration and input handling.
           VR Environment & Scene Setup: Built and optimized 3D environments specifically for virtual reality, focusing on maintaining high frame rates (90+ fps) and implementing VR-specific design principles to maximize immersion and minimize motion sickness.
          </>
        ),
      },
      {
        name: "Python Programming Fundamentals",
        issuer: "Udemy",
        timeframe: "2020",
        description: (
          <>
           Key skills acquired:
           Core Programming Concepts: Mastered foundational programming principles, including variables, data types (integers, floats, strings, booleans), and control flow structures (if/else statements, for/while loops).
           Fundamental Data Structures: Gained proficiency in using and manipulating core Python data structures such as lists, dictionaries, tuples, and sets for effective data management.
           Modular Programming with Functions: Developed the ability to write clean, reusable, and modular code by defining and calling custom functions with parameters and return values.
           Introduction to Object-Oriented Programming (OOP): Acquired a foundational understanding of OOP principles by creating classes and objects, defining methods, and managing attributes.
           File I/O Operations: Learned to read from and write to text files programmatically, enabling data persistence and the ability to process external data sources.
          </>
        ),
      },
      {
        name: "Performance Optimization Using C",
        issuer: "Udemy",
        timeframe: "2019",
        description: (
          <>
           Key skills acquired:
           Manual Memory Management: Gained expertise in direct memory control using malloc, free, and pointers, with a deep understanding of the stack and heap to prevent memory leaks and dangling pointers.
           Data Structure Performance Analysis: Analyzed the performance implications of different data structures, focusing on cache locality (e.g., arrays vs. linked lists) to write cache-friendly, high-performance code.
           Compiler Optimization Insights: Learned to leverage compiler optimization flags (e.g., -O2, -O3) and inspect generated assembly code to understand how C code translates to machine-level instructions.
           Algorithmic Complexity Analysis: Applied techniques to analyze and optimize algorithms, reducing computational complexity for significant performance gains in processing-intensive tasks.
           Code Profiling and Bottleneck Identification: Utilized profiling tools like gprof and Valgrind to pinpoint performance hotspots, memory errors, and inefficient functions within a C codebase.
          </>
        ),
      },
      // ADD MORE CERTIFICATION ITEMS HERE
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      // --- BEGIN TECHNICAL SKILLS ---

{
  title: "Developer Tools & Engines",
  description: (
    <>
      Expert proficiency in industry-standard game engines and extended reality (XR) development platforms.
    </>
  ),
  tags: [
    { name: "Unreal Engine", icon: "unrealengine" },
    { name: "Unity", icon: "unity" },
    { name: "Meta XR SDK", icon: "meta" },
    { name: "Spatial.io", icon: "spatial" },
    { name: "Twinmotion", icon: "twinmotion" },
    { name: "Git", icon: "github" }, // Using the "github" icon for general Git/Version Control
    { name: "Visual Studio", icon: "visualstudio" },
    { name: "Blender", icon: "blender" },
    { name: "Autodesk Maya", icon: "autodeskmaya" },
    { name: "Substance 3D", icon: "adobe" }, // Mapped to the generic 'adobe' icon
    { name: "Adobe AR", icon: "adobe" }, // Mapped to the generic 'adobe' icon
    { name: "Adobe Creative Suite", icon: "adobecc" }, // Mapped to 'adobecc' icon
    { name: "Figma", icon: "figma" },
  ],
},
{
  title: "Programming Languages & Databases",
  description: (
    <>
      Strong command of foundational languages essential for game logic, scripting, and data management.
    </>
  ),
  tags: [
    { name: "C#", icon: "csharp" }, // Now uses the fixed TbBrandCSharp icon
    { name: "C++", icon: "cplusplus" },
    { name: "Python", icon: "python" },
    { name: "SQL", icon: "sql" }, // Now uses the fixed TbSql icon
    { name: "HTML/CSS", icon: "document" }, // Using generic 'document' for web languages
    { name: "JavaScript", icon: "javascript" },
  ],
  images: [],
},
{
  title: "Specialized Skills & Workflow",
  description: (
    <>
      Applied expertise in critical areas of XR/VR design, development, and project management methodologies.
    </>
  ),
  tags: [
    { name: "XR/VR Development" },
    { name: "Physics-based Interaction"},
    { name: "OpenXR Integration"},
    { name: "Level Design"},
    { name: "Spatial Design"},
    { name: "Asset Optimization"},
    { name: "Building and Prototyping"},
    { name: "Version Control"},
    { name: "Agile Workflow"},
    { name: "Project Management"},
    { name: "Lighting and Sound Design"},
    { name: "QA Testing"},
  ],
},  
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Dev & Art projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, home, about, work };
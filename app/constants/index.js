const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Blog",
    link: "#blog",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const projects = [
  {
    id: 1,
    title: "Ryde - On-Demand Rides App",
    description: "A powerful, user-friendly ride-sharing app built with modern technologies for seamless transportation experiences.",
    image: "/images/project1.png",
    category: "Mobile App",
    featured: true,
    techStack: [
      { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Expo", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
    caseStudyUrl: "/case-studies/ryde-ride-sharing-app",
    githubUrl: "https://github.com/yourusername/ryde-app",
  },
  {
    id: 2,
    title: "AutoHub - Cars Marketplace Platform",
    description: "A comprehensive full-stack car marketplace with real-time chat, advanced search filtering, authentication, and CDN-optimized image delivery for seamless browsing experience.",
    image: "/images/cars1.png",
    category: "Web App",
    featured: false,
    techStack: [
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Appwrite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appwrite/appwrite-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
    liveUrl: "https://cars-market-place-app.vercel.app",
    githubUrl: "https://github.com/oussama2210/cars-market-place-app",
  },
  {
    id: 3,
    title: "DAPP TRADING PLATFORM",
    description: "A high-performance real-time cryptocurrency dashboard built with Next.js 16, Tailwind CSS v4, and TypeScript. Features live market data, interactive charting, and seamless Web3 wallet integration",
    image: "/images/TRADING.png",
    category: "Web App",
    featured: false,
    techStack: [
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/ic" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
    liveUrl: "https://crypto-trading-dapp.vercel.app",
    githubUrl: "https://github.com/oussama2210/crypto-trading-dapp",
  },
  
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 25, suffix: "+", label: "Completed Projects" },
  { value: 50, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind CSS",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node.js",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Go",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },
  {
    name: "Python",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "MongoDB",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Docker",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "AWS",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "GraphQL",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Oussama brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    logoPath: "/images/VScode.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    techStack: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
    responsibilities: [
      "Developed and maintained user-facing features for web and native applications.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "Oussama is an exceptional software engineer who consistently delivered high-quality, scalable solutions. His problem-solving approach and deep technical expertise were invaluable to our team.",
    logoPath: "/images/logo2.png",
    title: "Software Engineer & Full Stack Developer",
    date: "June 2020 - December 2023",
    techStack: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    ],
    responsibilities: [
      "Developed and maintained cross-platform native applications, ensuring performance and UX quality.",
      "Designed and implemented a reusable design system to streamline UI/UX development across products.",
      "Collaborated closely with backend engineers to integrate and optimize APIs, improving data flow and app responsiveness.",
      "Contributed to open-source projects within the Docker ecosystem, focusing on tooling and developer experience."
    ],
  },
  {
    review: "Oussama's work on Appwrite's mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    techStack: [
      { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    ],
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can't say enough good things about Oussama. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Oussama was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Oussama was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Oussama's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Oussama is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Oussama was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that's both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Oussama's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Oussama was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
  {
    name: "Amine Benali",
    mentions: "@aminebenali",
    review:
      "Khoya Oussama, khdma nqiya whtirafiya. Site dyali wla tayir db! Recommandé 100%. Lah y3tik saha.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Sarah Mansouri",
    mentions: "@sarahman",
    review:
      "Un grand merci à Oussama. wlahila 3awnna bzaf f lprojet. Communication top w délai respecter. Tbarkallah 3lik!",
    imgPath: "/images/client1.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications: Best Practices",
    slug: "scalable-react-applications",
    excerpt: "Learn how to structure and build React applications that scale from small projects to enterprise-level solutions.",
    content: `In the rapidly evolving landscape of web development, building React applications that can withstand the test of time and scale is a challenge many developers face. As projects grow, so does the complexity of maintaining them. In this comprehensive guide, I'll walk you through the essential practices for building scalable React applications that stay performant and maintainable.

## Key Concepts for Scalability

### 1. Component Architecture
Organizing your components is the foundation of a scalable React app. The Atomic Design methodology is a popular approach, breaking down interfaces into atoms, molecules, organisms, templates, and pages.
- **Atoms**: Basic building blocks like buttons and inputs.
- **Molecules**: Groups of atoms, like a search form.
- **Organisms**: Complex UI sections, like a header.
This structure ensures maximum reusability and clarity.

### 2. State Management
Choosing the right state solution is critical.
- **Local State**: Use \`useState\` for component-specific data.
- **Context API**: Great for global themes or user settings but can cause re-renders if not optimized.
- **External Libraries**: For complex data flows, libraries like Redux Toolkit or Zustand offer robust solutions with dev-tools support.

### 3. Performance Optimization
As your app grows, keeping it fast is non-negotiable.
- **Memoization**: Use \`React.memo\`, \`useMemo\`, and \`useCallback\` to prevent unnecessary calculations and re-renders.
- **Code Splitting**: Utilize \`React.lazy\` and \`Suspense\` to load components only when needed, reducing the initial bundle size.

## Implementation Strategies

I structure my projects by feature rather than type. Instead of a global \`components\` folder, I have a \`features\` directory where each feature (e.g., \`Auth\`, \`Dashboard\`) contains its own components, hooks, and state. This makes the codebase easier to navigate and refactor.

Building scalable apps is not just about writing clean code; it's about making architectural decisions that allow your team to move fast without breaking things.`,
    category: "React",
    tags: ["React", "JavaScript", "Best Practices", "Architecture"],
    author: "Oussama Yahouni",
    date: "2026-01-10",
    readTime: "8 min read",
    image: "/images/blog/react-scalable.png",
    featured: true,
  },
  {
    id: 2,
    title: "Solving the N+1 Query Problem in GraphQL",
    slug: "graphql-n-plus-one-solution",
    excerpt: "A deep dive into one of the most common performance issues in GraphQL and how to solve it using DataLoader.",
    content: `GraphQL offers immense flexibility, but with great power comes the responsibility of performance management. The N+1 query problem is one of the most common bottlenecks developers encounter.

## The Problem Explained
Imagine you fetch a list of 100 authors. For each author, you want to fetch their latest book.
- **Query 1**: Fetch all authors (1 query).
- **Queries 2-101**: Fetch the book for each author (100 queries).
This results in 101 requests for what should ideally be one or two operations. In a high-traffic production environment, this can cripple your database.

## The Solution: DataLoader
Facebook's DataLoader is a generic utility to be used as part of your application's data fetching layer to provide a consistent API over various backends and reduce requests to those backends via batching and caching.

### How it Works
1.  **Batching**: DataLoader waits a short time (e.g., one tick of the event loop) to collect all individual ID requests.
2.  **Consolidation**: Moving from granular requests to a batch request (e.g., \`SELECT * FROM books WHERE author_id IN (1, 2, 3...)\`).
3.  **Caching**: If the same key is requested multiple times in a single request lifecycle, DataLoader returns the cached promise, ensuring we don't fetch the same data twice.

By implementing DataLoader, you transform N+1 queries into 1+1 queries, significantly improving the throughput and response time of your GraphQL API.`,
    category: "GraphQL",
    tags: ["GraphQL", "Performance", "Backend", "Node.js"],
    author: "Oussama Yahouni",
    date: "2026-01-08",
    readTime: "6 min read",
    image: "/images/blog/graphql-performance.png",
    featured: false,
  },
  {
    id: 3,
    title: "TypeScript Tips: Advanced Type Guards",
    slug: "typescript-advanced-type-guards",
    excerpt: "Master TypeScript's type system with advanced type guard techniques that make your code safer and more maintainable.",
    content: `TypeScript's static typing is a lifesaver, but the real magic happens when you master type narrowing. Type guards allow you to write runtime checks that tell the TypeScript compiler to narrow down the type of a variable within a specific block.

## Basic Type Guards
You're probably familiar with \`typeof\` and \`instanceof\`.
\`\`\`typescript
if (typeof value === "string") {
  // TypeScript knows value is a string here
  console.log(value.toUpperCase());
}
\`\`\`

## Advanced Patterns: User-Defined Type Guards
Sometimes you need to verify complex structures. This is where user-defined type guards come in. They return a type predicate: \`arg is Type\`.

\`\`\`typescript
interface User {
  id: string;
  username: string;
}

function isUser(obj: any): obj is User {
  return obj && typeof obj.id === 'string' && typeof obj.username === 'string';
}
\`\`\`

Using this function in a conditional allows TypeScript to infer the \`User\` type safely inside the block. This pattern is invaluable when validating API responses or handling discriminated unions.

## Discriminated Unions
Combining type guards with discriminated unions (types with a common literal property) creates robust, exhaustive checks that ensure you've handled every possible case in your application logic.`,
    category: "TypeScript",
    tags: ["TypeScript", "JavaScript", "Type Safety", "Advanced"],
    author: "Oussama Yahouni",
    date: "2026-01-05",
    readTime: "10 min read",
    image: "/images/blog/typescript-guards.png",
    featured: false,
  },
  {
    id: 4,
    title: "Optimizing Next.js Performance: Real-World Strategies",
    slug: "nextjs-performance-optimization",
    excerpt: "Practical tips and tricks I've learned from building production Next.js applications that serve millions of users.",
    content: `Next.js is fast out of the box, but real-world applications require intentional optimization. After shipping several large-scale sites, I've curated a list of strategies that actually move the needle on Core Web Vitals.

## Image Optimization with \`next/image\`
Images often account for the majority of bytes downloaded on a page. The \`next/image\` component automatically:
- Serves images in modern formats like WebP or AVIF.
- Resizes images based on device width.
- Lazy loads images by default.
*Tip: Always define the \`sizes\` prop effectively to help the browser choose the right image source.*

## Dynamic Imports and Code Splitting
Don't ship code the user doesn't need immediately. Use \`next/dynamic\` to lazy load heavy components.
\`\`\`javascript
const HeavyChart = dynamic(() => import('./components/HeavyChart'), {
  loading: () => <p>Loading...</p>,
});
\`\`\`
This keeps your First Contentful Paint (FCP) low and Time to Interactive (TTI) fast.

## Server Components
With the App Router, leverage React Server Components (RSC) to render non-interactive UI on the server. This reduces the amount of JavaScript sent to the client to close to zero for static content, drastically improving load performance on mobile devices.`,
    category: "Next.js",
    tags: ["Next.js", "React", "Performance", "Optimization"],
    author: "Oussama Yahouni",
    date: "2026-01-03",
    readTime: "12 min read",
    image: "/images/blog/nextjs-performance.png",
    featured: true,
  },
  {
    id: 5,
    title: "Database Indexing: When and How to Use It",
    slug: "database-indexing-guide",
    excerpt: "Understanding database indexes can dramatically improve query performance. Here's what you need to know.",
    content: `Data is only as good as your ability to retrieve it quickly. Database indexing is the single most impactful optimization you can make for read-heavy applications, but it's often misunderstood.

## The Book Analogy
Think of a database table as a book. Without an index, finding a specific record is like checking every page one by one (a Full Table Scan). An index is like the index at the back of the book—it tells you exactly where to look.

## B-Trees and Hash Indexes
- **B-Tree**: The default for most systems (PostgreSQL, MySQL). Great for range queries (\`<, >, =\`) and sorting.
- **Hash Index**: Extremely fast for exact lookups (\`=\`) but useless for ranges.

## The Cost of Indexing
Indexing isn't free.
1.  **Storage**: Indexes take up disk space.
2.  **Write Performance**: Every time you INSERT, UPDATE, or DELETE, the database must update the indexes as well.
**Rule of Thumb**: Index columns that are frequently used in \`WHERE\`, \`JOIN\`, and \`ORDER BY\` clauses, but be conservative with columns that are frequently updated.

Understanding query execution plans (\`EXPLAIN ANALYZE\`) is the key to identifying which indexes your database actually needs.`,
    category: "Database",
    tags: ["Database", "PostgreSQL", "MongoDB", "Performance"],
    author: "Oussama Yahouni",
    date: "2026-01-01",
    readTime: "7 min read",
    image: "/images/blog/database-indexing.png",
    featured: false,
  },
  {
    id: 6,
    title: "Building a Real-Time Chat with WebSockets",
    slug: "realtime-chat-websockets",
    excerpt: "Step-by-step guide to building a production-ready real-time chat application using WebSockets and Node.js.",
    content: `In an era of instant gratification, real-time communication is a baseline expectation. While HTTP polling technically works, WebSockets provide the bidirectional, low-latency comm channel needed for a true chat experience.

## WebSocket Protocol vs. HTTP
Unlike HTTP, which is request-response based and stateless, WebSockets create a persistent connection between the client and server. This allows the server to push messages to the client instantly without the client needing to ask for them.

## Implementing with Socket.io
While you can use the native \`ws\` module, \`Socket.io\` handles connection resilience nicely.

### Server Side (Node.js)
\`\`\`javascript
const io = new Server(httpServer);
io.on("connection", (socket) => {
  socket.on("message", (data) => {
    // Broadcast to all other clients
    socket.broadcast.emit("new-message", data);
  });
});
\`\`\`

### Client Side (React)
\`\`\`javascript
useEffect(() => {
  const socket = io("http://localhost:3000");
  socket.on("new-message", (msg) => {
    setMessages((prev) => [...prev, msg]);
  });
  return () => socket.disconnect();
}, []);
\`\`\`

## Scalability Challenges
WebSockets are stateful. If you scale your backend to multiple servers, a user connected to Server A won't receive messages sent by a user on Server B. To solve this, a Pub/Sub layer like Redis is essential to distribute events across your server cluster.`,
    category: "Node.js",
    tags: ["WebSockets", "Node.js", "Real-time", "Tutorial"],
    author: "Oussama Yahouni",
    date: "2025-12-28",
    readTime: "15 min read",
    image: "/images/blog/websockets-chat.png",
    featured: false,
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
  blogPosts,
};

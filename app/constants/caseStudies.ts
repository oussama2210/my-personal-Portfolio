export const caseStudies = [
  {
    id: 1,
    slug: "ryde-ride-sharing-app",
    title: "Ryde - On-Demand Ride Sharing Platform",
    description: "A comprehensive ride-sharing application built with modern technologies, featuring real-time driver matching, live location tracking, and seamless payment integration.",
    category: "Mobile Application",
    client: "Ryde Technologies",
    duration: "6 months",
    role: "Lead Full-Stack Developer",
    year: "2024",
    heroImage: "/images/project1.png",
    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "WebSocket",
      "Redis",
      "PostgreSQL",
      "AWS",
      "Stripe API"
    ],
    sections: [
      {
        title: "Project Overview",
        content: [
          "Ryde is a sophisticated ride-sharing platform designed to connect passengers with drivers efficiently and reliably. The application handles thousands of concurrent users, providing real-time updates and seamless communication between all parties involved in the ride-sharing ecosystem.",
          "The platform was built with scalability and performance as primary concerns, utilizing modern architectural patterns and industry-standard technologies to ensure a robust and maintainable codebase."
        ],
        image: "/images/pic1.png"
      },
      {
        title: "Technical Architecture",
        content: [
          "The application architecture was designed with a microservices approach, separating concerns into distinct services that communicate through well-defined APIs. The mobile application was built using React Native and Expo, allowing for a single codebase to serve both iOS and Android platforms while maintaining native performance.",
          "The backend infrastructure leverages Node.js for its non-blocking I/O capabilities, which is essential for handling real-time connections and high-throughput operations. PostgreSQL serves as the primary database for transactional data, while Redis provides caching and real-time data management."
        ],
        image: "/images/pic2.png"
      },
      {
        title: "Real-Time Matching System",
        content: [
          "One of the core challenges was implementing an efficient driver-passenger matching system. We utilized WebSocket connections to maintain persistent, bidirectional communication channels between the mobile clients and the server. This architecture enables instant notifications when a driver accepts a ride request or when a passenger's location updates.",
          "The matching algorithm considers multiple factors including driver proximity, availability, rating, and estimated time of arrival. Redis plays a crucial role in this system by maintaining an in-memory cache of active drivers and their real-time locations, allowing for sub-second query responses when matching passengers with nearby drivers.",
          "To handle peak loads and ensure system reliability, we implemented a distributed queue system using Redis Pub/Sub. This allows multiple server instances to process ride requests concurrently while maintaining data consistency and preventing race conditions."
        ],
        image: "/images/pic3.png",
        list: [
          "WebSocket connections for real-time bidirectional communication",
          "Redis for caching active driver locations and availability status",
          "Geospatial indexing for efficient proximity-based queries",
          "Distributed queue system for handling concurrent ride requests",
          "Fallback mechanisms to ensure service continuity during high load"
        ]
      },
      {
        title: "Performance Optimization",
        content: [
          "Performance was a critical requirement given the real-time nature of the application. We implemented several optimization strategies to ensure smooth user experience even under heavy load conditions.",
          "Redis was extensively used for caching frequently accessed data such as driver profiles, vehicle information, and recent ride history. This reduced database queries by approximately 70% and significantly improved response times for common operations.",
          "The mobile application employs efficient state management using Redux Toolkit, minimizing unnecessary re-renders and optimizing memory usage. Background location tracking was implemented with battery efficiency in mind, using adaptive sampling rates based on ride status."
        ],
        image: "/images/pic4.png"
      },
      {
        title: "Security and Reliability",
        content: [
          "Security was paramount in the design of the platform. All communication between clients and servers is encrypted using TLS. User authentication is handled through JWT tokens with automatic refresh mechanisms to maintain session security without compromising user experience.",
          "Payment processing is integrated with Stripe, ensuring PCI compliance and secure handling of sensitive financial information. The system implements comprehensive error handling and logging to quickly identify and resolve issues in production.",
          "We established monitoring and alerting systems using AWS CloudWatch to track system health, performance metrics, and potential security threats in real-time."
        ],
        image: "/images/pic5.png"
      },
      {
        title: "Challenges and Solutions",
        content: [
          "One significant challenge was managing WebSocket connections at scale. We implemented connection pooling and automatic reconnection logic to handle network instability common in mobile environments. Redis Cluster was deployed to ensure high availability and horizontal scalability of the caching layer.",
          "Another challenge was optimizing battery consumption for continuous location tracking. We developed an adaptive tracking system that adjusts GPS polling frequency based on ride status, reducing battery drain by 40% compared to constant high-frequency polling.",
          "To ensure data consistency across distributed systems, we implemented the Saga pattern for managing complex transactions that span multiple services, particularly for ride booking and payment processing workflows."
        ]
      }
    ],
    results: [
      {
        metric: "< 2s",
        description: "Average driver matching time"
      },
      {
        metric: "99.9%",
        description: "System uptime achieved"
      },
      {
        metric: "10K+",
        description: "Concurrent active users supported"
      }
    ]
  }
];

import { Images } from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "OMS (Order Management System)",
    shortDescription:
      "A scalable enterprise Order Management System built with Flutter for managing the complete order lifecycle. The application streamlines order processing from creation to dispatch, featuring role-based access, real-time tracking, analytics, secure authentication, and network thermal receipt printing.",

    technologies: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Python Django",
      "REST API",
      "Flutter Secure Storage",
      "ESC/POS Printer",
      "FL Chart",
    ],

    images: [
      "/images/projects/oms/omsLogin.jpg",
      "/images/projects/oms/omsDashboard.jpg",
      "/images/projects/oms/omsorders.jpg",
      "/images/projects/oms/omscustomers.jpg",
      "/images/projects/oms/omsProducts.jpg",
      "/images/projects/oms/omsProfile.jpg",
      "/images/projects/oms/omsDrawer.jpg",
      "/images/projects/oms/omsdetails.jpg",
    ],

    features: [
      "Role-based authentication (RBAC)",
      "Customer management",
      "Order lifecycle management",
      "Order item approval & submission workflow",
      "Real-time state management with Riverpod",
      "Payment management",
      "Sales analytics dashboard",
      "Expense tracking",
      "Production tracking",
      "Network thermal receipt printing (ESC/POS)",
      "Secure authentication with token storage",
      "REST API integration",
      "Responsive cross-platform UI",
      "SLA tracking & business analytics",
    ],

    overview:
      "OMS is a comprehensive enterprise application designed to streamline the entire order lifecycle from creation to dispatch. Built with Flutter for cross-platform performance, it provides role-based access, real-time analytics, and seamless integration with thermal printers for on-the-go receipt generation.",
    role: "Lead Mobile Application Developer",
    responsibilities: [
      "Architected the complete mobile application using Flutter and Riverpod.",
      "Integrated secure token-based authentication and role-based access control.",
      "Implemented real-time state management and optimized app performance.",
      "Developed seamless integration with ESC/POS network thermal printers.",
      "Built dynamic sales and analytics dashboards using FL Chart.",
    ],

    github: "",
    demo: "",
  },
  {
    id: 2,
    title: "BT360",
    shortDescription:
      "Enterprise-grade ERP and business management application for inventory, sales, finance, HR, and order management with real-time data synchronization.",

    technologies: [
      "Flutter",
      "Dart",
      "Riverpod",
      "GoRouter",
      "REST API",
      "HTTP",
      "Flutter Secure Storage",
      "Shared Preferences",
      "ESC/POS Printer",
      "Flutter ScreenUtil",
    ],

    images: [
      "/images/projects/bt360/loginBT.jpeg",
      "/images/projects/bt360/dashboardBT.jpeg",
      "/images/projects/bt360/OrdersBt.jpeg",
      "/images/projects/bt360/expenseBt.jpeg",
      "/images/projects/bt360/fabricsScreenbt.jpeg",
      "/images/projects/bt360/cashbookBT.jpeg",
      "/images/projects/bt360/payrollBT.jpeg",
      "/images/projects/bt360/salesBT.jpeg",
      "/images/projects/bt360/usersPermissionBT.jpeg",
    ],

    features: [
      "Enterprise ERP solution",
      "Role-based authentication",
      "Order & sales management",
      "Inventory & fabric management",
      "Customer management",
      "Cashbook & financial tracking",
      "Payment management",
      "Expense management",
      "Staff & payroll management",
      "Real-time data synchronization",
      "Wireless ESC/POS receipt printing",
      "Responsive cross-platform UI",
      "REST API integration",
      "Secure token-based authentication",
    ],

    overview:
      "BT360 is a robust, enterprise-grade ERP mobile application tailored for comprehensive business management. It unifies inventory, sales, financial tracking, HR, and order management into a single, cohesive platform with real-time data synchronization capabilities.",
    role: "Full-Stack Mobile Developer",
    responsibilities: [
      "Developed the complete mobile frontend using Flutter and Dart.",
      "Implemented secure, role-based authentication and navigation using GoRouter.",
      "Integrated REST APIs for real-time data synchronization across all modules.",
      "Engineered robust offline caching and secure local storage mechanisms.",
      "Designed and implemented complex business logic for financial and inventory tracking.",
    ],

    github: "",
    demo: "",
  },
  {
    id: 3,
    title: "Crew",
    shortDescription:
      "Cross-platform event staffing and management application connecting event organizers and staff with shift management, QR-based attendance, payments, and real-time event tracking.",

    technologies: [
      "Flutter",
      "Dart",
      "Riverpod",
      "GoRouter",
      "REST API",
      "Google Maps",
      "Razorpay",
      "QR Code",
      "Flutter ScreenUtil",
    ],

    images: [
      "/images/projects/crew/loginCrew.jpg",
      "/images/projects/crew/dasboardOrgCrew.jpg",
      "/images/projects/crew/dashboardStaffCrew.jpg",
      "/images/projects/crew/earningsCrew.jpg",
      "/images/projects/crew/eventsCrew.jpg",
      "/images/projects/crew/organizersCrew.jpg",
      "/images/projects/crew/orgprofileCrew.jpg",
      "/images/projects/crew/shiftCrew.jpg",
      "/images/projects/crew/staffListCrew.jpg",
      "/images/projects/crew/staffprofileCrew.jpg",
    ],

    features: [
      "Role-based authentication",
      "Event creation & management",
      "Google Maps venue selection",
      "Staff hiring & roster management",
      "Shift management",
      "QR code check-in & check-out",
      "Equipment management",
      "Invoice generation",
      "Razorpay payment integration",
      "Subscription management",
      "Staff ratings & feedback",
      "Real-time connectivity monitoring",
      "Responsive cross-platform UI",
      "REST API integration",
    ],

    overview:
      "Crew is an innovative cross-platform event staffing and management platform that bridges the gap between event organizers and staff. It offers end-to-end features including shift scheduling, location-based QR attendance, integrated payments, and real-time event monitoring.",
    role: "Mobile Application Developer",
    responsibilities: [
      "Built dual-interface mobile applications (Organizers & Staff) within a single codebase.",
      "Integrated Google Maps for location selection and Razorpay for secure payments.",
      "Implemented QR code-based attendance tracking for shifts.",
      "Developed complex state management solutions using Riverpod.",
      "Created a responsive, dynamic UI utilizing Flutter ScreenUtil for consistency across devices.",
    ],

    github: "",
    demo: "",
  },
  {
    id: 4,
    title: "Lawgik",
    shortDescription:
      "Comprehensive legal practice management application for law firms with case management, client CRM, invoicing, scheduling, analytics, and secure document handling.",

    technologies: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Clean Architecture",
      "Dio",
      "REST API",
      "Firebase",
      "Flutter Secure Storage",
      "FL Chart",
      "Table Calendar",
      "PDF Generation",
      "Flutter ScreenUtil",
    ],

    images: [
      "/images/projects/lawgik/loginLawgik.jpg",
      "/images/projects/lawgik/dashboardLawgik.jpg",
      "/images/projects/lawgik/caselistLawgik.jpg",
      "/images/projects/lawgik/calenderLawgik.jpg",
      "/images/projects/lawgik/caseDetailsfirstLawgik.jpg",
      "/images/projects/lawgik/caseDetailsecondLawgik.jpg",
      "/images/projects/lawgik/drawerLawgik.jpg",
      "/images/projects/lawgik/profileLawgik.jpg",
      "/images/projects/lawgik/reportgenerateLawgik.jpg",
    ],

    features: [
      "Role-based authentication",
      "Case management",
      "Client & lead CRM",
      "Legal document management",
      "Appointment & calendar scheduling",
      "Task reminders & notifications",
      "Invoice generation (PDF)",
      "Financial tracking",
      "Analytics dashboard",
      "Firebase push notifications",
      "Responsive cross-platform UI",
      "REST API integration",
      "Secure local storage",
    ],

    overview:
      "Lawgik is a comprehensive legal practice management application designed specifically for modern law firms. It acts as a centralized hub for managing cases, client CRM, invoicing, scheduling, and secure document handling, significantly improving firm efficiency.",
    role: "Mobile Solutions Architect",
    responsibilities: [
      "Architected the application following Clean Architecture principles.",
      "Implemented sophisticated network request handling and interceptors using Dio.",
      "Integrated Firebase for real-time push notifications.",
      "Developed robust PDF generation capabilities for legal documents and invoices.",
      "Created complex interactive calendars and analytical dashboards.",
    ],

    github: "",
    demo: "",
  },
  {
    id: 5,
    title: "Book Management App",
    shortDescription:
      "MVC-based Flutter application for managing books with search, filtering, editing, and deletion.",
    technologies: ["Flutter", "Dart", "MVC Architecture", "SQLite"],
    images: [
      "/images/projects/book-management/loginBM.png",
      "/images/projects/book-management/signupBM.png",
      "/images/projects/book-management/booklistBM.png",
      "/images/projects/book-management/bookDetailBM.png",
      "/images/projects/book-management/addbookBM.png",
      "/images/projects/book-management/editbookBM.png",
    ],
    features: [
      "Book collection management",
      "Add books with title, author, genre, and publication date",
      "Search books by keywords",
      "Filter books by author and category",
      "Edit existing book information",
      "Delete book records",
      "Local data storage using SQLite",
      "MVC-based application architecture",
      "Clean and maintainable code structure",
      "Responsive mobile UI",
    ],
    overview:
      "Book Management App is a structured mobile application designed to help users efficiently organize and manage their personal book collections. Built with Flutter using the Model-View-Controller (MVC) architecture, the application separates data, business logic, and UI components to provide a scalable and maintainable codebase. Users can add, search, filter, edit, and delete book records while storing their data locally.",
    role: "Flutter Developer",
    responsibilities: [
      "Developed the mobile application using Flutter and Dart.",
      "Implemented the MVC architecture to maintain a clear separation between UI, business logic, and data layers.",
      "Developed CRUD functionality for adding, viewing, editing, and deleting book records.",
      "Implemented search and filtering functionality for efficient book discovery.",
      "Integrated SQLite for reliable local storage and data persistence.",
      "Designed a clean and user-friendly interface for managing book collections.",
    ],
    github: "",
    demo: "",
  },
  {
    id: 6,
    title: "KINAKK Brand App UI",
    shortDescription:
    "A branded e-commerce mobile app UI designed for KINAKK, featuring a visually consistent brand identity, product discovery, product details, cart management, and a seamless shopping experience.",

    technologies: [
    "Flutter",
    "Dart",
    "UI/UX Design",
    "Responsive UI"
  ],
   images: [
    "/images/projects/kinakk/dashboardkinakk.png",
    "/images/projects/kinakk/splashscreenkinakk.png",
    "/images/projects/kinakk/productlistkinakk.png",
    "/images/projects/kinakk/productDetailakinakk.png",
    "/images/projects/kinakk/contactkinakk.png"
  ],
  features: [
    "Branded splash screen",
    "Custom branded homepage",
    "Product listing and browsing",
    "Product detail screen",
    "Shopping cart interface",
    "Brand-focused color and visual system",
    "Clean and intuitive navigation",
    "Responsive mobile UI",
    "Consistent typography and spacing",
    "User-friendly shopping experience"
  ],

  overview:
    "KINAKK Brand App UI is a modern mobile e-commerce interface designed around the KINAKK brand identity. The application focuses on creating a visually consistent and engaging shopping experience through branded colors, typography, product presentation, and intuitive navigation. The UI includes key shopping screens such as the splash screen, homepage, product listing, product details, and cart.",

  role: "Flutter Developer & UI Developer",

  responsibilities: [
    "Designed and developed the mobile application UI using Flutter and Dart.",
    "Translated the KINAKK brand identity into a consistent mobile design system.",
    "Implemented branded colors, typography, spacing, and reusable UI components.",
    "Developed the splash screen, homepage, product listing, and product details screens.",
    "Implemented the shopping cart interface and user navigation flow.",
    "Focused on responsive layouts and a consistent user experience across mobile screen sizes."
  ],

  github: "",
  demo: ""
  },
  // {
  //   id: 7,
  //   title: "Task Management App",
  //   description:
  //     "Flutter application using Hive and Provider with offline storage, task priorities, and search functionality.",
  //   technologies: [
  //     "Flutter",
  //     "Hive",
  //     "Provider",
  //   ],
  // },
  // {
  //   id: 8,
  //   title: "Profile App UI",
  //   description:
  //     "Responsive contact/profile management UI with image upload and dark theme.",
  //   technologies: [
  //     "Flutter",
  //     "Dart",
  //   ],
  // },
];

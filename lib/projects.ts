export type Project = {
  slug: string; title: string; category: 'Web & Mobile' | 'Graphics' | 'Desktop';
  index: string; discipline: string; subtitle: string; summary: string; stack: string[];
  context: string; challenge: string; approach: string; features: { title: string; text: string }[];
  flow: string[]; note: string; live?: string; repository?: string; image?: string;
};

export const projects: Project[] = [
  {
    slug: 'pocket-shop', title: 'Pocket Shop', category: 'Web & Mobile', index: '01', discipline: 'CONNECTED COMMERCE',
    subtitle: 'A customer storefront, a Flutter app, and an operations dashboard—sharing one commerce system.',
    summary: 'A three-sided shopping system connecting React customer and admin interfaces with a Flutter mobile app through one Laravel backend.',
    stack: ['React', 'Flutter', 'Laravel', 'MySQL'], context: 'Collaborative application project',
    challenge: 'Keep products, orders, and inventory consistent across web and mobile while extending the website with personalized shopping features.',
    approach: 'A shared Laravel API and database provide the common foundation. Website-specific endpoints add recommendations and color selection while preserving the existing mobile API contracts.',
    features: [
      { title: 'One source of truth', text: 'The website and mobile app consume the same catalog and product images. Inventory changes are reflected when each client refreshes its data.' },
      { title: 'Personalized discovery', text: 'Product views, favorites, cart activity, and purchases inform recommendation ordering. Recommendation failures are isolated from checkout.' },
      { title: 'A complete shopping flow', text: 'Product filters, color options, favorites, coupons, checkout, and order tracking connect discovery to purchase.' },
      { title: 'Day-to-day administration', text: 'Administration workflows cover products, categories, customers, coupons, and orders. Customers can edit or cancel eligible pending orders.' },
    ],
    flow: ['React storefront + Flutter app', 'Laravel REST API', 'Shared MySQL catalog & orders'],
    note: 'The gallery was captured from a working local environment with 118 product records. The orders, customer, and revenue shown are development data created to demonstrate the connected workflows.',
    repository: 'https://github.com/wissam276/Pocket-Store',
    image: '/images/pocket-shop/web/storefront-home.png',
  },
  {
    slug: 'lafah', title: 'Lafah', category: 'Web & Mobile', index: '02', discipline: 'MULTI-VENDOR MARKETPLACE',
    subtitle: 'Many stores. One marketplace.',
    summary: 'A marketplace that brings customers, vendors, and administrators into one connected experience.',
    stack: ['React', 'Laravel', 'MySQL', 'Arabic / English'], context: 'Marketplace application project',
    challenge: 'Give each participant a clear workspace: customers need to discover and order, vendors need to manage their stores, and administrators need marketplace oversight.',
    approach: 'Separate customer, vendor, and administrator workflows connect through the Laravel backend. Product options, store approvals, order preparation, and bilingual interfaces support the different roles.',
    features: [
      { title: 'A customer-facing marketplace', text: 'Store browsing, product details, offers, a shopping cart, and order history form the customer experience.' },
      { title: 'A workspace for vendors', text: 'Vendors manage store information, product catalogs and options, and the preparation status of orders.' },
      { title: 'Marketplace oversight', text: 'Administration views support store approvals, orders, and offers, with separate access for administrator accounts.' },
      { title: 'Arabic and English', text: 'The interface includes a language switch and Arabic layout support, carrying the same marketplace workflows across both languages.' },
    ],
    flow: ['Customers · Vendors · Administrators', 'React role-based interfaces', 'Laravel marketplace API'],
    note: 'The linked website is the existing Lafah project. Access to account features depends on its own sign-in and service availability.',
    live: 'https://lafah-frontend.onrender.com/home', repository: 'https://github.com/AliCodes11/Lafah_frontend', image: '/images/lafah-mascot.png',
  },
  {
    slug: 'newtons-cradle', title: 'Newton’s Cradle', category: 'Graphics', index: '03', discipline: 'INTERACTIVE 3D',
    subtitle: 'A hands-on experiment in motion.',
    summary: 'An interactive Three.js laboratory for exploring pendulum motion, adjustable parameters, and string-breaking behavior.',
    stack: ['Three.js', 'JavaScript', 'WebGL', 'Vite'], context: 'Collaborative graphics project',
    challenge: 'Make a technical simulation understandable through direct interaction, while preserving normal pendulum behavior when individual balls enter a falling state.',
    approach: 'The scene separates physics updates, visual synchronization, and interface controls. Adjustable ball properties and orbit controls make the model explorable directly in the browser.',
    features: [
      { title: 'Set up an experiment', text: 'Choose the number of balls, thread length, ball radius, mass, gravity, and material before entering the laboratory.' },
      { title: 'Explore in 3D', text: 'Orbit the scene and interact with the pendulums. The parameter panel exposes the simulation settings during the experiment.' },
      { title: 'String-breaking behavior', text: 'Balls above the configured 7.3 kg threshold detach, fall under gravity, stop at floor level, and leave the pendulum collision calculations.' },
      { title: 'Readable project structure', text: 'Organized sections and a code navigator document the responsibilities of physics, visual updates, controls, and scene setup.' },
    ],
    flow: ['Experiment settings', 'Pendulum & falling-ball updates', 'Three.js scene rendering'],
    note: 'This is a simplified educational visualization, not a scientifically validated rigid-body simulation. The breaking threshold is a programmed rule.',
    live: '/experiences/newtons-cradle/index.html', repository: 'https://github.com/wissam276/Newtone-s-cradle/tree/submition-branch',
  },
  {
    slug: 'car-dealership', title: 'OpenGL Car Dealership', category: 'Graphics', index: '04', discipline: 'C++ / 3D ENVIRONMENT',
    subtitle: 'A world built beyond the interface.',
    summary: 'A desktop 3D scene combining vehicles, a dealership environment, cameras, lighting, and interactive elements.',
    stack: ['C++', 'OpenGL', 'GLU', 'Win32'], context: 'Graphics programming project',
    challenge: 'Bring geometry, scene navigation, and interaction together in a coherent environment using a traditional desktop graphics pipeline.',
    approach: 'Separate vehicle and building components form the scene. Camera controls, collision bounds, lighting states, and moving doors connect the environment to user input.',
    features: [
      { title: 'A composed 3D environment', text: 'Cars, a sports car, a bulldozer, and dealership structures are organized as separate scene components.' },
      { title: 'Multiple ways to look around', text: 'Camera position, rotation, zoom, and different viewpoints let the user navigate the scene.' },
      { title: 'Interactive details', text: 'Moving doors, vehicle controls, and collision bounds introduce behavior beyond static geometry.' },
      { title: 'Desktop graphics fundamentals', text: 'The project works with legacy OpenGL drawing, textures, lighting, and Windows integration.' },
    ],
    flow: ['Keyboard & mouse input', 'Camera & scene state', 'OpenGL rendering'],
    note: 'A native Windows application. It is presented here as a technical case study; the Windows executable does not run inside this page.',
  },
  {
    slug: 'apartment-booking', title: 'Apartment Booking', category: 'Web & Mobile', index: '05', discipline: 'PROPERTY / MOBILE',
    subtitle: 'From finding a place to managing a stay.',
    summary: 'A Flutter and Laravel application connecting property listings with renter and landlord booking workflows.',
    stack: ['Flutter', 'Dart', 'Laravel', 'MySQL'], context: 'Mobile application project',
    challenge: 'Connect property discovery and booking management while keeping the renter and landlord experiences clear and apartment media reliable.',
    approach: 'The mobile application consumes a Laravel API for listings, bookings, and account workflows. Shared listing components and image handling keep property details consistent across screens.',
    features: [
      { title: 'Property discovery', text: 'Apartment listings, detail screens, galleries, and favorites help renters explore available properties.' },
      { title: 'Booking workflows', text: 'Booking requests, approval and rejection actions, cancellation, and history connect renters and property owners.' },
      { title: 'Role-specific interfaces', text: 'Renter and landlord dashboards focus on the tasks relevant to each account.' },
      { title: 'Careful media handling', text: 'Backend media routes and reusable image components address image access and preserve apartment photo proportions.' },
    ],
    flow: ['Flutter mobile interface', 'Laravel booking API', 'Properties · Accounts · Bookings'],
    note: 'The case study covers the mobile application and its backend integration. No public booking service is operated through this portfolio.',
  },
  {
    slug: 'inventory-management', title: 'Production & Inventory', category: 'Desktop', index: '06', discipline: 'JAVA / DESKTOP SOFTWARE',
    subtitle: 'Structure for everyday operations.',
    summary: 'A Java Swing project exploring inventory control, task assignment, and desktop application structure.',
    stack: ['Java', 'Swing', 'OOP', 'File I/O'], context: 'Academic desktop project',
    challenge: 'Organize inventory and assigned work in a desktop application with distinct responsibilities for users and underlying data.',
    approach: 'Object-oriented models, Swing interfaces, and file handling form the application foundation, alongside exception handling and background task work.',
    features: [
      { title: 'Operational interfaces', text: 'Login and manager/supervisor interfaces organize access to application workflows.' },
      { title: 'Inventory and assigned work', text: 'Inventory control and task assignment provide the central business-oriented use cases.' },
      { title: 'Object-oriented foundations', text: 'Classes, collections, custom exceptions, and file processing separate responsibilities in the application.' },
      { title: 'Background processing', text: 'Multithreaded task workers explore how desktop applications can perform work beyond the interface thread.' },
    ],
    flow: ['Swing desktop interface', 'Java application logic', 'File-based persistence'],
    note: 'An academic desktop application, presented as a case study in software structure and operational workflows.',
  },
];

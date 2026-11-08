// All site content lives here. To add a GitHub link, fill in the `github` field.
// Cards with an empty `github` simply don't show the button.

export const profile = {
  name: 'Chitsanupong Preecharat',
  title: 'Computer Engineering student at KMITL (3rd year)',
  tagline: 'I build systems end to end: backend, data and hardware.',
  github: 'https://github.com/chitsanupongpreecharat',
  email: 'chitsanupongpreecharat@gmail.com',
};

export const skills = [
  { group: 'Backend & Databases', items: ['NestJS', 'ASP.NET Core MVC', 'SQL', 'PostgreSQL', 'PostGIS'] },
  { group: 'Data & ML', items: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'TensorFlow'] },
  { group: 'Hardware', items: ['ESP32-S3', 'STM32', 'Raspberry Pi', 'EasyEDA (schematic & PCB)'] },
  { group: 'Design & Tools', items: ['UML', 'ER modeling', 'Figma', 'Git', 'Docker'] },
];

export const experience = [
  {
    role: 'Research Center Member',
    org: 'Smart City Research Center (SMC), KMITL',
    period: 'Jul 2026 – Present',
    points: [
      'Built the backend for a satellite vehicle-tracking proof-of-concept: planned the data flow, designed the PostgreSQL + PostGIS database and wrote the NestJS APIs.',
      'Gathered requirements from stakeholders for an executive dashboard project.',
    ],
  },
];

export const categories = ['All', 'Software & Full Stack', 'Data & AI', 'Hardware & Embedded'];

export const projects = [
  {
    title: 'FitMatch',
    category: 'Software & Full Stack',
    context: 'Web Development course',
    period: 'Jul – Oct 2025',
    points: [
      'A web app for finding workout partners: users post sports meetups with sport, place, time and group size.',
      'Built with ASP.NET Core MVC, C# and PostgreSQL (Entity Framework Core), with BCrypt-hashed login and sessions, profile photo upload and a REST API for posts.',
    ],
    tags: ['ASP.NET Core', 'C#', 'PostgreSQL'],
    github: 'https://github.com/pentorhenglee/WEBAPP_FitMatch',
  },
  {
    title: 'Campus Pool',
    category: 'Software & Full Stack',
    context: 'Software Development course',
    period: 'Jul – Oct 2026',
    points: [
      'Ride-sharing for university students: anyone with a university email can drive or ride.',
      'Wrote the requirements, modeled the system in UML (use case, class and sequence diagrams), designed the database and built a Figma prototype.',
    ],
    tags: ['UML', 'Database Design', 'Figma'],
    github: '',
  },
  {
    title: 'E-commerce Sales Forecasting',
    category: 'Data & AI',
    context: 'Machine Learning course',
    period: 'Aug – Oct 2026',
    points: [
      'Turned 250K orders into a 48K-row product × month table to forecast next-month sales.',
      'Coded linear, polynomial and Huber regression from scratch in NumPy and checked them against scikit-learn.',
      'Used monthly rolling validation; the best model reached test R² 0.85 and cut MAE by 32% vs a one-feature baseline.',
    ],
    tags: ['Python', 'pandas', 'NumPy', 'scikit-learn'],
    github: '',
  },
  {
    title: 'Weather Prediction from Sky Images',
    category: 'Data & AI',
    context: 'Linear Algebra course',
    period: 'Sep 2026',
    points: [
      'A CNN built with TensorFlow that predicts the weather from photos of the sky, linking the course’s matrix and convolution theory to how the CNN extracts image features.',
    ],
    tags: ['Python', 'TensorFlow', 'CNN'],
    github: '',
  },
  {
    title: 'ESP32-S3 Camera AI Edge',
    category: 'Hardware & Embedded',
    context: 'Personal project',
    period: 'Jul 2026 – Present',
    status: 'Design stage',
    points: [
      'Designing the schematic, pin map and PCB in EasyEDA for a board with camera, TFT, touch and USB, with the TFT and touch panel sharing one SPI bus.',
    ],
    tags: ['ESP32-S3', 'EasyEDA', 'PCB Design'],
    github: '',
  },
  {
    title: 'POWER-TESTER Booth',
    category: 'Hardware & Embedded',
    context: 'University project',
    period: 'Oct 2026',
    points: [
      'Planned the power supply and split the load across two STM32 boards, and wrote real-time light control that reacts to the game.',
    ],
    tags: ['STM32', 'STM32CubeIDE', 'C'],
    github: '',
  },
];

export const activities = [
  {
    title: 'PIPEK health-screening mirror',
    text: 'Ran demos at about 10 events, helping people scan and explaining how it works.',
  },
];

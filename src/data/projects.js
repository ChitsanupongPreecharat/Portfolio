

export const profile = {
  name: 'Chitsanupong Preecharat',
  title: {
    en: "Computer Engineering student (3rd year)\nking mongkut's institute of technology ladkrabang",
    th: 'นักศึกษาวิศวกรรมคอมพิวเตอร์ ชั้นปีที่ 3\nสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง',
  },
  intro: {
    en: [
      "I'm Chitsanupong Preecharat, a third-year Computer Engineering student at King Mongkut's Institute of Technology Ladkrabang (KMITL). I enjoy building systems end to end: the database and APIs on the backend, the data and models that make sense of it, and the boards and firmware that collect it in the first place.",
      "At KMITL's Smart City Research Center, I designed a PostgreSQL + PostGIS database and wrote NestJS APIs for a satellite vehicle-tracking proof-of-concept, and gathered requirements from stakeholders for an executive dashboard. Through coursework and my own projects, I've built web apps with ASP.NET Core, coded regression models from scratch in NumPy, trained a CNN in TensorFlow and designed an ESP32-S3 board in EasyEDA.",
      "I'm looking for an internship starting April 2027 where I can keep working across software, data and hardware.",
    ],
    th: [
      'ผมชื่อชิษณุพงศ์ ปรีชารัตน์ นักศึกษาวิศวกรรมคอมพิวเตอร์ชั้นปีที่ 3 สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง (สจล.) ผมชอบสร้างระบบให้ครบทั้งเส้นทาง ตั้งแต่ฐานข้อมูลและ API ฝั่ง backend ไปจนถึงข้อมูลและโมเดลที่ช่วยให้ข้อมูลเหล่านั้นมีความหมาย และลงไปถึงบอร์ดกับเฟิร์มแวร์ที่ใช้เก็บข้อมูลตั้งแต่ต้นทาง',
      'ที่ศูนย์วิจัย Smart City (SMC) สจล. ผมออกแบบฐานข้อมูล PostgreSQL + PostGIS และเขียน API ด้วย NestJS ให้ระบบต้นแบบติดตามยานพาหนะผ่านดาวเทียม รวมถึงเก็บ requirement จากผู้เกี่ยวข้องสำหรับ dashboard ผู้บริหาร ส่วนในรายวิชาและโปรเจกต์ส่วนตัว ผมเคยพัฒนาเว็บแอปด้วย ASP.NET Core เขียนโมเดล regression เองตั้งแต่ต้นด้วย NumPy เทรน CNN ด้วย TensorFlow และออกแบบบอร์ด ESP32-S3 ใน EasyEDA',
      'ผมกำลังมองหาที่ฝึกงานที่เริ่มเดือนเมษายน 2570 ซึ่งได้ทำงานครอบคลุมทั้งซอฟต์แวร์ ข้อมูล และฮาร์ดแวร์',
    ],
  },
  photo: 'profile.jpg',
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
    role: { en: 'Research Center Member', th: 'สมาชิกศูนย์วิจัย' },
    org: { en: 'Smart City Research Center (SMC), KMITL', th: 'ศูนย์วิจัย Smart City (SMC) สจล.' },
    period: 'Jul 2026 – Present',
    points: [
      {
        en: 'Built the backend for a satellite vehicle-tracking proof-of-concept: planned the data flow, designed the PostgreSQL + PostGIS database and wrote the NestJS APIs.',
        th: 'พัฒนา backend ให้ระบบ proof-of-concept ติดตามยานพาหนะผ่านดาวเทียม: วางแผน data flow ออกแบบฐานข้อมูล PostgreSQL + PostGIS และเขียน API ด้วย NestJS',
      },
      {
        en: 'Gathered requirements from stakeholders for an executive dashboard project.',
        th: 'เก็บ requirement จาก stakeholder สำหรับโปรเจกต์ executive dashboard',
      },
    ],
  },
];

export const categories = ['All', 'Software & Full Stack', 'Data & AI', 'Hardware & Embedded'];

export const projects = [
  {
    title: 'FitMatch',
    category: 'Software & Full Stack',
    context: { en: 'Web Development course', th: 'วิชา Web Development' },
    period: 'Jul – Oct 2025',
    points: [
      {
        en: 'A web app for finding workout partners: users post sports meetups with sport, place, time and group size.',
        th: 'เว็บแอปสำหรับหาเพื่อนออกกำลังกาย ผู้ใช้โพสต์นัดเล่นกีฬาโดยระบุชนิดกีฬา สถานที่ เวลา และจำนวนคน',
      },
      {
        en: 'Built with ASP.NET Core MVC, C# and PostgreSQL (Entity Framework Core), with BCrypt-hashed login and sessions, profile photo upload and a REST API for posts.',
        th: 'พัฒนาด้วย ASP.NET Core MVC, C# และ PostgreSQL (Entity Framework Core) มีระบบ login ที่ hash รหัสผ่านด้วย BCrypt และใช้ session, อัปโหลดรูปโปรไฟล์ และ REST API สำหรับโพสต์',
      },
    ],
    tags: ['ASP.NET Core', 'C#', 'PostgreSQL'],
    github: 'https://github.com/pentorhenglee/WEBAPP_FitMatch',
  },
  {
    title: 'Campus Pool',
    category: 'Software & Full Stack',
    context: { en: 'Software Development course', th: 'วิชา Software Development' },
    period: 'Jul – Oct 2026',
    points: [
      {
        en: 'Ride-sharing for university students: anyone with a university email can drive or ride.',
        th: 'ระบบ ride-sharing สำหรับนักศึกษา ใครมีอีเมลมหาวิทยาลัยก็เป็นได้ทั้งคนขับและผู้โดยสาร',
      },
      {
        en: 'Wrote the requirements, modeled the system in UML (use case, class and sequence diagrams), designed the database and built a Figma prototype.',
        th: 'เขียน requirement ออกแบบระบบด้วย UML (use case, class และ sequence diagram) ออกแบบฐานข้อมูล และทำ prototype ใน Figma',
      },
    ],
    tags: ['UML', 'Database Design', 'Figma'],
    github: '',
  },
  {
    title: 'E-commerce Sales Forecasting',
    category: 'Data & AI',
    context: { en: 'Machine Learning course', th: 'วิชา Machine Learning' },
    period: 'Aug – Oct 2026',
    points: [
      {
        en: 'Turned 250K orders into a 48K-row product × month table to forecast next-month sales.',
        th: 'แปลงข้อมูล 250K orders เป็นตาราง product × month ขนาด 48K แถว เพื่อพยากรณ์ยอดขายเดือนถัดไป',
      },
      {
        en: 'Coded linear, polynomial and Huber regression from scratch in NumPy and checked them against scikit-learn.',
        th: 'เขียน linear, polynomial และ Huber regression เองตั้งแต่ต้นด้วย NumPy แล้วเทียบผลกับ scikit-learn',
      },
      {
        en: 'Used monthly rolling validation; the best model reached test R² 0.85 and cut MAE by 32% vs a one-feature baseline.',
        th: 'ใช้ monthly rolling validation โมเดลที่ดีที่สุดได้ test R² 0.85 และลด MAE ลง 32% เมื่อเทียบกับ baseline แบบ feature เดียว',
      },
    ],
    tags: ['Python', 'pandas', 'NumPy', 'scikit-learn'],
    github: '',
  },
  {
    title: 'Weather Prediction from Sky Images',
    category: 'Data & AI',
    context: { en: 'Linear Algebra course', th: 'วิชา Linear Algebra' },
    period: 'Sep 2026',
    points: [
      {
        en: 'A CNN built with TensorFlow that predicts the weather from photos of the sky, linking the course’s matrix and convolution theory to how the CNN extracts image features.',
        th: 'CNN ที่สร้างด้วย TensorFlow ทำนายสภาพอากาศจากภาพท้องฟ้า โดยเชื่อมทฤษฎี matrix และ convolution ในวิชากับวิธีที่ CNN ดึง feature จากภาพ',
      },
    ],
    tags: ['Python', 'TensorFlow', 'CNN'],
    github: '',
  },
  {
    title: 'ESP32-S3 Camera AI Edge',
    category: 'Hardware & Embedded',
    context: { en: 'Personal project', th: 'โปรเจกต์ส่วนตัว' },
    period: 'Jul 2026 – Present',
    status: { en: 'Design stage', th: 'อยู่ในขั้นออกแบบ' },
    points: [
      {
        en: 'Designing the schematic, pin map and PCB in EasyEDA for a board with camera, TFT, touch and USB, with the TFT and touch panel sharing one SPI bus.',
        th: 'ออกแบบ schematic, pin map และ PCB ใน EasyEDA สำหรับบอร์ดที่มีกล้อง, TFT, touch และ USB โดยให้ TFT กับ touch panel ใช้ SPI bus ร่วมกัน',
      },
    ],
    tags: ['ESP32-S3', 'EasyEDA', 'PCB Design'],
    github: '',
  },
  {
    title: 'POWER-TESTER Booth',
    category: 'Hardware & Embedded',
    context: { en: 'University project', th: 'โปรเจกต์ในมหาวิทยาลัย' },
    period: 'Oct 2026',
    points: [
      {
        en: 'Planned the power supply and split the load across two STM32 boards, and wrote real-time light control that reacts to the game.',
        th: 'วางแผนระบบจ่ายไฟและแบ่งโหลดไปยังบอร์ด STM32 สองบอร์ด และเขียนระบบควบคุมไฟแบบ real-time ที่ตอบสนองตามเกม',
      },
    ],
    tags: ['STM32', 'STM32CubeIDE', 'C'],
    github: '',
  },
];

export const activities = [
  {
    title: { en: 'PIPEK health-screening mirror', th: 'กระจกตรวจสุขภาพ PIPEK' },
    text: {
      en: 'Ran demos at about 10 events, helping people scan and explaining how it works.',
      th: 'ทำเดโมในงานประมาณ 10 งาน ช่วยผู้เข้าร่วมสแกนและอธิบายการทำงานของระบบ',
    },
  },
];

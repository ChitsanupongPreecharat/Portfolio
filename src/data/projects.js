

export const profile = {
  name: {
    en: 'Mr.Chitsanupong Preecharat',
    th: 'นายชิษณุพงศ์ ปรีชารัตน์'
  },
  title: {
    en: "Computer Engineering student (3rd year)\n GPA : 3.04 (through Year 2) \nKing mongkut's institute of technology ladkrabang",
    th: 'นักศึกษาวิศวกรรมคอมพิวเตอร์ ชั้นปีที่ 3\n GPA : 3.04 (ตลอด 2 ปีการศึกษา) \nสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง',
  },
  intro: {
    en: [
      'My interests in computer engineering are broad, spanning backend services and databases, data analytics, machine learning and embedded systems. Rather than focusing on a single area, I enjoy exploring different fields, learning new things and finding out how they actually work.',
      'This curiosity has led me to a diverse range of projects. At the Smart City Research Center at KMITL, I built the backend for a satellite vehicle-tracking proof of concept, designing the data flow and the PostgreSQL/PostGIS database and developing the APIs with NestJS. I also gathered requirements from stakeholders for an executive dashboard. Beyond the research center, I have built a web application with C# and ASP.NET Core, written regression models from scratch in NumPy, trained a convolutional neural network in TensorFlow, and am designing my own ESP32-S3 board in EasyEDA.',
      'Working across these fields has shown me how each part of a system relates to and affects the others. I am looking for an internship starting in April 2027, where I can keep learning, grow professionally and contribute to real-world projects.',
    ],
    th: [
      'ผมมีความสนใจในวิศวกรรมคอมพิวเตอร์อย่างกว้างขวาง ครอบคลุมทั้งระบบ backend และฐานข้อมูล การวิเคราะห์ข้อมูล machine learning และระบบ embedded แทนที่จะมุ่งเน้นเพียงด้านเดียว ผมชอบสำรวจสาขาต่าง ๆ เรียนรู้สิ่งใหม่ และค้นหาว่าสิ่งเหล่านั้นทำงานอย่างไรจริง ๆ',
      'ความอยากรู้นี้พาผมไปสู่โปรเจกต์ที่หลากหลาย ที่ศูนย์วิจัยเมืองอัจฉริยะ สจล. ผมได้พัฒนา backend สำหรับระบบต้นแบบติดตามยานพาหนะผ่านดาวเทียม โดยออกแบบ data flow และฐานข้อมูล PostgreSQL/PostGIS และพัฒนา API ด้วย NestJS รวมถึงได้รวบรวม requirement จากผู้มีส่วนเกี่ยวข้องสำหรับ dashboard ผู้บริหาร นอกเหนือจากงานที่ศูนย์วิจัย ผมได้พัฒนาเว็บแอปพลิเคชันด้วย C# และ ASP.NET Core เขียนโมเดล regression เองตั้งแต่ต้นด้วย NumPy เทรน convolutional neural network ด้วย TensorFlow และกำลังออกแบบบอร์ด ESP32-S3 ของตัวเองด้วย EasyEDA',
      'การได้ทำงานข้ามหลายสาขาทำให้ผมเห็นว่าแต่ละส่วนของระบบเกี่ยวข้องและส่งผลต่อกันอย่างไร ผมกำลังมองหาโอกาสฝึกงานที่เริ่มต้นในเดือนเมษายน 2570 ซึ่งผมจะได้เรียนรู้อย่างต่อเนื่อง เติบโตในสายอาชีพ และร่วมพัฒนางานจริง',
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
    org: { en: 'Smart City Research Center (SMC), KMITL', th: 'ศูนย์วิจัยเมืองอัจฉริยะ สจล.' },
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
    title: 'ESP32-S3 Custom Dev Board',
    category: 'Hardware & Embedded',
    context: { en: 'Personal project', th: 'โปรเจกต์ส่วนตัว' },
    period: 'Apr – May 2026',
    points: [
      {
        en: 'Designed my own ESP32-S3 development board (ESP32-S3-WROOM-1 N16R8) in EasyEDA, from schematic to PCB layout.',
        th: 'ออกแบบบอร์ดพัฒนา ESP32-S3 ของตัวเอง (ESP32-S3-WROOM-1 N16R8) ใน EasyEDA ตั้งแต่ schematic จนถึง PCB layout',
      },
      {
        en: 'Includes USB-C with native USB data lines, an AMS1117 5V-to-3.3V regulator, reset and boot buttons, status LEDs and two 20-pin headers that break out the GPIOs.',
        th: 'มี USB-C ที่ต่อสาย data เข้า native USB, วงจรแปลงไฟ 5V เป็น 3.3V ด้วย AMS1117, ปุ่ม reset และ boot, LED แสดงสถานะ และ header 20 ขาสองแถวสำหรับใช้งาน GPIO',
      },
    ],
    tags: ['ESP32-S3', 'EasyEDA', 'PCB Design'],
    github: 'https://github.com/ChitsanupongPreecharat/ESP32-Custom-Design',
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
    github: 'https://github.com/ChitsanupongPreecharat/ESP32-AdgeAI-design',
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

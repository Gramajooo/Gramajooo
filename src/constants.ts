/**
 * ===================================================================
 * CONSTANTES GLOBALES DEL PORTFOLIO
 * ===================================================================
 * Centraliza toda la información, textos, enlaces y proyectos del sitio.
 * Para modificar cualquier dato o añadir URLs de tus proyectos, hazlo aquí.
 */

// -------------------------------------------------------------
// Tipos
// -------------------------------------------------------------
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: { name: string; color: string }[];
  github: string; // Deja vacío ("") para que aparezca como "Próximamente"
  demo: string;   // Deja vacío ("") para que aparezca como "Próximamente"
}

export interface EducationItem {
  title: string;
  subtitle?: string;
  org: string;
  period: string;
  icon: string;
}

export interface CourseItem {
  title: string;
  org: string;
  period: string;
}

export interface SkillItem {
  name: string;
  pct: number;
  color: string;
}

export interface NavLink {
  name: string;
  href: string;
  isCta?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username: string;
}

// -------------------------------------------------------------
// Información Personal
// -------------------------------------------------------------
export const PERSONAL_INFO = {
  name: 'Jimena Gramajo',
  firstName: 'Jimena',
  lastName: 'Gramajo',
  brandName: 'Gramajooo',
  role: 'Diseño & Desarrollo Web',
  location: 'Guatemala',
  career: 'Ingeniería en Ciencias y Sistemas',
  careerSemester: '5to semestre',
  university: 'Universidad de San Carlos de Guatemala',
  universityShort: 'USAC',
  school: 'Colegio CED - IECA',
  email: 'jiimenagramajo@gmail.com',
  languages: 'Español',
  statusBadge: 'Open to work',
  bioShort:
    'Estudiante de Ingeniería en Ciencias y Sistemas, apasionada por crear experiencias digitales únicas combinando código limpio con diseño atractivo.',
  bioAbout:
    'Hola 👋 Mi nombre es Jimena Gramajo, soy estudiante de Ingeniería en Ciencias y Sistemas en la Universidad de San Carlos de Guatemala. Me apasiona el diseño y el desarrollo web. Disfruto construir interfaces atractivas y funcionales, siempre buscando aprender nuevas tecnologías y mejores prácticas para crecer como desarrolladora.',
} as const;

// -------------------------------------------------------------
// Enlaces de Navegación
// -------------------------------------------------------------
export const NAV_LINKS: NavLink[] = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'About', href: '#about' },
  { name: 'Formación', href: '#formacion' },
  { name: 'Portafolio', href: '#portafolio' },
  { name: 'Contacto', href: '#contacto', isCta: true },
];

// -------------------------------------------------------------
// Redes Sociales
// -------------------------------------------------------------
export const SOCIAL_LINKS: Record<string, SocialLink> = {
  github: {
    name: 'GitHub',
    url: 'https://github.com/Gramajooo',
    icon: 'fab fa-github',
    username: 'github.com/Gramajooo',
  },
  linkedin: {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jimena-gramajo-3b50321a3',
    icon: 'fab fa-linkedin-in',
    username: 'Jimena Gramajo',
  },
  twitter: {
    name: 'Twitter',
    url: 'https://twitter.com/Srta_Ozera_',
    icon: 'fab fa-twitter',
    username: '@Srta_Ozera_',
  },
};

// -------------------------------------------------------------
// Tarjetas de Estadísticas (Sección About)
// -------------------------------------------------------------
export const ABOUT_STATS = [
  { value: '+6', label: 'Proyectos web', highlight: true },
  { value: 'USAC', label: 'Ingeniería en Sistemas', highlight: false },
];

export const ABOUT_DETAILS = [
  { icon: 'fas fa-map-marker-alt', label: 'Ubicación', value: PERSONAL_INFO.location },
  { icon: 'fas fa-graduation-cap', label: 'Carrera', value: 'Ing. en Sistemas' },
  { icon: 'fas fa-envelope', label: 'Email', value: PERSONAL_INFO.email },
  { icon: 'fas fa-language', label: 'Idiomas', value: PERSONAL_INFO.languages },
];

// -------------------------------------------------------------
// Formación: Tabs
// -------------------------------------------------------------
export const FORMACION_TABS = [
  { id: 'educacion', label: 'Educación', icon: 'fas fa-graduation-cap' },
  { id: 'experiencia', label: 'Experiencia', icon: 'fas fa-briefcase' },
  { id: 'skills', label: 'Skills', icon: 'fas fa-code' },
  { id: 'cursos', label: 'Cursos', icon: 'fas fa-certificate' },
] as const;

// -------------------------------------------------------------
// Educación
// -------------------------------------------------------------
export const EDUCACION: EducationItem[] = [
  {
    title: 'Ingeniería en Ciencias y Sistemas',
    subtitle: '5to semestre',
    org: 'Universidad de San Carlos de Guatemala',
    period: '2015 — Actualmente',
    icon: 'fas fa-university',
  },
  {
    title: 'Bachiller en Computación',
    subtitle: '',
    org: 'Colegio CED - IECA',
    period: '2012 — 2013',
    icon: 'fas fa-school',
  },
];

// -------------------------------------------------------------
// Experiencia
// -------------------------------------------------------------
export const EXPERIENCIA_INFO = {
  title: '¡En busca de mi primera oportunidad!',
  description:
    'Soy estudiante activa buscando mi primera experiencia profesional en desarrollo web. ¿Hablamos?',
  ctaText: 'Contáctame',
  ctaHref: '#contacto',
};

// -------------------------------------------------------------
// Habilidades (Skills)
// -------------------------------------------------------------
export const SKILLS: Record<string, SkillItem[]> = {
  Tecnologías: [
    { name: 'HTML5', pct: 40, color: '#F64803' },
    { name: 'CSS3', pct: 40, color: '#2277FF' },
    { name: 'JavaScript', pct: 10, color: '#F7DF1E' },
    { name: 'jQuery', pct: 5, color: '#0769AD' },
    { name: 'Bootstrap', pct: 20, color: '#5C3D87' },
    { name: 'Less', pct: 10, color: '#1D365D' },
    { name: 'Sass', pct: 5, color: '#C66395' },
    { name: 'Java', pct: 70, color: '#EF0204' },
    { name: 'C#', pct: 40, color: '#2A0164' },
    { name: 'SQL', pct: 20, color: '#A41C21' },
    { name: 'Python', pct: 30, color: '#3775A8' },
    { name: 'TypeScript', pct: 5, color: '#017ACB' },
  ],
  Herramientas: [
    { name: 'Git & GitHub', pct: 80, color: '#E93A2D' },
    { name: 'Android Studio', pct: 30, color: '#9FC137' },
    { name: 'Visual Studio', pct: 50, color: '#825CC0' },
    { name: 'NetBeans', pct: 70, color: '#7997CC' },
  ],
};

// -------------------------------------------------------------
// Cursos Adicionales
// -------------------------------------------------------------
export const CURSOS: CourseItem[] = [
  {
    title: 'Fundamentos de JavaScript',
    org: 'Crehana.com',
    period: 'Mayo 2020',
  },
  {
    title: 'Git y GitHub: Control de versiones en Proyectos Web',
    org: 'Crehana.com',
    period: 'Abril 2020',
  },
  {
    title: 'Introducción al Desarrollo Web Front-End: HTML y CSS',
    org: 'Crehana.com',
    period: 'Abril 2020',
  },
  {
    title: 'Desarrollo de Aplicaciones Móviles para Android',
    org: 'INTECAP | CENTRO TICS',
    period: 'Marzo–Junio 2019',
  },
  {
    title: 'Desarrollo de Aplicaciones Web con ASP.NET',
    org: 'INTECAP | CENTRO TICS',
    period: 'Febrero–Septiembre 2014',
  },
];

// -------------------------------------------------------------
// Proyectos (Portafolio)
// NOTA: Deja las URLs en blanco ("") para que se deshabiliten
// automáticamente hasta que decidas agregarlas.
// -------------------------------------------------------------
export const PROJECTS: Project[] = [
  {
    id: 'chef',
    title: 'Chef',
    image: '/img/projectChef.png',
    description: 'Sitio web de recetas y gastronomía con diseño moderno y navegación fluida.',
    tags: [
      { name: 'HTML5', color: '#F64803' },
      { name: 'CSS3', color: '#2277FF' },
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'Less', color: '#1D365D' },
    ],
    github: '', // Agrega aquí la URL de GitHub (ej: "https://github.com/Gramajooo/ProjectJs")
    demo: '',   // Agrega aquí la URL de la web en vivo (ej: "https://gramajooo.github.io/ProjectJs/")
  },
  {
    id: 'platzivideo',
    title: 'PlatziVideo',
    image: '/img/projectPlatziVideo.png',
    description: 'Plataforma de streaming con diseño inspirado en servicios de video modernos.',
    tags: [
      { name: 'HTML5', color: '#F64803' },
      { name: 'CSS3', color: '#2277FF' },
      { name: 'Sass', color: '#C66395' },
    ],
    github: '', // Agrega aquí la URL de GitHub
    demo: '',   // Agrega aquí la URL de la web en vivo
  },
  {
    id: 'storefoodmovil',
    title: 'Store Food Movil',
    image: '/img/projectFood.png',
    description: 'Tienda de comida móvil con diseño responsivo y experiencia de usuario optimizada.',
    tags: [
      { name: 'HTML5', color: '#F64803' },
      { name: 'CSS3', color: '#2277FF' },
      { name: 'Bootstrap', color: '#5C3D87' },
      { name: 'Sass', color: '#C66395' },
    ],
    github: '', // Agrega aquí la URL de GitHub
    demo: '',   // Agrega aquí la URL de la web en vivo
  },
  {
    id: 'gramajooo-legacy',
    title: 'Gramajooo',
    image: '/img/projectJG.png',
    description: 'Portfolio personal primera versión — base del actual sitio web.',
    tags: [
      { name: 'HTML5', color: '#F64803' },
      { name: 'CSS3', color: '#2277FF' },
      { name: 'Bootstrap', color: '#5C3D87' },
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'Less', color: '#1D365D' },
    ],
    github: '', // Agrega aquí la URL de GitHub
    demo: '',   // Agrega aquí la URL de la web en vivo
  },
  {
    id: 'jgdesserts',
    title: 'JG Desserts',
    image: '/img/projectDesserts.png',
    description: 'Landing page de postres con galería visual y paleta de colores pastel.',
    tags: [
      { name: 'HTML5', color: '#F64803' },
      { name: 'CSS3', color: '#2277FF' },
      { name: 'Bootstrap', color: '#5C3D87' },
    ],
    github: '', // Agrega aquí la URL de GitHub
    demo: '',   // Agrega aquí la URL de la web en vivo
  },
  {
    id: 'error404',
    title: 'Error 404',
    image: '/img/projectError.png',
    description: 'Página de error 404 creativa y animada con experiencia de usuario amigable.',
    tags: [
      { name: 'HTML5', color: '#F64803' },
      { name: 'CSS3', color: '#2277FF' },
      { name: 'Bootstrap', color: '#5C3D87' },
    ],
    github: '', // Agrega aquí la URL de GitHub
    demo: '',   // Agrega aquí la URL de la web en vivo
  },
];

// -------------------------------------------------------------
// Contacto
// -------------------------------------------------------------
export const CONTACTO_INFO = {
  endpoint: 'https://formspree.io/f/jiimenagramajo@gmail.com',
  title: '¿Tienes un proyecto?',
  subtitle: 'Estoy disponible para oportunidades freelance y trabajo en equipo. ¡Envíame un mensaje!',
  successMessage: '✅ ¡Mensaje enviado con éxito! Te responderé lo antes posible.',
  errorMessage: '❌ Hubo un error al enviar el mensaje. Por favor intenta de nuevo o escríbeme directamente.',
};


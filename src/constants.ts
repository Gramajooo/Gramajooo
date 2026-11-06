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
  github: string;
  demo: string;
}

export interface CourseItem {
  title: string;
  org: string;
  period: string;
}

export interface SkillItem {
  name: string;
  icon: string;
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
  role: 'Desarrolladora Frontend',
  location: 'Guatemala',
  career: 'Ingeniería en Ciencias y Sistemas',
  careerSemester: '5to semestre',
  university: 'Universidad de San Carlos de Guatemala',
  universityShort: 'USAC',
  school: 'Colegio CED - IECA',
  email: 'gramajooo.dev@gmail.com',
  languages: 'Español',
  statusBadge: 'Disponible para trabajar',
  bioShort:
    'Desarrolladora Frontend con 4 años de experiencia construyendo aplicaciones web con React y TypeScript, dashboards, tablas de datos y componentes centrados en UX.',
  bioAbout:
    'Desarrolladora Frontend con 4 años de experiencia construyendo aplicaciones web con React con TypeScript. Experiencia en desarrollo de funcionalidades administrativas, dashboards, tablas de datos, formularios y componentes orientados a mejorar la experiencia de usuario. Con conocimientos complementarios de Next.js y diseño UI/UX con Figma.',
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
// Redes Sociales (sin Twitter)
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
};

// -------------------------------------------------------------
// Tarjetas de Estadísticas (Sección About)
// -------------------------------------------------------------
export const ABOUT_STATS = [
  { value: '4+', label: 'Años de experiencia', highlight: true },
];

export const ABOUT_DETAILS = [
  { icon: 'fas fa-map-marker-alt', label: 'Ubicación', value: PERSONAL_INFO.location },
  { icon: 'fas fa-laptop-code', label: 'Especialidad', value: 'React & TypeScript' },
  { icon: 'fas fa-envelope', label: 'Email', value: PERSONAL_INFO.email },
  { icon: 'fas fa-language', label: 'Idiomas', value: PERSONAL_INFO.languages },
];

// -------------------------------------------------------------
// Formación: Tabs (sin Educación)
// -------------------------------------------------------------
export const FORMACION_TABS = [
  { id: 'experiencia', label: 'Experiencia', icon: 'fas fa-briefcase' },
  { id: 'skills', label: 'Habilidades Técnicas', icon: 'fas fa-code' },
  { id: 'cursos', label: 'Formación Complementaria', icon: 'fas fa-certificate' },
] as const;

// -------------------------------------------------------------
// Experiencia
// -------------------------------------------------------------
export const EXPERIENCIA_INFO = {
  role: 'Desarrolladora Frontend',
  years: '4 años de experiencia',
  description:
    'Desarrolladora Frontend con 4 años de experiencia construyendo aplicaciones web con React con TypeScript. Experiencia en desarrollo de funcionalidades administrativas, dashboards, tablas de datos, formularios y componentes orientados a mejorar la experiencia de usuario. Con conocimientos complementarios de Next.js y diseño UI/UX con Figma.',
  skillsHighlighted: [
    { title: 'React & TypeScript', desc: 'Desarrollo de aplicaciones web escalables y modulares.' },
    { title: 'Dashboards & Tablas de datos', desc: 'Manejo de estados complejos y visualización de datos.' },
    { title: 'Formularios & UX', desc: 'Validaciones avanzadas y componentes orientados a la mejor experiencia.' },
    { title: 'Next.js & Figma', desc: 'Conocimientos complementarios y prototipado visual UI/UX.' },
  ],
};

// -------------------------------------------------------------
// Habilidades Técnicas (con iconos, sin barras de progreso)
// -------------------------------------------------------------
export const SKILLS: Record<string, SkillItem[]> = {
  'Frontend': [
    { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
    { name: 'NextJs', icon: 'fas fa-bolt', color: '#FFFFFF' },
    { name: 'TypeScript', icon: 'fas fa-code', color: '#3178C6' },
    { name: 'HTML', icon: 'fab fa-html5', color: '#E34F26' },
    { name: 'CSS', icon: 'fab fa-css3-alt', color: '#1572B6' },
    { name: 'Tailwind CSS', icon: 'fab fa-css3', color: '#38BDF8' },
  ],
  'Herramientas y programas': [
    { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
    { name: 'GitHub', icon: 'fab fa-github', color: '#FFFFFF' },
    { name: 'Bitbucket', icon: 'fab fa-bitbucket', color: '#0052CC' },
    { name: 'Jira', icon: 'fab fa-jira', color: '#0052CC' },
    { name: 'Figma', icon: 'fab fa-figma', color: '#F24E1E' },
    { name: 'Keycloak', icon: 'fas fa-key', color: '#0088CE' },
    { name: 'CI/CD', icon: 'fas fa-infinity', color: '#4EAA25' },
  ],
};

// -------------------------------------------------------------
// Formación Complementaria (Cursos)
// -------------------------------------------------------------
export const CURSOS: CourseItem[] = [
  {
    title: 'Tailwind CSS',
    org: 'Midu.dev',
    period: 'Mayo 2026',
  },
  {
    title: 'Astro y Headless CMS',
    org: 'Midu.dev',
    period: 'Abril 2026',
  },
  {
    title: 'Unit Testing con Jest',
    org: 'Platzi',
    period: 'Marzo 2023',
  },
];

// -------------------------------------------------------------
// Proyectos (Portafolio)
// -------------------------------------------------------------
export const PROJECTS: Project[] = [
  {
    id: 'devjobs',
    title: 'Devjobs',
    image: '/img/projectDevjobs.webp',
    description:
      'Plataforma web para desarrolladores diseñada para explorar, filtrar y postular a vacantes de empleo tecnológico con búsqueda en tiempo real e interfaz moderna.',
    tags: [
      { name: 'React 19', color: '#61DAFB' },
      { name: 'Tailwind CSS', color: '#06B6D4' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'React Router', color: '#CA4245' },
    ],
    github: 'https://github.com/Gramajooo/dev-jobs',
    demo: 'https://webdevjobs.netlify.app/',
  },
];

// -------------------------------------------------------------
// Contacto
// -------------------------------------------------------------
export const CONTACTO_INFO = {
  title: '¿Conectamos?',
  subtitle: 'Puedes encontrarme y ponerte en contacto directamente a través de mis redes y correo electrónico.',
};

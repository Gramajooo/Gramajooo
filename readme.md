# Gramajooo — Portfolio 🌸

> Sitio web de portafolio personal construido con **Astro** y **Tailwind CSS**.

---

## 👩‍💻 Sobre mí

Hola, soy **Jimena Gramajo**, Desarrolladora Frontend con 4 años de experiencia construyendo aplicaciones web con React y TypeScript. Experiencia en desarrollo de funcionalidades administrativas, dashboards, tablas de datos, formularios y componentes orientados a mejorar la experiencia de usuario. Con conocimientos complementarios de Next.js y diseño UI/UX con Figma.

🌐 **Demo:** [gramajooo.github.io](https://gramajooo.github.io/Gramajooo/)

📬 **Contacto:**
[LinkedIn](https://www.linkedin.com/in/jimena-gramajo-3b50321a3) · [GitHub](https://github.com/Gramajooo) · [Email](mailto:gramajooo.dev@gmail.com)

---

## 🛠️ Stack tecnológico

| Tecnología | Uso |
|---|---|
| [Astro 5](https://astro.build) | Framework principal (SSG) |
| [Tailwind CSS 3](https://tailwindcss.com) | Estilos utility-first |
| [pnpm](https://pnpm.io) | Gestor de paquetes |
| Font Awesome 6 | Iconografía |
| Google Fonts (Inter + Playfair Display) | Tipografía |

---

## 📁 Estructura del proyecto

```
/
├── public/
│   ├── img/              ← Imágenes (perfil, proyectos)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.astro      ← Navbar fijo con glassmorphism
│   │   ├── Hero.astro        ← Sección de portada animada
│   │   ├── About.astro       ← Sección sobre mí
│   │   ├── Formacion.astro   ← Experiencia, Skills y Cursos (tabs)
│   │   ├── Portfolio.astro   ← Showcase de proyectos
│   │   ├── Contacto.astro    ← Formulario de contacto
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro      ← Layout base HTML
│   ├── pages/
│   │   └── index.astro       ← Página principal
│   ├── styles/
│   │   └── global.css        ← Tailwind + estilos base
│   └── constants.ts          ← Datos centralizados (proyectos, info, etc.)
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## 🚀 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto con **pnpm**:

| Comando | Acción |
|---|---|
| `pnpm install` | Instala las dependencias |
| `pnpm dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Genera el sitio estático en `./dist/` |
| `pnpm preview` | Previsualiza el build localmente |

---

## ✨ Características

- 🌙 **Tema oscuro** profesional con acentos rosa/violeta
- 🎞️ **Animaciones** suaves — scroll reveal, rings giratorios, chips flotantes
- 📱 **Responsivo** — diseño mobile-first adaptado a todos los tamaños
- 🃏 **Glassmorphism** con gradientes modernos
- ⚡ **Estático** — generado con Astro SSG, sin JavaScript innecesario en cliente
- 📧 **Formulario de contacto** integrado con Formspree (`gramajooo.dev@gmail.com`)

---

<p align="center">
  Hecho con 💖 por <strong>Jimena Gramajo</strong>
</p>

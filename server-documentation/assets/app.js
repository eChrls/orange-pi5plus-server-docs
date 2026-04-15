// ============================================================================
// DOCUMENTACIÓN ORANGE PI 5 PLUS - JavaScript Funcional
// Versión final con rutas correctas y traducciones completas
// ============================================================================

// Configuración y variables globales - COMO EN EL ORIGINAL
// CHAPTERS array con rutas bilingües
const CHAPTERS = [
  {
    id: "introduccion",
    title: {
      es: "1. Introducción y objetivos",
      en: "1. Introduction and goals",
    },
    subtitle: {
      es: "Contexto, objetivos y alcance",
      en: "Context, goals, and scope",
    },
    icon: "fas fa-rocket",
    file: {
      es: "chapters/es/01-introduccion.md",
      en: "chapters/en/01-introduction.md",
    },
    completed: true,
    category: "infraestructura",
    readTime: "5 min",
  },
  {
    id: "hardware",
    title: {
      es: "2. Elección de hardware",
      en: "2. Hardware choice",
    },
    subtitle: {
      es: "Criterios, consumo y dimensionado",
      en: "Criteria, power, and sizing",
    },
    icon: "fas fa-microchip",
    file: {
      es: "chapters/es/02-hardware-specs.md",
      en: "chapters/en/02-hardware-specs.md",
    },
    completed: true,
    category: "infraestructura",
    readTime: "8 min",
  },
  {
    id: "arquitectura",
    title: {
      es: "3. Arquitectura del sistema",
      en: "3. System architecture",
    },
    subtitle: {
      es: "Capas, redes y flujo de servicios",
      en: "Layers, networks, and service flow",
    },
    icon: "fas fa-sitemap",
    file: {
      es: "chapters/es/03-ubuntu-setup.md",
      en: "chapters/en/03-ubuntu-setup.md",
    },
    completed: true,
    category: "infraestructura",
    readTime: "10 min",
  },
  {
    id: "network-security",
    title: {
      es: "4. Seguridad base",
      en: "4. Security baseline",
    },
    subtitle: {
      es: "Acceso seguro, firewall y HTTPS",
      en: "Secure access, firewall, and HTTPS",
    },
    icon: "fas fa-shield-alt",
    file: {
      es: "chapters/es/04-network-security.md",
      en: "chapters/en/04-network-security.md",
    },
    completed: true,
    category: "seguridad",
    readTime: "12 min",
  },
  {
    id: "docker-services",
    title: {
      es: "5. Docker y gestión de servicios",
      en: "5. Docker and service management",
    },
    subtitle: {
      es: "Compose, volúmenes y redes",
      en: "Compose, volumes, and networks",
    },
    icon: "fab fa-docker",
    file: {
      es: "chapters/es/05-docker-services.md",
      en: "chapters/en/05-docker-services.md",
    },
    completed: true,
    category: "desarrollo",
    readTime: "15 min",
  },
  {
    id: "portfolio-deploy",
    title: {
      es: "6. Despliegue y selfhosting",
      en: "6. Deployment and self-hosting",
    },
    subtitle: {
      es: "Publicación, validación y rollback",
      en: "Publishing, validation, and rollback",
    },
    icon: "fas fa-globe",
    file: {
      es: "chapters/es/06-portfolio-deploy.md",
      en: "chapters/en/06-portfolio-deploy.md",
    },
    completed: true,
    category: "desarrollo",
    readTime: "11 min",
  },
  {
    id: "faq-troubleshooting",
    title: {
      es: "7. FAQ y Troubleshooting",
      en: "7. FAQ and Troubleshooting",
    },
    subtitle: {
      es: "Errores frecuentes y recuperación",
      en: "Common failures and recovery",
    },
    icon: "fas fa-tools",
    file: {
      es: "chapters/es/08-troubleshooting.md",
      en: "chapters/en/08-troubleshooting.md",
    },
    completed: true,
    category: "seguridad",
    readTime: "10 min",
  },
];

// Variables de estado - SIMPLIFICADAS COMO EN EL ORIGINAL
let currentChapter = null;
let darkMode = true;
let searchVisible = false;
let currentLanguage = "es";
let carouselIndex = 0;
let carouselTimer = null;

// Imágenes del carrusel - RUTAS CORREGIDAS PARA ASSETS/IMAGES/
// Cambiar esto en assets/app.js:
const CAROUSEL_IMAGES = [
  {
    src: "assets/images/orange1.jpg",
    alt: "Orange Pi 5 Plus Hardware Anatomy",
    caption:
      "Anatomía del hardware Orange Pi 5 Plus con componentes principales señalizados",
  },
  {
    src: "assets/images/orange2.jpg",
    alt: "Orange Pi 5 Plus Rockchip",
    caption:
      "Placa base Orange Pi 5 Plus con microchip Rockchip RK3588 recién recibida",
  },
  {
    src: "assets/images/orange3.jpg",
    alt: "Orange Pi 5 Plus Assembled",
    caption: "Orange Pi 5 Plus completamente montada con carcasa de aluminio",
  },
  {
    src: "assets/images/orange4.jpg",
    alt: "Orange Pi 5 Plus Kit Unboxing",
    caption: "Kit completo Orange Pi 5 Plus sin montar - contenido de la caja",
  },
  {
    src: "assets/images/docker.jpg",
    alt: "Docker Services Running",
    caption: "Servicios Docker ejecutándose: Seafile, Portainer, MySQL y más",
  },
];

// Textos multiidioma - COMPLETOS PARA INGLÉS
const TEXTS = {
  es: {
    contenido: "Contenido",
    progreso: "Progreso",
    completados: "Guía principal completada",
    tituloServidor: "Servidor Orange Pi 5 Plus",
    descripcionHero:
      "Guía base desde cero para diseñar, securizar y operar un servidor self-hosted con Ubuntu Server 24.04 y Docker.",
    infraestructura: "Infraestructura",
    desarrollo: "Desarrollo",
    seguridad: "Seguridad",
    tresCapitulos: "3 capítulos",
    dosCapitulos: "2 capítulos",
    descripcionInfraestructura:
      "Hardware, arquitectura y criterios para una base estable de selfhosting",
    descripcionDesarrollo:
      "Docker, despliegue y operación por fases con enfoque mantenible",
    descripcionSeguridad:
      "Controles base, HTTPS y troubleshooting de referencia",
    verHardware: "Ver especificaciones hardware →",
    verDocker: "Ver servicios Docker →",
    verSeguridad: "Ver configuración de red y seguridad →",
    infoProyecto: "Información del proyecto",
    intermedio: "Intermedio",
    volver: "Volver",
    anterior: "Anterior",
    siguiente: "Siguiente",
    buscarPlaceholder: "Buscar en capítulos...",
    sinResultados: "No se encontraron resultados",
    seleccionarCapitulo:
      "Selecciona un capítulo del menú lateral para comenzar la exploración",
    usarCtrlK: "para buscar",
    usarFlechas: "para navegar",
    lectura: "lectura",
    capitulos: "capítulos",
    nivel: "nivel",
    practico: "práctico",
  },
  en: {
    contenido: "Content",
    progreso: "Progress",
    completados: "Core guide completed",
    tituloServidor: "Orange Pi 5 Plus Server",
    descripcionHero:
      "A practical from-scratch guide to design, secure, and run a self-hosted server with Ubuntu Server 24.04 and Docker.",
    infraestructura: "Infrastructure",
    desarrollo: "Development",
    seguridad: "Security",
    tresCapitulos: "3 chapters",
    dosCapitulos: "2 chapters",
    descripcionInfraestructura:
      "Hardware, architecture, and criteria for a stable self-hosting baseline",
    descripcionDesarrollo:
      "Docker, deployment, and phased operations with maintainability focus",
    descripcionSeguridad:
      "Baseline controls, HTTPS, and reference troubleshooting",
    verHardware: "View hardware specifications →",
    verDocker: "View Docker services →",
    verSeguridad: "View network and security configuration →",
    infoProyecto: "Project information",
    intermedio: "Intermediate",
    volver: "Back",
    anterior: "Previous",
    siguiente: "Next",
    buscarPlaceholder: "Search in chapters...",
    sinResultados: "No results found",
    seleccionarCapitulo: "Select a chapter from the sidebar to start exploring",
    usarCtrlK: "to search",
    usarFlechas: "to navigate",
    lectura: "reading",
    capitulos: "chapters",
    nivel: "level",
    practico: "practical",
  },
};

// ============================================================================
// INICIALIZACIÓN - COMO EN EL ORIGINAL PERO MEJORADO
// ============================================================================

document.addEventListener("DOMContentLoaded", function () {
  console.log("🚀 Iniciando documentación Orange Pi 5 Plus...");
  initializeApp();

  // Header clickeable para volver al inicio - FUNCIONAL
  const headerTitle = document.getElementById("headerTitle");
  if (headerTitle) {
    headerTitle.addEventListener("click", showWelcomeScreen);
    headerTitle.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        showWelcomeScreen();
      }
    });
  }

  // Configurar tema al cargar
  setupThemeOnLoad();
});

function setupThemeOnLoad() {
  const savedDarkMode = localStorage.getItem("darkMode");
  if (savedDarkMode !== null) {
    darkMode = savedDarkMode === "true";
  }
  applyTheme();
}

function applyTheme() {
  const themeIcon = document.getElementById("themeIcon");
  if (darkMode) {
    document.body.classList.remove("light-theme");
    if (themeIcon) themeIcon.className = "fas fa-moon";
  } else {
    document.body.classList.add("light-theme");
    if (themeIcon) themeIcon.className = "fas fa-sun";
  }
}

function initializeApp() {
  setupNavigation();
  setupEventListeners();
  updateProgress();
  setupSearch();
  setupCarousel();
  setupKeyboardShortcuts();
  setupLanguage();
  updateTexts();

  // Cargar capítulo desde URL si existe
  const urlParams = new URLSearchParams(window.location.search);
  const chapterParam = urlParams.get("chapter");
  if (chapterParam) {
    loadChapter(chapterParam);
  }
}

// ============================================================================
// NAVEGACIÓN - FUNCIONAL COMO EL ORIGINAL
// ============================================================================

// Función setupNavigation actualizada
function setupNavigation() {
  const navigationMenu = document.getElementById("navigationMenu");
  if (!navigationMenu) return;

  navigationMenu.innerHTML = "";

  CHAPTERS.forEach((chapter, index) => {
    const navItem = document.createElement("li");
    navItem.innerHTML = `
            <div class="nav-item ${chapter.completed ? "chapter-completed" : "chapter-pending"}"
                 data-chapter="${chapter.id}">
                <i class="${chapter.icon}"></i>
                <div>
                    <div class="font-medium">${chapter.title[currentLanguage]}</div>
                    <div class="text-xs text-slate-400 mt-1">${chapter.readTime}</div>
                </div>
            </div>
        `;
    navigationMenu.appendChild(navItem);
  });

  console.log("✅ Navegación creada con", CHAPTERS.length, "capítulos");
}

// Función loadMarkdownContent actualizada
async function loadMarkdownContent(filePath) {
  const contentContainer = document.getElementById("markdownContent");
  if (!contentContainer) return;

  try {
    contentContainer.innerHTML =
      '<div class="flex justify-center py-8"><div class="spinner"></div></div>';

    console.log("📄 Cargando archivo:", filePath);

    const response = await fetch(filePath);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const markdownText = await response.text();

    if (!markdownText.trim()) {
      throw new Error("El archivo está vacío");
    }

    let htmlContent;
    if (typeof marked !== "undefined") {
      htmlContent = marked.parse(markdownText);
    } else {
      htmlContent = `<pre class="whitespace-pre-wrap">${markdownText}</pre>`;
    }

    contentContainer.innerHTML = htmlContent;
    contentContainer.scrollIntoView({ behavior: "smooth", block: "start" });

    console.log("✅ Contenido markdown cargado correctamente");
  } catch (error) {
    console.error("❌ Error al cargar markdown:", error);
    contentContainer.innerHTML = `
            <div class="bg-red-900/20 border border-red-500/50 rounded-lg p-6 text-red-300">
                <h3 class="text-lg font-semibold mb-2">Error al cargar el contenido</h3>
                <p><strong>Archivo:</strong> ${filePath}</p>
                <p><strong>Error:</strong> ${error.message}</p>
                <p class="mt-4 text-sm opacity-75">
                    Verifica que el archivo existe y es accesible desde el navegador.
                </p>
            </div>
        `;
  }
}

// Función loadChapter actualizada
function loadChapter(chapterId) {
  const chapter = CHAPTERS.find((ch) => ch.id === chapterId);
  if (!chapter) {
    console.error("Capítulo no encontrado:", chapterId);
    return;
  }

  currentChapter = chapter;

  const url = new URL(window.location);
  url.searchParams.set("chapter", chapterId);
  window.history.pushState({}, "", url);

  showChapterContent();
  updateActiveNavigation(chapterId);

  // AQUÍ ESTÁ LA CLAVE: usar el idioma actual
  loadMarkdownContent(chapter.file[currentLanguage]);

  updateChapterInfo(chapter);
  closeMobileSidebar();

  console.log("📖 Capítulo cargado:", chapter.title[currentLanguage]);
}

// Función updateChapterInfo actualizada
function updateChapterInfo(chapter) {
  const chapterTitle = document.getElementById("chapterTitle");
  const chapterSubtitle = document.getElementById("chapterSubtitle");
  const chapterProgress = document.getElementById("chapterProgress");

  if (chapterTitle) chapterTitle.textContent = chapter.title[currentLanguage];
  if (chapterSubtitle)
    chapterSubtitle.textContent = chapter.subtitle[currentLanguage];

  if (chapterProgress) {
    const chapterIndex = CHAPTERS.findIndex((ch) => ch.id === chapter.id) + 1;
    const progressText =
      currentLanguage === "es"
        ? `Capítulo ${chapterIndex} de ${CHAPTERS.length}`
        : `Chapter ${chapterIndex} of ${CHAPTERS.length}`;
    chapterProgress.textContent = progressText;
  }

  updateNavigationButtons();
}

function setupEventListeners() {
  // Navegación de capítulos - FUNCIONAL
  document.addEventListener("click", function (e) {
    const navItem = e.target.closest(".nav-item");
    if (navItem) {
      const chapterId = navItem.dataset.chapter;
      loadChapter(chapterId);
    }
  });

  // Botón volver - FUNCIONAL
  const backBtn = document.getElementById("backButton");
  if (backBtn) backBtn.addEventListener("click", showWelcomeScreen);

  // Toggle tema - FUNCIONAL
  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn)
    themeBtn.addEventListener("click", function () {
      darkMode = !darkMode;
      localStorage.setItem("darkMode", darkMode);
      applyTheme();
      showNotification(
        darkMode ? "Modo oscuro activado" : "Modo claro activado",
        "success",
      );
    });

  // Toggle búsqueda - FUNCIONAL
  const searchBtn = document.getElementById("searchToggle");
  if (searchBtn) searchBtn.addEventListener("click", toggleSearch);

  // Navegación entre capítulos - FUNCIONAL
  const prevBtn = document.getElementById("prevChapter");
  if (prevBtn) prevBtn.addEventListener("click", goToPreviousChapter);

  const nextBtn = document.getElementById("nextChapter");
  if (nextBtn) nextBtn.addEventListener("click", goToNextChapter);

  // Búsqueda - FUNCIONAL
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", performSearch);
    searchInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        const firstResult = document.querySelector(".search-result-item");
        if (firstResult) firstResult.click();
      }
    });
  }

  // Selector de idioma - FUNCIONAL
  const languageToggle = document.getElementById("languageToggle");
  const languageMenu = document.getElementById("languageMenu");

  if (languageToggle && languageMenu) {
    languageToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      languageMenu.classList.toggle("hidden");
    });

    document.addEventListener("click", function (e) {
      if (!languageToggle.contains(e.target)) {
        languageMenu.classList.add("hidden");
      }
    });
  }

  // Sidebar responsive - FUNCIONAL
  setupResponsiveSidebar();
}

// ============================================================================
// CARGAR CAPÍTULOS - FUNCIONAL COMO EL ORIGINAL
// ============================================================================

function loadChapter(chapterId) {
  const chapter = CHAPTERS.find((ch) => ch.id === chapterId);
  if (!chapter) {
    console.error("Capítulo no encontrado:", chapterId);
    return;
  }

  currentChapter = chapter;

  // Actualizar URL sin recargar página
  const url = new URL(window.location);
  url.searchParams.set("chapter", chapterId);
  window.history.pushState({}, "", url);

  // Mostrar contenido del capítulo
  showChapterContent();

  // Actualizar navegación activa
  updateActiveNavigation(chapterId);

  loadMarkdownContent(chapter.file[currentLanguage]);

  // Actualizar información del capítulo
  updateChapterInfo(chapter);

  // Cerrar sidebar en móvil
  closeMobileSidebar();

  console.log("📖 Capítulo cargado:", chapter.title);
}

function showWelcomeScreen() {
  document.getElementById("welcomeScreen").classList.remove("hidden");
  document.getElementById("chapterContent").classList.add("hidden");

  currentChapter = null;

  // Limpiar URL
  const url = new URL(window.location);
  url.searchParams.delete("chapter");
  window.history.pushState({}, "", url);

  // Limpiar navegación activa
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active");
  });

  console.log("🏠 Mostrando pantalla de bienvenida");
}

function showChapterContent() {
  document.getElementById("welcomeScreen").classList.add("hidden");
  document.getElementById("chapterContent").classList.remove("hidden");
  document.getElementById("chapterContent").classList.add("fade-in");
}

function updateActiveNavigation(chapterId) {
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active");
  });

  const activeItem = document.querySelector(`[data-chapter="${chapterId}"]`);
  if (activeItem) {
    activeItem.classList.add("active");
  }
}

// ============================================================================
// CARGA DE MARKDOWN - FUNCIONAL COMO EL ORIGINAL
// ============================================================================

async function loadMarkdownContent(filePath) {
  const contentContainer = document.getElementById("markdownContent");
  if (!contentContainer) return;

  try {
    // Mostrar loading
    contentContainer.innerHTML =
      '<div class="flex justify-center py-8"><div class="spinner"></div></div>';

    console.log("📄 Cargando archivo:", filePath);

    const response = await fetch(filePath);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const markdownText = await response.text();

    if (!markdownText.trim()) {
      throw new Error("El archivo está vacío");
    }

    // Convertir markdown a HTML
    let htmlContent;
    if (typeof marked !== "undefined") {
      htmlContent = marked.parse(markdownText);
    } else {
      // Fallback básico
      htmlContent = `<pre class="whitespace-pre-wrap">${markdownText}</pre>`;
    }

    contentContainer.innerHTML = htmlContent;

    // Scroll suave al contenido
    contentContainer.scrollIntoView({ behavior: "smooth", block: "start" });

    console.log("✅ Contenido markdown cargado correctamente");
  } catch (error) {
    console.error("❌ Error al cargar markdown:", error);
    contentContainer.innerHTML = `
            <div class="bg-red-900/20 border border-red-500/50 rounded-lg p-6 text-red-300">
                <h3 class="text-lg font-semibold mb-2">Error al cargar el contenido</h3>
                <p><strong>Archivo:</strong> ${filePath}</p>
                <p><strong>Error:</strong> ${error.message}</p>
                <p class="mt-4 text-sm opacity-75">
                    Verifica que el archivo existe y es accesible desde el navegador.
                </p>
            </div>
        `;
  }
}

function updateChapterInfo(chapter) {
  const chapterTitle = document.getElementById("chapterTitle");
  const chapterSubtitle = document.getElementById("chapterSubtitle");
  const chapterProgress = document.getElementById("chapterProgress");

  if (chapterTitle) chapterTitle.textContent = chapter.title[currentLanguage];
  if (chapterSubtitle)
    chapterSubtitle.textContent = chapter.subtitle[currentLanguage];

  if (chapterProgress) {
    const chapterIndex = CHAPTERS.findIndex((ch) => ch.id === chapter.id) + 1;
    const progressText =
      currentLanguage === "es"
        ? `Capítulo ${chapterIndex} de ${CHAPTERS.length}`
        : `Chapter ${chapterIndex} of ${CHAPTERS.length}`;
    chapterProgress.textContent = progressText;
  }

  updateNavigationButtons();
}

function updateNavigationButtons() {
  const prevBtn = document.getElementById("prevChapter");
  const nextBtn = document.getElementById("nextChapter");

  if (!currentChapter || !prevBtn || !nextBtn) return;

  const currentIndex = CHAPTERS.findIndex((ch) => ch.id === currentChapter.id);

  // Botón anterior
  if (currentIndex > 0) {
    prevBtn.classList.remove("hidden");
  } else {
    prevBtn.classList.add("hidden");
  }

  // Botón siguiente
  if (currentIndex < CHAPTERS.length - 1) {
    nextBtn.classList.remove("hidden");
  } else {
    nextBtn.classList.add("hidden");
  }
}

// ============================================================================
// NAVEGACIÓN ENTRE CAPÍTULOS - FUNCIONAL
// ============================================================================

function goToPreviousChapter() {
  if (!currentChapter) return;

  const currentIndex = CHAPTERS.findIndex((ch) => ch.id === currentChapter.id);
  if (currentIndex > 0) {
    loadChapter(CHAPTERS[currentIndex - 1].id);
  }
}

function goToNextChapter() {
  if (!currentChapter) return;

  const currentIndex = CHAPTERS.findIndex((ch) => ch.id === currentChapter.id);
  if (currentIndex < CHAPTERS.length - 1) {
    loadChapter(CHAPTERS[currentIndex + 1].id);
  }
}

// ============================================================================
// BÚSQUEDA - COMPLETAMENTE FUNCIONAL
// ============================================================================

function setupSearch() {
  console.log("🔍 Configurando búsqueda...");
}

function toggleSearch() {
  const searchOverlay = document.getElementById("searchOverlay");
  const searchInput = document.getElementById("searchInput");

  if (!searchVisible) {
    searchOverlay.classList.remove("hidden");
    searchInput.focus();
    searchInput.value = "";
    searchVisible = true;
    document.getElementById("searchResults").innerHTML = "";
  } else {
    closeSearch();
  }
}

function closeSearch() {
  const searchOverlay = document.getElementById("searchOverlay");
  searchOverlay.classList.add("hidden");
  searchVisible = false;
}

function performSearch() {
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const query = searchInput.value.toLowerCase().trim();

  if (query.length < 2) {
    searchResults.innerHTML = "";
    return;
  }

  // Buscar en títulos, subtítulos y categorías adaptado para sistema bilingüe
  const results = CHAPTERS.filter((chapter) => {
    // Obtener título y subtítulo en el idioma actual
    const title = chapter.title[currentLanguage] || chapter.title.es || "";
    const subtitle =
      chapter.subtitle[currentLanguage] || chapter.subtitle.es || "";
    const category = chapter.category || "";

    // Buscar en todos los campos relevantes
    return (
      title.toLowerCase().includes(query) ||
      subtitle.toLowerCase().includes(query) ||
      category.toLowerCase().includes(query)
    );
  });

  if (results.length === 0) {
    searchResults.innerHTML = `
            <div class="p-4 text-center text-slate-400">
                ${TEXTS[currentLanguage].sinResultados}
            </div>
        `;
    return;
  }

  // Mostrar resultados usando el idioma actual
  const resultsHTML = results
    .map(
      (chapter) => `
        <div class="search-result-item" onclick="selectSearchResult('${chapter.id}')">
            <div class="flex items-center space-x-3">
                <div class="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <i class="${chapter.icon} text-blue-400"></i>
                </div>
                <div>
                    <div class="font-medium text-slate-200">${chapter.title[currentLanguage]}</div>
                    <div class="text-sm text-slate-400">${chapter.subtitle[currentLanguage]}</div>
                    <div class="text-xs text-slate-500 mt-1">${chapter.readTime} · ${chapter.category}</div>
                </div>
            </div>
        </div>
    `,
    )
    .join("");

  searchResults.innerHTML = resultsHTML;
}

function selectSearchResult(chapterId) {
  closeSearch();
  loadChapter(chapterId);
}

// ============================================================================
// CARRUSEL DE IMÁGENES - COMPLETAMENTE FUNCIONAL
// ============================================================================

function setupCarousel() {
  const carouselContainer = document.getElementById("imageCarousel");
  if (!carouselContainer) return;

  const carouselHTML = `
        <div class="carrusel-wrapper">
            <div class="carrusel-imagenes" id="carruselImagenes">
                ${CAROUSEL_IMAGES.map(
                  (img, index) => `
                    <div class="imagen-slide ${index === 0 ? "active" : ""}">
                        <img src="${img.src}" alt="${img.alt}" onerror="this.style.display='none'">
                        <div class="imagen-caption">${img.caption}</div>
                    </div>
                `,
                ).join("")}
            </div>

            <button class="carrusel-btn prev" onclick="changeSlide(-1)">
                <i class="fas fa-chevron-left"></i>
            </button>

            <button class="carrusel-btn next" onclick="changeSlide(1)">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>

        <div class="carrusel-indicadores">
            ${CAROUSEL_IMAGES.map(
              (_, index) => `
                <button class="indicador ${index === 0 ? "active" : ""}"
                        onclick="goToSlide(${index})">
                </button>
            `,
            ).join("")}
        </div>
    `;

  carouselContainer.innerHTML = carouselHTML;

  // Iniciar rotación automática
  startCarouselAutoplay();

  console.log("🎠 Carrusel creado con", CAROUSEL_IMAGES.length, "imágenes");
}

function changeSlide(direction) {
  const slides = document.querySelectorAll(".imagen-slide");
  const indicators = document.querySelectorAll(".indicador");

  if (slides.length === 0) return;

  // Remover clase active actual
  slides[carouselIndex].classList.remove("active");
  indicators[carouselIndex].classList.remove("active");

  // Calcular nuevo índice
  carouselIndex = (carouselIndex + direction + slides.length) % slides.length;

  // Agregar clase active al nuevo slide
  slides[carouselIndex].classList.add("active");
  indicators[carouselIndex].classList.add("active");

  // Reiniciar autoplay
  restartCarouselAutoplay();
}

function goToSlide(index) {
  const direction = index - carouselIndex;
  changeSlide(direction);
}

function startCarouselAutoplay() {
  carouselTimer = setInterval(() => {
    changeSlide(1);
  }, 5000); // Cambiar cada 5 segundos
}

function restartCarouselAutoplay() {
  if (carouselTimer) {
    clearInterval(carouselTimer);
  }
  startCarouselAutoplay();
}

// ============================================================================
// ATAJOS DE TECLADO - COMPLETAMENTE FUNCIONAL
// ============================================================================

function setupKeyboardShortcuts() {
  document.addEventListener("keydown", function (e) {
    // Ctrl + K para búsqueda
    if (e.ctrlKey && e.key === "k") {
      e.preventDefault();
      toggleSearch();
      return;
    }

    // Escape para cerrar overlays
    if (e.key === "Escape") {
      if (searchVisible) {
        closeSearch();
      }
      return;
    }

    // Flechas para navegación entre capítulos
    if (currentChapter) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPreviousChapter();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNextChapter();
      }
    }
  });

  console.log("⌨️ Atajos de teclado configurados");
}

// ============================================================================
// IDIOMAS - COMPLETAMENTE FUNCIONAL
// ============================================================================

function setupLanguage() {
  const savedLanguage = localStorage.getItem("language");
  if (savedLanguage && TEXTS[savedLanguage]) {
    currentLanguage = savedLanguage;
  }
  updateCurrentLanguageDisplay();

  // Actualizar placeholder de búsqueda
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.placeholder = TEXTS[currentLanguage].buscarPlaceholder;
  }
}

function changeLanguage(newLanguage) {
  if (TEXTS[newLanguage]) {
    currentLanguage = newLanguage;
    localStorage.setItem("language", currentLanguage);
    updateTexts();
    updateCurrentLanguageDisplay();

    // Actualizar placeholder de búsqueda
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.placeholder = TEXTS[currentLanguage].buscarPlaceholder;
    }

    // Regenerar navegación con nuevos títulos
    setupNavigation();

    // Ocultar menú
    document.getElementById("languageMenu").classList.add("hidden");

    // Recargar capítulo actual si existe
    if (currentChapter) {
      updateChapterInfo(currentChapter);
      // Recargar el contenido en el nuevo idioma
      loadMarkdownContent(currentChapter.file[currentLanguage]);
    }

    // Limpiar resultados de búsqueda si están visibles
    if (searchVisible) {
      const searchResults = document.getElementById("searchResults");
      if (searchResults) {
        searchResults.innerHTML = "";
      }
    }

    const message =
      currentLanguage === "es"
        ? "Idioma cambiado a Español"
        : "Language changed to English";
    showNotification(message, "success");
  }
}

function updateCurrentLanguageDisplay() {
  const currentLanguageElement = document.getElementById("currentLanguage");
  if (currentLanguageElement) {
    currentLanguageElement.textContent = currentLanguage.toUpperCase();
  }
}

function updateTexts() {
  const elements = document.querySelectorAll("[data-text]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-text");
    if (TEXTS[currentLanguage] && TEXTS[currentLanguage][key]) {
      element.textContent = TEXTS[currentLanguage][key];
    }
  });
}

// ============================================================================
// FILTROS POR CATEGORÍA - FUNCIONAL
// ============================================================================

function filterByCategory(category) {
  const chaptersInCategory = CHAPTERS.filter((ch) => ch.category === category);

  if (chaptersInCategory.length > 0) {
    // Cargar el primer capítulo de la categoría
    loadChapter(chaptersInCategory[0].id);
  }
}

// ============================================================================
// SIDEBAR RESPONSIVE - COMPLETAMENTE FUNCIONAL
// ============================================================================

function setupResponsiveSidebar() {
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileOverlay = document.getElementById("mobileOverlay");
  const sidebar = document.getElementById("sidebar");

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", function () {
      sidebar.classList.add("open");
      mobileOverlay.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener("click", closeMobileSidebar);
  }

  console.log("📱 Sidebar responsive configurado");
}

function closeMobileSidebar() {
  const sidebar = document.getElementById("sidebar");
  const mobileOverlay = document.getElementById("mobileOverlay");

  sidebar.classList.remove("open");
  mobileOverlay.classList.add("hidden");
  document.body.style.overflow = "";
}

// ============================================================================
// UTILIDADES Y PROGRESO
// ============================================================================

function updateProgress() {
  const completedChapters = CHAPTERS.filter((ch) => ch.completed).length;
  const totalChapters = CHAPTERS.length;
  const progressPercentage = (completedChapters / totalChapters) * 100;

  const progressBar = document.getElementById("progressBar");
  if (progressBar) {
    progressBar.style.width = `${progressPercentage}%`;
  }
}

function showNotification(message, type = "info") {
  const colors = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
    warning: "bg-yellow-500",
  };

  const notification = document.createElement("div");
  notification.className = `
        fixed top-20 right-4 z-50 px-6 py-3 rounded-lg text-white font-medium
        shadow-lg transform translate-x-full transition-transform duration-300
        ${colors[type]}
    `;
  notification.textContent = message;

  document.body.appendChild(notification);

  // Mostrar notificación
  setTimeout(() => {
    notification.classList.remove("translate-x-full");
  }, 100);

  // Ocultar después de 3 segundos
  setTimeout(() => {
    notification.classList.add("translate-x-full");
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// ============================================================================
// FUNCIONES GLOBALES PARA ONCLICK EN HTML
// ============================================================================

// Estas funciones deben estar en el scope global para ser llamadas desde HTML
window.showWelcomeScreen = showWelcomeScreen;
window.changeLanguage = changeLanguage;
window.filterByCategory = filterByCategory;
window.closeSearch = closeSearch;
window.selectSearchResult = selectSearchResult;
window.changeSlide = changeSlide;
window.goToSlide = goToSlide;

console.log("✅ JavaScript funcional cargado correctamente");

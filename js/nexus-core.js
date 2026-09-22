/**
 * NEXUS UNT - Core Application Framework
 * Handles Theme Persistence, Multi-language (ES/EN/FR), Responsive Navigation,
 * and Discreet Toast Notifications (without popup modal windows).
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. DICCIONARIO MULTI-IDIOMA (Español, English, Français)
     ========================================================================== */
  const I18N_DICTIONARY = {
    es: {
      // Navbar & Comunes
      nav_inicio: "Inicio",
      nav_comunidad: "Comunidad",
      nav_carreras: "Carreras",
      nav_panel: "Mi Panel",
      btn_ingresar: "Ingresar",
      btn_salir: "Salir",
      rol_estudiante: "Estudiante",
      carrera_sistemas: "Ing. de Sistemas",

      // Index - Hero & Secciones
      hero_subtitulo: "Encuentra tu",
      hero_titulo: "PROPÓSITO",
      hero_desc: "Especialízate, refuerza tus conocimientos y descubre la aplicación real de las matemáticas, la física y la programación.",
      hero_slogan: "CAMINA HACIA EL FUTURO.",
      btn_unirse: "Unirse a Nexus",
      btn_saber_mas: "Saber más ↓",
      info_titulo_1: "No estudies para aprobar, estudia para",
      info_titulo_destaque: "construir",
      info_desc: "Muchos estudiantes se estancan memorizando sintaxis sin entender el diseño arquitectónico de software, o resuelven ecuaciones sin visualizar su impacto real en la tecnología moderna. Nexus cierra esa brecha conectando las bases académicas con la ingeniería del mundo profesional.",
      pasos_titulo: "Tu ruta en 3 pasos",
      paso1_tit: "Identifica tu Carrera",
      paso1_desc: "Accede a la malla curricular estructurada de tu facultad y selecciona el curso donde necesitas claridad.",
      paso2_tit: "Explora el \"Por Qué\"",
      paso2_desc: "Descubre roadmaps visuales que conectan la teoría pura con paradigmas modernos de desarrollo e ingeniería.",
      paso3_tit: "Accede a Recursos",
      paso3_desc: "Consume PDFs filtrados, repositorios y videos curados específicamente para tu nivel académico.",
      comunidad_tit: "La fuerza de Nexus está en su",
      comunidad_destaque: "comunidad",
      comunidad_desc: "No estás solo en tu ciclo académico. Cientos de estudiantes de Ingeniería de Sistemas comparten recursos, resuelven errores de código en tiempo récord y simplifican las guías de laboratorio más complejas de la UNT.",
      metrica_1: "Dudas Resueltas entre Pares",
      metrica_2: "Separatas y PDFs Compartidos",
      metrica_3: "Carrera con Mayor Actividad",
      btn_bloqueo: "🔑 Regístrate para ver más",
      cta_tit: "¿Listo para revolucionar tu aprendizaje?",
      cta_desc: "Únete a la red académica de ingeniería de la UNT y pasa de la teoría al desarrollo real.",
      btn_crear_cuenta: "Crear Cuenta Gratuita",

      // Facultades
      facultad_badge: "Universidad Nacional de Trujillo",
      facultad_tit_1: "Facultad de",
      facultad_tit_2: "Ingeniería",
      facultad_subtit: "Selecciona tu escuela académica para acceder a las mallas curriculares optimizadas y recursos de reforzamiento.",
      estado_activa: "🟢 Activa",
      estado_espera: "⏳ Próximamente",
      btn_explorar_malla: "Explorar Malla",
      btn_sugerir_cursos: "Sugerir Cursos",
      sistemas_desc: "Accede de inmediato a las rutas de programación, matemática conceptual, física electrónica y arquitectura de software.",
      industrial_desc: "Optimización de procesos, investigación de operaciones y simulación de sistemas productivos. Malla en fase de carga.",
      civil_desc: "Análisis estructural, mecánica de fluidos y materiales avanzados aplicados a la infraestructura moderna.",
      mecanica_desc: "Termodinámica, diseño de elementos de máquinas, automatización industrial y sistemas de manufactura.",
      quimica_desc: "Balance de materia y energía, operaciones unitarias y diseño de reactores químicos institucionales.",

      // Login & Registro
      login_tit: "Iniciar",
      login_tit_2: "Sesión",
      login_subtit: "Ingresa a tu ruta de aprendizaje",
      label_matricula: "Número de matrícula",
      placeholder_matricula: "Ej. 1103300125",
      label_password: "Contraseña",
      placeholder_password: "Mínimo 8 caracteres",
      btn_iniciar_sesion: "Ingresar a la Plataforma",
      pregunta_nuevo: "¿Eres nuevo?",
      link_crear_cuenta: "Crear cuenta",
      registro_tit: "Crear",
      registro_tit_2: "Cuenta",
      registro_subtit: "Forma parte de la comunidad NexUs UNT",
      label_correo: "Correo Institucional",
      placeholder_correo: "usuario@unitru.edu.pe",
      btn_registrarse: "Completar Registro",
      pregunta_cuenta: "¿Ya tienes una cuenta?",
      link_iniciar_sesion: "Iniciar sesión",

      // Dashboard
      dash_saludo_tit: "Rutas Especializadas de",
      dash_saludo_destaque: "Reforzamiento",
      dash_saludo_desc: "Cursos autodidactas diseñados para conectar la teoría formal del aula con el desarrollo profesional real.",
      dash_malla_tit: "Malla Académica UNT",
      dash_malla_subtit: "Progreso formal según tu plan de estudios.",
      btn_ingresar_curso: "Ingresar al curso →",
      badge_ruta_autodidacta: "Ruta Autodidacta",

      // Detalle Cursos
      btn_volver_panel: "← Volver a Mi Panel",
      seccion_el_porque: "El Por Qué:",
      biblioteca_pdf_tit: "📚 Biblioteca de Recursos (PDF)",
      biblioteca_pdf_desc: "Libros base, guías de laboratorio curadas y separatas teóricas de la UNT.",
      clases_video_tit: "🎥 Clases y Videotutoriales Complementarios",
      clases_video_desc: "Explicaciones dinámicas de conceptos rebuscados y setups de desarrollo profesionales.",
      btn_ver_recurso: "Ver",
      btn_descargar: "Descargar Guía",
      btn_notificarme: "🔔 Notificarme",
      estado_en_preparacion: "En preparación",

      // Footer
      footer_derechos: "Todos los derechos reservados.",
      footer_soporte: "Soporte",
      footer_privacidad: "Privacidad",
      footer_terminos: "Términos"
    },

    en: {
      // Navbar & Common
      nav_inicio: "Home",
      nav_comunidad: "Community",
      nav_carreras: "Majors",
      nav_panel: "My Dashboard",
      btn_ingresar: "Sign In",
      btn_salir: "Log Out",
      rol_estudiante: "Student",
      carrera_sistemas: "Systems Engineering",

      // Index - Hero & Sections
      hero_subtitulo: "Find your",
      hero_titulo: "PURPOSE",
      hero_desc: "Specialize, reinforce your knowledge and discover real-world applications of math, physics, and computer science.",
      hero_slogan: "WALK INTO THE FUTURE.",
      btn_unirse: "Join Nexus",
      btn_saber_mas: "Learn More ↓",
      info_titulo_1: "Don't study just to pass, study to",
      info_titulo_destaque: "build",
      info_desc: "Many students get stuck memorizing syntax without grasping software architecture, or solve equations without visualizing their true impact on modern technology. Nexus bridges that gap.",
      pasos_titulo: "Your path in 3 steps",
      paso1_tit: "Identify your Major",
      paso1_desc: "Access your faculty's curriculum map and select the course where you need deeper clarity.",
      paso2_tit: "Explore the \"Why\"",
      paso2_desc: "Discover visual roadmaps linking theoretical concepts with modern engineering paradigms.",
      paso3_tit: "Access Curated Resources",
      paso3_desc: "Study filtered PDFs, code repositories, and videos curated specifically for your academic level.",
      comunidad_tit: "The strength of Nexus lies in its",
      comunidad_destaque: "community",
      comunidad_desc: "You are not alone in your academic term. Hundreds of Systems Engineering students collaborate, resolve bugs in record time, and master complex laboratory guides.",
      metrica_1: "Peer-to-Peer Doubts Solved",
      metrica_2: "Lecture Notes & Guides Shared",
      metrica_3: "Most Active Engineering Major",
      btn_bloqueo: "🔑 Register to view more",
      cta_tit: "Ready to revolutionize your learning?",
      cta_desc: "Join UNT's engineering academic network and transition from theory to real-world software creation.",
      btn_crear_cuenta: "Create Free Account",

      // Faculties
      facultad_badge: "National University of Trujillo",
      facultad_tit_1: "Faculty of",
      facultad_tit_2: "Engineering",
      facultad_subtit: "Select your engineering school to browse optimized curricula and academic reinforcement guides.",
      estado_activa: "🟢 Active",
      estado_espera: "⏳ Coming Soon",
      btn_explorar_malla: "Explore Curriculum",
      btn_sugerir_cursos: "Suggest Courses",
      sistemas_desc: "Instant access to programming tracks, applied math, digital electronics, and software architecture.",
      industrial_desc: "Process optimization, operations research, and production simulation. Curriculum loading phase.",
      civil_desc: "Structural analysis, fluid mechanics, and cutting-edge materials for modern infrastructure.",
      mecanica_desc: "Thermodynamics, machine design, industrial automation, and manufacturing systems.",
      quimica_desc: "Mass and energy balances, unit operations, and industrial reactor modeling.",

      // Login & Register
      login_tit: "Student",
      login_tit_2: "Sign In",
      login_subtit: "Log in to access your learning journey",
      label_matricula: "Student ID Number",
      placeholder_matricula: "E.g. 1103300125",
      label_password: "Password",
      placeholder_password: "Minimum 8 characters",
      btn_iniciar_sesion: "Access Platform",
      pregunta_nuevo: "New to Nexus?",
      link_crear_cuenta: "Create account",
      registro_tit: "Create",
      registro_tit_2: "Account",
      registro_subtit: "Join the NexUs UNT academic community",
      label_correo: "Institutional Email",
      placeholder_correo: "username@unitru.edu.pe",
      btn_registrarse: "Complete Registration",
      pregunta_cuenta: "Already have an account?",
      link_iniciar_sesion: "Sign in",

      // Dashboard
      dash_saludo_tit: "Specialized Tracks for",
      dash_saludo_destaque: "Mastery",
      dash_saludo_desc: "Self-paced guides designed to bridge theoretical classroom lectures with real-world engineering careers.",
      dash_malla_tit: "UNT Academic Curriculum",
      dash_malla_subtit: "Formal progression according to your study plan.",
      btn_ingresar_curso: "Enter Course Track →",
      badge_ruta_autodidacta: "Self-Paced Track",

      // Course Details
      btn_volver_panel: "← Back to My Dashboard",
      seccion_el_porque: "The Why:",
      biblioteca_pdf_tit: "📚 Resource Library (PDF)",
      biblioteca_pdf_desc: "Foundational textbooks, laboratory guides, and theoretical summaries from UNT.",
      clases_video_tit: "🎥 Video Lectures & Masterclasses",
      clases_video_desc: "Clear visual breakdowns of complex algorithms and industry-standard developer setups.",
      btn_ver_recurso: "View",
      btn_descargar: "Download Guide",
      btn_notificarme: "🔔 Notify Me",
      estado_en_preparacion: "In preparation",

      // Footer
      footer_derechos: "All rights reserved.",
      footer_soporte: "Support",
      footer_privacidad: "Privacy",
      footer_terminos: "Terms"
    },

    fr: {
      // Navbar & Commun
      nav_inicio: "Accueil",
      nav_comunidad: "Communauté",
      nav_carreras: "Filières",
      nav_panel: "Mon Tableau",
      btn_ingresar: "Connexion",
      btn_salir: "Quitter",
      rol_estudiante: "Étudiant",
      carrera_sistemas: "Génie Informatique",

      // Index - Hero & Sections
      hero_subtitulo: "Trouvez votre",
      hero_titulo: "VOCATION",
      hero_desc: "Spécialisez-vous, consolidez vos compétences et découvrez l'impact réel des mathématiques, de la physique et de la programmation.",
      hero_slogan: "AVANCEZ VERS LE FUTUR.",
      btn_unirse: "Rejoindre Nexus",
      btn_saber_mas: "En savoir plus ↓",
      info_titulo_1: "N'étudiez pas pour réussir, étudiez pour",
      info_titulo_destaque: "construire",
      info_desc: "De nombreux étudiants restent bloqués à mémoriser de la syntaxe sans saisir l'architecture logicielle, ou résolvent des équations sans visualiser leur impact technologique. Nexus comble ce fossé.",
      pasos_titulo: "Votre parcours en 3 étapes",
      paso1_tit: "Identifiez votre Filière",
      paso1_desc: "Consultez le cursus académique de votre faculté et sélectionnez le cours où vous avez besoin d'éclaircissements.",
      paso2_tit: "Explorez le « Pourquoi »",
      paso2_desc: "Découvrez des schémas visuels reliant la théorie académique aux paradigmes modernes de l'ingénierie.",
      paso3_tit: "Accédez aux Ressources",
      paso3_desc: "Profitez de polycopiés PDF, de dépôts de code et de vidéos adaptés avec précision à votre niveau universitaire.",
      comunidad_tit: "La force de Nexus réside dans sa",
      comunidad_destaque: "communauté",
      comunidad_desc: "Vous n'êtes pas seul durant votre semestre. Des centaines d'étudiants échangent des ressources et résolvent leurs bugs en un temps record.",
      metrica_1: "Questions Résolues entre Pairs",
      metrica_2: "Guides & Polycopiés Partagés",
      metrica_3: "Filière la Plus Active",
      btn_bloqueo: "🔑 Inscrivez-vous pour en voir plus",
      cta_tit: "Prêt à révolutionner votre apprentissage ?",
      cta_desc: "Rejoignez le réseau académique d'ingénierie de l'UNT et passez de la théorie au développement concret.",
      btn_crear_cuenta: "Créer un Compte Gratuit",

      // Facultades
      facultad_badge: "Université Nationale de Trujillo",
      facultad_tit_1: "Faculté d'",
      facultad_tit_2: "Ingénierie",
      facultad_subtit: "Sélectionnez votre école pour explorer les cursus optimisés et les guides de renforcement.",
      estado_activa: "🟢 Active",
      estado_espera: "⏳ Bientôt Disponible",
      btn_explorar_malla: "Explorer le Cursus",
      btn_sugerir_cursos: "Suggérer des Cours",
      sistemas_desc: "Accès immédiat aux parcours d'algorithmique, mathématiques appliquées, électronique et architecture logicielle.",
      industrial_desc: "Optimisation de processus, recherche opérationnelle et modélisation industrielle. En cours d'intégration.",
      civil_desc: "Calcul de structures, mécanique des fluides et matériaux modernes appliqués aux grands chantiers.",
      mecanica_desc: "Thermodynamique, conception mécanique, automatismes industriels et procédés de fabrication.",
      quimica_desc: "Bilans de matière et d'énergie, opérations unitaires et ingénierie des réacteurs chimiques.",

      // Login & Inscription
      login_tit: "Espace",
      login_tit_2: "Connexion",
      login_subtit: "Accédez à vos modules d'apprentissage",
      label_matricula: "Numéro d'immatriculation",
      placeholder_matricula: "Ex. 1103300125",
      label_password: "Mot de passe",
      placeholder_password: "Au moins 8 caractères",
      btn_iniciar_sesion: "Se Connecter",
      pregunta_nuevo: "Nouveau sur Nexus ?",
      link_crear_cuenta: "Créer un compte",
      registro_tit: "Créer un",
      registro_tit_2: "Compte",
      registro_subtit: "Rejoignez la communauté universitaire NexUs UNT",
      label_correo: "E-mail Institutionnel",
      placeholder_correo: "identifiant@unitru.edu.pe",
      btn_registrarse: "Finaliser l'Inscription",
      pregunta_cuenta: "Vous avez déjà un compte ?",
      link_iniciar_sesion: "Se connecter",

      // Dashboard
      dash_saludo_tit: "Parcours Spécialisés de",
      dash_saludo_destaque: "Renforcement",
      dash_saludo_desc: "Modules en autoformation conçus pour relier la théorie des cours aux exigences du marché de l'ingénierie.",
      dash_malla_tit: "Cursus Académique UNT",
      dash_malla_subtit: "Progression officielle selon le plan d'études.",
      btn_ingresar_curso: "Accéder au cours →",
      badge_ruta_autodidacta: "Parcours Autonome",

      // Détails Cours
      btn_volver_panel: "← Retour au Tableau de Bord",
      seccion_el_porque: "Le Pourquoi :",
      biblioteca_pdf_tit: "📚 Bibliothèque de Ressources (PDF)",
      biblioteca_pdf_desc: "Manuels de référence, fascicules de travaux pratiques et notes de cours de l'UNT.",
      clases_video_tit: "🎥 Cours et Vidéos Explicatives",
      clases_video_desc: "Explications dynamiques des concepts complexes et configurations professionnelles.",
      btn_ver_recurso: "Voir",
      btn_descargar: "Télécharger le Guide",
      btn_notificarme: "🔔 M'alerter",
      estado_en_preparacion: "En préparation",

      // Footer
      footer_derechos: "Tous droits réservés.",
      footer_soporte: "Assistance",
      footer_privacidad: "Confidentialité",
      footer_terminos: "Conditions"
    }
  };

  /* ==========================================================================
     2. GESTOR DE TEMA PERSISTENTE (Dark Mode / Modo Claro)
     ========================================================================== */
  const THEME_STORAGE_KEY = 'nexus_theme';

  function aplicarTema(tema) {
    const body = document.body;
    const isLight = tema === 'light';

    if (isLight) {
      body.classList.add('modo-claro');
      document.documentElement.classList.remove('dark');
    } else {
      body.classList.remove('modo-claro');
      document.documentElement.classList.add('dark');
    }

    // Actualizar todos los botones de tema en la página
    document.querySelectorAll('#btn-tema, .btn-tema-icono').forEach(btn => {
      btn.textContent = isLight ? '🌙' : '☀️';
      btn.setAttribute('aria-label', isLight ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro');
      btn.setAttribute('title', isLight ? 'Modo Oscuro' : 'Modo Claro');
    });

    try {
      localStorage.setItem(THEME_STORAGE_KEY, tema);
    } catch (e) {
      console.warn('LocalStorage no accesible:', e);
    }
  }

  function toggleTema() {
    const isLight = document.body.classList.contains('modo-claro');
    const nuevoTema = isLight ? 'dark' : 'light';
    aplicarTema(nuevoTema);
  }

  function initTema() {
    let savedTheme = 'dark';
    try {
      savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || 'dark';
    } catch (e) {
      savedTheme = 'dark';
    }
    aplicarTema(savedTheme);

    document.querySelectorAll('#btn-tema, .btn-tema-icono').forEach(btn => {
      btn.removeEventListener('click', toggleTema);
      btn.addEventListener('click', toggleTema);
    });
  }

  /* ==========================================================================
     3. GESTOR DE IDIOMA PERSISTENTE (ES / EN / FR)
     ========================================================================== */
  const LANG_STORAGE_KEY = 'nexus_lang';

  function cambiarIdioma(lang) {
    if (!I18N_DICTIONARY[lang]) {
      lang = 'es';
    }

    // Actualizar todos los textos con [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (I18N_DICTIONARY[lang] && I18N_DICTIONARY[lang][key]) {
        el.textContent = I18N_DICTIONARY[lang][key];
      }
    });

    // Actualizar placeholders con [data-i18n-placeholder]
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (I18N_DICTIONARY[lang] && I18N_DICTIONARY[lang][key]) {
        el.setAttribute('placeholder', I18N_DICTIONARY[lang][key]);
      }
    });

    // Sincronizar selectores de idioma en desktop y mobile
    document.querySelectorAll('#select-idioma, #select-idioma-mobile, .combo-idioma').forEach(select => {
      select.value = lang;
    });

    // Cambiar lang en html tag
    document.documentElement.lang = lang;

    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch (e) {
      console.warn('LocalStorage no accesible:', e);
    }
  }

  function initIdioma() {
    let savedLang = 'es';
    try {
      savedLang = localStorage.getItem(LANG_STORAGE_KEY) || 'es';
    } catch (e) {
      savedLang = 'es';
    }

    document.querySelectorAll('#select-idioma, #select-idioma-mobile, .combo-idioma').forEach(select => {
      select.addEventListener('change', (e) => {
        cambiarIdioma(e.target.value);
      });
    });

    cambiarIdioma(savedLang);
  }

  /* ==========================================================================
     4. GESTOR DEL MENÚ HAMBURGUESA RESPONSIVE
     ========================================================================== */
  function initMenuHamburguesa() {
    const btnHamburguesa = document.getElementById('btn-hamburguesa');
    const navMenu = document.getElementById('nav-menu');

    if (!btnHamburguesa || !navMenu) return;

    btnHamburguesa.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = btnHamburguesa.classList.toggle('active');
      navMenu.classList.toggle('active');
      btnHamburguesa.setAttribute('aria-expanded', isActive);
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        btnHamburguesa.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !btnHamburguesa.contains(e.target)) {
        btnHamburguesa.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  /* ==========================================================================
     5. SISTEMA DE TOASTS DISCRETOS (Sin ventanas emergentes invasivas)
     ========================================================================== */
  function getToastContainer() {
    let container = document.getElementById('nexus-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'nexus-toast-container';
      container.className = 'fixed bottom-5 right-5 z-[9999] flex flex-col gap-2 pointer-events-none max-w-sm w-full px-4';
      document.body.appendChild(container);
    }
    return container;
  }

  window.NexusToast = {
    show: function (mensaje, tipo = 'info', duracion = 3500) {
      const container = getToastContainer();
      const toast = document.createElement('div');
      toast.className = 'pointer-events-auto flex items-center gap-3 p-3.5 rounded-xl shadow-xl border backdrop-blur-lg transition-all duration-300 transform translate-y-2 opacity-0 text-sm';

      let bgBorder = 'bg-zinc-900/95 border-cyan-500/50 text-cyan-200';
      let icono = 'ℹ️';

      if (tipo === 'success') {
        bgBorder = 'bg-emerald-950/95 border-emerald-500/50 text-emerald-200';
        icono = '✅';
      } else if (tipo === 'error') {
        bgBorder = 'bg-rose-950/95 border-rose-500/50 text-rose-200';
        icono = '⚠️';
      } else if (tipo === 'warning') {
        bgBorder = 'bg-amber-950/95 border-amber-500/50 text-amber-200';
        icono = '🚧';
      }

      toast.className += ` ${bgBorder}`;
      toast.innerHTML = `
        <span class="text-lg flex-shrink-0">${icono}</span>
        <div class="flex-1 font-medium leading-snug">${mensaje}</div>
        <button class="text-zinc-400 hover:text-white flex-shrink-0 text-base font-bold ml-1 leading-none" aria-label="Cerrar">&times;</button>
      `;

      container.appendChild(toast);

      requestAnimationFrame(() => {
        toast.classList.remove('translate-y-2', 'opacity-0');
      });

      const removeToast = () => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 250);
      };

      toast.querySelector('button').addEventListener('click', removeToast);
      setTimeout(removeToast, duracion);
    }
  };

  /* ==========================================================================
     6. GESTOR DE INTERACCIONES Y SEÑALES (Sin ventanillas modales)
     ========================================================================== */
  function avisarConstruccion(msg) {
    const lang = localStorage.getItem(LANG_STORAGE_KEY) || 'es';
    let texto = msg;
    if (!texto) {
      if (lang === 'en') {
        texto = "Under construction: Nexus student community will be available soon.";
      } else if (lang === 'fr') {
        texto = "En construction : La communauté étudiante Nexus sera bientôt disponible.";
      } else {
        texto = "En construcción: La comunidad estudiantil de Nexus UNT estará disponible próximamente.";
      }
    }
    NexusToast.show(texto, 'warning');
  }

  window.noDisponible = function () {
    avisarConstruccion();
  };

  function initInteracciones() {
    // 1. Clics en enlaces a #comunidad o data-construction
    document.querySelectorAll('a[href="#comunidad"], a[data-construction], [data-construction]').forEach(el => {
      // Si estamos en index.html y la sección #comunidad existe en la página, permitimos el scroll normal
      if (document.querySelector('main #comunidad') && el.getAttribute('href') === '#comunidad') {
        return;
      }
      el.addEventListener('click', (e) => {
        e.preventDefault();
        avisarConstruccion();
      });
    });

    // 2. Ciclos bloqueados (Ciclo IV al X)
    document.querySelectorAll('.ciclo-lock .cabecera-ciclo, .ciclo-lock button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        NexusToast.show("Este ciclo académico estará disponible en la próxima actualización de la malla.", "info");
      });
    });

    // 3. Enlaces a soporte en footers
    document.querySelectorAll('.enlace-soporte, [data-i18n="footer_soporte"]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        NexusToast.show("Centro de Soporte UNT: Escríbenos a soporte@nexusunt.edu.pe", "info");
      });
    });

    // 4. Botones "Sugerir Cursos" en facultades.html
    document.querySelectorAll('.carrera-bloqueada button, button[data-sugerir]').forEach(btn => {
      btn.removeAttribute('disabled');
      btn.classList.remove('opacity-50', 'cursor-not-allowed');
      btn.classList.add('cursor-pointer', 'hover:opacity-90');
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const card = btn.closest('.tarjeta-carrera-catalogo') || btn.closest('article');
        const carrera = card ? card.querySelector('h3')?.textContent : 'tu escuela';
        NexusToast.show(`Sugerencias para ${carrera}: Registrado en la mesa de partes virtual UNT.`, "success");
      });
    });

    // 5. Botones "Ver" en PDFs de las páginas de detalle
    document.querySelectorAll('.tarjeta-pdf:not(.recurso-vacio) .btn-accion-recurso').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const card = btn.closest('.tarjeta-pdf');
        const tit = card ? card.querySelector('h4')?.textContent : 'la separata';
        NexusToast.show(`Descarga iniciada: ${tit} (PDF UNT)`, "success");
      });
    });

    // 6. Tarjetas de video en las páginas de detalle
    document.querySelectorAll('.tarjeta-video').forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        e.preventDefault();
        const tit = card.querySelector('h4')?.textContent || 'la clase';
        NexusToast.show(`Reproductor: Cargando ${tit}...`, "info");
      });
    });

    // 7. Recursos en preparación ("Notificarme")
    document.querySelectorAll('.recurso-vacio button, .btn-notificar').forEach(btn => {
      btn.removeAttribute('disabled');
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        NexusToast.show("¡Aviso registrado! Te notificaremos al publicarse este material.", "info");
      });
    });
  }

  /* ==========================================================================
     7. INICIALIZADOR AL CARGAR EL DOM
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initTema();
    initIdioma();
    initMenuHamburguesa();
    initInteracciones();
  });

})();

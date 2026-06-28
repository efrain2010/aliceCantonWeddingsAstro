import { CONTACT } from "../config/site";

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      venues: "Locaciones",
      gallery: "Galería",
      contact: "Contacto",
    },
    header: {
      logoText: "Alice Cantón",
      mobileMenuLabel: "Abrir menú",
      mobileMenuCloseLabel: "Cerrar menú",
      langSwitch: "EN",
    },
    footer: {
      tagline1: "Wedding Planner en Mérida, Yucatán.",
      tagline2: "Haciendo bodas inolvidables desde 2014.",
      contactHeading: "Contacto",
      linksHeading: "Links Rápidos",
      specialtiesHeading: "Especialidades",
      copyrightSuffix:
        "Alice Cantón Wedding Planner. Todos los derechos reservados.",
      links: [
        { label: "Servicios", pageKey: "services" as const },
        { label: "Locaciones", pageKey: "venues" as const },
        { label: "Galería", pageKey: "gallery" as const },
        { label: "Contacto", pageKey: "contact" as const },
        { label: "Nosotros", pageKey: "about" as const },
      ],
      specialties: [
        { label: "Bodas en Hacienda", pageKey: "venues" as const },
        { label: "Bodas en Bacalar", pageKey: "venues" as const },
        { label: "Bodas en Playa", pageKey: "venues" as const },
        { label: "Bodas en Cenote", pageKey: "venues" as const },
        { label: "Bodas Destino", pageKey: "services" as const },
      ],
    },
    cta: {
      title: "Platiquemos",
      subtitle:
        "Cuéntanos sobre tu boda soñada. Estamos listos para ayudarte a hacerla realidad.",
      button: "Contactar",
    },
    form: {
      nameLabel: "Nombre *",
      namePlaceholder: "Tu nombre completo",
      emailLabel: "Correo *",
      emailPlaceholder: "tu@correo.com",
      phoneLabel: "Teléfono",
      phonePlaceholder: "999 000 0000",
      dateLabel: "Fecha de la Boda",
      messageLabel: "Mensaje *",
      messagePlaceholder: "Cuéntanos sobre tu boda soñada...",
      submitLabel: "Enviar Mensaje",
    },
    pages: {
      home: {
        meta: {
          title: "Wedding Planner en Mérida, Yucatán",
          description: `Alice Cantón Wedding Planner en Mérida Yucatán — organización de bodas y eventos desde 2014. Agenda tu cita al ${CONTACT.phone}.`,
        },
        hero: {
          title: "Wedding Planner en Mérida Yucatán",
          subtitle:
            "Hacemos realidad la boda que siempre soñaste, cuidando cada detalle para que tú solo tengas que disfrutarlo.",
          cta: "Contáctanos",
        },
        intro: {
          title: "Wedding Planner en Mérida Yucatán",
          body: "La organización de una boda requiere mucho tiempo y compromiso, parte del trabajo requiere conseguir proveedores, elegir decoración y podrían invertir muchas horas trabajando en los detalles para tener la boda de sus sueños. Afortunadamente, los novios no tienen que asumir toda esa responsabilidad. Mi trabajo como Wedding Planner es quitarles todo el peso de encima y asegurarme que todo vaya de acuerdo al plan, ustedes solo tienen que preocuparse por pasarla de lo mejor. Contratar un Wedding Planner te va a ayudar a que el proceso sea mucho más fácil y divertido.",
        },
        categories: [
          { label: "Planeación" },
          { label: "Banquete" },
          { label: "Música" },
          { label: "Duración" },
        ],
        services: {
          label: "Lo que ofrecemos",
          title: "Nuestros Servicios",
          items: [
            {
              icon: "♛",
              title: "Coordinación Total",
              description:
                "La planificación de la boda puede ser inmensamente estresante e implica mucho tiempo. ¡Déjenos manejar el trabajo por usted! El servicio de Coordinación Total le guiará a través de cada paso del proceso de planificación de la boda cubriendo todos los aspectos creativos, organizativos, técnicos y logísticos de tu gran día. Es ideal para parejas muy ocupadas que necesitan apoyo para la planeación de su boda.",
            },
            {
              icon: "✈",
              title: "Coordinación Boda Destino",
              description:
                "Este servicio cubrirá cada paso del proceso de planificación incluyendo todos los aspectos creativos, organizativos, técnicos y logísticos de tu evento. Ideal para las parejas que quieren disfrutar de una boda en el estado de Yucatán y al rededores, además de encargarme del evento, montaje, logística y cronograma, les ayudaré a tener la mejor estancia en el estado sugiriendo lugares donde hospedarse y organizando la logística para los novios y sus invitados.",
            },
            {
              icon: "◈",
              title: "Coordinación del Día",
              description:
                "Este servicio es ideal si ya tienes todo listo para tu boda pero necesitas a alguien que coordine el día de tu evento. Montaje, logística, cronograma. Ustedes solo tienen que disfrutar.",
            },
          ],
        },
        history: {
          title: "Nuestra Historia",
          subtitle: "Since 2014",
          body1:
            "He tenido la oportunidad de ser parte del gran día de muchas parejas, todo comenzó con una plática entre amigas, decidimos unir nuestras habilidades y fortalezas y adentrarnos en la planeación de bodas, sin embargo, por azares del destino cada una tomó su camino. Personas que conocieron mi trabajo me siguieron contactando para ser su organizadora y decidí continuar por mi cuenta en este mundo que tanto me apasiona.",
          body2:
            "Estoy muy agradecida con todos los que han sido parte de este viaje y espero con muchas ansias poder seguir creciendo y trabajando en hacer los sueños realidad de muchas parejas.",
          cta: "Platiquemos",
        },
        quote: {
          text: "Cuando te das cuenta que deseas pasar el resto de tu vida con una persona, quieres que el resto de tu vida empiece lo antes posible",
          attribution: "— When Harry met Sally",
        },
        portfolio: {
          label: "Portafolio",
          title: "Mi Trabajo",
          subtitle: "Bodas",
          cta: "Ver Galería Completa",
        },
        quoteBand: {
          text: '"Gracias por confiar en mí y permitirme ser parte de su historia de amor"',
          attribution: "Su Especialista en Bodas",
        },
        testimonials: {
          label: "Opiniones",
          title: "Lo que dicen nuestros novios",
          items: [
            {
              quote:
                "Alice: La experiencia que tuve contigo fue muy grata e importante, gracias por aportar ideas para mejorar y descargarme el estrés. Eres creativa y muy apasionada en lo que haces. Ojalá todas se den la oportunidad de trabajar contigo.",
              author: "Jessi Rodriguez",
              year: "2016",
            },
            {
              quote:
                "Alice es lo máximo! Super recomendable! El día de la boda me ayudó muchísimo, estuvo pendiente de mí en todo momento. Desde el inicio me dio todos los consejos que necesitaba para mi gran día, gracias por todo Alice!",
              author: "Yare Leal",
              year: "2015",
            },
            {
              quote:
                "Nuestra experiencia vivida en nuestra boda va resumida de esta manera: Nosotros no pensábamos contratar a una wedding planner. El servicio que brindó fue más que excelente y satisfactorio. Estamos muy agradecidos con su servicio y sobre todo profesionalismo.",
              author: "Martha & Sergio",
              year: "2017",
            },
          ],
        },
        ctaBand: {
          text: "Tu día especial merece una organización especial. Planearemos cada detalle para que tu boda sea inolvidable!",
        },
        homeContact: {
          title: "Platiquemos",
          body: "Escríbeme, vamos a platicar sobre todo lo que te puedo ayudar y como podemos lograr que pases el mejor día de tu vida.",
        },
      },
      about: {
        meta: {
          title: "Conoce a tu Wedding Planner en Mérida",
          description:
            "Conoce a Alice Cantón y su equipo de wedding planners en Mérida, Yucatán, organizando bodas inolvidables desde 2014.",
        },
        hero: {
          title: "Nosotros",
          subtitle:
            "Conoce al equipo detrás de los mejores momentos de tu vida",
        },
        intro: {
          title: "Queridos Novios",
          body: [
            "Si están buscando un excelente <strong>Wedding Planner en Mérida Yucatán</strong> están en el lugar correcto.",
            "Si están buscando quién les ayude a <strong>planear su boda ideal</strong> están en el lugar correcto.",
            "Si están buscando <strong>consejos, ayuda y asesoría</strong> para que disfrutar al máximo su día están en el lugar correcto.",
            "Si están buscando algo <strong>bonito y que se acomode a su presupuesto</strong> están en el lugar correcto.",
            "Si buscan un evento de <strong>calidad</strong>, bienvenidos sean a <strong>Alice Cantón Wedding Planner</strong>, envíame un mensaje y <strong>platiquemos</strong> acerca de lo que necesitan, puedo asesorarles sobre lo que pueden encontrar en la ciudad de <strong>Mérida</strong>, puedo <strong>guiarles a la mitad o al inicio</strong> de la <strong>planeación</strong> de su boda, mi trabajo consiste en hacer esa planeación divertida y sin estrés, <strong>no tienen que preocuparse de nada</strong>, déjenme lo a mi, les ayudaré en todo momento y me esforzaré para que tengan <strong>la mejor experiencia</strong>.",
          ],
        },
        founder: {
          role: "Fundadora",
          bio: "Desde siempre me ha gustado organizar todo tipo de eventos, pero cuando inicie en la planeación de bodas pude estar segura de que este era el trabajo ideal para mí. Cada una de las bodas que planeo las hago con todo el amor, ilusión y dedicación como si fuera la mía.",
          quote:
            "Uno de mis mayores objetivos es que los novios disfruten todo el proceso de su boda de inicio a fin, desde la primera cita de planeación hasta el gran día donde verán materializados sus sueños. El estrés que conlleva organizar una boda, ése me lo quedo yo.",
          note: "Sin duda, mi parte favorita de la boda, el primer baile. Ese momento donde siempre pienso que tantos meses de trabajo han valido más que la pena al poder ver a los recién casados convirtiendo su sueño en realidad.",
        },
        values: {
          title: "Nuestros Valores",
          items: [
            {
              title: "Visión",
              text: "Ser una <strong>Wedding Planner en Mérida, Yucatán</strong> reconocida por nuestro profesionalismo, honestidad, vocación de servicio, innovación y compromiso con las expectativas de nuestros clientes, buscando un continuo crecimiento y desarrollo en nuestro ámbito profesional. Además de incentivar a diferentes personas del país a festejar su boda en alguno de los bellos rincones de nuestro estado y aprovechar las tan famosas <strong>haciendas, playas y cenotes</strong> que caracterizan el estado.",
            },
            {
              title: "Misión",
              text: "Ser una muy reconocida <strong>Wedding Planner en Mérida, Yucatán</strong> y así brindar a mis clientes un trabajo comprometido, innovador y entusiasta; ofreciéndoles soluciones profesionales en la organización y coordinación de bodas y eventos, optimizando sus recursos y despojándolos de las preocupaciones propias de la organización logrando superar sus expectativas en su gran día.",
            },
            {
              title: "Objetivos",
              text: "Garantizar un momento inolvidable para cada cliente.\nTrabajar con esmero y dedicación para cada uno de nuestros clientes.\nSatisfacer las necesidades de nuestros clientes en cada evento.\nProporcionar opciones que se adapten al presupuesto de cada cliente.",
            },
          ],
        },
        process: {
          label: "Cómo trabajamos",
          title: "Organización\nBoda",
          steps: [
            {
              num: "1",
              title: "Primera cita con los novios",
              desc: "Nos reunimos para conocerlos y entender su visión, estilo y presupuesto.",
            },
            {
              num: "2",
              title: "Definición de presupuesto",
              desc: "Trabajamos juntos para establecer un presupuesto realista y optimizar cada peso.",
            },
            {
              num: "3",
              title: "Escoge tu estilo",
              desc: "Elegimos la paleta de colores, la ambientación y los detalles que harán única su boda.",
            },
            {
              num: "4",
              title: "Organización de la boda",
              desc: "Coordinamos proveedores, tiempos, locación y cada elemento de su evento.",
            },
            {
              num: "5",
              title: "Disfruta tu día especial",
              desc: "El día de la boda, nosotros nos encargamos de todo para que ustedes solo vivan el momento.",
            },
          ],
        },
        contactBar: {
          items: [
            { label: "Ciudad", value: "Mérida" },
            { label: "Teléfono", value: CONTACT.phone },
            { label: "Correo Electrónico", value: CONTACT.email },
          ],
        },
        venues: {
          label: "Donde trabajamos",
          title: "Locaciones Increíbles",
          body: "Conocemos a fondo cada rincón de Yucatán y sus alrededores. Haciendas históricas, playas paradisíacas, cenotes sagrados y las aguas de Bacalar son el escenario perfecto para tu boda.",
          buttons: ["Haciendas", "Playas", "Cenotes", "Bacalar"],
        },
      },
      services: {
        meta: {
          title: "Coordinación de Bodas en Mérida",
          description: `Servicios de coordinación de bodas en Mérida Yucatán: coordinación total, boda destino y coordinación del día. Llámanos al ${CONTACT.phone}.`,
        },
        hero: {
          title: "Servicios",
        },
        values: [
          {
            icon: "icon-1.webp",
            title: "Experiencia",
            text: "Contamos con varios años de experiencia en la organización de bodas, dejanos guiarte al mejor día de tu vida.",
          },
          {
            icon: "icon-2.webp",
            title: "Profesionalismo",
            text: "Estamos comprometidos con el trabajo que realizamos, comprometidos con hacer que tu gran día sea excelente.",
          },
          {
            icon: "icon-6.webp",
            title: "Garantía",
            text: "Nuestro trabajo respalda la experiencia que tenemos, podemos garantizarte que ese día será simplemente sensacional.",
          },
          {
            icon: "icon-5.webp",
            title: "Calidad",
            text: "Todos nuestros clientes están de acuerdo que la calidad que ofrecemos es arriba de lo esperado, nuestro compromiso es hacer un trabajo excelente.",
          },
        ],
        packagesIntro: {
          title: "Pregunta por nuestros paquetes",
          text: "Escríbenos y pregunta por nuestros paquetes, tenemos uno para cada ocasión. Estamos orgullosos de adaptarnos a cada cliente según las necesidades que presente para ofercer un mejor y más personalizado servicio. Contáctanos y pregunta por el precio de cada servicio.",
        },
        packagesTitle: "Nuestros Paquetes",
        packages: [
          {
            icon: "icon-1.webp",
            title: "Coordinación Total",
            text: "La planificación de la boda puede ser inmensamente estresante e implica mucho tiempo. ¡Déjenos manejar el trabajo por usted! El servicio Coordinación Total les guiará a través de cada paso del proceso de planificación de la boda cubriendo todos los aspectos creativos, organizativos, técnicos y logísticos de tu gran día. Es ideal para parejas muy ocupadas que necesitan apoyo para la planeación de su boda.",
            cta: "Quiero este Paquete",
          },
          {
            icon: "icon-3.webp",
            title: "Coordinación boda destino",
            text: "Este servicio cubrirá cada paso del proceso de planificación incluyendo todos los aspectos creativos, organizativos, técnicos y logísticos de tu evento. Ideal para las parejas que quieren disfrutar de una boda en el estado de Yucatán y al rededores, además de encargarme del evento, montaje, logística y cronograma, les ayudaré a tener la mejor estncia en el estado sugiriendo lugares donde hospedarse y organizando la logistica para los novios y sus invitados.",
            cta: "Quiero este Paquete",
          },
          {
            icon: "icon-4.webp",
            title: "Coordinación del día",
            text: "Este servicio es ideal si ya tienes todo listo para tu boda pero necesitas a alguien que coordine el día de tu evento. Montaje, logística, cronograma. Ustedes solo tienen que disfrutar.",
            cta: "Quiero este Paquete",
          },
        ],
        social: {
          title: "¿Quieres saber más de nosotros?",
          subtitle: "Síguenos en Redes Sociales",
        },
        contact: {
          title: "¡Pregunta por el precio de nuestros servicios!",
          text: "Envíame un comentario, reúnete conmigo, patiquemos sobre tus ideas y planeemos juntos la boda de tus sueños.",
        },
      },
      venues: {
        meta: {
          title: "Locaciones para Bodas en Mérida",
          description: `Locaciones increíbles para tu boda en Yucatán: haciendas, playas, cenotes y Bacalar. Llámame al ${CONTACT.phone}.`,
        },
        hero: {
          title: "Locaciones Increíbles",
          subtitle:
            "Yucatán y sus alrededores ofrecen escenarios únicos para una boda verdaderamente memorable",
        },
        intro: {
          label: "Conocemos cada rincón",
          title: "Tu escenario perfecto te espera",
          body: "Desde haciendas coloniales hasta cenotes sagrados, la Península de Yucatán ofrece una variedad de locaciones que simplemente no encontrarás en ningún otro lugar del mundo. Nuestro equipo conoce a fondo cada espacio y trabaja con los mejores proveedores de la región para garantizarte una experiencia sin igual.",
        },
        items: [
          {
            title: "Haciendas en Yucatán",
            description:
              "Las haciendas yucatecas son escenarios mágicos con una historia rica y una arquitectura colonial incomparable. Sus jardines exuberantes, arcos de piedra y salones históricos crean el ambiente perfecto para una boda de ensueño. Cada hacienda tiene su propia personalidad, y nosotros te ayudamos a encontrar la que mejor cuente tu historia de amor.",
            reverse: false,
          },
          {
            title: "Playas Yucatecas",
            description:
              "Las costas de la Península de Yucatán ofrecen paisajes irresistibles de arena blanca y mar turquesa. Una boda en la playa significa elegancia natural, puestas de sol espectaculares y el sonido de las olas como fondo musical. Coordinamos todos los permisos y detalles para que tu ceremonia frente al mar sea perfecta.",
            reverse: true,
          },
          {
            title: "Cenotes en Yucatán",
            description:
              'Los cenotes son ventanas al mundo subterráneo de la Península de Yucatán. Su nombre viene del maya "dzonoot", que significa "hoyo con agua". Históricamente sagrados para los mayas, hoy son algunos de los escenarios más únicos y fotografiados para bodas. Sus aguas cristalinas y la luz natural que penetra desde arriba crean una atmósfera verdaderamente mágica.',
            note: 'Del maya dzonoot: "hoyo con agua" — lugares sagrados donde los mayas realizaban rituales.',
            reverse: false,
          },
          {
            title: "Laguna de los 7 Colores, Bacalar",
            description:
              'Bacalar, cuyo nombre en maya significa "lugar donde nace el cielo", alberga una de las maravillas naturales más impresionantes de México. La Laguna de los 7 Colores debe su nombre a las siete variaciones de tonalidades turquesas y azules producidas por tres cenotes subterráneos que alimentan sus aguas. Una boda en Bacalar es una experiencia que ningún invitado olvidará jamás.',
            note: '"Lugar donde nace el cielo" — así llaman los mayas a Bacalar.',
            reverse: true,
          },
        ],
      },
      gallery: {
        meta: {
          title: "Galería de Bodas en Mérida",
          description:
            "Portafolio de bodas coordinadas por Alice Cantón Wedding Planner en Mérida Yucatán. Descubre nuestro trabajo.",
        },
        hero: {
          title: "Galería",
          subtitle: "Revive los momentos inolvidables",
        },
        intro: {
          title: "Portafolio",
          body: "Revive los momentos inolvidables, cada una de las <strong>bodas</strong> que hemos realizado ha sido muy especial. Gracias por su confianza.",
        },
        cta: {
          title: "Su Especialista en Bodas",
          phoneLabel: "Teléfono",
          phone: CONTACT.phone,
          emailLabel: "Correo",
          email: CONTACT.email,
        },
        photos: [
          {
            src: "/images/gallery/wedding-reception-tent-dance-floor.jpg",
            alt: "Carpa de recepción de boda con pista de baile iluminada en rosa",
          },
          {
            src: "/images/gallery/dessert-table-string-lights-night.jpg",
            alt: "Mesa de postres de boda iluminada con velas y faroles",
          },
          {
            src: "/images/gallery/wedding-cake-dessert-table-roses.jpg",
            alt: "Mesa de pastel de boda decorada con rosas rojas y faroles colgantes",
          },
          {
            src: "/images/gallery/bride-groom-hacienda-doorway-steps.jpg",
            alt: "Novios sentados en la entrada de una hacienda con vestido de encaje y velo largo",
          },
          {
            src: "/images/gallery/bride-groom-night-reception-portrait.jpg",
            alt: "Novios tomados de la mano durante la recepción nocturna de la boda",
          },
          {
            src: "/images/gallery/reception-tent-floral-chandelier-banquet.jpg",
            alt: "Carpa de recepción de boda con candelabro floral y mesas de banquete",
          },
          {
            src: "/images/gallery/bride-groom-kiss-agave-garden.jpg",
            alt: "Novios besándose al aire libre entre plantas de agave",
          },
          {
            src: "/images/gallery/bride-groom-kiss-hacienda-arch-flowergirls.jpg",
            alt: "Novios besándose bajo los arcos de la hacienda junto a las niñas de las flores",
          },
          {
            src: "/images/gallery/bride-groom-floral-archway-night.jpg",
            alt: "Novios bajo un arco floral iluminado durante la boda nocturna",
          },
          {
            src: "/images/gallery/reception-tent-band-stage-chandelier.jpg",
            alt: "Carpa de recepción de boda con escenario para banda en vivo y candelabro floral",
          },
          {
            src: "/images/gallery/bride-groom-greenery-wall-loveseat.jpg",
            alt: "Novios frente a un muro verde con guirnaldas florales y sillón blanco",
          },
          {
            src: "/images/gallery/bride-bridesmaids-celebration-greenery-wall.jpg",
            alt: "Novia celebrando con sus damas de honor frente a un muro de follaje",
          },
          {
            src: "/images/gallery/newlyweds-hacienda-corridor-bubbles.jpg",
            alt: "Recién casados caminando por el corredor de la hacienda entre burbujas",
          },
          {
            src: "/images/gallery/wedding-dessert-table-monogram-terracotta.jpg",
            alt: "Mesa de postres de boda con monograma de iniciales y paredes de terracota",
          },
          {
            src: "/images/gallery/reception-tent-band-dinner-chandelier.jpg",
            alt: "Carpa de recepción de boda con banda en vivo y mesas de cena",
          },
          {
            src: "/images/gallery/bride-groom-kiss-courtyard-roses.jpg",
            alt: "Novios besándose en un patio colonial con ramo de rosas rojas",
          },
          {
            src: "/images/gallery/bride-groom-beach-picnic-table.jpg",
            alt: "Novios sentados en una mesa de picnic boho en la playa",
          },
          {
            src: "/images/gallery/hacienda-stage-red-lanterns-band.jpg",
            alt: "Escenario de hacienda con faroles rojos y equipo de banda en vivo",
          },
          {
            src: "/images/gallery/beach-reception-table-coconut-centerpiece.jpg",
            alt: "Mesa de recepción en la playa con centro de mesa de coco",
          },
          {
            src: "/images/gallery/first-dance-paper-lanterns-guests.jpg",
            alt: "Primer baile de los novios bajo faroles de papel frente a los invitados",
          },
          {
            src: "/images/gallery/elegant-table-setting-candlelight.jpg",
            alt: "Montaje de mesa elegante con velas para la recepción de boda",
          },
          {
            src: "/images/gallery/neon-sign-amor-de-mis-amores-decor.jpg",
            alt: "Letrero de neón 'Amor de mis amores' con decoración de plumas de pampa",
          },
          {
            src: "/images/gallery/outdoor-dinner-candlelit-toast.jpg",
            alt: "Cena de boda al aire libre con velas e invitados haciendo un brindis",
          },
          {
            src: "/images/gallery/beach-picnic-table-aerial-pillows.jpg",
            alt: "Vista aérea de mesa de picnic en la playa con cojines y centro de mesa de coco",
          },
          {
            src: "/images/gallery/bride-groom-sparkler-send-off.jpg",
            alt: "Novios bailando entre bengalas durante la despedida de la boda",
          },
          {
            src: "/images/gallery/rustic-table-figs-citrus-flatlay.jpg",
            alt: "Vista superior de mesa rústica de boda con higos, cítricos y velas",
          },
          {
            src: "/images/gallery/bride-veil-staircase-detail.jpg",
            alt: "Detalle del velo de la novia en una escalera de hacienda",
          },
          {
            src: "/images/gallery/bride-groom-rooftop-terrace-skyline.jpg",
            alt: "Novios en una terraza con vista panorámica de la ciudad",
          },
          {
            src: "/images/gallery/table-setting-wine-glasses-detail.jpg",
            alt: "Detalle de copas de vino y tarjeta de mesa en la recepción de boda",
          },
          {
            src: "/images/gallery/reception-dance-floor-dj-floral-chandelier.jpg",
            alt: "Pista de baile de la recepción con cabina de DJ y candelabro floral",
          },
          {
            src: "/images/gallery/bride-bouquet-beach-closeup.jpg",
            alt: "Detalle del ramo de novia con el mar de fondo",
          },
          {
            src: "/images/gallery/bride-chandelier-hallway-hacienda.jpg",
            alt: "Novia posando bajo un candelabro en el pasillo de la hacienda",
          },
          {
            src: "/images/gallery/outdoor-dinner-illuminated-mansion-facade.jpg",
            alt: "Cena de boda al aire libre frente a una fachada iluminada",
          },
          {
            src: "/images/gallery/boho-hammock-lounge-seating.jpg",
            alt: "Área de descanso boho con hamacas para los invitados de la boda",
          },
          {
            src: "/images/gallery/rustic-long-table-centerpiece-bokeh.jpg",
            alt: "Mesa larga de boda rústica con centros de mesa florales",
          },
        ],
      },
      contact: {
        meta: {
          title: "Agenda tu Cita en Mérida, Yucatán",
          description: `Alice Cantón Wedding Planner es una organizadora de bodas y eventos en Mérida Yucatán. Agenda una cita al ${CONTACT.phone} y planeemos la boda de tus sueños.`,
        },
        hero: {
          title: "Contacto",
          subtitle:
            "Cuéntanos sobre tu boda soñada — estamos aquí para escucharte",
        },
        labels: {
          scheduleTitle: "Agenda una Cita",
          contactTitle: "Contacto",
          formNote: "Campos marcados con * son requeridos",
          addressLabel: "Dirección",
          address: "Calle 59D #253 x 122 y 124c, Yucalpetén Mérida, Yuc.",
          phoneLabel: "Teléfono",
          phone: CONTACT.phone,
          emailLabel: "Correo Electrónico",
          email: CONTACT.email,
        },
        quote:
          "“ Gracias por confiar en mí y permitirme ser parte de su historia de amor ”",
        faq: {
          title: "Preguntas Frecuentes",
          items: [
            {
              q: "¿Por qué un Wedding Planner?",
              a: "Muchas parejas piensan que contratar un Wedding Planner es un gasto innecesario y en algunos casos cuando tienen que recortar su presupuesto lo primero que se va es la Wedding Planner. La realidad es que un Wedding Planner es un especialista que tiene todos los conocimientos, cartera de proveedores, tips y la experiencia para encargarse de toda la planeación de la boda sin que la pareja tenga que preocuparse o estresarse por nada. Algo que caracteriza mi coordinación es que cuidar el presupuesto de las parejas. Durante la planeación es muy fácil que el presupuesto vaya aumentando y la boda termine costando más de lo planeado. Desde el inicio trabajo con el presupuesto que la pareja tiene, tomando en cuenta todos aquellos detalles que tal vez ignoran y que a la larga hacen que el presupuesto se exceda. Esto es algo que al final del día ayuda a la pareja a ahorrar en muchas cosas y a administrar de una mejor manera su presupuesto. Lo que te quieres ahorrar al no contratar a un Wedding Planner es lo que al final podrías ahorrarte contratándolo y de plus cero estrés y teniendo la certeza que todo saldrá como lo sueñas.",
            },
            {
              q: "¿Haces otros eventos además de bodas?",
              a: "Me especializo en bodas pero claro podemos coordinar cualquier tipo de evento social. Solo platicame que es lo que tienes en mente despedidas de soltera, baby showers, bautizos, fiestas infantiles y más. Pondré a trabajar toda mi creatividad para que disfrutes de tu gran evento, además que no tendrás que preocuparte por ningún detalle, solo por disfrutar.",
            },
            {
              q: "¿Trabajas sola el día del evento?",
              a: "No, tengo un equipo que trabaja conmigo en el evento. Según el tamaño de la boda son las personas que me apoyan.",
            },
            {
              q: "¿Que hace un Wedding Planner?",
              a: "Un Wedding Planner te va a guiar a través de todo el proceso de tu boda. Hay infinidad de detalles que contemplar al momento de planear tu boda que muchas veces las parejas no tiene idea. Tu Wedding Planner va encargarse de cada detalle. Te presentará una propuesta de acuerdo a tu presupuesto, se encargará de la contratación, citas y pagos a proveedores, te va a asesorar en el estilo, lugar, fecha y proveedores. Para el día de tu evento creará un cronograma minuto a minuto, estará presente los días de montaje y en el evento coordinará la logística, asignación de mesas y a los proveedores. Los novios no tendrán que preocuparse por nada más que disfrutar su gran día.",
            },
            {
              q: "¿Dónde me Puedo Casar?",
              a: "Hay muchas locaciones en Mérida Yucatán, puedes casarte en una hacienda, en la playa, en un cenote, en salones de eventos increíbles. Donde sueñes con casarte yo me encargo de todo y de ayudarte a encontrar el lugar ideal para ti.",
            },
            {
              q: "¿Cuál es el Precio de la Coordinación?",
              a: `El precio de la coordinación varía según el paquete que elijas, el número de invitados y el lugar del evento ya sea dentro o fuera de la ciudad de Mérida. Agenda una cita al ${CONTACT.phone} y platiquemos del evento que deseas para entregarte un presupuesto a la medida.`,
            },
            {
              q: "¿Cómo te Contrato?",
              a: "Agendamos una cita para conocernos sin ningún compromiso. La pareja me platica que es lo que desea y yo les platico mi forma de trabajar y como es el proceso de la planeación. Para apartar la fecha firmamos un contrato por ambas partes pagando un anticipo y ¡manos a la obra!",
            },
          ],
        },
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      venues: "Venues",
      gallery: "Gallery",
      contact: "Contact",
    },
    header: {
      logoText: "Alice Cantón",
      mobileMenuLabel: "Open menu",
      mobileMenuCloseLabel: "Close menu",
      langSwitch: "ES",
    },
    footer: {
      tagline1: "Wedding Planner in Mérida, Yucatán.",
      tagline2: "Creating unforgettable weddings since 2014.",
      contactHeading: "Contact",
      linksHeading: "Quick Links",
      specialtiesHeading: "Specialties",
      copyrightSuffix: "Alice Cantón Wedding Planner. All rights reserved.",
      links: [
        { label: "Services", pageKey: "services" as const },
        { label: "Venues", pageKey: "venues" as const },
        { label: "Gallery", pageKey: "gallery" as const },
        { label: "Contact", pageKey: "contact" as const },
        { label: "About", pageKey: "about" as const },
      ],
      specialties: [
        { label: "Hacienda Weddings", pageKey: "venues" as const },
        { label: "Bacalar Weddings", pageKey: "venues" as const },
        { label: "Beach Weddings", pageKey: "venues" as const },
        { label: "Cenote Weddings", pageKey: "venues" as const },
        { label: "Destination Weddings", pageKey: "services" as const },
      ],
    },
    cta: {
      title: "Let's Talk",
      subtitle:
        "Tell us about your dream wedding. We're ready to help you make it a reality.",
      button: "Contact Us",
    },
    form: {
      nameLabel: "Name *",
      namePlaceholder: "Your full name",
      emailLabel: "Email *",
      emailPlaceholder: "your@email.com",
      phoneLabel: "Phone",
      phonePlaceholder: "999 000 0000",
      dateLabel: "Wedding Date",
      messageLabel: "Message *",
      messagePlaceholder: "Tell us about your dream wedding...",
      submitLabel: "Send Message",
    },
    pages: {
      home: {
        meta: {
          title: "Wedding Planner in Mérida, Yucatán",
          description: `Alice Cantón Wedding Planner in Mérida, Yucatán — wedding and event coordination since 2014. Schedule your consultation at ${CONTACT.phone}.`,
        },
        hero: {
          title: "Wedding Planner in Mérida Yucatán",
          subtitle:
            "We make your dream wedding come true, taking care of every detail so you only have to enjoy it.",
          cta: "Contact Us",
        },
        intro: {
          title: "Wedding Planner in Mérida Yucatán",
          body: "Organizing a wedding takes a great deal of time and commitment. The work involves finding vendors, choosing décor, and spending many hours on the details to have the wedding of your dreams. Fortunately, the couple doesn't have to take on all that responsibility. My work as a Wedding Planner is to take that weight off your shoulders and make sure everything goes according to plan, so you only have to focus on enjoying yourselves. Hiring a Wedding Planner will make the process much easier and more fun.",
        },
        categories: [
          { label: "Planning" },
          { label: "Banquet" },
          { label: "Music" },
          { label: "Duration" },
        ],
        services: {
          label: "What we offer",
          title: "Our Services",
          items: [
            {
              icon: "♛",
              title: "Full Coordination",
              description:
                "Wedding planning can be immensely stressful and time-consuming. Let us handle the work for you! The Full Coordination service will guide you through every step of the wedding planning process, covering all creative, organizational, technical, and logistical aspects of your big day. It is ideal for very busy couples who need support for their wedding planning.",
            },
            {
              icon: "✈",
              title: "Destination Wedding Coordination",
              description:
                "This service covers every step of the planning process, including all creative, organizational, technical, and logistical aspects of your event. Ideal for couples who want to enjoy a wedding in the state of Yucatán and surrounding areas. In addition to managing the event, setup, logistics, and timeline, we will help you have the best stay in the area by suggesting places to stay and organizing logistics for the couple and their guests.",
            },
            {
              icon: "◈",
              title: "Day-of Coordination",
              description:
                "This service is ideal if you already have everything ready for your wedding but need someone to coordinate the day of your event. Setup, logistics, timeline. You just have to enjoy.",
            },
          ],
        },
        history: {
          title: "Our Story",
          subtitle: "Since 2014",
          body1:
            "I've had the opportunity to be part of the big day for many couples. It all started with a conversation between friends — we decided to combine our skills and strengths and venture into wedding planning. However, as fate would have it, each of us took her own path. People who knew my work kept reaching out for me to be their coordinator, and I decided to continue on my own in this world I'm so passionate about.",
          body2:
            "I am very grateful to everyone who has been part of this journey, and I look forward with great anticipation to continuing to grow and work on making the dreams of many couples a reality.",
          cta: "Let's Talk",
        },
        quote: {
          text: "Cuando te das cuenta que deseas pasar el resto de tu vida con una persona, quieres que el resto de tu vida empiece lo antes posible",
          attribution: "— When Harry met Sally",
        },
        portfolio: {
          label: "Portfolio",
          title: "My Work",
          subtitle: "Weddings",
          cta: "View Full Gallery",
        },
        quoteBand: {
          text: '"Thank you for trusting me and allowing me to be part of your love story"',
          attribution: "Your Wedding Specialist",
        },
        testimonials: {
          label: "Reviews",
          title: "What our couples say",
          items: [
            {
              quote:
                "Alice: The experience I had with you was very pleasant and meaningful. Thank you for contributing ideas to improve things and for relieving my stress. You are creative and very passionate about what you do. I hope everyone gives themselves the opportunity to work with you.",
              author: "Jessi Rodriguez",
              year: "2016",
            },
            {
              quote:
                "Alice is the best! Highly recommended! On the wedding day she helped me tremendously, she was attentive to me at every moment. From the start she gave me all the advice I needed for my big day. Thank you for everything, Alice!",
              author: "Yare Leal",
              year: "2015",
            },
            {
              quote:
                "Our wedding experience can be summed up like this: We hadn't planned to hire a wedding planner. The service she provided was more than excellent and satisfying. We are very grateful for her service and above all her professionalism.",
              author: "Martha & Sergio",
              year: "2017",
            },
          ],
        },
        ctaBand: {
          text: "Your special day deserves special organization. We will plan every detail to make your wedding unforgettable!",
        },
        homeContact: {
          title: "Let's Talk",
          body: "Write to me, let's talk about everything I can help you with and how we can make sure you have the best day of your life.",
        },
      },
      about: {
        meta: {
          title: "Meet Your Wedding Planner in Mérida",
          description:
            "Meet Alice Cantón and her wedding planning team in Mérida, Yucatán, creating unforgettable weddings since 2014.",
        },
        hero: {
          title: "About Us",
          subtitle: "Meet the team behind the best moments of your life",
        },
        intro: {
          title: "Dear Couples",
          body: [
            "If you are looking for an excellent <strong>Wedding Planner in Mérida Yucatán</strong> you are in the right place.",
            "If you are looking for someone to help you <strong>plan your ideal wedding</strong> you are in the right place.",
            "If you are looking for <strong>advice, support and guidance</strong> to enjoy your day to the fullest you are in the right place.",
            "If you are looking for something <strong>beautiful that fits your budget</strong> you are in the right place.",
            "If you seek a <strong>quality</strong> event, welcome to <strong>Alice Cantón Wedding Planner</strong>. Send me a message and let's <strong>talk</strong> about what you need. I can advise you on everything you can find in <strong>Mérida</strong> and <strong>guide you from the very beginning</strong> of your wedding <strong>planning</strong>. My job is to make planning fun and stress-free — <strong>you don't have to worry about anything</strong>. I'll be with you every step of the way to ensure you have <strong>the best experience</strong>.",
          ],
        },
        founder: {
          role: "Founder",
          bio: "I have always loved organizing all kinds of events, but when I started planning weddings I knew this was the ideal career for me. Every wedding I plan, I do with all the love, excitement and dedication as if it were my own.",
          quote:
            "One of my greatest goals is for couples to enjoy every step of the wedding process from start to finish — from the first planning meeting to the big day when their dreams come to life. The stress of organizing a wedding? That's mine to carry.",
          note: "Without a doubt, my favorite part of any wedding is the first dance. That moment always reminds me that so many months of hard work have been more than worth it when I see the newlyweds turning their dream into reality.",
        },
        values: {
          title: "Our Values",
          items: [
            {
              title: "Vision",
              text: "To be a <strong>Wedding Planner in Mérida, Yucatán</strong> recognized for our professionalism, honesty, service commitment, innovation and dedication to our clients' expectations, while continuously growing and inspiring couples from across the country to celebrate in the beautiful venues, <strong>haciendas, beaches and cenotes</strong> that make Yucatán unique.",
            },
            {
              title: "Mission",
              text: "To be a highly recognized <strong>Wedding Planner in Mérida, Yucatán</strong>, providing clients with committed, innovative and enthusiastic service; offering professional solutions for wedding and event coordination, optimizing their resources and freeing them from the worries of planning so we can exceed their expectations on their big day.",
            },
            {
              title: "Objectives",
              text: "Guarantee an unforgettable moment for every client.\nWork with care and dedication for each of our clients.\nMeet the needs of our clients at every event.\nProvide options that fit the budget of each client.",
            },
          ],
        },
        process: {
          label: "How we work",
          title: "Wedding\nOrganization",
          steps: [
            {
              num: "1",
              title: "First meeting with the couple",
              desc: "We meet to get to know you and understand your vision, style, and budget.",
            },
            {
              num: "2",
              title: "Budget definition",
              desc: "We work together to establish a realistic budget and optimize every dollar.",
            },
            {
              num: "3",
              title: "Choose your style",
              desc: "We choose the color palette, ambiance, and details that will make your wedding unique.",
            },
            {
              num: "4",
              title: "Wedding organization",
              desc: "We coordinate vendors, timelines, venues, and every element of your event.",
            },
            {
              num: "5",
              title: "Enjoy your special day",
              desc: "On your wedding day, we handle everything so you can simply live the moment.",
            },
          ],
        },
        contactBar: {
          items: [
            { label: "City", value: "Mérida" },
            { label: "Phone", value: CONTACT.phone },
            { label: "Email", value: CONTACT.email },
          ],
        },
        venues: {
          label: "Where we work",
          title: "Amazing Venues",
          body: "We know every corner of Yucatán and its surroundings. Historic haciendas, paradise beaches, sacred cenotes, and the waters of Bacalar are the perfect setting for your wedding.",
          buttons: ["Haciendas", "Beaches", "Cenotes", "Bacalar"],
        },
      },
      services: {
        meta: {
          title: "Wedding Coordination in Mérida",
          description: `Wedding coordination services in Mérida Yucatán: full coordination, destination wedding, and day-of coordination. Call us at ${CONTACT.phone}.`,
        },
        hero: {
          title: "Services",
        },
        values: [
          {
            icon: "icon-1.webp",
            title: "Experience",
            text: "We have several years of experience in wedding organization. Let us guide you to the best day of your life.",
          },
          {
            icon: "icon-2.webp",
            title: "Professionalism",
            text: "We are committed to the work we do, dedicated to making your big day excellent.",
          },
          {
            icon: "icon-6.webp",
            title: "Guarantee",
            text: "Our work is backed by the experience we have. We can guarantee you that day will be simply sensational.",
          },
          {
            icon: "icon-5.webp",
            title: "Quality",
            text: "All our clients agree that the quality we offer exceeds expectations. Our commitment is to do excellent work.",
          },
        ],
        packagesIntro: {
          title: "Ask about our packages",
          text: "Write to us and ask about our packages. We have one for each occasion. We are proud to adapt to each client according to their needs to offer better and more personalized service. Contact us and ask for the price of each service.",
        },
        packagesTitle: "Our Packages",
        packages: [
          {
            icon: "icon-1.webp",
            title: "Full Coordination",
            text: "Wedding planning can be immensely stressful and time-consuming. Let us handle the work for you! The Full Coordination service will guide you through every step of the wedding planning process, covering all creative, organizational, technical, and logistical aspects of your big day. It is ideal for very busy couples who need support for their wedding planning.",
            cta: "I Want This Package",
          },
          {
            icon: "icon-3.webp",
            title: "Destination wedding coordination",
            text: "This service will cover every step of the planning process including all creative, organizational, technical, and logistical aspects of your event. Ideal for couples who want to enjoy a wedding in the state of Yucatán and surroundings. In addition to managing the event, setup, logistics, and schedule, I will help you have the best stay in the state by suggesting places to stay and organizing logistics for the newlyweds and their guests.",
            cta: "I Want This Package",
          },
          {
            icon: "icon-4.webp",
            title: "Day-of coordination",
            text: "This service is ideal if you already have everything ready for your wedding but need someone to coordinate your event day. Setup, logistics, schedule. You just have to enjoy.",
            cta: "I Want This Package",
          },
        ],
        social: {
          title: "Want to know more about us?",
          subtitle: "Follow us on Social Media",
        },
        contact: {
          title: "Ask about the price of our services!",
          text: "Send me a message, meet with me, let's talk about your ideas and plan together the wedding of your dreams.",
        },
      },
      venues: {
        meta: {
          title: "Wedding Venues in Mérida, Yucatán",
          description: `Incredible wedding venues in Yucatán: haciendas, beaches, cenotes, and Bacalar. Call me at ${CONTACT.phone}.`,
        },
        hero: {
          title: "Amazing Venues",
          subtitle:
            "Yucatán and its surroundings offer unique settings for a truly memorable wedding",
        },
        intro: {
          label: "We know every corner",
          title: "Your perfect setting awaits",
          body: "From colonial haciendas to sacred cenotes, the Yucatán Peninsula offers a variety of venues that you simply won't find anywhere else in the world. Our team knows each space in depth and works with the best vendors in the region to guarantee you an unparalleled experience.",
        },
        items: [
          {
            title: "Haciendas in Yucatán",
            description:
              "Yucatecan haciendas are magical settings with a rich history and incomparable colonial architecture. Their lush gardens, stone arches, and historic halls create the perfect atmosphere for a dream wedding. Each hacienda has its own personality, and we help you find the one that best tells your love story.",
            reverse: false,
          },
          {
            title: "Yucatecan Beaches",
            description:
              "The coasts of the Yucatán Peninsula offer irresistible landscapes of white sand and turquoise sea. A beach wedding means natural elegance, spectacular sunsets, and the sound of the waves as background music. We coordinate all permits and details so your ceremony by the sea is perfect.",
            reverse: true,
          },
          {
            title: "Cenotes in Yucatán",
            description:
              'Cenotes are windows to the underground world of the Yucatán Peninsula. Their name comes from the Mayan "dzonoot", meaning "water hole". Historically sacred to the Maya, they are today some of the most unique and photographed settings for weddings. Their crystal-clear waters and the natural light filtering from above create a truly magical atmosphere.',
            note: 'From Mayan dzonoot: "water hole" — sacred places where the Maya performed rituals.',
            reverse: false,
          },
          {
            title: "Laguna de los 7 Colores, Bacalar",
            description:
              'Bacalar, whose name in Mayan means "place where the sky is born", is home to one of Mexico\'s most impressive natural wonders. The Laguna de los 7 Colores owes its name to the seven turquoise and blue color variations produced by three underground cenotes that feed its waters. A wedding in Bacalar is an experience no guest will ever forget.',
            note: '"Place where the sky is born" — that\'s what the Maya call Bacalar.',
            reverse: true,
          },
        ],
      },
      gallery: {
        meta: {
          title: "Wedding Gallery in Mérida",
          description:
            "Portfolio of weddings coordinated by Alice Cantón Wedding Planner in Mérida Yucatán. See our work.",
        },
        hero: {
          title: "Gallery",
          subtitle: "Relive the unforgettable moments",
        },
        intro: {
          title: "Portfolio",
          body: "Relive the unforgettable moments — every one of the <strong>weddings</strong> we have created has been truly special. Thank you for your trust.",
        },
        cta: {
          title: "Your Wedding Specialist",
          phoneLabel: "Phone",
          phone: CONTACT.phone,
          emailLabel: "Email",
          email: CONTACT.email,
        },
        photos: [
          {
            src: "/images/gallery/wedding-reception-tent-dance-floor.jpg",
            alt: "Wedding reception tent with pink-lit dance floor",
          },
          {
            src: "/images/gallery/dessert-table-string-lights-night.jpg",
            alt: "Wedding dessert table lit with candles and lanterns",
          },
          {
            src: "/images/gallery/wedding-cake-dessert-table-roses.jpg",
            alt: "Wedding cake table decorated with red roses and hanging lanterns",
          },
          {
            src: "/images/gallery/bride-groom-hacienda-doorway-steps.jpg",
            alt: "Bride and groom seated on hacienda doorway steps in lace gown and long veil",
          },
          {
            src: "/images/gallery/bride-groom-night-reception-portrait.jpg",
            alt: "Bride and groom holding hands at the nighttime wedding reception",
          },
          {
            src: "/images/gallery/reception-tent-floral-chandelier-banquet.jpg",
            alt: "Wedding reception tent with floral chandelier and banquet tables",
          },
          {
            src: "/images/gallery/bride-groom-kiss-agave-garden.jpg",
            alt: "Bride and groom kissing outdoors among agave plants",
          },
          {
            src: "/images/gallery/bride-groom-kiss-hacienda-arch-flowergirls.jpg",
            alt: "Bride and groom kissing under hacienda arches with flower girls",
          },
          {
            src: "/images/gallery/bride-groom-floral-archway-night.jpg",
            alt: "Bride and groom under an illuminated floral archway at night",
          },
          {
            src: "/images/gallery/reception-tent-band-stage-chandelier.jpg",
            alt: "Wedding reception tent with live band stage and floral chandelier",
          },
          {
            src: "/images/gallery/bride-groom-greenery-wall-loveseat.jpg",
            alt: "Bride and groom in front of a greenery wall with floral garlands and white loveseat",
          },
          {
            src: "/images/gallery/bride-bridesmaids-celebration-greenery-wall.jpg",
            alt: "Bride celebrating with her bridesmaids in front of a greenery wall",
          },
          {
            src: "/images/gallery/newlyweds-hacienda-corridor-bubbles.jpg",
            alt: "Newlyweds walking through the hacienda corridor amid bubbles",
          },
          {
            src: "/images/gallery/wedding-dessert-table-monogram-terracotta.jpg",
            alt: "Wedding dessert table with monogram initials and terracotta walls",
          },
          {
            src: "/images/gallery/reception-tent-band-dinner-chandelier.jpg",
            alt: "Wedding reception tent with live band and dinner tables",
          },
          {
            src: "/images/gallery/bride-groom-kiss-courtyard-roses.jpg",
            alt: "Bride and groom kissing in a colonial courtyard with a red rose bouquet",
          },
          {
            src: "/images/gallery/bride-groom-beach-picnic-table.jpg",
            alt: "Bride and groom seated at a boho beach picnic table",
          },
          {
            src: "/images/gallery/hacienda-stage-red-lanterns-band.jpg",
            alt: "Hacienda stage with red lanterns and live band setup",
          },
          {
            src: "/images/gallery/beach-reception-table-coconut-centerpiece.jpg",
            alt: "Beach reception table with a coconut centerpiece",
          },
          {
            src: "/images/gallery/first-dance-paper-lanterns-guests.jpg",
            alt: "Bride and groom's first dance under paper lanterns with guests watching",
          },
          {
            src: "/images/gallery/elegant-table-setting-candlelight.jpg",
            alt: "Elegant candlelit table setting for the wedding reception",
          },
          {
            src: "/images/gallery/neon-sign-amor-de-mis-amores-decor.jpg",
            alt: "Neon sign reading 'Amor de mis amores' with pampas grass decor",
          },
          {
            src: "/images/gallery/outdoor-dinner-candlelit-toast.jpg",
            alt: "Outdoor wedding dinner with candlelight and guests toasting",
          },
          {
            src: "/images/gallery/beach-picnic-table-aerial-pillows.jpg",
            alt: "Aerial view of a beach picnic table with cushions and coconut centerpiece",
          },
          {
            src: "/images/gallery/bride-groom-sparkler-send-off.jpg",
            alt: "Bride and groom dancing among sparklers during the wedding send-off",
          },
          {
            src: "/images/gallery/rustic-table-figs-citrus-flatlay.jpg",
            alt: "Overhead view of a rustic wedding table with figs, citrus, and candles",
          },
          {
            src: "/images/gallery/bride-veil-staircase-detail.jpg",
            alt: "Close-up of the bride's veil on a hacienda staircase",
          },
          {
            src: "/images/gallery/bride-groom-rooftop-terrace-skyline.jpg",
            alt: "Bride and groom on a rooftop terrace with a city skyline view",
          },
          {
            src: "/images/gallery/table-setting-wine-glasses-detail.jpg",
            alt: "Detail of wine glasses and table card at the wedding reception",
          },
          {
            src: "/images/gallery/reception-dance-floor-dj-floral-chandelier.jpg",
            alt: "Reception dance floor with DJ booth and floral chandelier",
          },
          {
            src: "/images/gallery/bride-bouquet-beach-closeup.jpg",
            alt: "Close-up of the bride's bouquet with the beach in the background",
          },
          {
            src: "/images/gallery/bride-chandelier-hallway-hacienda.jpg",
            alt: "Bride posing under a chandelier in the hacienda hallway",
          },
          {
            src: "/images/gallery/outdoor-dinner-illuminated-mansion-facade.jpg",
            alt: "Outdoor wedding dinner in front of an illuminated mansion facade",
          },
          {
            src: "/images/gallery/boho-hammock-lounge-seating.jpg",
            alt: "Boho lounge area with hammocks for wedding guests",
          },
          {
            src: "/images/gallery/rustic-long-table-centerpiece-bokeh.jpg",
            alt: "Long rustic wedding table with floral centerpieces",
          },
        ],
      },
      contact: {
        meta: {
          title: "Schedule Your Appointment in Mérida",
          description: `Alice Cantón Wedding Planner is a wedding and event coordinator in Mérida, Yucatán. Schedule an appointment at ${CONTACT.phone} and let's plan the wedding of your dreams.`,
        },
        hero: {
          title: "Contact",
          subtitle: "Tell us about your dream wedding — we're here to listen",
        },
        labels: {
          scheduleTitle: "Schedule an Appointment",
          contactTitle: "Contact",
          formNote: "Fields marked with * are required",
          addressLabel: "Address",
          address: "Calle 59D #253 x 122 y 124c, Yucalpetén Mérida, Yuc.",
          phoneLabel: "Phone",
          phone: CONTACT.phone,
          emailLabel: "Email",
          email: CONTACT.email,
        },
        quote:
          "“ Thank you for trusting me and letting me be part of your love story ”",
        faq: {
          title: "Frequently Asked Questions",
          items: [
            {
              q: "Why a Wedding Planner?",
              a: "Many couples think hiring a Wedding Planner is an unnecessary expense, and in some cases, when they have to cut their budget, the first thing to go is the Wedding Planner. The reality is that a Wedding Planner is a specialist with all the knowledge, vendor network, tips, and experience to handle the entire wedding planning so the couple doesn't have to worry or stress about anything. Something that defines my coordination is caring for each couple's budget. During planning it's very easy for the budget to grow and the wedding to end up costing more than planned. From the start I work with the budget the couple has, taking into account all those details they might overlook that, in the long run, cause the budget to be exceeded. At the end of the day, this helps the couple save on many things and manage their budget better. What you want to save by not hiring a Wedding Planner is exactly what you could end up saving by hiring one — plus zero stress and the certainty that everything will turn out just as you dream.",
            },
            {
              q: "Do you do events other than weddings?",
              a: "I specialize in weddings, but of course we can coordinate any kind of social event. Just tell me what you have in mind — bachelorette parties, baby showers, christenings, children's parties, and more. I'll put all my creativity to work so you can enjoy your big event, and you won't have to worry about a single detail, only about having fun.",
            },
            {
              q: "Do you work alone on the event day?",
              a: "No, I have a team that works with me at the event. The number of people supporting me depends on the size of the wedding.",
            },
            {
              q: "What does a Wedding Planner do?",
              a: "A Wedding Planner will guide you through the entire process of your wedding. There are countless details to consider when planning your wedding that couples often have no idea about. Your Wedding Planner will handle every detail. They will present a proposal according to your budget, handle hiring, appointments, and payments to vendors, and advise you on style, venue, date, and vendors. For your event day they will create a minute-by-minute timeline, be present on setup days, and coordinate the logistics, table assignments, and vendors at the event. The couple won't have to worry about anything but enjoying their big day.",
            },
            {
              q: "Where Can I Get Married?",
              a: "There are many venues in Mérida Yucatán — you can get married at a hacienda, on the beach, in a cenote, or in incredible event halls. Wherever you dream of getting married, I take care of everything and help you find the ideal place for you.",
            },
            {
              q: "What is the Price of Coordination?",
              a: `The price of coordination varies depending on the package you choose, the number of guests, and the event location, whether inside or outside the city of Mérida. Schedule an appointment at ${CONTACT.phone} and let's talk about the event you want so we can give you a tailored quote.`,
            },
            {
              q: "How Do I Hire You?",
              a: "We schedule an appointment to meet with no obligation. The couple tells me what they want and I explain how I work and what the planning process is like. To reserve the date we sign a contract on both sides with a deposit, and let's get to work!",
            },
          ],
        },
      },
    },
  },
} as const;

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      services: 'Servicios',
      venues: 'Locaciones',
      gallery: 'Galería',
      contact: 'Contacto',
    },
    header: {
      logoText: 'Alice Cantón',
      mobileMenuLabel: 'Abrir menú',
      langSwitch: 'EN',
    },
    footer: {
      tagline1: 'Wedding Planner en Mérida, Yucatán.',
      tagline2: 'Haciendo bodas inolvidables desde 2014.',
      contactHeading: 'Contacto',
      linksHeading: 'Links Rápidos',
      specialtiesHeading: 'Especialidades',
      copyrightSuffix: 'Alice Cantón Wedding Planner. Todos los derechos reservados.',
      links: [
        { label: 'Servicios', pageKey: 'services' as const },
        { label: 'Locaciones', pageKey: 'venues' as const },
        { label: 'Galería', pageKey: 'gallery' as const },
        { label: 'Contacto', pageKey: 'contact' as const },
        { label: 'Nosotros', pageKey: 'about' as const },
      ],
      specialties: [
        { label: 'Bodas en Hacienda', pageKey: 'venues' as const },
        { label: 'Bodas en Bacalar', pageKey: 'venues' as const },
        { label: 'Bodas en Playa', pageKey: 'venues' as const },
        { label: 'Bodas en Cenote', pageKey: 'venues' as const },
        { label: 'Bodas Destino', pageKey: 'services' as const },
      ],
    },
    cta: {
      title: 'Platiquemos',
      subtitle: 'Cuéntanos sobre tu boda soñada. Estamos listos para ayudarte a hacerla realidad.',
      button: 'Contactar',
    },
    form: {
      nameLabel: 'Nombre *',
      namePlaceholder: 'Tu nombre completo',
      emailLabel: 'Correo *',
      emailPlaceholder: 'tu@correo.com',
      phoneLabel: 'Teléfono',
      phonePlaceholder: '999 000 0000',
      dateLabel: 'Fecha de la Boda',
      messageLabel: 'Mensaje *',
      messagePlaceholder: 'Cuéntanos sobre tu boda soñada...',
      submitLabel: 'Enviar Mensaje',
    },
    pages: {
      home: {
        meta: {
          title: 'Inicio',
          description: 'Alice Cantón Wedding Planner en Mérida Yucatán — organización de bodas y eventos desde 2014.',
        },
        hero: {
          title: 'Wedding Planner en Mérida Yucatán',
          subtitle: 'Hacemos realidad la boda que siempre soñaste, cuidando cada detalle para que tú solo tengas que disfrutarlo.',
          cta: 'Contáctanos',
        },
        intro: {
          title: 'Wedding Planner en Mérida Yucatán',
          body: 'La organización de una boda requiere mucho tiempo y compromiso, parte del trabajo requiere conseguir proveedores, elegir decoración y podrían invertir muchas horas trabajando en los detalles para tener la boda de sus sueños. Afortunadamente, los novios no tienen que asumir toda esa responsabilidad. Mi trabajo como Wedding Planner es quitarles todo el peso de encima y asegurarme que todo vaya de acuerdo al plan, ustedes solo tienen que preocuparse por pasarla de lo mejor. Contratar un Wedding Planner te va a ayudar a que el proceso sea mucho más fácil y divertido.',
        },
        categories: [
          { label: 'Planeación' },
          { label: 'Banquete' },
          { label: 'Música' },
          { label: 'Duración' },
        ],
        services: {
          label: 'Lo que ofrecemos',
          title: 'Nuestros Servicios',
          items: [
            { icon: '♛', title: 'Coordinación Total', description: 'La planificación de la boda puede ser inmensamente estresante e implica mucho tiempo. ¡Déjenos manejar el trabajo por usted! El servicio de Coordinación Total le guiará a través de cada paso del proceso de planificación de la boda cubriendo todos los aspectos creativos, organizativos, técnicos y logísticos de tu gran día. Es ideal para parejas muy ocupadas que necesitan apoyo para la planeación de su boda.' },
            { icon: '✈', title: 'Coordinación Boda Destino', description: 'Este servicio cubrirá cada paso del proceso de planificación incluyendo todos los aspectos creativos, organizativos, técnicos y logísticos de tu evento. Ideal para las parejas que quieren disfrutar de una boda en el estado de Yucatán y al rededores, además de encargarme del evento, montaje, logística y cronograma, les ayudaré a tener la mejor estancia en el estado sugiriendo lugares donde hospedarse y organizando la logística para los novios y sus invitados.' },
            { icon: '◈', title: 'Coordinación del Día', description: 'Este servicio es ideal si ya tienes todo listo para tu boda pero necesitas a alguien que coordine el día de tu evento. Montaje, logística, cronograma. Ustedes solo tienen que disfrutar.' },
          ],
        },
        history: {
          title: 'Nuestra Historia',
          subtitle: 'Since 2014',
          body1: 'He tenido la oportunidad de ser parte del gran día de muchas parejas, todo comenzó con una plática entre amigas, decidimos unir nuestras habilidades y fortalezas y adentrarnos en la planeación de bodas, sin embargo, por azares del destino cada una tomó su camino. Personas que conocieron mi trabajo me siguieron contactando para ser su organizadora y decidí continuar por mi cuenta en este mundo que tanto me apasiona.',
          body2: 'Estoy muy agradecida con todos los que han sido parte de este viaje y espero con muchas ansias poder seguir creciendo y trabajando en hacer los sueños realidad de muchas parejas.',
          cta: 'Platiquemos',
        },
        quote: {
          text: 'Cuando te das cuenta que deseas pasar el resto de tu vida con una persona, quieres que el resto de tu vida empiece lo antes posible',
          attribution: '— When Harry met Sally',
        },
        portfolio: {
          label: 'Portafolio',
          title: 'Mi Trabajo',
          subtitle: 'Bodas',
          cta: 'Ver Galería Completa',
        },
        quoteBand: {
          text: '"Gracias por confiar en mí y permitirme ser parte de su historia de amor"',
          attribution: 'Su Especialista en Bodas',
        },
        testimonials: {
          label: 'Opiniones',
          title: 'Lo que dicen nuestros novios',
          items: [
            { quote: 'Alice: La experiencia que tuve contigo fue muy grata e importante, gracias por aportar ideas para mejorar y descargarme el estrés. Eres creativa y muy apasionada en lo que haces. Ojalá todas se den la oportunidad de trabajar contigo.', author: 'Jessi Rodriguez', year: '2016' },
            { quote: 'Alice es lo máximo! Super recomendable! El día de la boda me ayudó muchísimo, estuvo pendiente de mí en todo momento. Desde el inicio me dio todos los consejos que necesitaba para mi gran día, gracias por todo Alice!', author: 'Yare Leal', year: '2015' },
            { quote: 'Nuestra experiencia vivida en nuestra boda va resumida de esta manera: Nosotros no pensábamos contratar a una wedding planner. El servicio que brindó fue más que excelente y satisfactorio. Estamos muy agradecidos con su servicio y sobre todo profesionalismo.', author: 'Martha & Sergio', year: '2017' },
          ],
        },
        ctaBand: {
          text: 'Tu día especial merece una organización especial. Planearemos cada detalle para que tu boda sea inolvidable!',
        },
        homeContact: {
          title: 'Platiquemos',
          body: 'Escríbeme, vamos a platicar sobre todo lo que te puedo ayudar y como podemos lograr que pases el mejor día de tu vida.',
        },
      },
      about: {
        meta: {
          title: 'Nosotros',
          description: 'Conoce a Alice Cantón y su equipo de wedding planners en Mérida, Yucatán.',
        },
        hero: {
          title: 'Nosotros',
          subtitle: 'Conoce al equipo detrás de los mejores momentos de tu vida',
        },
        founder: {
          role: 'Fundadora & Wedding Planner',
          bio: 'Apasionada de la organización de eventos con enfoque en la planeación de bodas, Alice lleva más de diez años creando experiencias extraordinarias para parejas en Mérida, Yucatán y destinos especiales como Bacalar.',
          quote: '"Cada boda que planifico, lo hago con todo el amor, entusiasmo y dedicación como si fuera la mía propia."',
          note: 'Su momento favorito: el primer baile de los novios. Ese instante en que todo el trabajo se convierte en un recuerdo eterno.',
        },
        values: {
          title: 'Nuestros Valores',
          items: [
            { title: 'Visión', text: 'Ser la wedding planner de referencia en Yucatán, reconocida por transformar cada boda en una experiencia única e irrepetible para los novios y sus invitados.' },
            { title: 'Misión', text: 'Brindar un servicio de coordinación de bodas personalizado, profesional y confiable, cuidando cada detalle para que los novios vivan su día sin estrés y con total felicidad.' },
            { title: 'Objetivos', text: 'Garantizar la satisfacción de cada pareja, construir relaciones duraderas con los mejores proveedores de Yucatán y superar las expectativas en cada evento que coordinamos.' },
          ],
        },
        process: {
          label: 'Cómo trabajamos',
          title: 'Proceso de Organización',
          steps: [
            { num: '01', title: 'Consulta inicial', desc: 'Nos reunimos para conocerlos y entender su visión, estilo y presupuesto.' },
            { num: '02', title: 'Definición del presupuesto', desc: 'Trabajamos juntos para establecer un presupuesto realista y optimizar cada peso.' },
            { num: '03', title: 'Selección del estilo', desc: 'Elegimos la paleta de colores, la ambientación y los detalles que harán única su boda.' },
            { num: '04', title: 'Organización completa', desc: 'Coordinamos proveedores, tiempos, locación y cada elemento de su evento.' },
            { num: '05', title: '¡Disfruten su día!', desc: 'El día de la boda, nosotros nos encargamos de todo para que ustedes solo vivan el momento.' },
          ],
        },
        venues: {
          label: 'Donde trabajamos',
          title: 'Locaciones Increíbles',
          body: 'Conocemos a fondo cada rincón de Yucatán y sus alrededores. Haciendas históricas, playas paradisíacas, cenotes sagrados y las aguas de Bacalar son el escenario perfecto para tu boda.',
          buttons: ['Haciendas', 'Playas', 'Cenotes', 'Bacalar'],
        },
      },
      services: {
        meta: {
          title: 'Servicios',
          description: 'Servicios de coordinación de bodas en Mérida Yucatán: coordinación total, boda destino y coordinación del día.',
        },
        hero: {
          title: 'Servicios',
          subtitle: 'Tres niveles de coordinación diseñados para que cada pareja encuentre el apoyo perfecto',
        },
        items: [
          {
            icon: '♛',
            title: 'Coordinación Total',
            description: 'Nuestro servicio más completo. Cubrimos todos los aspectos creativos, organizacionales, técnicos y logísticos de tu boda desde el primer día hasta el último baile. Trabajamos contigo para definir el estilo, seleccionar proveedores, gestionar presupuesto y asegurarnos de que cada detalle refleje exactamente quiénes son como pareja.',
            details: ['Consultoría de estilo y concepto', 'Selección y gestión de proveedores', 'Control de presupuesto', 'Coordinación de ensayo y boda', 'Timeline detallado del evento', 'Supervisión el día de la boda'],
          },
          {
            icon: '✈',
            title: 'Coordinación Boda Destino',
            description: 'Especializada para parejas que vienen de otras ciudades o países a casarse en el hermoso Yucatán. Nos encargamos de todo desde la distancia: locaciones, proveedores locales, hospedaje para invitados, traslados y la logística completa para que su llegada a Mérida o Bacalar sea perfecta.',
            details: ['Scouting de locaciones', 'Recomendaciones de hospedaje', 'Logística de traslados para invitados', 'Coordinación con proveedores locales', 'Visitas virtuales y presenciales', 'Acompañamiento completo el día del evento'],
          },
          {
            icon: '◈',
            title: 'Coordinación del Día',
            description: 'Para parejas que ya tienen todo planeado y necesitan a alguien de confianza que ejecute su visión a la perfección. Nos integramos a tu planeación semanas antes, conocemos a todos los proveedores, preparamos el timeline y el día de la boda nos aseguramos de que todo fluya exactamente como lo soñaste.',
            details: ['Revisión del plan existente', 'Reunión con proveedores previo al evento', 'Elaboración del timeline del día', 'Coordinación del ensayo', 'Supervisión completa del evento', 'Gestión de imprevistos'],
          },
        ],
        values: {
          label: 'Por qué elegirnos',
          title: 'Nuestros Valores',
          items: [
            { icon: '★', label: 'Experiencia', text: 'Más de 10 años coordinando bodas en Yucatán y destinos especiales.' },
            { icon: '◆', label: 'Profesionalismo', text: 'Un equipo dedicado que trabaja con los mejores proveedores de la región.' },
            { icon: '✓', label: 'Garantía', text: 'Tu satisfacción es nuestra prioridad. Trabajamos hasta que todo sea perfecto.' },
            { icon: '❋', label: 'Calidad', text: 'Cuidamos cada detalle para que tu boda supere todas tus expectativas.' },
          ],
        },
      },
      venues: {
        meta: {
          title: 'Locaciones',
          description: 'Locaciones increíbles para tu boda en Yucatán: haciendas, playas, cenotes y Bacalar.',
        },
        hero: {
          title: 'Locaciones Increíbles',
          subtitle: 'Yucatán y sus alrededores ofrecen escenarios únicos para una boda verdaderamente memorable',
        },
        intro: {
          label: 'Conocemos cada rincón',
          title: 'Tu escenario perfecto te espera',
          body: 'Desde haciendas coloniales hasta cenotes sagrados, la Península de Yucatán ofrece una variedad de locaciones que simplemente no encontrarás en ningún otro lugar del mundo. Nuestro equipo conoce a fondo cada espacio y trabaja con los mejores proveedores de la región para garantizarte una experiencia sin igual.',
        },
        items: [
          { title: 'Haciendas en Yucatán', description: 'Las haciendas yucatecas son escenarios mágicos con una historia rica y una arquitectura colonial incomparable. Sus jardines exuberantes, arcos de piedra y salones históricos crean el ambiente perfecto para una boda de ensueño. Cada hacienda tiene su propia personalidad, y nosotros te ayudamos a encontrar la que mejor cuente tu historia de amor.', reverse: false },
          { title: 'Playas Yucatecas', description: 'Las costas de la Península de Yucatán ofrecen paisajes irresistibles de arena blanca y mar turquesa. Una boda en la playa significa elegancia natural, puestas de sol espectaculares y el sonido de las olas como fondo musical. Coordinamos todos los permisos y detalles para que tu ceremonia frente al mar sea perfecta.', reverse: true },
          { title: 'Cenotes en Yucatán', description: 'Los cenotes son ventanas al mundo subterráneo de la Península de Yucatán. Su nombre viene del maya "dzonoot", que significa "hoyo con agua". Históricamente sagrados para los mayas, hoy son algunos de los escenarios más únicos y fotografiados para bodas. Sus aguas cristalinas y la luz natural que penetra desde arriba crean una atmósfera verdaderamente mágica.', note: 'Del maya dzonoot: "hoyo con agua" — lugares sagrados donde los mayas realizaban rituales.', reverse: false },
          { title: 'Laguna de los 7 Colores, Bacalar', description: 'Bacalar, cuyo nombre en maya significa "lugar donde nace el cielo", alberga una de las maravillas naturales más impresionantes de México. La Laguna de los 7 Colores debe su nombre a las siete variaciones de tonalidades turquesas y azules producidas por tres cenotes subterráneos que alimentan sus aguas. Una boda en Bacalar es una experiencia que ningún invitado olvidará jamás.', note: '"Lugar donde nace el cielo" — así llaman los mayas a Bacalar.', reverse: true },
        ],
      },
      gallery: {
        meta: {
          title: 'Galería',
          description: 'Portafolio de bodas coordinadas por Alice Cantón Wedding Planner en Mérida Yucatán.',
        },
        hero: {
          title: 'Galería',
          subtitle: 'Revive los momentos inolvidables',
        },
        grid: {
          label: 'Portafolio',
          title: 'Bodas que hemos coordinado',
          ctaNote: '¿Quieres ver tu boda aquí?',
          ctaLink: 'Platiquemos',
        },
        photos: [
          { src: 'https://alicecantonweddings.com/wp-content/uploads/2019/08/guests-with-smartphones-taking-photo-of-bride-and-HU8RSK4.jpg', alt: 'Invitados fotografiando a la novia', span: 'md:col-span-2 md:row-span-2' },
          { src: null, alt: 'Ceremonia', span: '' },
          { src: null, alt: 'Decoración', span: '' },
          { src: null, alt: 'Novios', span: '' },
          { src: null, alt: 'Hacienda', span: '' },
          { src: null, alt: 'Detalles', span: 'md:col-span-2' },
          { src: null, alt: 'Recepción', span: '' },
          { src: null, alt: 'Flores', span: '' },
          { src: null, alt: 'Primer baile', span: '' },
        ],
      },
      contact: {
        meta: {
          title: 'Contacto',
          description: 'Contacta a Alice Cantón Wedding Planner en Mérida Yucatán. Teléfono, correo y formulario de contacto.',
        },
        hero: {
          title: 'Contacto',
          subtitle: 'Cuéntanos sobre tu boda soñada — estamos aquí para escucharte',
        },
        labels: {
          findUs: 'Encuéntranos',
          phone: 'Teléfono',
          email: 'Correo',
          address: 'Dirección',
          social: 'Redes Sociales',
          writeUs: 'Escríbenos',
        },
        faq: {
          label: 'Preguntas frecuentes',
          title: 'FAQ',
          items: [
            { q: '¿Por qué contratar una wedding planner?', a: 'Una wedding planner te ahorra tiempo, estrés y muchas veces dinero. Conocemos los mejores proveedores, negociamos en tu nombre y nos aseguramos de que cada detalle esté perfecto para que tú solo disfrutes tu día.' },
            { q: '¿Qué tipos de eventos coordinan?', a: 'Nos especializamos en bodas de todos los estilos y tamaños, desde íntimas ceremonias en cenotes hasta grandes celebraciones en haciendas. También coordinamos XV años y eventos corporativos especiales.' },
            { q: '¿Cuentan con equipo de apoyo?', a: 'Sí. Trabajamos con un equipo de coordinadores capacitados que nos apoyan el día del evento para garantizar que todo fluya perfectamente, sin importar el tamaño de la celebración.' },
            { q: '¿Cómo es su estructura de precios?', a: 'Los precios se personalizan según el número de invitados, la locación y el servicio que elijas. Cuidamos mucho el presupuesto de nuestros clientes y trabajamos para optimizar cada peso. Agenda una consulta para conocer tu cotización personalizada.' },
            { q: '¿Trabajan fuera de Mérida?', a: 'Absolutamente. Tenemos amplia experiencia en bodas destino en toda la Península de Yucatán: Bacalar, la Riviera Maya y otros destinos especiales. Contáctanos para coordinar tu boda donde sea.' },
          ],
        },
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      venues: 'Venues',
      gallery: 'Gallery',
      contact: 'Contact',
    },
    header: {
      logoText: 'Alice Cantón',
      mobileMenuLabel: 'Open menu',
      langSwitch: 'ES',
    },
    footer: {
      tagline1: 'Wedding Planner in Mérida, Yucatán.',
      tagline2: 'Creating unforgettable weddings since 2014.',
      contactHeading: 'Contact',
      linksHeading: 'Quick Links',
      specialtiesHeading: 'Specialties',
      copyrightSuffix: 'Alice Cantón Wedding Planner. All rights reserved.',
      links: [
        { label: 'Services', pageKey: 'services' as const },
        { label: 'Venues', pageKey: 'venues' as const },
        { label: 'Gallery', pageKey: 'gallery' as const },
        { label: 'Contact', pageKey: 'contact' as const },
        { label: 'About', pageKey: 'about' as const },
      ],
      specialties: [
        { label: 'Hacienda Weddings', pageKey: 'venues' as const },
        { label: 'Bacalar Weddings', pageKey: 'venues' as const },
        { label: 'Beach Weddings', pageKey: 'venues' as const },
        { label: 'Cenote Weddings', pageKey: 'venues' as const },
        { label: 'Destination Weddings', pageKey: 'services' as const },
      ],
    },
    cta: {
      title: "Let's Talk",
      subtitle: "Tell us about your dream wedding. We're ready to help you make it a reality.",
      button: 'Contact Us',
    },
    form: {
      nameLabel: 'Name *',
      namePlaceholder: 'Your full name',
      emailLabel: 'Email *',
      emailPlaceholder: 'your@email.com',
      phoneLabel: 'Phone',
      phonePlaceholder: '999 000 0000',
      dateLabel: 'Wedding Date',
      messageLabel: 'Message *',
      messagePlaceholder: 'Tell us about your dream wedding...',
      submitLabel: 'Send Message',
    },
    pages: {
      home: {
        meta: {
          title: 'Home',
          description: 'Alice Cantón Wedding Planner in Mérida Yucatán — wedding and event coordination since 2014.',
        },
        hero: {
          title: 'Wedding Planner in Mérida Yucatán',
          subtitle: 'We make your dream wedding come true, taking care of every detail so you only have to enjoy it.',
          cta: 'Contact Us',
        },
        intro: {
          title: 'Wedding Planner in Mérida Yucatán',
          body: "Organizing a wedding takes a great deal of time and commitment. The work involves finding vendors, choosing décor, and spending many hours on the details to have the wedding of your dreams. Fortunately, the couple doesn't have to take on all that responsibility. My work as a Wedding Planner is to take that weight off your shoulders and make sure everything goes according to plan, so you only have to focus on enjoying yourselves. Hiring a Wedding Planner will make the process much easier and more fun.",
        },
        categories: [
          { label: 'Planning' },
          { label: 'Banquet' },
          { label: 'Music' },
          { label: 'Duration' },
        ],
        services: {
          label: 'What we offer',
          title: 'Our Services',
          items: [
            { icon: '♛', title: 'Full Coordination', description: 'Wedding planning can be immensely stressful and time-consuming. Let us handle the work for you! The Full Coordination service will guide you through every step of the wedding planning process, covering all creative, organizational, technical, and logistical aspects of your big day. It is ideal for very busy couples who need support for their wedding planning.' },
            { icon: '✈', title: 'Destination Wedding Coordination', description: 'This service covers every step of the planning process, including all creative, organizational, technical, and logistical aspects of your event. Ideal for couples who want to enjoy a wedding in the state of Yucatán and surrounding areas. In addition to managing the event, setup, logistics, and timeline, we will help you have the best stay in the area by suggesting places to stay and organizing logistics for the couple and their guests.' },
            { icon: '◈', title: 'Day-of Coordination', description: 'This service is ideal if you already have everything ready for your wedding but need someone to coordinate the day of your event. Setup, logistics, timeline. You just have to enjoy.' },
          ],
        },
        history: {
          title: 'Our Story',
          subtitle: 'Since 2014',
          body1: "I've had the opportunity to be part of the big day for many couples. It all started with a conversation between friends — we decided to combine our skills and strengths and venture into wedding planning. However, as fate would have it, each of us took her own path. People who knew my work kept reaching out for me to be their coordinator, and I decided to continue on my own in this world I'm so passionate about.",
          body2: 'I am very grateful to everyone who has been part of this journey, and I look forward with great anticipation to continuing to grow and work on making the dreams of many couples a reality.',
          cta: "Let's Talk",
        },
        quote: {
          text: 'Cuando te das cuenta que deseas pasar el resto de tu vida con una persona, quieres que el resto de tu vida empiece lo antes posible',
          attribution: '— When Harry met Sally',
        },
        portfolio: {
          label: 'Portfolio',
          title: 'My Work',
          subtitle: 'Weddings',
          cta: 'View Full Gallery',
        },
        quoteBand: {
          text: '"Thank you for trusting me and allowing me to be part of your love story"',
          attribution: 'Your Wedding Specialist',
        },
        testimonials: {
          label: 'Reviews',
          title: 'What our couples say',
          items: [
            { quote: 'Alice: The experience I had with you was very pleasant and meaningful. Thank you for contributing ideas to improve things and for relieving my stress. You are creative and very passionate about what you do. I hope everyone gives themselves the opportunity to work with you.', author: 'Jessi Rodriguez', year: '2016' },
            { quote: "Alice is the best! Highly recommended! On the wedding day she helped me tremendously, she was attentive to me at every moment. From the start she gave me all the advice I needed for my big day. Thank you for everything, Alice!", author: 'Yare Leal', year: '2015' },
            { quote: "Our wedding experience can be summed up like this: We hadn't planned to hire a wedding planner. The service she provided was more than excellent and satisfying. We are very grateful for her service and above all her professionalism.", author: 'Martha & Sergio', year: '2017' },
          ],
        },
        ctaBand: {
          text: 'Your special day deserves special organization. We will plan every detail to make your wedding unforgettable!',
        },
        homeContact: {
          title: "Let's Talk",
          body: "Write to me, let's talk about everything I can help you with and how we can make sure you have the best day of your life.",
        },
      },
      about: {
        meta: {
          title: 'About Us',
          description: 'Meet Alice Cantón and her wedding planning team in Mérida, Yucatán.',
        },
        hero: {
          title: 'About Us',
          subtitle: 'Meet the team behind the best moments of your life',
        },
        founder: {
          role: 'Founder & Wedding Planner',
          bio: 'Passionate about event organization with a focus on wedding planning, Alice has spent over ten years creating extraordinary experiences for couples in Mérida, Yucatán and special destinations like Bacalar.',
          quote: '"Every wedding I plan, I do with all the love, enthusiasm, and dedication as if it were my own."',
          note: "Her favorite moment: the couple's first dance. That instant when all the work becomes an eternal memory.",
        },
        values: {
          title: 'Our Values',
          items: [
            { title: 'Vision', text: 'To be the go-to wedding planner in Yucatán, known for transforming every wedding into a unique and unrepeatable experience for couples and their guests.' },
            { title: 'Mission', text: 'To provide a personalized, professional, and reliable wedding coordination service, caring for every detail so that couples live their day stress-free and with complete happiness.' },
            { title: 'Objectives', text: "To ensure every couple's satisfaction, build lasting relationships with the best vendors in Yucatán, and exceed expectations at every event we coordinate." },
          ],
        },
        process: {
          label: 'How we work',
          title: 'Planning Process',
          steps: [
            { num: '01', title: 'Initial Consultation', desc: 'We meet to get to know you and understand your vision, style, and budget.' },
            { num: '02', title: 'Budget Definition', desc: 'We work together to establish a realistic budget and optimize every dollar.' },
            { num: '03', title: 'Style Selection', desc: 'We choose the color palette, ambiance, and details that will make your wedding unique.' },
            { num: '04', title: 'Full Organization', desc: 'We coordinate vendors, timelines, venues, and every element of your event.' },
            { num: '05', title: 'Enjoy Your Day!', desc: 'On your wedding day, we handle everything so you can simply live the moment.' },
          ],
        },
        venues: {
          label: 'Where we work',
          title: 'Amazing Venues',
          body: 'We know every corner of Yucatán and its surroundings. Historic haciendas, paradise beaches, sacred cenotes, and the waters of Bacalar are the perfect setting for your wedding.',
          buttons: ['Haciendas', 'Beaches', 'Cenotes', 'Bacalar'],
        },
      },
      services: {
        meta: {
          title: 'Services',
          description: 'Wedding coordination services in Mérida Yucatán: full coordination, destination wedding, and day-of coordination.',
        },
        hero: {
          title: 'Services',
          subtitle: 'Three levels of coordination designed so every couple finds the perfect support',
        },
        items: [
          {
            icon: '♛',
            title: 'Full Coordination',
            description: 'Our most complete service. We cover all creative, organizational, technical, and logistical aspects of your wedding from day one to the last dance. We work with you to define the style, select vendors, manage the budget, and ensure every detail reflects exactly who you are as a couple.',
            details: ['Style and concept consulting', 'Vendor selection and management', 'Budget control', 'Rehearsal and wedding day coordination', 'Detailed event timeline', 'Wedding day supervision'],
          },
          {
            icon: '✈',
            title: 'Destination Wedding Coordination',
            description: 'Specialized for couples coming from other cities or countries to marry in beautiful Yucatán. We handle everything from a distance: venues, local vendors, guest accommodation, transportation, and complete logistics for your arrival in Mérida or Bacalar to be perfect.',
            details: ['Venue scouting', 'Accommodation recommendations', 'Guest transportation logistics', 'Coordination with local vendors', 'Virtual and in-person site visits', 'Full day-of event support'],
          },
          {
            icon: '◈',
            title: 'Day-of Coordination',
            description: "For couples who have everything planned and need someone they trust to execute their vision perfectly. We integrate with your planning weeks before, meet all the vendors, prepare the timeline, and on your wedding day we make sure everything flows exactly as you dreamed.",
            details: ['Review of existing plan', 'Pre-event vendor meeting', 'Day-of timeline preparation', 'Rehearsal coordination', 'Full event supervision', 'Managing unexpected situations'],
          },
        ],
        values: {
          label: 'Why choose us',
          title: 'Our Values',
          items: [
            { icon: '★', label: 'Experience', text: 'Over 10 years coordinating weddings in Yucatán and special destinations.' },
            { icon: '◆', label: 'Professionalism', text: 'A dedicated team that works with the best vendors in the region.' },
            { icon: '✓', label: 'Guarantee', text: 'Your satisfaction is our priority. We work until everything is perfect.' },
            { icon: '❋', label: 'Quality', text: 'We care for every detail so your wedding exceeds all your expectations.' },
          ],
        },
      },
      venues: {
        meta: {
          title: 'Venues',
          description: 'Incredible wedding venues in Yucatán: haciendas, beaches, cenotes, and Bacalar.',
        },
        hero: {
          title: 'Amazing Venues',
          subtitle: 'Yucatán and its surroundings offer unique settings for a truly memorable wedding',
        },
        intro: {
          label: 'We know every corner',
          title: 'Your perfect setting awaits',
          body: "From colonial haciendas to sacred cenotes, the Yucatán Peninsula offers a variety of venues that you simply won't find anywhere else in the world. Our team knows each space in depth and works with the best vendors in the region to guarantee you an unparalleled experience.",
        },
        items: [
          { title: 'Haciendas in Yucatán', description: 'Yucatecan haciendas are magical settings with a rich history and incomparable colonial architecture. Their lush gardens, stone arches, and historic halls create the perfect atmosphere for a dream wedding. Each hacienda has its own personality, and we help you find the one that best tells your love story.', reverse: false },
          { title: 'Yucatecan Beaches', description: 'The coasts of the Yucatán Peninsula offer irresistible landscapes of white sand and turquoise sea. A beach wedding means natural elegance, spectacular sunsets, and the sound of the waves as background music. We coordinate all permits and details so your ceremony by the sea is perfect.', reverse: true },
          { title: 'Cenotes in Yucatán', description: 'Cenotes are windows to the underground world of the Yucatán Peninsula. Their name comes from the Mayan "dzonoot", meaning "water hole". Historically sacred to the Maya, they are today some of the most unique and photographed settings for weddings. Their crystal-clear waters and the natural light filtering from above create a truly magical atmosphere.', note: 'From Mayan dzonoot: "water hole" — sacred places where the Maya performed rituals.', reverse: false },
          { title: 'Laguna de los 7 Colores, Bacalar', description: "Bacalar, whose name in Mayan means \"place where the sky is born\", is home to one of Mexico's most impressive natural wonders. The Laguna de los 7 Colores owes its name to the seven turquoise and blue color variations produced by three underground cenotes that feed its waters. A wedding in Bacalar is an experience no guest will ever forget.", note: '"Place where the sky is born" — that\'s what the Maya call Bacalar.', reverse: true },
        ],
      },
      gallery: {
        meta: {
          title: 'Gallery',
          description: 'Portfolio of weddings coordinated by Alice Cantón Wedding Planner in Mérida Yucatán.',
        },
        hero: {
          title: 'Gallery',
          subtitle: 'Relive the unforgettable moments',
        },
        grid: {
          label: 'Portfolio',
          title: "Weddings we've coordinated",
          ctaNote: 'Want to see your wedding here?',
          ctaLink: "Let's talk",
        },
        photos: [
          { src: 'https://alicecantonweddings.com/wp-content/uploads/2019/08/guests-with-smartphones-taking-photo-of-bride-and-HU8RSK4.jpg', alt: 'Guests photographing the bride', span: 'md:col-span-2 md:row-span-2' },
          { src: null, alt: 'Ceremony', span: '' },
          { src: null, alt: 'Decoration', span: '' },
          { src: null, alt: 'Couple', span: '' },
          { src: null, alt: 'Hacienda', span: '' },
          { src: null, alt: 'Details', span: 'md:col-span-2' },
          { src: null, alt: 'Reception', span: '' },
          { src: null, alt: 'Flowers', span: '' },
          { src: null, alt: 'First dance', span: '' },
        ],
      },
      contact: {
        meta: {
          title: 'Contact',
          description: 'Contact Alice Cantón Wedding Planner in Mérida Yucatán. Phone, email, and contact form.',
        },
        hero: {
          title: 'Contact',
          subtitle: "Tell us about your dream wedding — we're here to listen",
        },
        labels: {
          findUs: 'Find us',
          phone: 'Phone',
          email: 'Email',
          address: 'Address',
          social: 'Social Media',
          writeUs: 'Write to us',
        },
        faq: {
          label: 'Frequently asked questions',
          title: 'FAQ',
          items: [
            { q: 'Why hire a wedding planner?', a: "A wedding planner saves you time, stress, and often money. We know the best vendors, negotiate on your behalf, and ensure every detail is perfect so you can simply enjoy your day." },
            { q: 'What types of events do you coordinate?', a: 'We specialize in weddings of all styles and sizes, from intimate cenote ceremonies to grand hacienda celebrations. We also coordinate quinceañeras and special corporate events.' },
            { q: 'Do you have a support team?', a: "Yes. We work with a team of trained coordinators who support us on the event day to ensure everything flows perfectly, regardless of the celebration's size." },
            { q: 'What is your pricing structure?', a: "Prices are customized based on the number of guests, venue, and service you choose. We take great care of our clients' budgets and work to optimize every penny. Schedule a consultation to get your personalized quote." },
            { q: 'Do you work outside of Mérida?', a: 'Absolutely. We have extensive experience with destination weddings throughout the Yucatán Peninsula: Bacalar, the Riviera Maya, and other special destinations. Contact us to coordinate your wedding anywhere.' },
          ],
        },
      },
    },
  },
} as const;

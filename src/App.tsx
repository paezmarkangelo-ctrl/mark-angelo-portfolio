import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function PortfolioWebsite() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] =
  useState("projects");
  const [mobileMenu, setMobileMenu] =
  useState(false);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const { scrollY } = useScroll();

  const { scrollYProgress } =
  useScroll();

const scaleX = useSpring(
  scrollYProgress,
  {
    stiffness: 100,
    damping: 30,
  }
);

  const heroY = useTransform(
  scrollY,
  [0, 500],
  [0, 120]
  );

  useEffect(() => {
    const updateMousePosition = (
      e: MouseEvent
    ) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
  
    window.addEventListener(
      "mousemove",
      updateMousePosition
    );
  
    return () => {
      window.removeEventListener(
        "mousemove",
        updateMousePosition
      );
    };
  }, []);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
  
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const sections = [
      "home",
      "projects",
      "services",
      "about",
      "contact",
    ];
  
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + 200;
  
      sections.forEach((section) => {
        const element =
          document.getElementById(section);
  
        if (element) {
          const offsetTop = element.offsetTop;
          const height =
            element.offsetHeight;
  
          if (
            scrollPosition >= offsetTop &&
            scrollPosition <
              offsetTop + height
          ) {
            setActiveSection(section);
          }
        }
      });
    };
  
    window.addEventListener(
      "scroll",
      handleScroll
    );
  
    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const backgroundClass = darkMode
    ? "bg-black text-white"
    : "bg-[#F5F7FA] text-black";

  const cardClass = darkMode
    ? "bg-white/[0.03] border-white/10"
    : "bg-white border-black/10 shadow-xl";

  const mutedText = darkMode ? "text-gray-400" : "text-gray-600";

  const navText = darkMode
    ? "text-white/80 hover:text-white"
    : "text-black/70 hover:text-black";

    const premiumReveal = {
      hidden: {
        opacity: 0,
        y: 60,
        scale: 0.96,
        filter: "blur(10px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
          duration: 0.8,
        },
      },
    };

  const serviceNowProjects = [
    {
      title: "Incident Workflow Automation",
      desc: "Automated routing, SLA handling, approvals, and notifications using Flow Designer and Business Rules.",
      tag: "Workflow Automation",
    },
    {
      title: "Employee Self-Service Portal",
      desc: "Customized Service Portal widgets and onboarding request flows for better employee experience.",
      tag: "Service Portal",
    },
    {
      title: "Email-to-Ticket Integration",
      desc: "Configured inbound email actions and automation logic for seamless incident creation workflows.",
      tag: "REST & Automation",
    },
  ];

  const editingProjects = [
    {
      title: "Travel Cinematic",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      title: "Creative Reel",
      video:
        "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    },
    {
      title: "Lifestyle Edit",
      video: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      title: "Social Media Ad",
      video:
        "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    },
  ];

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-[99999]">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex flex-col items-center gap-8"
        >
          <div className="relative">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-24 h-24 rounded-full border-t-2 border-cyan-300 border-white/10"
            />
  
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_25px_#22d3ee]" />
            </div>
          </div>
  
          <h1 className="text-white text-2xl font-bold tracking-[0.4em]">
            MARK ANGELO
          </h1>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-700 ${backgroundClass}`}
      
    >
      <motion.div
  style={{ scaleX }}
  className="fixed top-0 left-0 right-0 h-1 bg-cyan-400 origin-left z-[99999]"
/>
      {/* CURSOR GLOW */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-64 h-64 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
        }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.6,
        }}
      />

      {/* CURSOR DOT */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_35px_rgba(34,211,238,0.45)] pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.15,
        }}
      />

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-cyan-500/10 blur-[160px] rounded-full"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-blue-500/10 blur-[160px] rounded-full"
        />
          {[...Array(25)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-cyan-300/30 rounded-full"
      initial={{
        x:
          Math.random() *
          window.innerWidth,
        y:
          Math.random() *
          window.innerHeight,
        opacity: Math.random(),
      }}
      animate={{
        y: [
          Math.random() *
            window.innerHeight,
          -100,
        ],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration:
          8 + Math.random() * 10,
        repeat: Infinity,
        delay: Math.random() * 5,
      }}
    />
  ))}
      </div>

      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="fixed top-6 left-0 right-0 z-50 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`flex items-center justify-between px-6 py-4 rounded-full border backdrop-blur-2xl ${
              darkMode
                ? "bg-black/40 border-white/10"
                : "bg-white/70 border-black/10"
            }`}
          >
            {/* LEFT */}
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-8 h-8 bg-cyan-400/30 blur-xl rounded-full" />

                <div className="w-3 h-3 bg-cyan-300 rounded-full shadow-[0_0_20px_#22d3ee]" />
              </div>

              <span className="font-semibold text-sm md:text-base whitespace-nowrap">
                Hi! I'm Mark Angelo
              </span>
            </div>

        {/* RIGHT */}
<div className="hidden md:flex items-center gap-3">
{[
  {
    label: "Home",
    href: "#home",
    id: "home",
  },
  {
    label: "Projects",
    href: "#projects",
    id: "projects",
  },
  {
    label: "Services",
    href: "#services",
    id: "services",
  },
  {
    label: "About",
    href: "#about",
    id: "about",
  },
  {
    label: "Contact",
    href: "#contact",
    id: "contact",
  },
].map((item) => (
    <motion.a
      key={item.label}
      href={item.href}
      whileHover={{
        scale: 1.08,
        y: -5,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      className={`group relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden ${
        activeSection === item.id
          ? "text-cyan-300"
          : navText
      }`}
    >
      <div
        className={`absolute inset-0 rounded-full blur-xl transition duration-300 ${
          activeSection === item.id
            ? "bg-cyan-400/20 opacity-100"
            : "bg-cyan-400/10 opacity-0 group-hover:opacity-100"
        }`}
      />

      <span className="relative z-10">
        {item.label}
      </span>
    </motion.a>
  ))}

  {/* TOGGLE */}
  <motion.button
    whileTap={{ scale: 0.95 }}
    onClick={() => setDarkMode(!darkMode)}
    className={`relative w-[74px] h-[38px] rounded-full border transition-all duration-500 overflow-hidden ${
      darkMode
        ? "bg-[#0f172a] border-white/10"
        : "bg-white border-black/20"
    }`}
  >
    <motion.div
      animate={{
        x: darkMode ? 38 : 2,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={`absolute top-[2px] w-[32px] h-[32px] rounded-full flex items-center justify-center shadow-lg ${
        darkMode ? "bg-[#111827]" : "bg-[#0f172a]"
      }`}
    >
      {darkMode ? (
        <div className="relative w-4 h-4 rounded-full bg-yellow-300">
          <div className="absolute top-0 left-[6px] w-4 h-4 rounded-full bg-[#111827]" />
        </div>
      ) : (
        <div className="relative flex items-center justify-center w-5 h-5">
          <div className="absolute w-3 h-3 rounded-full bg-yellow-400" />

          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[2px] h-[6px] bg-yellow-400 rounded-full"
              style={{
                transform: `rotate(${i * 45}deg) translateY(-8px)`,
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  </motion.button>
</div>

{/* MOBILE MENU BUTTON */}
<div className="md:hidden">
  <button
    className="text-white text-2xl"
    onClick={() =>
      setMobileMenu(!mobileMenu)
    }
  >
    ☰
  </button>
</div>
</div>
</div>
</motion.nav>


{mobileMenu && (
  <motion.div
    initial={{
      opacity: 0,
      y: -20,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    className="fixed top-24 left-6 right-6 z-40 rounded-3xl border border-white/10 bg-black/80 backdrop-blur-2xl p-6 flex flex-col gap-4"
  >
    {[
      "home",
      "projects",
      "services",
      "about",
      "contact",
    ].map((item) => (
      <a
        key={item}
        href={`#${item}`}
        onClick={() =>
          setMobileMenu(false)
        }
        className="text-white text-lg capitalize"
      >
        {item}
      </a>
    ))}
  </motion.div>
)}

     {/* HERO */}
<motion.section
  id="home"
  initial={{
    opacity: 0,
    y: 40,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 1.2,
  }}
  className="relative max-w-7xl mx-auto px-6 pt-48 pb-32"
>
  <motion.div
    style={{
      y: heroY,
    }}
  >
    <p className="uppercase tracking-[0.35em] text-cyan-300 text-xs md:text-sm mb-6">
      ServiceNow Developer • Video Editor
    </p>

    <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.95] mb-8">
      Building
      <br />
      Cinematic
      <br />
      Digital
      <br />
      Experiences
    </h1>

    <p
      className={`text-lg md:text-xl leading-relaxed max-w-2xl mb-10 ${mutedText}`}
    >
      Premium workflow automation, cinematic editing, modern UI systems,
      and immersive digital experiences.
    </p>

    <div className="flex flex-wrap gap-5 items-center">
      <motion.button
        whileHover={{
          scale: 1.08,
          y: -5,
        }}
        whileTap={{
          scale: 0.96,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
        }}
        className="px-8 py-4 rounded-full bg-white text-black font-semibold h-auto"
      >
        View Projects
      </motion.button>

      <motion.button
        whileHover={{
          scale: 1.08,
          y: -5,
        }}
        whileTap={{
          scale: 0.96,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
        }}
        className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/10 h-auto"
      >
        Watch My Work
      </motion.button>
    </div>

    <motion.div
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="mt-20 relative w-fit"
    >
      <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-[3rem]" />

      <div className="relative max-w-md rounded-[3rem] overflow-hidden border border-white/10 backdrop-blur-2xl">
        <img
          src="/514409603_24309614505317699_4619182895946011206_n.jpg"
          alt="Mark Angelo"
          className="w-full h-[500px] object-cover"
        />
      </div>
    </motion.div>
  </motion.div>
</motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        variants={premiumReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-32"
      >
        <p className="uppercase tracking-[0.35em] text-cyan-300 text-xs md:text-sm mb-6">
          ServiceNow Projects
        </p>

        <h2 className="text-4xl md:text-6xl font-black mb-20">
          Enterprise
          <br />
          Workflow Systems
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceNowProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.9,
                filter: "blur(12px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                transitionEnd: {
                  filter: "none",
                },
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.9,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="group relative will-change-transform"
            >
              <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 blur-3xl transition-all duration-500 rounded-[3rem]" />

              <div
                className={`relative ${cardClass} border rounded-[3rem] p-8 backdrop-blur-xl`}
              >
                <div className="relative h-56 rounded-[2rem] overflow-hidden mb-8">
                  <img
                    src="/514409603_24309614505317699_4619182895946011206_n.jpg"
                    alt="Mark Angelo"
                    className="w-full h-full object-cover scale-110 opacity-80"
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-black/40" />

                  {/* CYAN GLOW */}
                  <div className="absolute inset-0 bg-cyan-500/10 mix-blend-screen" />

                  {/* BOTTOM GRADIENT */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>
                <span className="text-cyan-300 text-sm">{project.tag}</span>

                <h3 className="text-2xl font-bold mt-4 mb-5">
                  {project.title}
                </h3>

                <p className={`${mutedText} leading-relaxed`}>{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* VIDEO EDITING */}
      <motion.section
        id="services"
        variants={premiumReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-32"
      >
        <p className="uppercase tracking-[0.35em] text-cyan-300 text-xs md:text-sm mb-6">
          Video Editing
        </p>

        <h2 className="text-4xl md:text-6xl font-black mb-20">
          Cinematic
          <br />
          Content Creation
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {editingProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.9,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className={`group relative overflow-hidden rounded-[3rem] border ${cardClass} backdrop-blur-xl`}
            >
              <div className="relative h-[420px] overflow-hidden">
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-6 z-10">
                  <p className="text-cyan-300 text-sm uppercase tracking-[0.25em] mb-3">
                    Video Editing
                  </p>

                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* TESTIMONIALS */}
      <motion.section
        id="about"
        variants={premiumReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-32"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE */}
          <div>
            <p className="uppercase tracking-[0.35em] text-cyan-300 text-xs md:text-sm mb-6">
              Recommendations
            </p>

            <h2 className="text-4xl md:text-7xl font-black leading-[0.95] mb-8">
              Trusted By
              <br />
              Teams &
              <br />
              Leaders
            </h2>

            <p className={`${mutedText} text-lg leading-relaxed max-w-lg`}>
              Recommendations from professionals and leaders I’ve worked with
              across ServiceNow development, workflow automation, and digital
              projects.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">
            {/* TESTIMONIAL 1 */}
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.01,
              }}
              className={`${cardClass} border rounded-[3rem] p-8 backdrop-blur-2xl`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/20 flex items-center justify-center overflow-hidden">
                  <div className="w-6 h-6 rounded-full bg-cyan-200/80 absolute top-2" />

                  <div className="w-10 h-6 rounded-t-full bg-cyan-200/80 absolute bottom-0" />

                  <div className="absolute inset-0 bg-cyan-400/10 blur-xl" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    John Francis Clavecilla
                  </h3>

                  <p className="text-cyan-300 text-sm">
                    IT ServiceNow Developer II
                  </p>
                </div>
              </div>

              <p className={`${mutedText} text-lg leading-relaxed`}>
                “I had the pleasure of working closely with Mark as a ServiceNow
                Developer, and I can confidently say he is highly skilled and
                dependable. He consistently delivers high-quality solutions and
                collaborates extremely well with the team.”
              </p>
            </motion.div>

            {/* TESTIMONIAL 2 */}
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.01,
              }}
              className={`${cardClass} border rounded-[3rem] p-8 backdrop-blur-2xl`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-500/20 border border-purple-400/20 flex items-center justify-center overflow-hidden">
                  <div className="w-6 h-6 rounded-full bg-white/80 absolute top-2" />

                  <div className="w-10 h-6 rounded-t-full bg-white/80 absolute bottom-0" />

                  <div className="absolute inset-0 bg-purple-400/10 blur-xl" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">Rhonda Downing</h3>

                  <p className="text-purple-300 text-sm">ITIL® 4 Master, PMP</p>
                </div>
              </div>

              <p className={`${mutedText} text-lg leading-relaxed`}>
                “Mark is a remarkable ServiceNow developer. He goes beyond
                expectations to understand business requirements and creatively
                implement solutions that deliver real value.”
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
  id="contact"
  variants={premiumReveal}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="relative overflow-hidden py-32 px-6"
>
  {/* BACKGROUND GRID */}
  <div
    className={`absolute inset-0 ${
      darkMode
        ? "bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]"
        : "bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]"
    } bg-[size:70px_70px]`}
  />

  {/* GLOW ORBS */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />
  <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 blur-[140px] rounded-full" />

  <div className="relative z-10 max-w-7xl mx-auto">
    {/* TITLE */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-24"
    >
      <p
        className={`uppercase tracking-[0.4em] text-xs mb-6 ${
          darkMode ? "text-cyan-300" : "text-cyan-700"
        }`}
      >
        Contact
      </p>

      <h2 className="text-5xl md:text-7xl font-black leading-[0.95]">
        Let’s Build
        <br />
        Something Amazing
      </h2>
    </motion.div>

    {/* CONTENT */}
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-10"
      >
        <div>
          <h3 className="text-3xl font-bold mb-6">
            Let’s Connect
          </h3>

          <p
            className={`text-lg leading-relaxed ${
              darkMode ? "text-white/60" : "text-black/60"
            }`}
          >
            Available for ServiceNow development,
            workflow automation, UI design,
            and cinematic editing projects.
          </p>
        </div>

        {/* EMAIL CARD */}
        <motion.div
          whileHover={{
            scale: 1.03,
            y: -6,
          }}
          className={`group relative overflow-hidden rounded-[2rem] border p-8 backdrop-blur-xl transition-all duration-500 ${
            darkMode
              ? "bg-white/[0.03] border-white/10"
              : "bg-black/[0.03] border-black/10"
          }`}
        >
          <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-all duration-500" />

          <div className="relative z-10">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4">
              Email
            </p>

            <a
              href="mailto:paezmarkangelo@gmail.com"
              className="text-2xl font-semibold break-all hover:text-cyan-400 transition-all"
            >
              paezmarkangelo@gmail.com
            </a>
          </div>
        </motion.div>

        {/* SOCIALS */}
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-6">
            Connect With Me
          </p>

          <div className="flex gap-5">
            {[
              {
                label: "GitHub",
                href: "https://github.com/paezmarkangelo-ctrl",
              },
              {
                label: "LinkedIn",
                href: "https://linkedin.com",
              },
              {
                label: "TikTok",
                href: "https://tiktok.com",
              },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
                className={`px-6 py-4 rounded-2xl border transition-all duration-500 ${
                  darkMode
                    ? "bg-white/[0.03] border-white/10 hover:bg-cyan-500/10"
                    : "bg-black/[0.03] border-black/10 hover:bg-cyan-500/10"
                }`}
              >
                {social.label}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* RIGHT FORM */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className={`relative overflow-hidden rounded-[2.5rem] border p-10 backdrop-blur-2xl ${
          darkMode
            ? "bg-white/[0.04] border-white/10"
            : "bg-white/70 border-black/10"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />

        <div className="relative z-10">
          <h3 className="text-3xl font-bold mb-10">
            Send a Message
          </h3>

          <form
  className="space-y-6"
  onSubmit={async (e) => {
    e.preventDefault();

    setIsSending(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 2000)
    );

    setIsSending(false);
    setIsSent(true);

    const form = e.target as HTMLFormElement;
    form.reset();

    setTimeout(() => {
      setIsSent(false);
    }, 2500);
  }}
>
            <input
              type="text"
              placeholder="Your Name"
              required
              className={`w-full rounded-2xl px-6 py-5 outline-none transition-all duration-500 ${
                darkMode
                  ? "bg-white/[0.04] border border-white/10 focus:border-cyan-400 text-white"
                  : "bg-black/[0.03] border border-black/10 focus:border-cyan-600 text-black"
              }`}
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              className={`w-full rounded-2xl px-6 py-5 outline-none transition-all duration-500 ${
                darkMode
                  ? "bg-white/[0.04] border border-white/10 focus:border-cyan-400 text-white"
                  : "bg-black/[0.03] border border-black/10 focus:border-cyan-600 text-black"
              }`}
            />

            <input
              type="text"
              placeholder="Subject"
              required
              className={`w-full rounded-2xl px-6 py-5 outline-none transition-all duration-500 ${
                darkMode
                  ? "bg-white/[0.04] border border-white/10 focus:border-cyan-400 text-white"
                  : "bg-black/[0.03] border border-black/10 focus:border-cyan-600 text-black"
              }`}
            />

            <textarea
              rows={6}
              placeholder="Tell me about your project..."
              required
              className={`w-full rounded-2xl px-6 py-5 outline-none resize-none transition-all duration-500 ${
                darkMode
                  ? "bg-white/[0.04] border border-white/10 focus:border-cyan-400 text-white"
                  : "bg-black/[0.03] border border-black/10 focus:border-cyan-600 text-black"
              }`}
            />

<motion.button
  whileHover={{
    scale: 1.03,
    y: -2,
  }}
  whileTap={{ scale: 0.98 }}
  type="submit"
  disabled={isSending}
  className="w-full rounded-2xl py-5 font-semibold bg-cyan-400 text-black hover:bg-cyan-300 transition-all duration-500 shadow-[0_0_40px_rgba(34,211,238,0.35)] flex items-center justify-center gap-3"
>
  {isSending ? (
    <>
      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
      Sending...
    </>
  ) : isSent ? (
    <>
      <span className="text-xl">✓</span>
      Message Sent
    </>
  ) : (
    "Send Message"
  )}
</motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  </div>
</motion.section>
    </div>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Terminal, Activity, Server, Shield, Database, LayoutGrid, Download } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- Content Data ---
const BRAND_NAME = "Minh Vo";
const BRAND_ROLE = "AI Data Engineer";
const TAGLINE = "AI Enablement with Governance";
const CTA_TEXT = "Connect with me";
const EMAIL = "qmivo.sg@gmail.com";
const ABOUT_ME_IMAGE = "/MinhVo.jfif";
const RESUME_PDF = "/Minh_Vo_Resume.pdf"; // PDF should be placed in the public folder

const NAV_LINKS = ["Expertise", "Philosophy", "Protocol", "About", "Resume"];

// Preset D: Vapor Clinic Data (Revised for IT/Datacenter Theme with #4e45f8 accents)
const HERO_IMG = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2938&auto=format&fit=crop"; // Server racks / Datacenter
const PHILOSOPHY_IMG = "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2900&auto=format&fit=crop"; // Code lines / Network matrix

// --- Components ---

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -100',
        end: 99999,
        toggleClass: {
          targets: navRef.current,
          className: 'scrolled'
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-8 py-4 w-[90%] max-w-5xl rounded-[3rem] transition-all duration-500 will-change-transform bg-transparent text-[#F0EFF4]
      [&.scrolled]:bg-[#F0EFF4]/90 [&.scrolled]:backdrop-blur-xl [&.scrolled]:text-[#18181B] [&.scrolled]:border [&.scrolled]:border-[#18181B]/10 [&.scrolled]:shadow-2xl"
    >
      <div className="font-heading font-bold tracking-tight text-xl">{BRAND_NAME}</div>
      <div className="hidden md:flex items-center gap-8 font-heading text-sm font-medium">
        {NAV_LINKS.map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} className="interactive-link hover:text-[#4e45f8] transition-colors">{link}</a>
        ))}
      </div>
      <a href={`mailto:${EMAIL}`} className="magnetic-btn px-6 py-2.5 rounded-full bg-[#4e45f8] text-[#F0EFF4] font-heading font-semibold text-sm hover:!text-[#18181B]">
        <span className="bg-sweep bg-[#F0EFF4]"></span>
        <span className="relative z-10 flex items-center gap-2">Connect <ArrowRight size={14} /></span>
      </a>
    </nav>
  );
};

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[100dvh] w-full overflow-hidden flex items-end pb-24 px-8 md:px-16" id="expertise">
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0 bg-[#0A0A14]">
        <img src={HERO_IMG} alt="Datacenter Servers" className="w-full h-full object-cover scale-105 opacity-40 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-[#4e45f8]/10 mix-blend-color"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A14] via-[#0A0A14]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col justify-end text-[#F0EFF4]">
        <h2 className="hero-anim font-heading font-bold text-lg md:text-2xl text-[#4e45f8] tracking-widest uppercase mb-4">{BRAND_ROLE}</h2>
        <h1 className="flex flex-col gap-2 mb-10">
          <span className="hero-anim font-heading font-bold tracking-tighter text-5xl md:text-7xl lg:text-8xl leading-none">
            AI enablement beyond
          </span>
          {/* Changed font-drama (Space Grotesk) to non-italic for professional feel */}
          <span className="hero-anim font-drama font-bold text-5xl md:text-7xl lg:text-8xl leading-none ml-0 md:ml-12 text-[#4e45f8]">
            Compliance.
          </span>
        </h1>
        <div className="hero-anim">
          <a href={`mailto:${EMAIL}`} className="magnetic-btn inline-flex items-center gap-3 px-8 py-4 rounded-[2rem] bg-[#4e45f8] text-[#F0EFF4] font-heading font-semibold text-lg hover:!text-[#0A0A14]">
            <span className="bg-sweep bg-[#F0EFF4]"></span>
            <span className="relative z-10 flex items-center gap-2">{CTA_TEXT} <ArrowRight size={18} /></span>
          </a>
        </div>
      </div>
    </section>
  );
};

// Feature 1: Shuffler
const DiagnosticShuffler = () => {
  const [cards, setCards] = useState([
    { id: 1, title: 'Audit-Ready Pipelines', icon: <Database className="text-[#F0EFF4]" /> },
    { id: 2, title: 'Enterprise COE', icon: <Server className="text-[#F0EFF4]" /> },
    { id: 3, title: 'Sandbox to Prod', icon: <Shield className="text-[#F0EFF4]" /> }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newCards = [...prev];
        const last = newCards.pop();
        newCards.unshift(last);
        return newCards;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="col-span-1 bg-[#F0EFF4] border border-[#18181B]/10 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-[#4e45f8]/5 to-transparent pointer-events-none"></div>
      <h3 className="font-heading font-bold text-2xl mb-2 text-[#0A0A14]">Governed Data Infrastructure</h3>
      <p className="font-heading text-sm text-[#18181B]/70 mb-8">Architecting compliant, scalable ETL pipelines and enterprise centers of excellence.</p>

      <div className="relative h-48 w-full flex items-center justify-center">
        {cards.map((card, idx) => {
          const isTop = idx === 0;
          return (
            <div
              key={card.id}
              className={`absolute w-[85%] bg-[#0A0A14] text-[#F0EFF4] p-5 rounded-3xl shadow-[0_0_30px_rgba(78,69,248,0.1)] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center gap-4`}
              style={{
                top: `${idx * 16}px`,
                scale: 1 - (idx * 0.05),
                zIndex: 10 - idx,
                opacity: 1 - (idx * 0.2),
                border: isTop ? '1px solid #4e45f8' : '1px solid rgba(78, 69, 248, 0.2)'
              }}
            >
              <div className={`p-2 rounded-xl transition-colors ${isTop ? 'bg-[#4e45f8]' : 'bg-[#18181B]'}`}>
                {card.icon}
              </div>
              <span className="font-heading font-semibold tracking-tight">{card.title}</span>
            </div>
          )
        })}
      </div>
    </div>
  );
};

// Feature 2: Typewriter
const TelemetryTypewriter = () => {
  const [text, setText] = useState('');
  const fullText = "Initializing secure model deployment... Verifying IT compliance protocols... Governance checks passed. AI node active.";

  useEffect(() => {
    let i = 0;
    let timer;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        timer = setInterval(() => {
          if (i <= fullText.length) {
            setText(fullText.slice(0, i));
            i++;
          } else {
            clearInterval(timer);
            setTimeout(() => { i = 0; setText(''); }, 5000);
          }
        }, 80);
      }
    });

    const el = document.getElementById('typewriter-container-d');
    if (el) observer.observe(el);

    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div id="typewriter-container-d" className="col-span-1 bg-[#0A0A14] text-[#F0EFF4] border border-[#4e45f8]/30 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#4e45f8] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

      <div className="flex justify-between items-start mb-8 relative z-10">
        <div>
          <h3 className="font-heading font-bold text-2xl mb-2 text-[#4e45f8]">Secure AI Enablement</h3>
          <p className="font-heading text-sm text-[#F0EFF4]/70">Deploying intelligent systems with strict IT security at the foundation.</p>
        </div>
        <div className="flex items-center gap-2 bg-[#18181B] px-3 py-1 rounded-full border border-[#4e45f8]/20 shadow-[0_0_10px_rgba(78,69,248,0.2)]">
          <div className="w-2 h-2 rounded-full bg-[#4e45f8] animate-pulse"></div>
          <span className="font-data text-[10px] uppercase tracking-wider text-[#F0EFF4]/80">Live Feed</span>
        </div>
      </div>

      <div className="bg-[#11111A] rounded-2xl p-6 h-48 font-data text-sm text-[#F0EFF4] border border-[#4e45f8]/10 leading-relaxed relative z-10">
        <Terminal size={16} className="absolute top-4 right-4 text-[#4e45f8] opacity-50" />
        <p>{text}<span className="inline-block w-2 h-4 bg-[#4e45f8] ml-1 animate-pulse shadow-[0_0_8px_#4e45f8]"></span></p>
      </div>
    </div>
  );
};

// Feature 3: Scheduler
const CursorScheduler = () => {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const [activeDay, setActiveDay] = useState(2);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      tl.to('.fake-cursor-d', { x: 80, y: 30, duration: 1, ease: 'power2.inOut' })
        .to('.fake-cursor-d', { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1, onComplete: () => setActiveDay(2) })
        .to('.fake-cursor-d', { x: 220, y: 150, duration: 1.5, ease: 'power2.inOut', delay: 0.5 })
        .to('.fake-cursor-d', { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 })
        .to('.fake-cursor-d', { x: 0, y: 0, duration: 1, opacity: 0, ease: 'power2.inOut', delay: 0.5 })
        .set('.fake-cursor-d', { opacity: 1, delay: 0.5 });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-[#F0EFF4] border border-[#18181B]/10 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
      <h3 className="font-heading font-bold text-2xl mb-2 text-[#0A0A14]">Automated Ecosystems</h3>
      <p className="font-heading text-sm text-[#18181B]/70 mb-8">Engineering robust workflows from raw databases to automated reporting.</p>

      <div className="relative w-full h-48 bg-white rounded-2xl border border-[#18181B]/10 p-6 shadow-inner">
        <div className="flex justify-between border-b border-[#18181B]/10 pb-4 mb-4">
          {days.map((d, i) => (
            <div key={i} className={`font-data text-xs w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${i === activeDay ? 'bg-[#4e45f8] text-[#F0EFF4] font-bold shadow-[0_0_10px_rgba(78,69,248,0.4)]' : 'text-[#18181B]/40'}`}>
              {d}
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full transition-colors ${activeDay === 2 ? 'bg-[#4e45f8]' : 'bg-gray-200'}`}></div>
            <div className="h-2 bg-gray-100 rounded-full w-24"></div>
            <span className="font-data text-[10px] text-gray-400 ml-auto">Snowflake ETL</span>
          </div>
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full transition-colors ${activeDay === 2 ? 'bg-[#0A0A14]' : 'bg-gray-200'}`}></div>
            <div className="h-2 bg-gray-100 rounded-full w-32"></div>
            <span className="font-data text-[10px] text-gray-400 ml-auto">Gallery Macros</span>
          </div>
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full transition-colors ${activeDay === 2 ? 'bg-[#18181B]' : 'bg-gray-200'}`}></div>
            <div className="h-2 bg-gray-100 rounded-full w-16"></div>
            <span className="font-data text-[10px] text-gray-400 ml-auto">MongoDB Track</span>
          </div>
        </div>

        {/* Fake Cursor SVG */}
        <svg className="fake-cursor-d absolute top-0 left-0 w-6 h-6 z-10 filter drop-shadow-lg text-[#0A0A14]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" fill="currentColor" />
          <path d="M13 13l6 6" />
        </svg>

        <button className="absolute bottom-4 right-4 bg-[#0A0A14] text-[#F0EFF4] px-4 py-2 rounded-xl font-heading text-xs hover:bg-[#4e45f8] transition-colors shadow-md">
          Save Workflow
        </button>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-[#0A0A14] py-32 px-8 md:px-16 rounded-t-[4rem] -mt-10 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <DiagnosticShuffler />
        <TelemetryTypewriter />
        <CursorScheduler />
      </div>
    </section>
  );
};

const Philosophy = () => {
  const philRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Parallax
      gsap.to('.phil-bg-d', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: philRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      // Text Reveal
      gsap.from('.reveal-text-d', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%'
        }
      });
    }, philRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" ref={philRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0A0A14]">
      <img src={PHILOSOPHY_IMG} alt="Architecture" className="phil-bg-d absolute inset-0 w-full h-[130%] object-cover opacity-20 mix-blend-screen" />
      <div className="absolute inset-0 bg-[#4e45f8]/5 mix-blend-color pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A14] via-[#0A0A14]/90 to-[#0A0A14]"></div>

      <div ref={textRef} className="relative z-10 max-w-5xl mx-auto px-8 text-center flex flex-col gap-8">
        <p className="reveal-text-d font-heading text-xl md:text-2xl text-[#4e45f8] max-w-2xl mx-auto font-semibold tracking-wide uppercase">
          Most organizations focus on: <span className="text-[#F0EFF4]">rapid, unregulated experimentation.</span>
        </p>
        <h2 className="reveal-text-d font-drama font-bold text-5xl md:text-7xl lg:text-8xl text-[#F0EFF4] leading-tight">
          We focus on: <br />
          <span className="text-white drop-shadow-[0_0_20px_rgba(78,69,248,0.8)] font-heading font-bold tracking-tighter">governed</span> intelligence.
        </h2>
      </div>
    </section>
  );
};

const ProtocolCard = ({ step, title, desc, icon, index }) => {
  return (
    <div className={`panel-d panel-d-${index} h-screen w-full flex items-center justify-center sticky top-0 bg-[#F0EFF4] text-[#0A0A14] px-8 py-24`}>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-6">
          <div className="font-data text-[#4e45f8] font-bold text-lg bg-[#4e45f8]/10 w-fit px-4 py-1 rounded-full border border-[#4e45f8]/20">0{step} // SYSTEM</div>
          <h2 className="font-heading font-bold text-5xl md:text-7xl tracking-tighter">{title}</h2>
          <p className="font-heading text-xl text-[#18181B]/70 max-w-md leading-relaxed">{desc}</p>
        </div>
        <div className="h-[400px] bg-[#0A0A14] rounded-[3rem] p-12 flex items-center justify-center relative overflow-hidden group shadow-[0_0_40px_rgba(78,69,248,0.1)]">
          {icon}
          <div className="absolute inset-0 bg-[#4e45f8]/5 group-hover:bg-[#4e45f8]/10 transition-colors"></div>
          {/* Abstract neon lines */}
          <div className="absolute top-0 left-10 w-[1px] h-full bg-gradient-to-b from-transparent via-[#4e45f8]/50 to-transparent"></div>
          <div className="absolute top-10 right-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#4e45f8]/20 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

const Protocol = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.panel-d');

      panels.forEach((panel, i) => {
        if (i < panels.length - 1) {
          gsap.to(panel, {
            scale: 0.9,
            opacity: 0.5,
            filter: 'blur(20px)',
            scrollTrigger: {
              trigger: panels[i + 1],
              start: 'top bottom',
              end: 'top top',
              scrub: true
            }
          });
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" ref={containerRef} className="relative z-30">
      <ProtocolCard
        index={1} step={1} title="Architect"
        desc="Design compliant infrastructure and governance frameworks before writing a single line of business logic."
        icon={<LayoutGrid size={120} className="text-[#4e45f8] animate-[spin_20s_linear_infinite]" strokeWidth={1} />}
      />
      <ProtocolCard
        index={2} step={2} title="Automate"
        desc="Deploy scalable ETL pipelines and Server macros that eliminate manual repetitive analysis."
        icon={<Activity size={120} className="text-[#F0EFF4] filter drop-shadow-[0_0_15px_#4e45f8] relative z-10" strokeWidth={1.5} />}
      />
      <ProtocolCard
        index={3} step={3} title="Deploy"
        desc="Enable AI models safely into production with comprehensive audit trails and monitoring."
        icon={<Shield size={120} className="text-[#4e45f8]" />}
      />
    </section>
  );
};

const AboutMe = () => {
  return (
    <section id="about" className="bg-[#F0EFF4] text-[#0A0A14] py-32 px-8 md:px-16 relative z-30">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            <div className="absolute inset-0 bg-[#4e45f8] rounded-[2rem] transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-[#18181B]/10 z-10 bg-white">
              {/* Photo component */}
              <img src={ABOUT_ME_IMAGE} alt="Minh Vo - AI Data Engineer" className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" />
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#4e45f8] z-20"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#4e45f8] z-20"></div>
          </div>
        </div>
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <div className="font-data text-[#4e45f8] text-sm uppercase tracking-widest font-bold">// SYSTEM.AUTHOR</div>
          <h2 className="font-drama font-bold text-5xl md:text-6xl text-[#0A0A14]">Minh Vo</h2>
          <h3 className="font-heading font-semibold text-xl text-[#18181B]/70">{BRAND_ROLE} / Alteryx SME</h3>
          <p className="font-heading text-lg leading-relaxed text-[#18181B]/80">
            I specialize in scaling from single instances to enterprise Centers of Excellence. With over 5 years driving IT governance and consultation, I pivot proven data infrastructure expertise into the secure enablement of AI.
          </p>
          <p className="font-heading text-lg leading-relaxed text-[#18181B]/80">
            Whether migrating hundreds of production workflows, deploying cross-system ETL integrations, or architecting compliant AI nodes, my focus remains singular: ensuring intelligent systems are built securely from the ground up.
          </p>
          <div className="pt-4 flex flex-wrap gap-2">
            {['ETL', 'Alteryx', 'Snowflake', 'Python', 'Governance'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-[#18181B]/5 rounded-full font-data text-xs text-[#18181B]/60 font-medium">#{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const Resume = () => {
  return (
    <section id="resume" className="bg-[#0A0A14] text-[#F0EFF4] pb-12 pt-32 px-8 md:px-16 relative z-30 rounded-t-[4rem] -mt-10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-[#F0EFF4]/10 pb-8">
          <div>
            <h2 className="font-drama font-bold text-5xl md:text-6xl text-[#F0EFF4] mb-4">Curriculum Vitae</h2>
            <p className="font-heading text-lg text-[#F0EFF4]/70">5 years of governance, development, and scalable ETL.</p>
          </div>
          <a href={RESUME_PDF} download="Minh_Vo_Resume.pdf" className="magnetic-btn mt-6 md:mt-0 px-8 py-4 rounded-full bg-[#4e45f8] text-[#F0EFF4] font-heading font-semibold hover:!text-[#0A0A14] shadow-[0_0_20px_rgba(78,69,248,0.2)]">
            <span className="bg-sweep bg-[#F0EFF4]"></span>
            <span className="relative z-10 flex items-center gap-3"><Download size={18} /> Download PDF</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mt-8">
          <div className="flex flex-col gap-12">
            <div className="border-l border-[#4e45f8]/30 pl-6 relative">
              <div className="absolute top-0 left-[-5px] w-2 h-2 rounded-full bg-[#4e45f8]"></div>
              <h3 className="font-heading font-bold text-2xl text-[#F0EFF4] mb-1">Keurig Dr. Pepper</h3>
              <div className="font-data text-sm text-[#4e45f8] mb-4">Jul 2021 – Present</div>
              <p className="font-heading text-[#F0EFF4]/80 leading-relaxed">Alteryx Server Administrator & Workflow Developer. Architected compliant ETL pipelines, managed 80+ users, designed analytics roadmaps, and migrated 200+ workflows from Sandbox to PROD.</p>
            </div>
            <div className="border-l border-[#4e45f8]/30 pl-6 relative">
              <div className="absolute top-0 left-[-5px] w-2 h-2 rounded-full bg-[#4e45f8]"></div>
              <h3 className="font-heading font-bold text-2xl text-[#F0EFF4] mb-1">USAA Analytics Project</h3>
              <div className="font-data text-sm text-[#4e45f8] mb-4">Feb 2021 – Jun 2021</div>
              <p className="font-heading text-[#F0EFF4]/80 leading-relaxed">Data Analyst. Executed strict ETL processes, SAS programs, and sprint tracking in Azure DevOps. Managed data cleanliness and reporting dashboard validations.</p>
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <div className="border-l border-[#4e45f8]/30 pl-6 relative">
              <div className="absolute top-0 left-[-5px] w-2 h-2 rounded-full bg-[#4e45f8]"></div>
              <h3 className="font-heading font-bold text-2xl text-[#F0EFF4] mb-1">HCL Technologies</h3>
              <div className="font-data text-sm text-[#4e45f8] mb-4">Oct 2020 – Jan 2021</div>
              <p className="font-heading text-[#F0EFF4]/80 leading-relaxed">Java Developer. Completed intensive software developer training covering Java, HTML, CSS, XML, and SQL. Developed banking web applications utilizing Spring Boot frameworks.</p>
            </div>
            <div className="bg-[#11111A] p-8 rounded-3xl border border-[#4e45f8]/20 shadow-[0_0_30px_rgba(78,69,248,0.05)]">
              <h4 className="font-heading font-bold text-xl text-[#F0EFF4] mb-6">Technical Arsenal</h4>
              <div className="flex flex-wrap gap-3">
                {['Alteryx Server', 'Snowflake', 'Python', 'Tableau', 'MongoDB', 'Java', 'SQL', 'Oracle', 'PowerBI'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-[#0A0A14] border border-[#4e45f8]/30 rounded-full font-data text-sm text-[#F0EFF4]/80 shadow-[0_0_10px_rgba(78,69,248,0.1)]">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="connect" className="bg-[#0A0A14] text-[#F0EFF4] pt-24 pb-12 px-8 md:px-16 relative z-40">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center mb-32 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4e45f8] rounded-full blur-[150px] opacity-15 pointer-events-none"></div>
        <h2 className="font-drama font-bold text-5xl md:text-7xl mb-8 relative z-10">Ready to secure <br />your data future?</h2>
        <a href={`mailto:${EMAIL}`} className="magnetic-btn px-10 py-5 rounded-full bg-[#4e45f8] text-[#F0EFF4] font-heading font-bold text-xl hover:!text-[#0A0A14] shadow-[0_0_20px_rgba(78,69,248,0.4)]">
          <span className="bg-sweep bg-[#F0EFF4]"></span>
          <span className="relative z-10 flex items-center gap-3">{CTA_TEXT} <ArrowRight /></span>
        </a>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end border-t border-[#4e45f8]/30 pt-8 gap-8">
        <div>
          <div className="font-heading font-bold text-2xl tracking-tight mb-2 flex items-center gap-2">
            {BRAND_NAME}
            <span className="text-[#4e45f8] text-lg font-bold">.</span>
          </div>
          <div className="font-heading text-sm text-[#F0EFF4]/50">{TAGLINE}</div>
        </div>

        <div className="flex items-center gap-2 bg-[#11111A] px-4 py-2 rounded-full border border-[#4e45f8]/40 shadow-[0_0_10px_rgba(78,69,248,0.2)]">
          <div className="w-2 h-2 rounded-full bg-[#4e45f8] animate-pulse shadow-[0_0_5px_#4e45f8]"></div>
          <span className="font-data text-xs uppercase tracking-wider text-[#F0EFF4]/70">System Operational</span>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <main className="bg-[#F0EFF4] min-h-screen selection:bg-[#4e45f8] selection:text-[#F0EFF4]">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <AboutMe />
      <Resume />
      <Footer />
    </main>
  );
}

export default App;

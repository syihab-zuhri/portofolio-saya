"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function TerminalAnimation() {
  const [phase, setPhase] = useState(0);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");

  const cmd1 = "whoami";
  const out1 = "Mahasiswa PTI semester 6, Universitas Negeri Malang";
  const cmd2 = "cat passion.txt";
  const out2 = "Web Development · Media Pembelajaran · AI Tools";
  const cmd3 = "echo $STATUS";
  const out3 = "Terbuka untuk kolaborasi & magang";

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    if (phase === 0) {
      if (text1.length < cmd1.length) {
        timeout = setTimeout(() => setText1(cmd1.slice(0, text1.length + 1)), 80 + Math.random() * 50);
      } else {
        timeout = setTimeout(() => setPhase(1), 300);
      }
    } else if (phase === 1) {
      timeout = setTimeout(() => setPhase(2), 800);
    } else if (phase === 2) {
      if (text2.length < cmd2.length) {
        timeout = setTimeout(() => setText2(cmd2.slice(0, text2.length + 1)), 80 + Math.random() * 50);
      } else {
        timeout = setTimeout(() => setPhase(3), 300);
      }
    } else if (phase === 3) {
      timeout = setTimeout(() => setPhase(4), 800);
    } else if (phase === 4) {
      if (text3.length < cmd3.length) {
        timeout = setTimeout(() => setText3(cmd3.slice(0, text3.length + 1)), 80 + Math.random() * 50);
      } else {
        timeout = setTimeout(() => setPhase(5), 300);
      }
    } else if (phase === 5) {
      timeout = setTimeout(() => setPhase(6), 3500);
    } else if (phase === 6) {
      setText1("");
      setText2("");
      setText3("");
      setPhase(0);
    }
    
    return () => clearTimeout(timeout);
  }, [phase, text1, text2, text3]);

  return (
    <>
      <div className="terminal-line">
        <span className="t-prompt">~</span> <span className="t-cmd">{text1}</span>
        {phase === 0 && <span className="t-cursor"></span>}
      </div>
      {phase >= 1 && (
        <div className="terminal-line t-out">
          {out1}
        </div>
      )}
      {phase >= 1 && (
        <div className="terminal-line" style={{ marginTop: "0.75rem" }}>
          <span className="t-prompt">~</span> <span className="t-cmd">{text2}</span>
          {(phase === 1 || phase === 2) && <span className="t-cursor"></span>}
        </div>
      )}
      {phase >= 3 && (
        <div className="terminal-line t-out">
          {out2}
        </div>
      )}
      {phase >= 3 && (
        <div className="terminal-line" style={{ marginTop: "0.75rem" }}>
          <span className="t-prompt">~</span> <span className="t-cmd">{text3}</span>
          {(phase === 3 || phase === 4 || phase === 5) && <span className="t-cursor"></span>}
        </div>
      )}
      {phase >= 5 && (
        <div className="terminal-line t-out">
          {out3}
        </div>
      )}
    </>
  );
}

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <>
      <div className="bg-grid"></div>
      <div className="bg-gradient"></div>
      <div className="bg-gradient-2"></div>

      {/* NAV */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="nav-logo">~/portofolio</div>
        <ul className="nav-links">
          <li>
            <Link href="#skills">Keahlian</Link>
          </li>
          <li>
            <Link href="#projects">Proyek</Link>
          </li>
          <li>
            <Link href="#about">Tentang</Link>
          </li>
          <li>
            <Link href="#contact">Kontak</Link>
          </li>
        </ul>
      </motion.nav>

      <main>
        {/* HERO */}
        <motion.div
          className="hero"
          style={{ maxWidth: "1100px", margin: "0 auto" }}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div style={{ display: "flex", flexWrap: "wrap-reverse", gap: "3rem", alignItems: "center" }}>
            <div style={{ flex: "1 1 500px" }}>
              <motion.div variants={fadeUpVariant} className="hero-eyebrow">
                Mahasiswa Pendidikan Teknologi Informasi
              </motion.div>
              <motion.h1 variants={fadeUpVariant} className="hero-name">
                Halo, saya<br />
                <span>Muhammad Syihabuddin Zuhri</span>
              </motion.h1>
              <motion.p variants={fadeUpVariant} className="hero-title-line">
                Developer · Educator · Lifelong Learner
              </motion.p>

              <motion.div variants={fadeUpVariant} className="hero-terminal">
                <TerminalAnimation />
              </motion.div>

              <motion.div variants={fadeUpVariant} className="hero-cta">
                <Link href="#projects" className="btn-primary">
                  Lihat Proyek →
                </Link>
                <Link href="#contact" className="btn-ghost">
                  Hubungi Saya
                </Link>
              </motion.div>
            </div>

            <motion.div variants={fadeUpVariant} style={{ flex: "1 1 300px", display: "flex", justifyContent: "center" }}>
              <div style={{ width: "clamp(250px, 30vw, 350px)", aspectRatio: "1", borderRadius: "50%", overflow: "hidden", border: "2px solid var(--border)", position: "relative" }}>
                <Image 
                  src="/syihab.webp" 
                  alt="Syihab" 
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="scroll-hint"
          >
            <div className="scroll-hint-line"></div>
            <span>scroll</span>
          </motion.div>
        </motion.div>

        {/* SKILLS */}
        <section id="skills" className="skills-section">
          <motion.div
            className="section-inner"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="section-label">
              Keahlian
            </motion.div>
            <motion.h2 variants={fadeUpVariant} className="section-heading">
              Yang saya kuasai
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="section-sub">
              Kombinasi kemampuan teknis dan pedagogis — membangun sekaligus
              mengajarkan teknologi.
            </motion.p>

            <motion.div variants={staggerContainer} className="skills-grid">
              {[
                {
                  icon: "🌐",
                  title: "Web Development",
                  desc: "Membangun aplikasi web dari frontend hingga backend dengan framework modern.",
                  tags: ["Laravel", "Livewire", "Vue.js", "Tailwind", "MySQL"],
                },
                {
                  icon: "🎓",
                  title: "Media Pembelajaran",
                  desc: "Merancang konten edukatif digital yang interaktif dan sesuai kurikulum SMK/SMA.",
                  tags: ["E-Learning", "Video Editing", "Canva", "Articulate"],
                },
                {
                  icon: "🤖",
                  title: "AI & Automasi",
                  desc: "Mengintegrasikan AI tools ke dalam workflow pengembangan dan pembelajaran.",
                  tags: ["Prompt Eng.", "Claude API", "n8n", "Python"],
                },
                {
                  icon: "📱",
                  title: "UI/UX Design",
                  desc: "Mendesain antarmuka yang intuitif dan berorientasi pengguna untuk aplikasi web dan mobile.",
                  tags: ["Figma", "Wireframing", "Prototyping"],
                },
                {
                  icon: "🗄️",
                  title: "Database & Backend",
                  desc: "Merancang skema database yang efisien dan API RESTful untuk aplikasi skala menengah.",
                  tags: ["MySQL", "Redis", "REST API", "Git"],
                },
                {
                  icon: "📊",
                  title: "Data & Penelitian",
                  desc: "Analisis data penelitian pendidikan dengan metode kuantitatif dan kualitatif.",
                  tags: ["SPSS", "R", "Google Colab"],
                },
              ].map((skill, index) => (
                <motion.div key={index} variants={fadeUpVariant} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-card-title">{skill.title}</div>
                  <div className="skill-card-desc">{skill.desc}</div>
                  <div className="skill-tags">
                    {skill.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <motion.div
            className="section-inner"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="section-label">
              Proyek
            </motion.div>
            <motion.h2 variants={fadeUpVariant} className="section-heading">
              Karya pilihan
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="section-sub">
              Beberapa proyek yang pernah saya bangun — dari tugas kuliah hingga
              produk nyata.
            </motion.p>

            <motion.div variants={staggerContainer} className="projects-grid">
              {[
                {
                  icon: "🏫",
                  name: "Sistem Absensi QR Sekolah",
                  desc: "Aplikasi absensi berbasis QR Code untuk guru dan siswa SMK. Dilengkapi laporan PDF otomatis dan dashboard Filament PHP.",
                  tags: ["Laravel 12", "Filament v3", "Livewire", "QR Code"],
                  link: "#",
                  linkTitle: "GitHub",
                },
                {
                  icon: "📚",
                  name: "LMS SMK — E-Learning Platform",
                  desc: "Platform belajar daring untuk siswa SMK dengan fitur kuis interaktif, upload materi, dan tracking progres belajar per siswa.",
                  tags: ["Next.js", "Laravel API", "Filament PHP", "MySQL"],
                  link: "#",
                  linkTitle: "Demo",
                },
                {
                  icon: "🧾",
                  name: "Reyy Casier — SaaS POS",
                  desc: "Aplikasi kasir multi-tenant untuk UMKM. Mendukung multi-toko, laporan penjualan real-time, dan QRIS checkout terintegrasi.",
                  tags: ["Laravel", "Multi-tenant", "QRIS", "Livewire"],
                  link: "#",
                  linkTitle: "GitHub",
                },
                {
                  icon: "🛵",
                  name: "Rey-Jek — Platform Ojek Lokal",
                  desc: "Platform on-demand jasa lokal mirip Gojek untuk skala kota kecil. Notifikasi WhatsApp via Fonnte, tiga peran pengguna.",
                  tags: ["Laravel", "Livewire", "WhatsApp API", "Midtrans"],
                  link: "#",
                  linkTitle: "GitHub",
                },
                {
                  icon: "🗓️",
                  name: "Jadwal Pelajaran Dinamis",
                  desc: "Sistem manajemen jadwal sekolah dengan pemisahan data per semester. Blade + Alpine.js dengan antarmuka yang responsif.",
                  tags: ["Laravel", "Alpine.js", "Tailwind", "SweetAlert2"],
                  link: "#",
                  linkTitle: "Demo",
                },
                {
                  icon: "🤖",
                  name: "AI Workflow Rules — Agent Config",
                  desc: "Sistem prompt dan rules file untuk mengorkestrasi AI agent dalam workflow pengembangan Laravel. Digunakan di Claude Code dan Codex CLI.",
                  tags: ["Claude API", "Prompt Eng.", "Markdown", "AI Agent"],
                  link: "#",
                  linkTitle: "GitHub",
                },
              ].map((project, index) => (
                <motion.div key={index} variants={fadeUpVariant} className="project-card">
                  <div className="project-header">
                    <div className="project-icon">{project.icon}</div>
                    <div className="project-links">
                      <Link
                        href={project.link}
                        className="project-link"
                        title={project.linkTitle}
                      >
                        &#8599;
                      </Link>
                    </div>
                  </div>
                  <div className="project-name">{project.name}</div>
                  <div className="project-desc">{project.desc}</div>
                  <div className="project-stack">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="about-section">
          <motion.div
            className="section-inner"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="about-grid">
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="about-avatar"
              >
                <Image 
                  src="/syihab.webp" 
                  alt="Syihab" 
                  fill
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
              <motion.div variants={staggerContainer} className="about-text">
                <motion.div variants={fadeUpVariant} className="section-label">
                  Tentang Saya
                </motion.div>
                <motion.h2 variants={fadeUpVariant}>
                  Teknologi adalah cara saya mengajar dan berkarya
                </motion.h2>
                <motion.p variants={fadeUpVariant}>
                  Saya mahasiswa Pendidikan Teknologi Informasi yang percaya bahwa
                  seorang guru teknologi terbaik adalah yang juga aktif membangun
                  teknologi itu sendiri.
                </motion.p>
                <motion.p variants={fadeUpVariant}>
                  Di luar kuliah, saya membangun aplikasi web untuk klien UMKM,
                  sekolah, dan komunitas lokal — semuanya dengan tumpukan Laravel +
                  Filament PHP + Livewire yang saya kuasai secara mendalam.
                </motion.p>
                <motion.p variants={fadeUpVariant}>
                  Saya aktif mengeksplorasi bagaimana AI dapat mempercepat workflow
                  pengembangan maupun menciptakan media pembelajaran yang lebih
                  adaptif dan personal.
                </motion.p>

                <motion.div variants={staggerContainer} className="about-facts">
                  {[
                    { num: "6+", label: "Proyek selesai" },
                    { num: "3", label: "Tahun coding" },
                    { num: "12+", label: "Tech stack dikuasai" },
                    { num: "∞", label: "Semangat belajar" },
                  ].map((fact, index) => (
                    <motion.div key={index} variants={fadeUpVariant} className="fact">
                      <div className="fact-number">{fact.num}</div>
                      <div className="fact-label">{fact.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <motion.div
            className="contact-inner"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="section-label">
              Kontak
            </motion.div>
            <motion.h2 variants={fadeUpVariant} className="section-heading">
              Mari berkolaborasi
            </motion.h2>
            <motion.p
              variants={fadeUpVariant}
              className="section-sub"
              style={{ margin: "0 auto 0.5rem", textAlign: "center" }}
            >
              Terbuka untuk proyek freelance, magang, penelitian bersama, atau
              sekadar ngobrol soal teknologi dan pendidikan.
            </motion.p>
            <motion.div variants={fadeUpVariant}>
              <Link href="mailto:syihabzuhri301004@gmail.com" className="contact-email">
                syihabzuhri301004@gmail.com
              </Link>
            </motion.div>

            <motion.div variants={staggerContainer} className="socials">
              {[
                {
                  title: "GitHub",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  ),
                },
                {
                  title: "LinkedIn",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                },
                {
                  title: "Instagram",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  title: "Telegram",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  ),
                },
                {
                  title: "Email",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                },
              ].map((social, index) => {
                const getHref = (title: string) => {
                  if (title === "GitHub") return "https://github.com/syihab-zuhri";
                  if (title === "Telegram") return "https://t.me/reymbin";
                  //if (title === "LinkedIn") return "https://www.linkedin.com/in/syihab-zuhri";
                  //if (title === "Instagram") return "https://www.instagram.com/syihabzuhri";
                  if (title === "Email") return "mailto:syihabzuhri301004@gmail.com";
                  return "#";
                };
                const href = getHref(social.title);
                const isExternal = href !== "#";

                return (
                  <motion.div key={index} variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } }}>
                    <Link 
                      href={href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="social-link" 
                      title={social.title}
                    >
                      {social.icon}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </section>
      </main>

      <footer>
        <p>
          Dibuat oleh <span>Muhammad Syihabuddin Zuhri</span> · Mahasiswa PTI · &copy;
          2023
        </p>
      </footer>
    </>
  );
}

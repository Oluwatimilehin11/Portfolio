// src/App.jsx
import React, { useState, useEffect } from 'react';
import { DATA } from './data'; 

export default function App() {
  const { profile, phrases, about, skills, experience, projects, hobbies } = DATA;

  const [text, setText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIdx];
    let timer;

    if (!isDeleting) {
      if (charIdx < currentPhrase.length) {
        timer = setTimeout(() => {
          setText(currentPhrase.slice(0, charIdx + 1));
          setCharIdx(prev => prev + 1);
        }, 65);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (charIdx > 0) {
        timer = setTimeout(() => {
          setText(currentPhrase.slice(0, charIdx - 1));
          setCharIdx(prev => prev - 1);
        }, 40);
      } else {
        setIsDeleting(false);
        setPhraseIdx(prev => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, phraseIdx, phrases]);

  return (
    <div style={{ backgroundColor: '#0F1624', color: '#F2EFE9', minHeight: '100vh', fontFamily: "'Inter', sans-serif", overflowX: 'hidden' }}>
      
      {/* GLOWING ORBS ACCENTUATION */}
      <div style={{ position: 'fixed', top: '10%', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', filter: 'blur(80px)', background: 'rgba(74,155,142,0.06)', pointerEvents: 'none', zIndex: 1 }} />
      <div style={{ position: 'fixed', bottom: '15%', left: '-60px', width: '320px', height: '320px', borderRadius: '50%', filter: 'blur(80px)', background: 'rgba(201,168,76,0.05)', pointerEvents: 'none', zIndex: 1 }} />

      {/* STICKY TOP NAVIGATION BAR */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.1rem 5%', background: 'rgba(15,22,36,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
        <a href="#" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: '#C9A84C', letterSpacing: '0.05em', textDecoration: 'none' }}>Timi.</a>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['About', 'Skills', 'Experience', 'Projects', 'Hobbies', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{ color: '#8A95A8', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none' }}>{link}</a>
          ))}
        </div>
      </nav>

      {/* HERO COMPONENT SECTION */}
      <section id="hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '8rem 5% 5rem', position: 'relative' }}>
        <p style={{ fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#4A9B8E', marginBottom: '1.2rem' }}>{profile.location} · Open to opportunities</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 700, lineHeight: 1.08, margin: '0 0 1rem 0' }}>
          Oluwatimilehin<br /><span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Aramide.</span>
        </h1>
        <div style={{ fontFamily: 'monospace', fontSize: 'clamp(1rem, 2.2vw, 1.35rem)', color: '#8A95A8', marginBottom: '2.4rem', minHeight: '2em' }}>
          {text}
          <span style={{ display: 'inline-block', width: '2px', height: '1em', background: '#C9A84C', marginLeft: '2px', verticalAlign: 'middle' }} />
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', zIndex: 10 }}>
          <a href="#projects" style={{ background: '#C9A84C', color: '#0F1624', padding: '.75rem 1.8rem', fontSize: '.85rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: '6px', textDecoration: 'none' }}>View My Work</a>
          <a href="#contact" style={{ border: '1px solid rgba(201,168,76,0.18)', color: '#F2EFE9', padding: '.75rem 1.8rem', fontSize: '.85rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: '6px', textDecoration: 'none' }}>Get In Touch</a>
        </div>
      </section>

      {/* ABOUT TEXTUAL BIOGRAPHY */}
      <section id="about" style={{ padding: '5rem 5%', position: 'relative', zIndex: 10 }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#4A9B8E', marginBottom: '.5rem' }}>Who I am</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 600, marginBottom: '1rem' }}>Data meets <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>design.</span></h2>
        <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, #C9A84C, transparent)', marginBottom: '2.5rem' }} />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          <div>
            {about.map((paragraph, index) => (
              <p 
                key={index} 
                style={{ color: '#8A95A8', marginBottom: '1.2rem', fontSize: '1.05rem', lineHeight: '1.7' }} 
                dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#F2EFE9">$1</strong>') }}
              />
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
            <div style={{ background: '#141D2F', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '12px', padding: '1.4rem' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#C9A84C', fontWeight: 700 }}>3+</div>
              <div style={{ fontSize: '.82rem', color: '#8A95A8' }}>Years in data & computing</div>
            </div>
            <div style={{ background: '#141D2F', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '12px', padding: '1.4rem' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#C9A84C', fontWeight: 700 }}>15%</div>
              <div style={{ fontSize: '.82rem', color: '#8A95A8' }}>Marketing costs optimized</div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS MULTI-GROUP GRID */}
      <section id="skills" style={{ padding: '5rem 5%', background: '#141D2F', position: 'relative', zIndex: 10 }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#4A9B8E', marginBottom: '.5rem' }}>What I work with</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 600, marginBottom: '1rem' }}>Technical <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>toolkit.</span></h2>
        <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, #C9A84C, transparent)', marginBottom: '2.5rem' }} />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {skills.map((group, idx) => (
            <div key={idx} style={{ background: '#1A2540', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '12px', padding: '1.6rem' }}>
              <div style={{ fontSize: '.72rem', letterSpacing: '.16em', textTransform: 'uppercase', color: '#4A9B8E', marginBottom: '1rem' }}>{group.category}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
                {group.items.map(skill => (
                  <span key={skill} style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', color: '#F2EFE9', fontSize: '.78rem', padding: '.3rem .8rem', borderRadius: '100px' }}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROFESSIONAL CHRONOLOGICAL EXPERIENCE */}
      <section id="experience" style={{ padding: '5rem 5%', position: 'relative', zIndex: 10 }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#4A9B8E', marginBottom: '.5rem' }}>Where I've worked</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 600, marginBottom: '1rem' }}>Experience <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>& roles.</span></h2>
        <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, #C9A84C, transparent)', marginBottom: '2.5rem' }} />
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {experience.map((job, idx) => (
            <div key={idx} style={{ background: '#141D2F', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '12px', padding: '1.8rem', borderLeft: '3px solid #C9A84C' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '.5rem', marginBottom: '.6rem' }}>
                <div>
                  <div style={{ fontWeight: 600, color: '#F2EFE9', fontSize: '1.02rem' }}>{job.role}</div>
                  <div style={{ color: '#C9A84C', fontSize: '.88rem' }}>{job.company}</div>
                </div>
                <span style={{ fontSize: '.78rem', color: '#8A95A8' }}>{job.period}</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {job.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} style={{ fontSize: '.88rem', color: '#8A95A8', paddingLeft: '1.1rem', position: 'relative', marginBottom: '4px' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#4A9B8E' }}>→</span>{bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED SYSTEMS & APP CODE CARDS */}
      <section id="projects" style={{ padding: '5rem 5%', background: '#141D2F', position: 'relative', zIndex: 10 }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#4A9B8E', marginBottom: '.5rem' }}>What I've built</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 600, marginBottom: '1rem' }}>Selected <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>projects.</span></h2>
        <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, #C9A84C, transparent)', marginBottom: '2.5rem' }} />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {projects.map((proj, idx) => (
            <div key={idx} style={{ background: '#1A2540', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '12px', padding: '1.8rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span style={{ fontSize: '.7rem', letterSpacing: '.12em', textTransform: 'uppercase', color: '#4A9B8E', border: '1px solid rgba(74,155,142,.3)', borderRadius: '4px', padding: '.2rem .6rem', width: 'fit-content' }}>{proj.tag}</span>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: '#F2EFE9' }}>{proj.name}</div>
              <p style={{ fontSize: '.88rem', color: '#8A95A8', flex: 1, lineHeight: '1.65' }}>{proj.desc}</p>
              <div style={{ display: 'flex', gap: '.8rem' }}>
                {proj.links.live && <a href={proj.links.live} target="_blank" rel="noreferrer" style={{ color: '#C9A84C', fontSize: '.78rem', textDecoration: 'none', borderBottom: '1px solid transparent' }}>↗ Live Client App</a>}
                <a href={proj.links.github} target="_blank" rel="noreferrer" style={{ color: '#8A95A8', fontSize: '.78rem', textDecoration: 'none' }}>↗ Source Code</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OUTSIDE THE SCREEN MODULE */}
      <section id="hobbies" style={{ padding: '5rem 5%', position: 'relative', zIndex: 10 }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#4A9B8E', marginBottom: '.5rem' }}>Outside the screen</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 600, marginBottom: '1rem' }}>Things I <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>love.</span></h2>
        <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, #C9A84C, transparent)', marginBottom: '2.5rem' }} />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.2rem' }}>
          {hobbies.map((h, i) => (
            <div key={i} style={{ background: '#141D2F', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '.8rem' }}>{h.icon}</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', color: '#F2EFE9', marginBottom: '.4rem' }}>{h.name}</div>
              <p style={{ fontSize: '.82rem', color: '#8A95A8', margin: 0 }}>{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECURE COMMUNICATIONS */}
      <section id="contact" style={{ padding: '5rem 5%', background: '#141D2F', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 600 }}>Say <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>hello.</span></h2>
        <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, #C9A84C, transparent)', margin: '0 auto 2rem' }} />
        <p style={{ color: '#8A95A8', maxWidth: '520px', margin: '0 auto 2rem' }}>I'm open to pipeline systems optimization roles, data engineering assignment collaborations, and deep software infrastructure architectures. Connect below.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
          <a href={`mailto:${profile.email}`} style={{ display: 'flex', alignItems: 'center', gap: '.5rem', color: '#8A95A8', fontSize: '.88rem', textDecoration: 'none', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '8px', padding: '.65rem 1.2rem' }}>✉ Email</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '.5rem', color: '#8A95A8', fontSize: '.88rem', textDecoration: 'none', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '8px', padding: '.65rem 1.2rem' }}>in LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '.5rem', color: '#8A95A8', fontSize: '.88rem', textDecoration: 'none', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '8px', padding: '.65rem 1.2rem' }}>⌥ GitHub</a>
        </div>
      </section>

      {/* TECHNICAL STANDARDIZED FOOTER */}
      <footer style={{ textAlign: 'center', padding: '2rem 5%', fontSize: '.78rem', color: '#8A95A8', borderTop: '1px solid rgba(201,168,76,0.18)', position: 'relative', zIndex: 10 }}>
        <p>© 2026 {profile.name} · Designed & built with care in St. John's, NL</p>
      </footer>

    </div>
  );
}

export default App;
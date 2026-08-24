// src/App.jsx
import React, { useState, useEffect } from 'react';
import { DATA } from './data'; 

function App() {
  const { profile, phrases, about, skills, experience, projects, hobbies, education } = DATA;

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
    <div style={{ backgroundColor: '#FFFFFF', color: '#1A1F2C', minHeight: '100vh', fontFamily: "'Inter', sans-serif", lineHeight: 1.6, overflowX: 'hidden' }}>
      
      {/* Top Navigation Bar */}
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 100, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '1.2rem 8%', 
        background: 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(10px)', 
        borderBottom: '1px solid #E5E7EB',
        gap: '1rem'
      }}>
        <a href="#" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', color: '#B45309', textDecoration: 'none', fontWeight: 700 }}>Timi.</a>
        <div style={{ display: 'flex', gap: 'clamp(0.8rem, 2.5vw, 1.8rem)', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {['About', 'Experience', 'Projects', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{ color: '#4B5563', fontSize: '0.82rem', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600 }}>{link}</a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ 
        minHeight: '80vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '8.5rem 8% 3.5rem', 
        gap: '3rem', 
        flexWrap: 'wrap-reverse' 
      }}>
        <div style={{ flex: '1 1 420px', maxWidth: '560px' }}>
          <p style={{ 
            fontSize: '0.78rem', 
            letterSpacing: '0.16em', 
            textTransform: 'uppercase', 
            color: '#2563EB', 
            marginBottom: '1rem', 
            fontWeight: 700 
          }}>
            {profile.location} · Student & Developer
          </p>
          
          <h1 style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)', 
            fontWeight: 700, 
            lineHeight: 1.1, 
            margin: '0 0 1.2rem 0', 
            color: '#111827' 
          }}>
            Oluwatimilehin <span style={{ color: '#B45309', fontStyle: 'italic', fontWeight: 600 }}>Aramide.</span>
          </h1>

          <div style={{ 
            fontFamily: 'monospace', 
            fontSize: 'clamp(0.92rem, 2vw, 1.05rem)', 
            color: '#4B5563', 
            marginBottom: '2rem', 
            minHeight: '2em' 
          }}>
            {text}
            <span style={{ display: 'inline-block', width: '2px', height: '1.1em', background: '#B45309', marginLeft: '3px', verticalAlign: 'middle' }} />
          </div>

          {/* Compact Inline Buttons */}
          <div style={{ display: 'inline-flex', gap: '0.9rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a 
              href="#projects" 
              style={{ 
                background: '#0F1624', 
                color: '#FFFFFF', 
                padding: '0.75rem 1.6rem', 
                fontSize: '0.85rem', 
                fontWeight: 600, 
                borderRadius: '8px', 
                textDecoration: 'none',
                display: 'inline-block',
                whiteSpace: 'nowrap'
              }}
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              style={{ 
                background: '#FFFFFF', 
                color: '#1F2937', 
                border: '1px solid #D1D5DB', 
                padding: '0.75rem 1.6rem', 
                fontSize: '0.85rem', 
                fontWeight: 500, 
                borderRadius: '8px', 
                textDecoration: 'none',
                display: 'inline-block',
                whiteSpace: 'nowrap'
              }}
            >
              Contact
            </a>
          </div>
        </div>

        {/* Squircle Centered Portrait */}
        <div style={{ flex: '0 0 auto', margin: '0 auto' }}>
          <div style={{ 
            width: 'clamp(210px, 22vw, 280px)', 
            height: 'clamp(210px, 22vw, 280px)', 
            borderRadius: '28px', 
            overflow: 'hidden', 
            border: '1px solid #E5E7EB', 
            boxShadow: '0 12px 30px rgba(0,0,0,0.05)',
            background: '#F9FAFB' 
          }}>
            <img 
              src={profile.avatar} 
              alt={profile.name} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                objectPosition: 'center 20%' 
              }} 
            />
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main style={{ maxWidth: '960px', margin: '0 auto', padding: '0 8%' }}>
        
        {/* About & Skills */}
        <section id="about" style={{ padding: '4.5rem 0', borderTop: '1px solid #E5E7EB' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.7rem, 4vw, 2rem)', marginBottom: '1.5rem', color: '#111827' }}>About</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3.5rem', color: '#4B5563' }}>
            <div>
              {about.map((p, idx) => (
                <p key={idx} style={{ marginBottom: '1rem', fontSize: '0.98rem' }} dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#111827">$1</strong>') }} />
              ))}
              <div style={{ marginTop: '1.5rem', padding: '1rem 1.2rem', background: '#F9FAFB', borderRadius: '8px', border: '1px solid #F3F4F6', borderLeftWidth: '3px', borderLeftColor: '#B45309' }}>
                <div style={{ color: '#111827', fontWeight: 600, fontSize: '.92rem' }}>{education.degree}</div>
                <div style={{ color: '#6B7280', fontSize: '.84rem' }}>{education.institution} · {education.graduation}</div>
              </div>
            </div>

            {/* Inline Skills List */}
            <div>
              <h3 style={{ fontSize: '.82rem', textTransform: 'uppercase', letterSpacing: '.1em', color: '#2563EB', marginBottom: '1rem', fontWeight: 600 }}>Technical Skills</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '.92rem' }}>
                {skills.map((group, idx) => (
                  <div key={idx}>
                    <span style={{ color: '#111827', fontWeight: 600 }}>{group.category}: </span>
                    <span style={{ color: '#4B5563' }}>{group.items.join(' · ')}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Selected Projects */}
        <section id="projects" style={{ padding: '4.5rem 0', borderTop: '1px solid #E5E7EB' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.7rem, 4vw, 2rem)', marginBottom: '2rem', color: '#111827' }}>Selected Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {projects.slice(0, 3).map((proj, idx) => (
              <div key={idx} style={{ padding: '1.6rem', background: '#FAFAFA', borderRadius: '10px', border: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '.72rem', color: '#2563EB', textTransform: 'uppercase', letterSpacing: '.08em', fontWeight: 600 }}>{proj.tag}</span>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', margin: '.4rem 0 .8rem', color: '#111827' }}>{proj.name}</h3>
                  <p style={{ fontSize: '.88rem', color: '#4B5563', marginBottom: '1.4rem' }}>{proj.desc}</p>
                </div>
                <div style={{ display: 'flex', gap: '1.2rem', fontSize: '.84rem' }}>
                  {proj.links.live && <a href={proj.links.live} target="_blank" rel="noreferrer" style={{ color: '#B45309', fontWeight: 600, textDecoration: 'none' }}>Live Demo ↗</a>}
                  <a href={proj.links.github} target="_blank" rel="noreferrer" style={{ color: '#6B7280', textDecoration: 'none' }}>GitHub ↗</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" style={{ padding: '4.5rem 0', borderTop: '1px solid #E5E7EB' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.7rem, 4vw, 2rem)', marginBottom: '2rem', color: '#111827' }}>Experience</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.2rem' }}>
            {experience.map((job, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.4rem' }}>
                  <div>
                    <span style={{ color: '#111827', fontWeight: 600, fontSize: '1.02rem' }}>{job.role}</span>
                    <span style={{ color: '#6B7280' }}> · {job.company}</span>
                  </div>
                  <span style={{ fontSize: '.82rem', color: '#6B7280' }}>{job.period}</span>
                </div>
                <ul style={{ margin: '.6rem 0 0 1.2rem', padding: 0, color: '#4B5563', fontSize: '.9rem' }}>
                  {job.bullets.map((b, bIdx) => (
                    <li key={bIdx} style={{ marginBottom: '5px' }}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Things I Love */}
        <section style={{ padding: '3rem 0', borderTop: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.2rem' }}>
          <span style={{ fontSize: '.82rem', textTransform: 'uppercase', letterSpacing: '.12em', color: '#6B7280', fontWeight: 500 }}>Outside of tech:</span>
          <div style={{ display: 'flex', gap: 'clamp(1rem, 3.5vw, 1.8rem)', flexWrap: 'wrap' }}>
            {hobbies.map((h, i) => (
              <span key={i} style={{ fontSize: '.92rem', color: '#111827', display: 'flex', alignItems: 'center', gap: '.4rem', fontWeight: 500 }}>
                <span>{h.icon}</span> {h.name}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ padding: '4.5rem 0 6rem', borderTop: '1px solid #E5E7EB', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.9rem, 5vw, 2.2rem)', marginBottom: '.8rem', color: '#111827' }}>Let's Connect</h2>
          <p style={{ color: '#4B5563', maxWidth: '440px', margin: '0 auto 1.8rem', fontSize: '.96rem' }}>
            Interested in collaboration or open software opportunities? Reach out anytime.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.9rem', flexWrap: 'wrap' }}>
            <a href={`mailto:${profile.email}`} style={{ background: '#0F1624', color: '#FFFFFF', padding: '.75rem 1.6rem', fontSize: '.85rem', fontWeight: 600, borderRadius: '8px', textDecoration: 'none' }}>Email Me</a>
            <a href={profile.github} target="_blank" rel="noreferrer" style={{ border: '1px solid #D1D5DB', color: '#1F2937', padding: '.75rem 1.6rem', fontSize: '.85rem', fontWeight: 500, borderRadius: '8px', textDecoration: 'none' }}>GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" style={{ border: '1px solid #D1D5DB', color: '#1F2937', padding: '.75rem 1.6rem', fontSize: '.85rem', fontWeight: 500, borderRadius: '8px', textDecoration: 'none' }}>LinkedIn</a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '2rem 8%', fontSize: '.78rem', color: '#6B7280', borderTop: '1px solid #E5E7EB' }}>
        © 2026 {profile.name} · St. John's, NL
      </footer>

    </div>
  );
}

export default App;
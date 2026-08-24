// src/App.jsx
import React, { useState, useEffect } from 'react';
import { DATA } from './data'; 

function App() {
  const { profile, phrases, about, skills, experience, leadership, projects, hobbies, education } = DATA;

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
      
      {/* Dynamic Keyframes for Hover Shake */}
      <style>{`
        @keyframes hobbyShake {
          0% { transform: rotate(0deg) scale(1); }
          20% { transform: rotate(-6deg) scale(1.04); }
          40% { transform: rotate(6deg) scale(1.04); }
          60% { transform: rotate(-4deg) scale(1.04); }
          80% { transform: rotate(4deg) scale(1.04); }
          100% { transform: rotate(0deg) scale(1); }
        }
        .shake-card:hover {
          animation: hobbyShake 0.45s ease-in-out;
          border-color: #C9A84C !important;
          box-shadow: 0 10px 25px rgba(201,168,76,0.15) !important;
        }
      `}</style>

      {/* Background Ambience */}
      <div style={{ position: 'fixed', top: '10%', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', filter: 'blur(80px)', background: 'rgba(74,155,142,0.06)', pointerEvents: 'none', zIndex: 1 }} />
      <div style={{ position: 'fixed', bottom: '15%', left: '-60px', width: '320px', height: '320px', borderRadius: '50%', filter: 'blur(80px)', background: 'rgba(201,168,76,0.05)', pointerEvents: 'none', zIndex: 1 }} />

      {/* Sticky Top Navigation */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.1rem 5%', background: 'rgba(15,22,36,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
        <a href="#" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: '#C9A84C', letterSpacing: '0.05em', textDecoration: 'none' }}>Timi.</a>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {['About', 'Skills', 'Experience', 'Leadership', 'Projects', 'Hobbies', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{ color: '#8A95A8', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none' }}>{link}</a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8rem 5% 5rem', position: 'relative', flexWrap: 'wrap-reverse', gap: '3rem' }}>
        <div style={{ flex: '1 1 500px', zIndex: 10 }}>
          <p style={{ fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#4A9B8E', marginBottom: '1.2rem' }}>
            {profile.location} · Open to opportunities
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 6vw, 4.8rem)', fontWeight: 700, lineHeight: 1.08, margin: '0 0 1rem 0' }}>
            Oluwatimilehin<br /><span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Aramide.</span>
          </h1>
          <div style={{ fontFamily: 'monospace', fontSize: 'clamp(0.95rem, 2vw, 1.25rem)', color: '#8A95A8', marginBottom: '2.4rem', minHeight: '2em' }}>
            {text}
            <span style={{ display: 'inline-block', width: '2px', height: '1em', background: '#C9A84C', marginLeft: '2px', verticalAlign: 'middle' }} />
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" style={{ background: '#C9A84C', color: '#0F1624', padding: '.75rem 1.8rem', fontSize: '.85rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: '6px', textDecoration: 'none' }}>View My Work</a>
            <a href="#contact" style={{ border: '1px solid rgba(201,168,76,0.25)', color: '#F2EFE9', padding: '.75rem 1.8rem', fontSize: '.85rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: '6px', textDecoration: 'none' }}>Get In Touch</a>
          </div>
        </div>

        <div style={{ flex: '0 0 auto', margin: '0 auto', zIndex: 10 }}>
          <div style={{ width: 'clamp(220px, 22vw, 300px)', height: 'clamp(220px, 22vw, 300px)', borderRadius: '24px', overflow: 'hidden', border: '2px solid rgba(201,168,76,0.3)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', background: '#141D2F' }}>
            <img src={profile.avatar} alt={profile.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '5rem 5%', position: 'relative', zIndex: 10 }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#4A9B8E', marginBottom: '.5rem' }}>Who I am</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 600, marginBottom: '1rem' }}>Data meets <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>logic.</span></h2>
        <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, #C9A84C, transparent)', marginBottom: '2.5rem' }} />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          <div>
            {about.map((paragraph, index) => (
              <p 
                key={index} 
                style={{ color: '#8A95A8', marginBottom: '1.2rem', fontSize: '1.02rem', lineHeight: '1.7' }} 
                dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#F2EFE9">$1</strong>') }}
              />
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div style={{ background: '#141D2F', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '12px', padding: '1.4rem' }}>
              <div style={{ fontSize: '.72rem', letterSpacing: '.16em', textTransform: 'uppercase', color: '#4A9B8E', marginBottom: '.4rem' }}>Education</div>
              <div style={{ color: '#F2EFE9', fontWeight: 600, fontSize: '1rem' }}>{education.degree}</div>
              <div style={{ color: '#C9A84C', fontSize: '.88rem', margin: '.2rem 0 .6rem' }}>{education.institution} · {education.graduation}</div>
              <div style={{ fontSize: '.8rem', color: '#8A95A8' }}>Focus: {education.coursework.join(' · ')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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

      {/* Experience Section */}
      <section id="experience" style={{ padding: '5rem 5%', position: 'relative', zIndex: 10 }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#4A9B8E', marginBottom: '.5rem' }}>Where I've worked</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 600, marginBottom: '1rem' }}>Professional <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>experience.</span></h2>
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
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {job.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} style={{ fontSize: '.88rem', color: '#8A95A8', paddingLeft: '1.1rem', position: 'relative', marginBottom: '6px', lineHeight: '1.6' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#4A9B8E' }}>→</span>{bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Volunteer Section */}
      <section id="leadership" style={{ padding: '5rem 5%', background: '#141D2F', position: 'relative', zIndex: 10 }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#4A9B8E', marginBottom: '.5rem' }}>Community & Operations</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 600, marginBottom: '1rem' }}>Leadership <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>& service.</span></h2>
        <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, #C9A84C, transparent)', marginBottom: '2.5rem' }} />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {leadership.map((lead, idx) => (
            <div key={idx} style={{ background: '#1A2540', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '12px', padding: '1.6rem', borderTop: '3px solid #4A9B8E' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '.5rem', marginBottom: '.6rem' }}>
                <div>
                  <div style={{ fontWeight: 600, color: '#F2EFE9', fontSize: '1rem' }}>{lead.role}</div>
                  <div style={{ color: '#4A9B8E', fontSize: '.85rem' }}>{lead.organization}</div>
                </div>
                <span style={{ fontSize: '.75rem', color: '#8A95A8' }}>{lead.period}</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {lead.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} style={{ fontSize: '.85rem', color: '#8A95A8', paddingLeft: '1.1rem', position: 'relative', marginBottom: '4px', lineHeight: '1.55' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#C9A84C' }}>→</span>{bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '5rem 5%', position: 'relative', zIndex: 10 }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#4A9B8E', marginBottom: '.5rem' }}>What I've built</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 600, marginBottom: '1rem' }}>Selected <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>projects.</span></h2>
        <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, #C9A84C, transparent)', marginBottom: '2.5rem' }} />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {projects.map((proj, idx) => (
            <div key={idx} style={{ background: '#141D2F', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '12px', padding: '1.8rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span style={{ fontSize: '.7rem', letterSpacing: '.12em', textTransform: 'uppercase', color: '#4A9B8E', border: '1px solid rgba(74,155,142,.3)', borderRadius: '4px', padding: '.2rem .6rem', width: 'fit-content' }}>{proj.tag}</span>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: '#F2EFE9' }}>{proj.name}</div>
              <p style={{ fontSize: '.88rem', color: '#8A95A8', flex: 1, lineHeight: '1.65' }}>{proj.desc}</p>
              <div style={{ display: 'flex', gap: '.8rem' }}>
                {proj.links.live && <a href={proj.links.live} target="_blank" rel="noreferrer" style={{ color: '#C9A84C', fontSize: '.78rem', textDecoration: 'none' }}>↗ Live Client App</a>}
                <a href={proj.links.github} target="_blank" rel="noreferrer" style={{ color: '#8A95A8', fontSize: '.78rem', textDecoration: 'none' }}>↗ Source Code</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies: Geometric Shake Cards Section */}
      <section id="hobbies" style={{ padding: '5rem 5%', background: '#141D2F', position: 'relative', zIndex: 10 }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#4A9B8E', marginBottom: '.5rem' }}>Outside the screen</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 600, margin: '0 0 1rem 0' }}>
          Things I <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>love.</span>
        </h2>
        <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, #C9A84C, transparent)', marginBottom: '2.5rem' }} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem' }}>
          {hobbies.map((h, i) => {
            const shapes = [
              '36px 12px 36px 12px',
              '16px 36px 16px 36px',
              '50px',
              '12px 28px 40px 12px'
            ];

            return (
              <div
                key={i}
                className="shake-card"
                style={{
                  background: '#1A2540',
                  border: '1px solid rgba(201,168,76,0.18)',
                  borderRadius: shapes[i % shapes.length],
                  padding: '2rem 1rem',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  aspectRatio: '1 / 1'
                }}
              >
                <div style={{ fontSize: '2.8rem', marginBottom: '.5rem' }}>
                  {h.icon}
                </div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', color: '#F2EFE9', fontWeight: 600 }}>
                  {h.name}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '5rem 5%', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 600 }}>Say <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>hello.</span></h2>
        <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, #C9A84C, transparent)', margin: '0 auto 2rem' }} />
        <p style={{ color: '#8A95A8', maxWidth: '520px', margin: '0 auto 2rem' }}>I'm open to pipeline systems optimization roles, data engineering collaborations, and high-performance computing infrastructure architectures. Connect below.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
          <a href={`mailto:${profile.email}`} style={{ display: 'flex', alignItems: 'center', gap: '.5rem', color: '#8A95A8', fontSize: '.88rem', textDecoration: 'none', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '8px', padding: '.65rem 1.2rem' }}>✉ Email</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '.5rem', color: '#8A95A8', fontSize: '.88rem', textDecoration: 'none', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '8px', padding: '.65rem 1.2rem' }}>in LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '.5rem', color: '#8A95A8', fontSize: '.88rem', textDecoration: 'none', border: '1px solid rgba(201,168,76,0.18)', borderRadius: '8px', padding: '.65rem 1.2rem' }}>⌥ GitHub</a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '2rem 5%', fontSize: '.78rem', color: '#8A95A8', borderTop: '1px solid rgba(201,168,76,0.18)', position: 'relative', zIndex: 10 }}>
        <p>© 2026 {profile.name} · Designed & built with care in St. John's, NL</p>
      </footer>

    </div>
  );
}

export default App;
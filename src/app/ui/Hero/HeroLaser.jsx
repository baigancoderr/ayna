'use client';
import { useRef } from 'react';
import LaserFlow from '../LaserFlow';
import Div from '../Div';
import Button from '../Button';

export default function HeroLaser({
  title = 'Creative Agency',
  subtitle = 'We deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future.',
  btnText = 'Get a Quote',
  btnLink = '/contact',
  scrollDownId = '#service',
  socialLinksHeading = 'Follow Us',
  heroSocialLinks
}) {
  const revealImgRef = useRef(null);

  return (
    <Div
      className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1"
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#060010',
        overflow: 'hidden'
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', `${x}px`);
          el.style.setProperty('--my', `${y + rect.height * 0.5}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', '-9999px');
          el.style.setProperty('--my', '-9999px');
        }
      }}
    >
      {/* LaserFlow Background */}
      <div style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1
      }}>
        <LaserFlow
          horizontalBeamOffset={0.1}
          verticalBeamOffset={0.0}
          color="#FF79C6"
        />
      </div>

      {/* Content Container */}
      <Div 
        className="container" 
        style={{
          position: 'relative',
          zIndex: 6,
        //   height: '100vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Div className="cs-hero_text">
          <h1 className="cs-hero_title">{title}</h1>
          <Div className="cs-hero_info">
            <Div>
              <Button btnLink={btnLink} btnText={btnText} />
            </Div>
            <Div>
              <Div className="cs-hero_subtitle">{subtitle}</Div>
            </Div>
          </Div>
        </Div>
      </Div>

      {/* Optional Reveal Image Effect */}
      <img
        ref={revealImgRef}
        src="/images/hero_img.jpeg"
        alt="Reveal effect"
        style={{
          position: 'absolute',
          width: '100%',
          top: '-50%',
          zIndex: 5,
          mixBlendMode: 'lighten',
          opacity: 0.3,
          pointerEvents: 'none',
          '--mx': '-9999px',
          '--my': '-9999px',
          WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat'
        }}
      />

      {/* Social Links */}
      {/* {heroSocialLinks && (
        <Div className="cs-hero_social_wrap cs-left_side cs-primary_font cs-primary_color">
          <ul className="cs-hero_social_links">
            {heroSocialLinks.map((item, index) => (
              <li key={index}>
                <a href={item.links}>{item.name}</a>
              </li>
            ))}
          </ul>
          <span className="cs-hero_social_title">{socialLinksHeading}</span>
        </Div>
      )} */}

      {/* Scroll Down Button */}
      <a href={scrollDownId} className="cs-down_btn">
        .
      </a>
    </Div>
  );
}

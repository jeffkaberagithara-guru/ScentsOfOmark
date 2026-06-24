import { Link } from 'react-router-dom'
import { WA_LINK } from '../constants/theme'

const footerLinks = [
  { label: 'Our Story',   path: '/our-story' },
  { label: 'Fragrances',  path: '/fragrances' },
  { label: 'Scent Guide', path: '/scent-guide' },
  { label: 'Contact',     path: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1C1A14', color: '#F4EADE', width: '100%', padding: 'clamp(48px, 8vw, 80px) clamp(16px, 5vw, 48px)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(32px, 6vw, 48px)' }} className="lg:flex-row lg:justify-between lg:items-start">

        {/* Brand block */}
        <div style={{ flex: 1, minWidth: 0, maxWidth: '520px' }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(11px, 1.5vw, 14px)', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9A94A', margin: '0 0 16px 0' }}>
            TradeMark Aroma
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(24px, 3.5vw, 44px)', fontWeight: 700, lineHeight: 1.1, color: '#F4EADE', margin: '0 0 16px 0' }}>
            A fragrance experience that lingers long after the moment.
          </h2>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(15px, 1.8vw, 18px)', lineHeight: 1.8, color: '#888888', margin: 0 }}>
            Discover curated scents, warm service, and luxurious rituals crafted
            for the bold, the refined, and everyone in between.
          </p>
          
            href={WA_LINK("Hi, I'd like to order a fragrance from Trademark Aroma")}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', display: 'inline-block', marginTop: 'clamp(20px, 3vw, 32px)', borderRadius: '28px', backgroundColor: '#C9A94A', padding: 'clamp(12px, 1.8vw, 16px) clamp(24px, 3.5vw, 32px)', fontSize: 'clamp(13px, 1.5vw, 16px)', fontFamily: "'Jost', sans-serif", fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0B0B0B' }}
          >
            Connect on WhatsApp
          </a>
        </div>

        {/* Links + contact */}
        <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">

          {/* Explore */}
          <div style={{ minWidth: '140px' }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(11px, 1.4vw, 14px)', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B5A2E', margin: '0 0 20px 0' }}>
              Explore
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{ textDecoration: 'none', fontFamily: "'Jost', sans-serif", fontSize: 'clamp(13px, 1.6vw, 16px)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#F4EADE', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = '#C9A94A'}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = '#F4EADE'}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div style={{ minWidth: '160px' }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(11px, 1.4vw, 14px)', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B5A2E', margin: '0 0 20px 0' }}>
              Contact
            </p>
            
              href={WA_LINK("Hi, I'd like to connect with Trademark Aroma")}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'block', fontFamily: "'Jost', sans-serif", fontSize: 'clamp(14px, 1.8vw, 17px)', fontWeight: 600, color: '#F4EADE', marginBottom: '14px', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = '#C9A94A'}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = '#F4EADE'}
            >
              +254 114 036 858
            </a>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(13px, 1.6vw, 15px)', color: '#888888', lineHeight: 1.8, maxWidth: '260px', margin: 0 }}>
              Nairobi, Kenya · Personal fragrance consultations and same-day support.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between" style={{ maxWidth: '1200px', margin: 'clamp(32px, 5vw, 48px) auto 0', paddingTop: '24px', borderTop: '0.5px solid #2A2519', color: '#888888', fontSize: 'clamp(12px, 1.4vw, 14px)' }}>
        <span>© {new Date().getFullYear()} TradeMark Aroma. All rights reserved.</span>
        <span>Crafted for unforgettable presence.</span>
      </div>
    </footer>
  )
}
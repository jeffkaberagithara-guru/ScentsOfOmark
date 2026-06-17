import { COLORS, FONTS } from '../constants/theme'
import { motion } from 'framer-motion'

const fragrances = [
  {
    id: 1,
    name: 'Noir Oud',
    gender: 'For Him',
    description: 'Dark elegance for unforgettable evenings.',
    notes: 'Oud · Sandalwood · Amber',
    mood: 'Powerful',
    image: 'https://images.unsplash.com/photo-1588514912908-53f6e7932f2d?w=600&q=80',
  },
  {
    id: 2,
    name: 'Rose Soir',
    gender: 'For Her',
    description: 'A whisper of romance that lingers all night.',
    notes: 'Rose · Musk · Vanilla',
    mood: 'Romantic',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=80',
  },
  {
    id: 3,
    name: 'Velvet Dusk',
    gender: 'Unisex',
    description: 'Where confidence meets quiet sophistication.',
    notes: 'Bergamot · Cedar · Iris',
    mood: 'Elegant',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&q=80',
  },
  {
    id: 4,
    name: 'Gold Amber',
    gender: 'For Him',
    description: 'Warm, rich, and impossible to ignore.',
    notes: 'Amber · Leather · Vetiver',
    mood: 'Bold',
    image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=600&q=80',
  },
  {
    id: 5,
    name: 'Blanc Fleur',
    gender: 'For Her',
    description: 'Soft, pure, and effortlessly refined.',
    notes: 'White Florals · Peach · Musk',
    mood: 'Delicate',
    image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&q=80',
  },
  {
    id: 6,
    name: 'Midnight Oud',
    gender: 'Unisex',
    description: 'Inspired by moonlit Arabian nights.',
    notes: 'Oud · Vanilla · Smoke',
    mood: 'Mysterious',
    image: 'https://images.unsplash.com/photo-1602928298849-325cec8771c0?w=600&q=80',
  },
]

function FragranceCard({
  fragrance,
  index,
}: {
  fragrance: (typeof fragrances)[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      style={{
        backgroundColor: COLORS.surface,
        border: `0.5px solid ${COLORS.surfaceLight}`,
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = COLORS.goldAged
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = COLORS.surfaceLight
      }}
    >
      {/* Image */}
      <div
        style={{
          position: 'relative',
          height: '240px',
          overflow: 'hidden',
        }}
      >
        <motion.img
          src={fragrance.image}
          alt={fragrance.name}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(11,11,11,0.85) 0%, rgba(11,11,11,0.1) 60%)',
          }}
        />
        {/* Gender tag over image */}
        <span
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            fontFamily: FONTS.body,
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: COLORS.gold,
            backgroundColor: 'rgba(11,11,11,0.6)',
            padding: '5px 12px',
            borderRadius: '20px',
            border: `0.5px solid ${COLORS.goldAged}`,
          }}
        >
          {fragrance.gender}
        </span>
      </div>

      {/* Body */}
      <div
        style={{
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          flex: 1,
        }}
      >
        {/* Name */}
        <h3
          style={{
            fontFamily: FONTS.heading,
            fontSize: '26px',
            fontWeight: 400,
            letterSpacing: '0.02em',
            color: COLORS.ivory,
            lineHeight: 1.1,
          }}
        >
          {fragrance.name}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: '13px',
            fontWeight: 300,
            lineHeight: 1.7,
            color: COLORS.textMuted,
          }}
        >
          {fragrance.description}
        </p>

        {/* Divider */}
        <div style={{ height: '0.5px', backgroundColor: COLORS.surfaceLight }} />

        {/* Notes */}
        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: '11px',
            letterSpacing: '0.1em',
            color: COLORS.goldAged,
            textTransform: 'uppercase',
          }}
        >
          {fragrance.notes}
        </p>

        {/* Mood + Order */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 'auto',
            paddingTop: '8px',
          }}
        >
          <span
            style={{
              fontFamily: FONTS.body,
              fontSize: '11px',
              color: COLORS.textDim,
              letterSpacing: '0.06em',
            }}
          >
            {fragrance.mood}
          </span>

          <motion.a
            href={`https://wa.me/254700000000?text=Hi%2C%20I%27d%20like%20to%20order%20${encodeURIComponent(fragrance.name)}%20from%20Scents%20of%20Omark`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            style={{
              textDecoration: 'none',
              fontFamily: FONTS.body,
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: COLORS.onyx,
              backgroundColor: COLORS.gold,
              padding: '8px 18px',
              borderRadius: '20px',
            }}
          >
            Order
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Home() {
  return (
    <div style={{ backgroundColor: COLORS.onyx }}>

      {/* ── HERO ── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        >
          <source
            src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay over video */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(11,11,11,0.55) 0%, rgba(11,11,11,0.75) 60%, rgba(11,11,11,1) 100%)',
            zIndex: 1,
          }}
        />

        {/* Hero content */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            padding: '0 24px',
            maxWidth: '860px',
          }}
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: FONTS.body,
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: COLORS.goldAged,
              marginBottom: '24px',
            }}
          >
            Luxury Fragrances · Nairobi, Kenya
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            style={{
              fontFamily: FONTS.heading,
              fontSize: 'clamp(48px, 9vw, 96px)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '0.02em',
              color: COLORS.ivory,
              marginBottom: '28px',
            }}
          >
            Wear a scent that{' '}
            <span style={{ color: COLORS.gold, fontStyle: 'italic' }}>
              tells your story.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              fontFamily: FONTS.body,
              fontSize: 'clamp(14px, 2vw, 17px)',
              fontWeight: 300,
              lineHeight: 1.8,
              color: COLORS.textMuted,
              maxWidth: '520px',
              margin: '0 auto 48px',
            }}
          >
            Handpicked perfumes and colognes for the man and woman who understand
            that fragrance is the invisible, unforgettable part of their presence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <motion.a
              href="/fragrances"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                textDecoration: 'none',
                fontFamily: FONTS.body,
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: COLORS.onyx,
                backgroundColor: COLORS.gold,
                padding: '14px 32px',
                borderRadius: '32px',
              }}
            >
              Explore Fragrances
            </motion.a>

            <motion.a
              href="https://wa.me/254700000000?text=Hi%2C%20I%27d%20like%20to%20order%20a%20fragrance%20from%20Scents%20of%20Omark"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                textDecoration: 'none',
                fontFamily: FONTS.body,
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: COLORS.gold,
                backgroundColor: 'transparent',
                padding: '14px 32px',
                borderRadius: '32px',
                border: `0.5px solid ${COLORS.gold}`,
              }}
            >
              Order on WhatsApp
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          style={{
            position: 'absolute',
            bottom: '40px',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span
            style={{
              fontFamily: FONTS.body,
              fontSize: '10px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: COLORS.textDim,
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            style={{
              width: '1px',
              height: '40px',
              backgroundColor: COLORS.goldAged,
            }}
          />
        </motion.div>
      </section>

      {/* ── FEATURED FRAGRANCES ── */}
      <section
        style={{
          padding: '100px 24px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            textAlign: 'center',
            marginBottom: '64px',
          }}
        >
          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: COLORS.goldAged,
              marginBottom: '16px',
            }}
          >
            The Collection
          </p>
          <h2
            style={{
              fontFamily: FONTS.heading,
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 400,
              color: COLORS.ivory,
              letterSpacing: '0.02em',
              lineHeight: 1.15,
            }}
          >
            Signature Fragrances
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {fragrances.map((fragrance, index) => (
            <FragranceCard
              key={fragrance.id}
              fragrance={fragrance}
              index={index}
            />
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            textAlign: 'center',
            marginTop: '56px',
          }}
        >
          <motion.a
            href="/fragrances"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              textDecoration: 'none',
              fontFamily: FONTS.body,
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: COLORS.gold,
              border: `0.5px solid ${COLORS.goldAged}`,
              padding: '14px 36px',
              borderRadius: '32px',
            }}
          >
            View Full Collection
          </motion.a>
        </motion.div>
      </section>

    </div>
  )
}
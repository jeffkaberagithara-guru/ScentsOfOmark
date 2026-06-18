import { COLORS, FONTS, WA_LINK } from "../constants/theme";
import { motion } from "framer-motion";

const fragrances = [
  {
    id: 1,
    name: "Noir Oud",
    gender: "For Him",
    description: "Dark elegance for unforgettable evenings.",
    notes: "Oud · Sandalwood · Amber",
    mood: "Powerful",
    image:
      "https://images.unsplash.com/photo-1588514912908-53f6e7932f2d?w=600&q=80",
  },
  {
    id: 2,
    name: "Rose Soir",
    gender: "For Her",
    description: "A whisper of romance that lingers all night.",
    notes: "Rose · Musk · Vanilla",
    mood: "Romantic",
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=80",
  },
  {
    id: 3,
    name: "Velvet Dusk",
    gender: "Unisex",
    description: "Where confidence meets quiet sophistication.",
    notes: "Bergamot · Cedar · Iris",
    mood: "Elegant",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&q=80",
  },
  {
    id: 4,
    name: "Gold Amber",
    gender: "For Him",
    description: "Warm, rich, and impossible to ignore.",
    notes: "Amber · Leather · Vetiver",
    mood: "Bold",
    image:
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=600&q=80",
  },
  {
    id: 5,
    name: "Blanc Fleur",
    gender: "For Her",
    description: "Soft, pure, and effortlessly refined.",
    notes: "White Florals · Peach · Musk",
    mood: "Delicate",
    image:
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&q=80",
  },
  {
    id: 6,
    name: "Midnight Oud",
    gender: "Unisex",
    description: "Inspired by moonlit Arabian nights.",
    notes: "Oud · Vanilla · Smoke",
    mood: "Mysterious",
    image:
      "https://images.unsplash.com/photo-1602928298849-325cec8771c0?w=600&q=80",
  },
];

function FragranceCard({
  fragrance,
  index,
}: {
  fragrance: (typeof fragrances)[0];
  index: number;
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
        borderRadius: "16px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: "default",
        transition: "border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = COLORS.goldAged;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          COLORS.surfaceLight;
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          height: "260px",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <motion.img
          src={fragrance.image}
          alt={fragrance.name}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(11,11,11,0.85) 0%, rgba(11,11,11,0.1) 60%)",
          }}
        />
        {/* Gender tag */}
        <span
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            fontFamily: FONTS.body,
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: COLORS.gold,
            backgroundColor: "rgba(11,11,11,0.6)",
            padding: "6px 14px",
            borderRadius: "20px",
            border: `0.5px solid ${COLORS.goldAged}`,
          }}
        >
          {fragrance.gender}
        </span>
      </div>

      {/* Body */}
      <div
        style={{
          padding: "28px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          flex: 1,
        }}
      >
        {/* Name */}
        <h3
          style={{
            fontFamily: FONTS.heading,
            fontSize: "32px",
            fontWeight: 600,
            letterSpacing: "0.02em",
            color: COLORS.ivory,
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          {fragrance.name}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: 1.7,
            color: COLORS.textMuted,
            margin: 0,
          }}
        >
          {fragrance.description}
        </p>

        {/* Divider */}
        <div
          style={{
            height: "0.5px",
            backgroundColor: COLORS.surfaceLight,
            flexShrink: 0,
          }}
        />

        {/* Notes */}
        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.12em",
            color: COLORS.goldAged,
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          {fragrance.notes}
        </p>

        {/* Mood + Order */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "auto",
            paddingTop: "8px",
          }}
        >
          <span
            style={{
              fontFamily: FONTS.body,
              fontSize: "14px",
              fontWeight: 500,
              color: COLORS.textDim,
              letterSpacing: "0.08em",
            }}
          >
            {fragrance.mood}
          </span>

          <motion.a
            href={WA_LINK(
              `Hi, I'd like to order ${fragrance.name} from Scents of Omark`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            style={{
              textDecoration: "none",
              fontFamily: FONTS.body,
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: COLORS.onyx,
              backgroundColor: COLORS.gold,
              padding: "10px 22px",
              borderRadius: "20px",
            }}
          >
            Order
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div style={{ backgroundColor: COLORS.onyx }}>
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Background video — zIndex 0 */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source
            src="https://videos.pexels.com/video-files/7034150/7034150-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
          <source
            src="https://videos.pexels.com/video-files/7034150/7034150-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Cinematic gradient overlay — zIndex 1 */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            background:
              "linear-gradient(to bottom, rgba(11,11,11,0.3) 0%, rgba(11,11,11,0.5) 40%, rgba(11,11,11,0.88) 80%, rgba(11,11,11,1) 100%)",
          }}
        />

        {/* Side vignette — zIndex 1 */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(11,11,11,0.65) 100%)",
          }}
        />

        {/* Hero content — zIndex 2 */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "120px 24px 160px",
            maxWidth: "900px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: FONTS.body,
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: COLORS.goldAged,
              margin: "0 0 28px 0",
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
              fontSize: "clamp(52px, 9vw, 104px)",
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "0.02em",
              color: "#FFFFFF",
              margin: "0 0 32px 0",
              textShadow: "0 4px 40px rgba(0,0,0,0.5)",
            }}
          >
            Wear a scent that{" "}
            <span style={{ color: COLORS.gold, fontStyle: "italic" }}>
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
              fontSize: "clamp(16px, 2vw, 20px)",
              fontWeight: 400,
              lineHeight: 1.8,
              color: "#DDDDDD",
              maxWidth: "560px",
              margin: "0 0 52px 0",
              textShadow: "0 2px 16px rgba(0,0,0,0.5)",
            }}
          >
            Handpicked perfumes and colognes for the man and woman who
            understand that fragrance is the invisible, unforgettable part of
            their presence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <motion.a
              href="/fragrances"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                textDecoration: "none",
                fontFamily: FONTS.body,
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: COLORS.onyx,
                backgroundColor: COLORS.gold,
                padding: "16px 36px",
                borderRadius: "32px",
                display: "inline-block",
              }}
            >
              Explore Fragrances
            </motion.a>

            <motion.a
              href={WA_LINK(
                "Hi, I'd like to order a fragrance from Scents of Omark",
              )}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                textDecoration: "none",
                fontFamily: FONTS.body,
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: COLORS.gold,
                backgroundColor: "transparent",
                padding: "16px 36px",
                borderRadius: "32px",
                border: `1px solid ${COLORS.gold}`,
                display: "inline-block",
              }}
            >
              Order on WhatsApp
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll indicator — pointerEvents none, never blocks clicks */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          style={{
            position: "absolute",
            bottom: "36px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontFamily: FONTS.body,
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: "easeInOut",
            }}
            style={{
              width: "1px",
              height: "36px",
              backgroundColor: COLORS.goldAged,
              opacity: 0.5,
            }}
          />
        </motion.div>
      </section>

      {/* ── FEATURED FRAGRANCES ── */}
      <section
        style={{
          padding: "100px 24px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            textAlign: "center",
            marginBottom: "64px",
          }}
        >
          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: COLORS.goldAged,
              marginBottom: "16px",
            }}
          >
            The Collection
          </p>
          <h2
            style={{
              fontFamily: FONTS.heading,
              fontSize: "clamp(42px, 6vw, 68px)",
              fontWeight: 600,
              color: COLORS.ivory,
              letterSpacing: "0.02em",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Signature Fragrances
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
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
            textAlign: "center",
            marginTop: "64px",
          }}
        >
          <motion.a
            href="/fragrances"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              textDecoration: "none",
              fontFamily: FONTS.body,
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: COLORS.gold,
              border: `1px solid ${COLORS.goldAged}`,
              padding: "16px 40px",
              borderRadius: "32px",
              display: "inline-block",
            }}
          >
            View Full Collection
          </motion.a>
        </motion.div>
      </section>

      {/* ── BRAND STORY TEASER ── */}
      <section
        style={{
          padding: "100px 24px",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* Left — image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ position: "relative" }}
        >
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              height: "560px",
            }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1590156562745-5dd5f237bd7c?w=800&q=85"
              alt="Scents of Omark story"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* Floating accent card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              position: "absolute",
              bottom: "-28px",
              right: "-28px",
              backgroundColor: COLORS.surface,
              border: `1px solid ${COLORS.goldAged}`,
              borderRadius: "12px",
              padding: "20px 28px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              backdropFilter: "blur(12px)",
            }}
          >
            <span
              style={{
                fontFamily: FONTS.heading,
                fontSize: "44px",
                fontWeight: 600,
                color: COLORS.gold,
                lineHeight: 1,
              }}
            >
              100+
            </span>
            <span
              style={{
                fontFamily: FONTS.body,
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: COLORS.textMuted,
              }}
            >
              Curated Scents
            </span>
          </motion.div>

          {/* Gold line accent */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              position: "absolute",
              top: "40px",
              left: "-14px",
              width: "3px",
              height: "100px",
              backgroundColor: COLORS.gold,
              transformOrigin: "top",
              borderRadius: "2px",
            }}
          />
        </motion.div>

        {/* Right — text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: COLORS.goldAged,
              margin: 0,
            }}
          >
            Our Story
          </p>

          <h2
            style={{
              fontFamily: FONTS.heading,
              fontSize: "clamp(38px, 4.5vw, 58px)",
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "0.02em",
              color: COLORS.ivory,
              margin: 0,
            }}
          >
            Fragrance is the most{" "}
            <span style={{ color: COLORS.gold, fontStyle: "italic" }}>
              personal luxury
            </span>{" "}
            of all.
          </h2>

          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: "17px",
              fontWeight: 400,
              lineHeight: 1.9,
              color: COLORS.textMuted,
              margin: 0,
            }}
          >
            Scents of Omark was born from a single belief — that the right
            fragrance does not just smell good, it changes how you carry
            yourself. It is the last thing you put on and the first thing people
            remember.
          </p>

          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: "17px",
              fontWeight: 400,
              lineHeight: 1.9,
              color: COLORS.textMuted,
              margin: 0,
            }}
          >
            Every bottle in our collection is handpicked for the man and woman
            who move through the world with intention. We do not sell
            fragrances. We curate identity.
          </p>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: "48px",
              flexWrap: "wrap",
              paddingTop: "8px",
            }}
          >
            {[
              { number: "100+", label: "Fragrances" },
              { number: "3+", label: "Years curating" },
              { number: "1K+", label: "Happy clients" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: "42px",
                    fontWeight: 600,
                    color: COLORS.gold,
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: COLORS.textMuted,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div
            style={{
              height: "0.5px",
              backgroundColor: COLORS.surfaceLight,
            }}
          />

          {/* CTA */}
          <motion.a
            href="/our-story"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              textDecoration: "none",
              fontFamily: FONTS.body,
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: COLORS.onyx,
              backgroundColor: COLORS.gold,
              padding: "16px 36px",
              borderRadius: "32px",
              display: "inline-block",
              alignSelf: "flex-start",
            }}
          >
            Read Our Story
          </motion.a>
        </motion.div>
      </section>

      {/* ── WHATSAPP CTA ── */}
      <section
        style={{
          padding: "120px 24px",
          position: "relative",
          overflow: "hidden",
          marginTop: "40px",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=1600&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />

        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(11,11,11,0.88)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "680px",
            margin: "0 auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "28px",
          }}
        >
          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: COLORS.goldAged,
              margin: 0,
            }}
          >
            Personal Service
          </p>

          <h2
            style={{
              fontFamily: FONTS.heading,
              fontSize: "clamp(40px, 5.5vw, 72px)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "0.02em",
              color: COLORS.ivory,
              margin: 0,
            }}
          >
            Your signature scent is{" "}
            <span style={{ color: COLORS.gold, fontStyle: "italic" }}>
              one message away.
            </span>
          </h2>

          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: "17px",
              fontWeight: 400,
              lineHeight: 1.8,
              color: COLORS.textMuted,
              maxWidth: "480px",
              margin: 0,
            }}
          >
            Not sure which fragrance suits you? Speak directly with our
            fragrance consultant. We will find your perfect scent, confirm
            availability, and arrange fast delivery across Nairobi.
          </p>

          <div
            style={{
              width: "48px",
              height: "1px",
              backgroundColor: COLORS.goldAged,
            }}
          />

          {/* WhatsApp button */}
          <motion.a
            href={WA_LINK(
              "Hi, I'd like help finding my signature scent from Scents of Omark",
            )}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontFamily: FONTS.body,
              fontSize: "15px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              backgroundColor: "#25D366",
              padding: "18px 40px",
              borderRadius: "32px",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat with us on WhatsApp
          </motion.a>

          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: "14px",
              fontWeight: 400,
              color: COLORS.textDim,
              letterSpacing: "0.08em",
              margin: 0,
            }}
          >
            Fast delivery across Nairobi · Same day available
          </p>
        </motion.div>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import { WA_LINK } from "../../constants/theme";

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* Video — explicit style zIndex for guaranteed cross-browser layering */}
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

      {/* Gradient overlay — zIndex 1 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(11,11,11,0.3) 0%, rgba(11,11,11,0.5) 45%, rgba(11,11,11,0.9) 80%, rgba(11,11,11,1) 100%)",
        }}
      />

      {/* Radial vignette — zIndex 1 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          background:
            "radial-gradient(ellipse at center, transparent 38%, rgba(11,11,11,0.62) 100%)",
        }}
      />

      {/* Content — zIndex 2 */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "900px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding:
            "clamp(100px, 14vw, 160px) clamp(16px, 5vw, 48px) clamp(120px, 16vw, 180px)",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "clamp(10px, 2vw, 13px)",
            fontWeight: 600,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#6B5A2E",
            margin: "0 0 clamp(16px, 3vw, 28px) 0",
          }}
        >
          Luxury Fragrances · Nairobi, Kenya
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(38px, 8vw, 104px)",
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "0.02em",
            color: "#FFFFFF",
            margin: "0 0 clamp(16px, 3vw, 32px) 0",
            textShadow: "0 4px 40px rgba(0,0,0,0.5)",
          }}
        >
          Wear a scent that{" "}
          <span style={{ color: "#C9A94A", fontStyle: "italic" }}>
            tells your story.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "clamp(15px, 2vw, 20px)",
            lineHeight: 1.8,
            color: "#DDDDDD",
            maxWidth: "560px",
            margin: "0 0 clamp(32px, 5vw, 52px) 0",
            textShadow: "0 2px 16px rgba(0,0,0,0.5)",
          }}
        >
          Handpicked perfumes and colognes for the man and woman who understand
          that fragrance is the invisible, unforgettable part of their presence.
        </motion.p>

        {/* Buttons — column on mobile, row on sm+ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            width: "100%",
            maxWidth: "380px",
            alignItems: "stretch",
          }}
          className="sm:flex-row sm:max-w-none sm:w-auto sm:items-center sm:justify-center"
        >
          <motion.a
            href="/fragrances"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              textDecoration: "none",
              fontFamily: "'Jost', sans-serif",
              fontSize: "clamp(12px, 1.5vw, 14px)",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#0B0B0B",
              backgroundColor: "#C9A94A",
              padding: "clamp(13px, 2vw, 16px) clamp(24px, 4vw, 36px)",
              borderRadius: "32px",
              textAlign: "center",
              display: "block",
            }}
            className="sm:inline-block"
          >
            Explore Fragrances
          </motion.a>

          <motion.a
            href={WA_LINK(
              "Hi, I'd like to order a fragrance from Trademark Aroma",
            )}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              textDecoration: "none",
              fontFamily: "'Jost', sans-serif",
              fontSize: "clamp(12px, 1.5vw, 14px)",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#C9A94A",
              backgroundColor: "transparent",
              padding: "clamp(13px, 2vw, 16px) clamp(24px, 4vw, 36px)",
              borderRadius: "32px",
              border: "1px solid #C9A94A",
              textAlign: "center",
              display: "block",
            }}
            className="sm:inline-block"
          >
            Order on WhatsApp
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator — div not anchor, pointerEvents none = zero tap interference */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.25)",
            backgroundColor: "rgba(11,11,11,0.3)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: "5px",
          }}
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#C9A94A",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
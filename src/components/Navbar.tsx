import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { COLORS, FONTS, WA_LINK } from "../constants/theme";

const navLinks = [
  { label: "Our Story", path: "/our-story" },
  { label: "Fragrances", path: "/fragrances" },
  { label: "Scent Guide", path: "/scent-guide" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== "/") navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          height: "72px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(16px, 4vw, 32px)",
          transition: "background-color 0.3s ease, border-color 0.3s ease",
          backgroundColor: scrolled ? COLORS.onyx : "transparent",
          borderBottom: scrolled
            ? `0.5px solid ${COLORS.surfaceLight}`
            : "0.5px solid transparent",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={handleLogoClick}
          style={{ textDecoration: "none", flexShrink: 0 }}
        >
          <motion.div
            whileHover={{ opacity: 0.8 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "2px",
              color: "#C9A94A",
              textTransform: "uppercase",
              lineHeight: 1.05,
            }}
          >
            <span
              style={{
                fontFamily: FONTS.body,
                fontSize: "clamp(12px, 2vw, 15px)",
                fontWeight: 700,
                letterSpacing: "0.16em",
              }}
            >
              TradeMark Aroma
            </span>
            <span
              style={{
                fontFamily: FONTS.body,
                fontSize: "clamp(8px, 1.2vw, 10px)",
                fontWeight: 500,
                letterSpacing: "0.18em",
                color: "#B79C50",
              }}
            >
              Scent That Defines You
            </span>
          </motion.div>
        </Link>

        {/* Desktop nav */}
        <div
          className="hidden md:flex items-center"
          style={{ gap: "clamp(16px, 2.5vw, 24px)" }}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  textDecoration: "none",
                  fontFamily: FONTS.body,
                  fontSize: "12px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  transition: "color 0.3s ease",
                  color: isActive ? "#C9A94A" : "#B7B0A0",
                  borderBottom: isActive
                    ? "1px solid #C9A94A"
                    : "1px solid transparent",
                  paddingBottom: "2px",
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLElement).style.color = "#F4EADE";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLElement).style.color = "#B7B0A0";
                }}
              >
                {link.label}
              </Link>
            );
          })}

          <motion.a
            href={WA_LINK(
              "Hi, I'd like to place an order with Trademark Aroma",
            )}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              textDecoration: "none",
              fontFamily: FONTS.body,
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: COLORS.onyx,
              backgroundColor: COLORS.gold,
              padding: "9px 20px",
              borderRadius: "24px",
              whiteSpace: "nowrap",
            }}
          >
            Order Now
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="flex md:hidden"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: COLORS.gold,
            padding: "4px",
            flexShrink: 0,
          }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile menu — full screen overlay below navbar */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: "72px",
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 49,
              backgroundColor: COLORS.onyx,
              borderTop: `0.5px solid ${COLORS.surfaceLight}`,
              display: "flex",
              flexDirection: "column",
              padding: "clamp(24px, 5vw, 40px) clamp(20px, 5vw, 32px)",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            {/* Nav links */}
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.25 }}
                    style={{
                      borderBottom: `0.5px solid ${COLORS.surfaceLight}`,
                    }}
                  >
                    <Link
                      to={link.path}
                      style={{
                        textDecoration: "none",
                        fontFamily: FONTS.heading,
                        fontSize: "clamp(26px, 6vw, 38px)",
                        fontWeight: 400,
                        letterSpacing: "0.04em",
                        color: isActive ? COLORS.gold : COLORS.ivory,
                        display: "block",
                        padding: "clamp(12px, 2.5vw, 18px) 0",
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href={WA_LINK(
                "Hi, I'd like to place an order with Trademark Aroma",
              )}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
              style={{
                textDecoration: "none",
                fontFamily: FONTS.body,
                fontSize: "clamp(12px, 1.5vw, 14px)",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: COLORS.onyx,
                backgroundColor: COLORS.gold,
                padding: "clamp(14px, 2vw, 18px) 24px",
                borderRadius: "32px",
                textAlign: "center",
                display: "block",
                marginTop: "clamp(24px, 4vw, 32px)",
              }}
            >
              Order on WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
export const COLORS = {
  onyx: "#0B0B0B",
  gold: "#C9A94A",
  goldDeep: "#8B6914",
  goldAged: "#6B5A2E",
  ivory: "#F4EADE",
  surface: "#1C1A14",
  surfaceLight: "#2A2519",
  textMuted: "#888888",
  textDim: "#555555",
  whatsapp: "#25D366",
} as const;

export const FONTS = {
  heading: "'Cormorant Garamond', Georgia, serif",
  body: "'Jost', sans-serif",
} as const;

export const SPACING = {
  section: "80px 24px",
  card: "24px",
} as const;

export const WA_NUMBER = "254114036858";

export const WA_LINK = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
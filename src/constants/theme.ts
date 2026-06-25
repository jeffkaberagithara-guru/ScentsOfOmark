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

// ── All WhatsApp messages used across the website ──────────────────────────

export const WA_MESSAGES = {
  heroOrder: WA_LINK("Hi, I'd like to order a fragrance from Trademark Aroma"),
  heroExplore: WA_LINK(
    "Hi, I'm interested in exploring fragrances from Trademark Aroma. Can you guide me?",
  ),
  viewCollection: WA_LINK(
    "Hi, I'd like to know more about the full fragrance collection at Trademark Aroma",
  ),
  orderFragrance: (name: string) =>
    WA_LINK(`Hi, I'd like to order ${name} from Trademark Aroma`),
  findMyScent: WA_LINK(
    "Hi, I'd like help finding my signature scent from Trademark Aroma",
  ),
  brandInquiry: WA_LINK(
    "Hi, I'd like to learn more about Trademark Aroma and your story",
  ),
  giftInquiry: WA_LINK(
    "Hi, I'm looking for a fragrance gift from Trademark Aroma. Can you help me choose?",
  ),
  deliveryInquiry: WA_LINK(
    "Hi, I'd like to ask about delivery options and availability in Nairobi from Trademark Aroma",
  ),
  navbarOrder: WA_LINK("Hi, I'd like to place an order with Trademark Aroma"),
  footerConnect: WA_LINK("Hi, I'd like to connect with Trademark Aroma"),
  contactGeneral: WA_LINK("Hi, I have an inquiry about Trademark Aroma"),
  scentGuideInquiry: WA_LINK(
    "Hi, I just read your scent guide and I'd like help choosing a fragrance from Trademark Aroma",
  ),
} as const;
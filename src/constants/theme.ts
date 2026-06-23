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
  // Hero section — general order intent
  heroOrder: WA_LINK("Hi, I'd like to order a fragrance from Scents of Omark"),

  // Hero section — explore button fallback
  heroExplore: WA_LINK(
    "Hi, I'm interested in exploring fragrances from Scents of Omark. Can you guide me?",
  ),

  // Collection section — view full collection inquiry
  viewCollection: WA_LINK(
    "Hi, I'd like to know more about the full fragrance collection at Scents of Omark",
  ),

  // Individual fragrance order — called with fragrance name
  orderFragrance: (name: string) =>
    WA_LINK(`Hi, I'd like to order ${name} from Scents of Omark`),

  // Personal service section — signature scent consultation
  findMyScent: WA_LINK(
    "Hi, I'd like help finding my signature scent from Scents of Omark",
  ),

  // Our Story page — brand inquiry
  brandInquiry: WA_LINK(
    "Hi, I'd like to learn more about Scents of Omark and your story",
  ),

  // Fragrance gift inquiry
  giftInquiry: WA_LINK(
    "Hi, I'm looking for a fragrance gift from Scents of Omark. Can you help me choose?",
  ),

  // Delivery inquiry
  deliveryInquiry: WA_LINK(
    "Hi, I'd like to ask about delivery options and availability in Nairobi from Scents of Omark",
  ),

  // Navbar order button
  navbarOrder: WA_LINK("Hi, I'd like to place an order with Scents of Omark"),

  // Footer connect button
  footerConnect: WA_LINK("Hi, I'd like to connect with Scents of Omark"),

  // Contact page — general inquiry
  contactGeneral: WA_LINK("Hi, I have an inquiry about Scents of Omark"),

  // Scent guide — after reading an article
  scentGuideInquiry: WA_LINK(
    "Hi, I just read your scent guide and I'd like help choosing a fragrance from Scents of Omark",
  ),
} as const;
import { motion } from "framer-motion";
import {
  Sparkles,
  Compass,
  Droplet,
  Flame,
  Leaf,
  Sun,
  CheckCircle2,
} from "lucide-react";
import { WA_LINK } from "../constants/theme";

const families = [
  {
    label: "Citrus",
    title: "Bright & Energizing",
    description:
      "Sparkling freshness for daytime confidence and radiant clarity.",
    notes: "Bergamot · Lemon · Grapefruit",
    icon: Sun,
  },
  {
    label: "Floral",
    title: "Soft & Romantic",
    description:
      "Petal-rich bouquets that feel elegant, comforting, and luminous.",
    notes: "Jasmine · Rose · Orange Blossom",
    icon: Sparkles,
  },
  {
    label: "Woody",
    title: "Warm & Grounded",
    description:
      "Earthy depth with cedar, vetiver, and luxurious resinous warmth.",
    notes: "Cedar · Sandalwood · Vetiver",
    icon: Leaf,
  },
  {
    label: "Oriental",
    title: "Spicy & Intense",
    description: "Smoky amber warmth and exotic spices for memorable evenings.",
    notes: "Amber · Vanilla · Patchouli",
    icon: Flame,
  },
  {
    label: "Fresh",
    title: "Clean & Uplifting",
    description: "Crisp aquatic energy for effortless daytime wear.",
    notes: "Marine · Green Tea · Mint",
    icon: Droplet,
  },
  {
    label: "Spicy",
    title: "Dynamic & Bold",
    description: "Fiery accents and gourmand warmth for a confident signature.",
    notes: "Black Pepper · Cinnamon · Cardamom",
    icon: Compass,
  },
];

const steps = [
  {
    icon: CheckCircle2,
    title: "Identify your mood",
    description:
      "Choose whether you want fresh clarity, warm depth, or romantic softness.",
  },
  {
    icon: Sun,
    title: "Explore scent families",
    description:
      "Match your personality to citrus, floral, woody, oriental, or spicy accords.",
  },
  {
    icon: Droplet,
    title: "Sample the notes",
    description:
      "Pay attention to top, heart, and base notes that linger beautifully.",
  },
  {
    icon: Sparkles,
    title: "Commit to confidence",
    description:
      "Select a fragrance that feels like an extension of your presence.",
  },
];

export default function ScentGuide() {
  return (
    <div
      className="min-h-screen bg-[#0B0B0B] text-[#F4EADE]"
      style={{ overflowX: "hidden" }}
    >
      {/* Hero */}
      <section
        className="w-full max-w-[1200px] mx-auto text-center"
        style={{
          padding:
            "clamp(100px, 14vw, 160px) clamp(16px, 4vw, 24px) clamp(48px, 6vw, 80px)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ maxWidth: "860px", margin: "0 auto" }}
        >
          <p
            className="font-body font-extrabold uppercase text-[#6B5A2E]"
            style={{
              fontSize: "clamp(12px, 1.8vw, 14px)",
              letterSpacing: "0.28em",
              marginBottom: "24px",
            }}
          >
            Scent Guide
          </p>
          <h1
            className="font-heading font-extrabold text-[#F4EADE] m-0"
            style={{
              fontSize: "clamp(36px, 6.5vw, 86px)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
            }}
          >
            Find the fragrance language that defines you.
          </h1>
          <p
            className="font-body text-[#cccccc]"
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: 1.85,
              marginTop: "24px",
            }}
          >
            Discover the families, notes, and signature stories behind each
            scent so you can shop with confidence and elegance.
          </p>
        </motion.div>
      </section>

      {/* Families grid */}
      <section
        className="w-full max-w-[1200px] mx-auto"
        style={{ padding: "0 clamp(16px, 4vw, 24px) clamp(48px, 8vw, 80px)" }}
      >
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "clamp(16px, 2.5vw, 24px)" }}
        >
          {families.map((family) => {
            const Icon = family.icon;
            return (
              <motion.article
                key={family.label}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="rounded-[24px] border border-[#2A2519] bg-[#1C1A14]"
                style={{ padding: "clamp(24px, 3vw, 32px)" }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p
                      className="font-body font-bold uppercase text-[#6B5A2E] m-0"
                      style={{
                        fontSize: "clamp(11px, 1.4vw, 13px)",
                        letterSpacing: "0.28em",
                      }}
                    >
                      {family.label}
                    </p>
                    <h2
                      className="font-heading font-extrabold text-[#F4EADE] m-0"
                      style={{
                        fontSize: "clamp(22px, 3vw, 28px)",
                        marginTop: "12px",
                      }}
                    >
                      {family.title}
                    </h2>
                  </div>
                  <div
                    className="flex-shrink-0 flex items-center justify-center rounded-[20px] bg-[#C9A94A]/10 text-[#C9A94A]"
                    style={{ width: "52px", height: "52px" }}
                  >
                    <Icon size={22} />
                  </div>
                </div>
                <p
                  className="font-body text-[#bdbdbd]"
                  style={{
                    fontSize: "clamp(14px, 1.8vw, 16px)",
                    lineHeight: 1.85,
                    marginTop: "20px",
                  }}
                >
                  {family.description}
                </p>
                <div style={{ marginTop: "20px" }}>
                  <span
                    className="inline-flex rounded-full bg-[#F4EADE]/10 text-[#F4EADE] font-body font-semibold uppercase"
                    style={{
                      padding: "8px 16px",
                      fontSize: "clamp(11px, 1.4vw, 13px)",
                      letterSpacing: "0.16em",
                    }}
                  >
                    {family.notes}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Guide + sidebar */}
      <section
        className="w-full max-w-[1200px] mx-auto"
        style={{ padding: "0 clamp(16px, 4vw, 24px) clamp(48px, 8vw, 80px)" }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-start"
          style={{ gap: "clamp(24px, 4vw, 40px)" }}
        >
          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[24px] border border-[#2A2519] bg-[#1C1A14]"
            style={{ padding: "clamp(24px, 3vw, 32px)" }}
          >
            <p
              className="font-body font-extrabold uppercase text-[#6B5A2E] m-0"
              style={{
                fontSize: "clamp(12px, 1.6vw, 14px)",
                letterSpacing: "0.26em",
              }}
            >
              How to use this guide
            </p>
            <h2
              className="font-heading font-extrabold text-[#F4EADE] m-0"
              style={{ fontSize: "clamp(24px, 3vw, 34px)", marginTop: "20px" }}
            >
              A refined path to your signature scent.
            </h2>
            <p
              className="font-body text-[#cccccc]"
              style={{
                fontSize: "clamp(15px, 1.8vw, 18px)",
                lineHeight: 1.9,
                marginTop: "16px",
              }}
            >
              Browse the scent families, follow our selection steps, and
              discover notes that suit your style — from crisp daytime wear to
              intimate evening allure.
            </p>
            <div
              style={{
                marginTop: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="flex gap-4 rounded-[20px] border border-[#2A2519] bg-[#11100f]"
                    style={{ padding: "clamp(16px, 2vw, 20px)" }}
                  >
                    <div
                      className="flex-shrink-0 flex items-center justify-center rounded-[16px] bg-[#C9A94A]/10 text-[#C9A94A]"
                      style={{
                        width: "44px",
                        height: "44px",
                        marginTop: "2px",
                      }}
                    >
                      <StepIcon size={18} />
                    </div>
                    <div>
                      <p
                        className="font-heading font-extrabold text-[#F4EADE] m-0"
                        style={{ fontSize: "clamp(14px, 1.8vw, 15px)" }}
                      >
                        0{index + 1} · {step.title}
                      </p>
                      <p
                        className="font-body text-[#bdbdbd] m-0"
                        style={{
                          fontSize: "clamp(14px, 1.6vw, 16px)",
                          lineHeight: 1.85,
                          marginTop: "8px",
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(16px, 2.5vw, 24px)",
            }}
          >
            {/* Signature match */}
            <div
              className="rounded-[24px] border border-[#2A2519] bg-[#1C1A14]"
              style={{ padding: "clamp(24px, 3vw, 32px)" }}
            >
              <p
                className="font-body font-extrabold uppercase text-[#6B5A2E] m-0"
                style={{
                  fontSize: "clamp(12px, 1.6vw, 14px)",
                  letterSpacing: "0.26em",
                }}
              >
                Signature Match
              </p>
              <h3
                className="font-heading font-extrabold text-[#F4EADE] m-0"
                style={{
                  fontSize: "clamp(20px, 2.5vw, 28px)",
                  marginTop: "20px",
                }}
              >
                Choose the mood that fits you.
              </h3>
              <div
                style={{
                  marginTop: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "Bold & Memorable",
                  "Soft & Romantic",
                  "Crisp & Clean",
                  "Warm & Spiced",
                ].map((label) => (
                  <div
                    key={label}
                    className="rounded-[16px] border border-[#2A2519] bg-[#11100f]"
                    style={{ padding: "clamp(12px, 1.8vw, 16px)" }}
                  >
                    <p
                      className="font-body font-semibold text-[#F4EADE] m-0"
                      style={{ fontSize: "clamp(14px, 1.6vw, 16px)" }}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Note spotlight */}
            <div
              className="rounded-[24px] border border-[#2A2519] bg-[#1C1A14]"
              style={{ padding: "clamp(24px, 3vw, 32px)" }}
            >
              <p
                className="font-body font-extrabold uppercase text-[#6B5A2E] m-0"
                style={{
                  fontSize: "clamp(12px, 1.6vw, 14px)",
                  letterSpacing: "0.26em",
                }}
              >
                Note Spotlight
              </p>
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "Bergamot — adds sparkling brightness.",
                  "Jasmine — creates luminous romance.",
                  "Oud — delivers lush, lasting depth.",
                  "Vanilla — brings warm sensuality.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[16px] bg-[#11100f] font-body text-[#d5d5d5]"
                    style={{
                      padding: "clamp(12px, 1.8vw, 16px)",
                      fontSize: "clamp(14px, 1.6vw, 16px)",
                      lineHeight: 1.8,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="w-full"
        style={{
          padding: "0 clamp(16px, 4vw, 24px) clamp(64px, 10vw, 96px)",
          backgroundColor: "#0b0b0b",
        }}
      >
        <div
          className="max-w-[1200px] mx-auto rounded-[32px] border border-[#2A2519] bg-[#1C1A14]/80 text-center"
          style={{ padding: "clamp(40px, 6vw, 64px) clamp(24px, 5vw, 48px)" }}
        >
          <p
            className="font-body font-extrabold uppercase text-[#6B5A2E] m-0"
            style={{
              fontSize: "clamp(12px, 1.6vw, 14px)",
              letterSpacing: "0.28em",
            }}
          >
            Crafted Consultations
          </p>
          <h2
            className="font-heading font-extrabold text-[#F4EADE] m-0"
            style={{ fontSize: "clamp(28px, 5vw, 64px)", marginTop: "20px" }}
          >
            Select a scent that feels unmistakably yours.
          </h2>
          <p
            className="font-body text-[#cccccc]"
            style={{
              fontSize: "clamp(15px, 1.8vw, 19px)",
              lineHeight: 1.9,
              maxWidth: "680px",
              margin: "20px auto 0",
            }}
          >
            From first impression to final notes, we help you choose a fragrance
            that celebrates your mood, your style, and your story.
          </p>
          <motion.a
            href={WA_LINK(
              "Hi, I'd like a scent recommendation from Trademark Aroma",
            )}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-[28px] bg-[#C9A94A] text-[#0B0B0B] font-body font-extrabold uppercase"
            style={{
              padding: "clamp(14px, 2vw, 18px) clamp(32px, 5vw, 48px)",
              fontSize: "clamp(14px, 1.6vw, 18px)",
              letterSpacing: "0.12em",
              marginTop: "36px",
              boxShadow: "0 12px 40px -18px rgba(201,169,74,0.9)",
            }}
          >
            Request a Custom Match
          </motion.a>
        </div>
      </section>
    </div>
  );
}
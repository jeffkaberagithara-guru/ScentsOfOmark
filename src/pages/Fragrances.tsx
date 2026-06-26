import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { WA_LINK } from "../constants/theme";
import { ShoppingCart, Search } from "lucide-react";

type Fragrance = {
  id: string;
  name: string;
  brand?: string;
  description: string;
  price?: string;
  image: string;
  gender?: string;
  mood?: string[];
};

const SAMPLE: Fragrance[] = [
  {
    id: "amber-noir",
    name: "Amber Noir",
    brand: "Trademark Aroma",
    description: "A warm, resinous evening scent with amber and oud.",
    price: "$120",
    image:
      "https://images.pexels.com/photos/842876/pexels-photo-842876.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gender: "Unisex",
    mood: ["Warm", "Evening"],
  },
  {
    id: "citrus-bloom",
    name: "Citrus Bloom",
    brand: "Trademark Aroma",
    description: "Bright top notes and silky musk for daytime elegance.",
    price: "$95",
    image:
      "https://images.pexels.com/photos/1022925/pexels-photo-1022925.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gender: "Female",
    mood: ["Fresh", "Day"],
  },
  {
    id: "leather-velvet",
    name: "Leather Velvet",
    brand: "Trademark Aroma",
    description: "A smoky blend of leather and spices — bold and refined.",
    price: "$135",
    image:
      "https://images.pexels.com/photos/4666750/pexels-photo-4666750.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gender: "Male",
    mood: ["Smoky", "Evening"],
  },
  {
    id: "white-silk",
    name: "White Silk",
    brand: "Trademark Aroma",
    description: "A soft floral musky composition for modern minimalists.",
    price: "$110",
    image:
      "https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gender: "Female",
    mood: ["Floral", "Day"],
  },
  {
    id: "forest-mist",
    name: "Forest Mist",
    brand: "Trademark Aroma",
    description: "Green vetiver and cedar evoke an unmistakable presence.",
    price: "$125",
    image:
      "https://images.pexels.com/photos/175687/pexels-photo-175687.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gender: "Unisex",
    mood: ["Green", "Day"],
  },
];

export default function Fragrances() {
  const [query, setQuery] = useState("");
  const [filterMood, setFilterMood] = useState<string | null>(null);
  const [sort, setSort] = useState("featured");

  const moods = useMemo(() => {
    const s = new Set<string>();
    SAMPLE.forEach((f) => f.mood?.forEach((m) => s.add(m)));
    return Array.from(s);
  }, []);

  const filtered = useMemo(() => {
    let items = SAMPLE.slice();
    if (query.trim()) {
      const q = query.toLowerCase();
      items = items.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q) ||
          (i.brand || "").toLowerCase().includes(q),
      );
    }
    if (filterMood) {
      items = items.filter((i) => i.mood?.includes(filterMood));
    }
    if (sort === "price-asc")
      items.sort(
        (a, b) =>
          parseFloat(a.price?.slice(1) || "0") -
          parseFloat(b.price?.slice(1) || "0"),
      );
    if (sort === "price-desc")
      items.sort(
        (a, b) =>
          parseFloat(b.price?.slice(1) || "0") -
          parseFloat(a.price?.slice(1) || "0"),
      );
    return items;
  }, [query, filterMood, sort]);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F4EADE]">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{
              filter: "brightness(0.35) saturate(0.7) contrast(1.1)",
            }}
          >
            <source
              src="/videos/14160278_3840_2160_25fps.mp4"
              type="video/mp4"
            />
            {/* Fallback image if video doesn't load */}
            <img
              src="https://images.pexels.com/photos/842876/pexels-photo-842876.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Trademark Aroma fragrances"
              className="w-full h-full object-cover"
            />
          </video>

          {/* Overlay Gradients for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(11,11,11,0.2)] via-[rgba(11,11,11,0.5)] via-60% to-[rgba(11,11,11,0.95)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,11,11,0.9)] via-transparent to-[rgba(11,11,11,0.1)]" />

          {/* Subtle gold accent overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(201,169,74,0.08)] to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl"
          >
            <h1 className="mt-4 text-[clamp(42px,5vw,72px)] font-heading font-extrabold leading-[0.95] text-[#F4EADE]">
              Discover <span className="text-[#C9A94A]">Signature Scents</span>
            </h1>
            <p className="mt-4 text-[18px] leading-[1.9] text-[#DDDDDD] font-body max-w-2xl mx-auto">
              Browse our curated collection of fragrances handcrafted to leave a
              lasting impression. Filter, explore, and order directly.
            </p>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-20 h-0.5 bg-[#C9A94A] mx-auto mt-6"
            />
          </motion.div>
        </div>
      </section>

      {/* Controls */}
      <section className="px-6 pb-8 max-w-[1200px] mx-auto -mt-4 relative z-10">
        <div className="mt-4 flex gap-4 items-center justify-between flex-wrap">
          <div className="flex gap-3 items-center flex-1 min-w-[280px]">
            <div className="relative flex-1">
              <Search
                size={18}
                color="#888888"
                className="absolute left-3 top-2.5"
              />
              <input
                aria-label="Search fragrances"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, mood, or description"
                className="w-full pl-10 pr-3 py-3 rounded-[8px] bg-[#1C1A14] border border-[#2A2519] text-[#F4EADE]"
              />
            </div>

            <div className="flex gap-2 items-center">
              <select
                aria-label="Sort fragrances"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-3 py-[10px] rounded-[8px] bg-[#1C1A14] border border-[#2A2519] text-[#F4EADE]"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
              </select>
            </div>
          </div>

          <div className="flex gap-2 items-center mt-2">
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setFilterMood(null)}
                className={`px-3 py-2 rounded-full font-[700] ${
                  filterMood
                    ? "bg-[#1C1A14] text-[#F4EADE]"
                    : "bg-[#C9A94A] text-[#0B0B0B]"
                }`}
              >
                All
              </button>
              {moods.map((m) => (
                <button
                  key={m}
                  onClick={() =>
                    setFilterMood((prev) => (prev === m ? null : m))
                  }
                  className={`px-3 py-2 rounded-full text-[#F4EADE] border border-[#2A2519] font-[700] ${
                    filterMood === m ? "bg-[#C9A94A]" : "bg-[#1C1A14]"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((f) => (
              <motion.article
                key={f.id}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="bg-[#1C1A14] rounded-[12px] overflow-hidden border border-[#2A2519] flex flex-col"
              >
                <img
                  src={f.image}
                  alt={f.name}
                  className="h-[220px] w-full object-cover"
                />
                <div className="p-4 flex flex-col gap-2 flex-1">
                  <div className="flex justify-between items-baseline gap-3">
                    <div>
                      <h3 className="m-0 text-[24px] font-extrabold text-[#F4EADE] font-heading">
                        {f.name}
                      </h3>
                      <p className="m-0 text-[16px] text-[#888888] font-body">
                        {f.brand}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="m-0 text-[18px] font-extrabold text-[#C9A94A] font-body">
                        {f.price}
                      </p>
                    </div>
                  </div>
                  <p className="m-0 text-[16px] text-[#888888] leading-[1.6] font-body">
                    {f.description}
                  </p>

                  <div className="flex gap-2 flex-wrap mt-2">
                    {f.mood?.map((t) => (
                      <span
                        key={t}
                        className="text-[12px] text-[#F4EADE] bg-[rgba(255,255,255,0.03)] px-2.5 py-1 rounded-full font-body"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-3 flex gap-2">
                    <Link
                      to={`/fragrances/${f.id}`}
                      className="flex-1 px-3 py-2 rounded-lg text-center border border-[#2A2519] text-[#F4EADE] font-bold font-body"
                    >
                      View
                    </Link>
                    <a
                      href={WA_LINK(
                        `Hi, I'd like to order the fragrance ${f.name} from Trademark Aroma`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#C9A94A] text-[#0B0B0B] font-bold font-body"
                    >
                      <ShoppingCart size={16} /> Order
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-10 text-center text-[#888888] font-body">
              No fragrances match your search.
            </div>
          )}
        </div>
      </section>

      {/* Decorative CTA */}
      <section className="py-16 px-6 border-t border-[#2A2519] text-center">
        <div className="max-w-[960px] mx-auto">
          <h2 className="m-0 text-[clamp(40px,6vw,56px)] font-extrabold text-[#F4EADE] font-heading">
            Need help choosing?
          </h2>
          <p className="mt-4 text-[18px] text-[#888888] font-body">
            Our consultants are available for bespoke recommendations and
            private consultations.
          </p>
          <a
            href={WA_LINK(
              "Hi, I'd like help choosing a signature scent from Trademark Aroma",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-8 py-4 rounded-[28px] bg-[#C9A94A] text-[#0B0B0B] font-extrabold font-body text-[18px]"
          >
            Message Us
          </a>
        </div>
      </section>
    </div>
  );
}
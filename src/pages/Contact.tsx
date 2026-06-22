import { WA_LINK } from "../constants/theme";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I'm ${formData.name}. ${formData.message}`;
    window.open(WA_LINK(message), "_blank");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-[72px] bg-[#0B0B0B] text-[#F4EADE]">
      {/* Hero Section */}
      <section className="pt-[100px] px-6 pb-[80px] max-w-[1200px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[16px] font-extrabold tracking-[0.26em] uppercase text-[#6B5A2E] inline-block mb-6 font-body">
            Get in Touch
          </span>
          <h1 className="m-0 font-heading text-[clamp(56px,9vw,96px)] leading-[1.05] font-extrabold text-[#F4EADE]">
            We'd Love to Hear From You
          </h1>
          <p className="mt-5 text-[22px] leading-[2.1] text-[#888888] max-w-[680px] mx-auto font-body">
            Whether you have questions about our fragrances or need personal
            fragrance consultations, our team is here to help you find your
            perfect scent.
          </p>
        </motion.div>
      </section>

      {/* Contact Info & Form Grid */}
      <section className="py-16 px-6 max-w-[1200px] mx-auto grid gap-[60px] grid-cols-1 sm:grid-cols-2 items-start">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[48px] font-extrabold mb-8 text-[#F4EADE] font-heading">
            Contact Information
          </h2>

          <div className="flex flex-col gap-7">
            {/* Phone */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-[rgba(201,169,74,0.12)] border border-[rgba(201,169,74,0.18)] flex items-center justify-center flex-shrink-0">
                <Phone size={20} color="#C9A94A" />
              </div>
              <div>
                <p className="text-[16px] font-extrabold tracking-[0.12em] uppercase text-[#6B5A2E] mb-2 font-body">
                  Phone
                </p>
                <a
                  href="tel:+254114036858"
                  className="text-[20px] font-extrabold text-[#F4EADE] no-underline font-body"
                >
                  +254 114 036 858
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-[rgba(201,169,74,0.12)] border border-[rgba(201,169,74,0.18)] flex items-center justify-center flex-shrink-0">
                <Mail size={20} color="#C9A94A" />
              </div>
              <div>
                <p className="text-[16px] font-extrabold tracking-[0.12em] uppercase text-[#6B5A2E] mb-2 font-body">
                  Email
                </p>
                <a
                  href="mailto:hello@trademarkaroma.com"
                  className="text-[20px] font-extrabold text-[#F4EADE] no-underline font-body"
                >
                  hello@trademarkaroma.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-[rgba(201,169,74,0.12)] border border-[rgba(201,169,74,0.18)] flex items-center justify-center flex-shrink-0">
                <MapPin size={20} color="#C9A94A" />
              </div>
              <div>
                <p className="text-[16px] font-extrabold tracking-[0.12em] uppercase text-[#6B5A2E] mb-2 font-body">
                  Location
                </p>
                <p className="text-[20px] font-extrabold text-[#F4EADE] m-0 leading-[1.6] font-body">
                  Nairobi, Kenya
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-[rgba(201,169,74,0.12)] border border-[rgba(201,169,74,0.18)] flex items-center justify-center flex-shrink-0">
                <Clock size={20} color="#C9A94A" />
              </div>
              <div>
                <p className="text-[16px] font-extrabold tracking-[0.12em] uppercase text-[#6B5A2E] mb-2 font-body">
                  Business Hours
                </p>
                <p className="text-[20px] font-extrabold text-[#F4EADE] m-0 leading-[1.8] font-body">
                  Mon - Fri: 9:00 AM - 6:00 PM
                  <br />
                  Sat: 10:00 AM - 4:00 PM
                  <br />
                  Sun: By Appointment
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <motion.a
            href={WA_LINK("Hi, I'd like to connect with Trademark Aroma")}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block mt-10 px-10 py-4 rounded-[28px] bg-[#C9A94A] text-[#0B0B0B] font-extrabold tracking-[0.12em] uppercase no-underline font-body text-[18px]"
          >
            Message on WhatsApp
          </motion.a>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[48px] font-extrabold mb-8 text-[#F4EADE] font-heading">
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name */}
            <div>
              <label className="block text-[16px] font-extrabold tracking-[0.12em] uppercase text-[#6B5A2E] mb-2 font-body">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full px-4 py-4 text-[20px] bg-[#1C1A14] border border-[#2A2519] rounded-lg text-[#F4EADE] box-border focus:border-[#C9A94A] outline-none transition-colors font-body"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[16px] font-extrabold tracking-[0.12em] uppercase text-[#6B5A2E] mb-2 font-body">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-4 text-[20px] bg-[#1C1A14] border border-[#2A2519] rounded-lg text-[#F4EADE] box-border focus:border-[#C9A94A] outline-none transition-colors font-body"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-[16px] font-extrabold tracking-[0.12em] uppercase text-[#6B5A2E] mb-2 font-body">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
                className="w-full px-4 py-4 text-[20px] bg-[#1C1A14] border border-[#2A2519] rounded-lg text-[#F4EADE] box-border focus:border-[#C9A94A] outline-none transition-colors font-body"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-[16px] font-extrabold tracking-[0.12em] uppercase text-[#6B5A2E] mb-2 font-body">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell us more about your fragrance interests..."
                className="w-full px-4 py-4 text-[20px] bg-[#1C1A14] border border-[#2A2519] rounded-lg text-[#F4EADE] box-border resize-vertical focus:border-[#C9A94A] outline-none transition-colors font-body"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-2 px-10 py-4 rounded-[28px] bg-[#C9A94A] text-[#0B0B0B] font-extrabold tracking-[0.12em] uppercase cursor-pointer transition-all font-body text-[18px]"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* Bottom CTA */}
      <section className="pt-[80px] px-6 max-w-[1200px] mx-auto text-center border-t border-[#2A2519]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="m-0 text-[clamp(40px,7vw,60px)] font-bold text-[#F4EADE] font-heading">
            Looking for Your Signature Scent?
          </h2>
          <p className="mt-3 text-[18px] leading-[1.8] text-[#888888] max-w-[620px] mx-auto font-body">
            Our fragrance consultants are ready to help you explore our
            collection and find a scent that truly defines you.
          </p>
          <motion.a
            href={WA_LINK(
              "Hi, I'd like to get personal fragrance consultation from Trademark Aroma",
            )}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block mt-6 px-10 py-4 rounded-[32px] bg-[#C9A94A] text-[#0B0B0B] font-bold tracking-[0.12em] uppercase no-underline font-body"
          >
            Book a Consultation
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Globe2,
  Ship,
  Truck,
  Package,
  MessageCircle,
  Clock3,
  Send,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "../../components/Header";

const contactDetails = [
  {
    label: "Email",
    value: "info@canadianaexports.ca",
    href: "mailto:info@canadianaexports.ca",
    icon: Mail,
    note: "Send us your enquiry anytime",
  },
  {
    label: "Phone",
    value: "+1 867-669-0242",
    href: "tel:+18676690242",
    icon: Phone,
    note: "Speak with our team",
  },
  {
    label: "Address",
    value: "PO Box 20072, 4910-50th Street, Yellowknife, NT X1A 3X8, Canada",
    href: "https://www.google.com/maps/search/?api=1&query=4910-50th+Street+Yellowknife+NT+X1A+3X8+Canada",
    icon: MapPin,
    note: "Yellowknife, Northwest Territories",
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/#services" },
  { label: "Our Team", href: "/our-team" },
  { label: "Contact Us", href: "/contact-us" },
];

function Eyebrow({ children, light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.23em] ${
        light ? "text-[#C1D38D]" : "text-[#8FA94C]"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-[#B5CC68]" : "bg-[#A8BD63]"}`} />
      {children}
    </span>
  );
}

function BackgroundIcons({ light = false }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${
        light ? "text-white/[0.075]" : "text-[#536A3B]/[0.06]"
      }`}
    >
      <Globe2 className="absolute -left-8 top-2 h-32 w-32 stroke-[0.7]" />
      <Truck className="absolute right-[24%] top-5 h-20 w-20 stroke-[0.7]" />
      <Package className="absolute bottom-5 right-8 h-24 w-24 stroke-[0.7]" />
      <Ship className="absolute bottom-6 left-[35%] h-20 w-20 stroke-[0.7]" />
    </div>
  );
}

export default function ContactUsPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = `Website enquiry from ${form.firstName} ${form.lastName}`;
    const body = [
      `Name: ${form.firstName} ${form.lastName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    window.location.href = `mailto:info@canadianaexports.ca?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main
      className="overflow-hidden bg-white text-[#252925]"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Header />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-[#354A25] via-[#536A3B] to-[#718A50]">
        <BackgroundIcons light />
        <div className="relative mx-auto grid min-h-[420px] max-w-7xl items-center gap-10 px-5 pb-16 pt-32 sm:min-h-[470px] sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-2xl"
          >
            <Eyebrow light>We&apos;re here to help</Eyebrow>
            <h1 className="mt-5 text-[2.8rem] font-extrabold leading-[1.06] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.4rem]">
              Contact <span className="text-[#C1D38D]">Us.</span>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
              Have a question about sourcing, logistics or exporting Canadian
              products? Get in touch with our team and let&apos;s discuss how we
              can support your requirements.
            </p>
            <a
              href="mailto:info@canadianaexports.ca"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#B5CC68] px-6 py-3.5 text-xs font-extrabold text-[#263206] shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:bg-[#C5D98A]"
            >
              Email Our Team <ArrowRight size={15} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="relative z-10"
          >
            <div className="absolute -right-3 -top-3 h-28 w-28 rounded-tr-[2rem] border-r border-t border-white/30 sm:-right-4 sm:-top-4 sm:h-36 sm:w-36" />
            <div className="relative overflow-hidden rounded-[1.4rem] border border-white/20 shadow-2xl shadow-[#1E2805]/25 sm:rounded-[1.8rem]">
              <video
                className="h-[250px] w-full object-cover sm:h-[310px] lg:h-[330px]"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=90"
                aria-label="Canadiana Exports business and global trade video"
              >
                <source src="/videoes/contact-hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#172219]/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl border border-white/20 bg-[#1E2805]/70 px-4 py-3 text-white backdrop-blur-md">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#B5CC68] text-[#263206]">
                  <MessageCircle size={18} />
                </span>
                <span>
                  <span className="block text-xs font-extrabold">Let&apos;s start a conversation</span>
                  <span className="mt-0.5 block text-[10px] text-white/70">Your global trade partner</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-[#EDEFE9] bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-6 px-5 py-7 sm:grid-cols-4 sm:gap-5 sm:py-8 lg:px-8">
          {[
            { label: "Quality Focused", icon: CheckCircle2 },
            { label: "Global Network", icon: Globe2 },
            { label: "Trusted Partnerships", icon: MessageCircle },
            { label: "Export Solutions", icon: Truck },
          ].map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-3 text-sm font-extrabold text-[#343A31] sm:text-base"
            >
              <Icon
                size={21}
                className="shrink-0 text-[#8FA94C]"
                strokeWidth={1.9}
              />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Eyebrow>Get in touch</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.13] tracking-[-0.045em] text-[#252925] sm:text-4xl lg:text-[2.8rem]">
              Let&apos;s talk about your <span className="text-[#718A50]">next shipment.</span>
            </h2>
            <p className="mt-4 text-[13px] leading-7 text-[#737B72] sm:text-sm">
              Reach out directly or send us a message using the enquiry form.
              We&apos;ll be glad to hear about your requirements.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {contactDetails.map(({ label, value, href, icon: Icon, note }, index) => (
              <motion.a
                key={label}
                href={href}
                target={label === "Address" ? "_blank" : undefined}
                rel={label === "Address" ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="group rounded-[1.15rem] border border-[#E5E8E1] bg-[#F8F9F6] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#C7D4A6] hover:bg-white hover:shadow-lg sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF0E0] text-[#718A50] transition group-hover:bg-[#A8BD63] group-hover:text-[#263206]">
                  <Icon size={21} />
                </div>
                <p className="mt-5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#8FA94C]">{label}</p>
                <p className="mt-2 break-words text-base font-extrabold leading-7 text-[#292E28]">{value}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[11px] text-[#858C81]">{note}</span>
                  <ArrowUpRight size={16} className="text-[#8FA94C] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* MESSAGE FORM + CONTACT PANEL */}
      {/* <section className="bg-[#F1F2EF] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-[1.3rem] bg-[#242424] p-7 text-white shadow-xl sm:p-9"
          >
            <BackgroundIcons light />
            <div className="relative">
              <Eyebrow light>Contact information</Eyebrow>
              <h2 className="mt-4 text-3xl font-extrabold leading-[1.12] tracking-[-0.045em] sm:text-4xl">
                Ready to move your business forward?
              </h2>
              <p className="mt-5 text-[13px] leading-7 text-white/65">
                Whether you&apos;re looking for Canadian products, export
                coordination or logistics support, our team is ready to hear
                from you.
              </p>

              <div className="mt-9 space-y-5">
                <a href="mailto:info@canadianaexports.ca" className="flex items-center gap-3 text-sm font-semibold text-white/90 transition hover:text-[#C1D38D]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#A8BD63] text-[#263206]"><Mail size={17} /></span>
                  info@canadianaexports.ca
                </a>
                <a href="tel:+18676690242" className="flex items-center gap-3 text-sm font-semibold text-white/90 transition hover:text-[#C1D38D]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#A8BD63] text-[#263206]"><Phone size={17} /></span>
                  +1 867-669-0242
                </a>
                <div className="flex items-start gap-3 text-sm font-semibold leading-6 text-white/90">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#A8BD63] text-[#263206]"><MapPin size={17} /></span>
                  PO Box 20072, 4910-50th Street, Yellowknife, NT X1A 3X8, Canada
                </div>
              </div>

              <div className="mt-9 flex items-center gap-2 border-t border-white/15 pt-5 text-[11px] text-white/55">
                <Clock3 size={15} className="text-[#B5CC68]" />
                Send us your enquiry and our team will follow up.
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="rounded-[1.3rem] border border-[#E2E6DD] bg-white p-6 shadow-sm sm:p-9"
          >
            <Eyebrow>Send us a message</Eyebrow>
            <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.04em] text-[#252925] sm:text-3xl">
              Tell us what you need.
            </h2>
            <p className="mt-3 text-[12px] leading-6 text-[#858C81] sm:text-[13px]">
              Complete the form below and your email application will open with
              your enquiry ready to send.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-[11px] font-extrabold text-[#343A31]">First Name <span className="text-[#8FA94C]">*</span></span>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    autoComplete="given-name"
                    placeholder="Your first name"
                    className="w-full rounded-xl border border-[#E2E6DD] bg-[#FAFBF9] px-4 py-3.5 text-sm text-[#252925] outline-none transition placeholder:text-[#A5AAA1] focus:border-[#91A95A] focus:bg-white focus:ring-4 focus:ring-[#A8BD63]/15"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[11px] font-extrabold text-[#343A31]">Last Name <span className="text-[#8FA94C]">*</span></span>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    autoComplete="family-name"
                    placeholder="Your last name"
                    className="w-full rounded-xl border border-[#E2E6DD] bg-[#FAFBF9] px-4 py-3.5 text-sm text-[#252925] outline-none transition placeholder:text-[#A5AAA1] focus:border-[#91A95A] focus:bg-white focus:ring-4 focus:ring-[#A8BD63]/15"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-[11px] font-extrabold text-[#343A31]">Email <span className="text-[#8FA94C]">*</span></span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-[#E2E6DD] bg-[#FAFBF9] px-4 py-3.5 text-sm text-[#252925] outline-none transition placeholder:text-[#A5AAA1] focus:border-[#91A95A] focus:bg-white focus:ring-4 focus:ring-[#A8BD63]/15"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[11px] font-extrabold text-[#343A31]">Phone</span>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    placeholder="Your phone number"
                    className="w-full rounded-xl border border-[#E2E6DD] bg-[#FAFBF9] px-4 py-3.5 text-sm text-[#252925] outline-none transition placeholder:text-[#A5AAA1] focus:border-[#91A95A] focus:bg-white focus:ring-4 focus:ring-[#A8BD63]/15"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-[11px] font-extrabold text-[#343A31]">Message <span className="text-[#8FA94C]">*</span></span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us about your products, destination, sourcing or logistics requirements..."
                  className="w-full resize-y rounded-xl border border-[#E2E6DD] bg-[#FAFBF9] px-4 py-3.5 text-sm leading-6 text-[#252925] outline-none transition placeholder:text-[#A5AAA1] focus:border-[#91A95A] focus:bg-white focus:ring-4 focus:ring-[#A8BD63]/15"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#A8BD63] px-7 py-3.5 text-xs font-extrabold text-[#263206] shadow-md shadow-[#536A3B]/10 transition hover:-translate-y-0.5 hover:bg-[#BBD17B]"
              >
                Send Message <Send size={15} />
              </button>
            </form>
          </motion.div>
        </div>
      </section> */}

      {/* MAP / LOCATION */}
      <section className="bg-white px-5 py-14 sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 rounded-[1.2rem] border border-[#E5E8E1] bg-[#F8F9F6] p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF0E0] text-[#718A50]"><MapPin size={22} /></span>
            <div>
              <Eyebrow>Our location</Eyebrow>
              <h3 className="mt-2 text-lg font-extrabold text-[#292E28]">Yellowknife, Northwest Territories, Canada</h3>
              <p className="mt-1 text-[12px] leading-6 text-[#858C81]">PO Box 20072, 4910-50th Street, Yellowknife, NT X1A 3X8</p>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=4910-50th+Street+Yellowknife+NT+X1A+3X8+Canada"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#242424] px-5 py-3 text-xs font-extrabold text-white transition hover:bg-[#354A25]"
          >
            View Location <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1E2805] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_0.9fr] lg:px-8">
          <div>
            <Link href="/" className="inline-flex items-center">
              <img
                src="/logo/logo.jpg"
                alt="Canadiana Exports"
                className="h-14 w-auto rounded-lg bg-white p-1 object-contain"
              />
            </Link>
            <p className="mt-5 max-w-sm text-[12px] leading-6 text-white/65">
              Connecting Canadian quality with international opportunities
              through sourcing, trade coordination and export solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-extrabold text-[#C1D38D]">Quick Links</h3>
            <div className="mt-4 flex flex-col gap-2.5">
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[12px] text-white/70 transition hover:text-[#C1D38D]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-extrabold text-[#C1D38D]">Contact</h3>
            <div className="mt-4 space-y-3 text-[12px] text-white/70">
              <a href="mailto:info@canadianaexports.ca" className="block transition hover:text-[#C1D38D]">info@canadianaexports.ca</a>
              <a href="tel:+18676690242" className="block transition hover:text-[#C1D38D]">+1 867-669-0242</a>
              <p>Yellowknife, NT, Canada</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 py-5 text-[10px] text-white/40 sm:flex-row lg:px-8">
            <p>© {new Date().getFullYear()} Canadiana Exports. All rights reserved.</p>
            <p>Connecting Canadian Quality to Global Markets.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

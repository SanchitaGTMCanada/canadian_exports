"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Globe2,
  Sprout,
  ShieldCheck,
  Handshake,
  Truck,
  Wheat,
  Leaf,
  Package,
  Ship,
  Boxes,
  CircleCheck,
  Award,
  Compass,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "../../components/Header";

const images = {
  hero: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1400&q=90",
  company: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
  mission: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=85",
};

const values = [
  {
    number: "01",
    title: "Continuous Improvement",
    description:
      "We are dedicated to innovation and sustainability, fostering a culture of excellence that addresses environmental, social, and economic challenges. Through responsible practices and partnerships, we aim to continuously enhance our services while contributing to a more sustainable and equitable global food system.",
    icon: Package,
  },
  {
    number: "02",
    title: "Integrity and Transparency",
    description:
      "We believe in clear communication, responsible sourcing, and dependable relationships. We work to make every stage of the trading and export process transparent, accountable, and focused on long-term trust.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Sustainable Partnerships",
    description:
      "We value lasting relationships with producers, suppliers, and customers. By respecting communities and the environment, we aim to support responsible growth across the agricultural supply chain.",
    icon: Handshake,
  },
  {
    number: "04",
    title: "Customer Commitment",
    description:
      "We listen carefully to our customers and coordinate solutions around their requirements. Our focus is on dependable service, thoughtful communication, and consistent attention to quality.",
    icon: Globe2,
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/#services" },
  { label: "Our Team", href: "/#team" },
  { label: "Contact Us", href: "/#contact" },
];

const trustItems = [
  { label: "Quality Focused", icon: ShieldCheck },
  { label: "Global Network", icon: Globe2 },
  { label: "Trusted Partnerships", icon: Handshake },
  { label: "Export Solutions", icon: Truck },
];

function Eyebrow({ children, light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.24em] ${
        light ? "text-[#C1D38D]" : "text-[#8FA94C]"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-[#B5CC68]" : "bg-[#A8BD63]"}`} />
      {children}
    </span>
  );
}

function OutlinePattern({ light = false }) {
  const color = light ? "text-white/[0.08]" : "text-[#536A3B]/[0.07]";
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${color}`} aria-hidden="true">
      <Globe2 className="absolute -left-8 top-4 h-32 w-32 stroke-[0.7]" />
      <Ship className="absolute bottom-5 left-[34%] h-24 w-24 stroke-[0.7]" />
      <Boxes className="absolute bottom-8 right-8 h-24 w-24 stroke-[0.7]" />
      <Truck className="absolute right-[28%] top-0 h-20 w-20 stroke-[0.7]" />
      <Leaf className="absolute bottom-8 left-[16%] h-16 w-16 stroke-[0.7]" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-[#252925]" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Header />

      {/* HERO — mirrors the homepage's green split hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-[#354A25] via-[#536A3B] to-[#718A50]">
        <OutlinePattern light />
        <div className="relative mx-auto grid min-h-[490px] max-w-7xl translate-y-5 items-center gap-12 px-5 pb-16 pt-28 sm:min-h-[540px] sm:translate-y-6 sm:pb-20 lg:translate-y-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="relative z-10 max-w-xl"
          >
            <Eyebrow light>Welcome to Canadiana Exports</Eyebrow>
            <h1 className="mt-5 text-[2.8rem] font-extrabold leading-[1.08] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.25rem]">
              About <span className="text-[#C1D38D]">Us.</span>
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
              Connecting trusted Canadian producers with buyers across international markets through dependable sourcing, trade coordination and export solutions.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#B5CC68] px-6 py-3.5 text-xs font-extrabold text-[#263206] shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:bg-[#C5D98A]"
            >
              Connect With Us <ArrowRight size={15} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="relative z-10"
          >
            <div className="absolute -right-3 -top-3 h-28 w-28 rounded-tr-[2rem] border-r border-t border-white/30 sm:-right-4 sm:-top-4 sm:h-36 sm:w-36" />
            <div className="relative overflow-hidden rounded-[1.4rem] border border-white/20 shadow-2xl shadow-[#1E2805]/25 sm:rounded-[1.8rem]">
              <img
                src={images.hero}
                alt="Canadian cargo and export logistics warehouse"
                className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[390px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172219]/35 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-[#1E2805]/65 text-[#C1D38D] backdrop-blur-md">
                <Globe2 size={22} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST STRIP — same compact icon row as homepage */}
      <section className="border-b border-[#EDEFE9] bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-5 px-5 py-6 sm:grid-cols-4 sm:py-7 lg:px-8">
          {trustItems.map(({ label, icon: Icon }) => (
            <div key={label} className="flex items-center justify-center gap-2.5 text-[11px] font-extrabold text-[#343A31] sm:text-xs">
              <Icon size={16} className="text-[#8FA94C]" strokeWidth={1.8} />
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE ARE — homepage white two-column treatment */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -left-3 -top-3 h-16 w-16 rounded-tl-2xl border-l-2 border-t-2 border-[#A8BD63]" />
            <div className="relative overflow-hidden rounded-[1.25rem] shadow-xl shadow-[#1E2805]/10 sm:rounded-[1.5rem]">
              <img
                src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=85"
                alt="Cargo containers at an international shipping port"
                className="h-[300px] w-full object-cover sm:h-[390px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172219]/25 to-transparent" />
            </div>
            <div className="absolute -bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E2805] text-[#C1D38D] shadow-lg sm:-right-4">
              <Leaf size={22} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="order-1 lg:order-2"
          >
            <Eyebrow>About Canadiana Exports</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.13] tracking-[-0.045em] text-[#252925] sm:text-4xl lg:text-[2.8rem]">
              Canadian exports. <span className="text-[#718A50]">Global connections.</span>
            </h2>
            <div className="mt-6 space-y-4 text-[13px] leading-[1.9] text-[#737B72] sm:text-sm sm:leading-7">
              <p>
                <strong className="font-extrabold text-[#303830]">Canadiana Exports</strong> is a Canada-based international trading company specializing in the export of <strong className="font-bold text-[#303830]">Potash (MOP)</strong> and <strong className="font-bold text-[#303830]">high-quality agricultural pulses.</strong> Rooted in Canada&apos;s globally respected agri-commodity and mineral supply base, we connect reliable Canadian producers with buyers across international markets.
              </p>
              <p>
                Our business is built on <strong className="font-bold text-[#303830]">consistency, compliance, and long-term partnerships.</strong> We work closely with fertilizer distributors, agri-input companies, food processors, wholesalers, and government buyers to deliver products that meet strict quality, regulatory, and logistical requirements.
              </p>
              <p>
                Canada&apos;s reputation for <strong className="font-bold text-[#303830]">ethical sourcing, advanced infrastructure, and transparent trade practices</strong> underpins every shipment we deliver.
              </p>
            </div>
            <Link
              href="/#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#A8BD63] px-6 py-3 text-xs font-extrabold text-[#263206] transition hover:-translate-y-0.5 hover:bg-[#BBD17B]"
            >
              Learn More About Us <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION — same charcoal section treatment as homepage services */}
      <section className="relative overflow-hidden bg-[#242424] py-16 text-white sm:py-20 lg:py-24">
        <OutlinePattern light />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[1.25rem] border border-white/10 shadow-2xl sm:rounded-[1.5rem]">
              <img
                src={images.mission}
                alt="Fresh agricultural produce representing sustainable food supply"
                className="h-[300px] w-full object-cover sm:h-[420px]"
              />
            </div>
            <div className="absolute -bottom-4 -right-3 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-[#1E2805] text-[#B5CC68] shadow-xl">
              <Wheat size={25} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="space-y-9"
          >
            <div>
              <Eyebrow light>Our Purpose</Eyebrow>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl">Our Mission</h2>
              <p className="mt-4 text-[13px] leading-7 text-white/65 sm:text-sm sm:leading-8">
                To efficiently connect the finest natural food ingredients from Canada to global markets through advanced logistics solutions. Guided by sustainability and Indigenous values of respect for the environment, reciprocity, and community, we aim to provide seamless delivery while upholding a deep commitment to cultural and ecological stewardship.
              </p>
            </div>
            <div className="h-px w-full bg-white/15" />
            <div>
              <Eyebrow light>Our Direction</Eyebrow>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl">Our Vision</h2>
              <p className="mt-4 text-[13px] leading-7 text-white/65 sm:text-sm sm:leading-8">
                To be the global leader in sustainable food ingredient logistics, recognized for our respect for the natural world, innovative solutions, and commitment to bridging cultures and communities. We envision a future where every shipment reflects our dedication to excellence, environmental preservation, and the principles of mutual respect and reciprocity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUES — clean light background and cards styled like homepage content */}
      <section className="bg-[#F1F2EF] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <Eyebrow>What Guides Us</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.13] tracking-[-0.045em] text-[#252925] sm:text-4xl lg:text-[2.8rem]">
              The values behind every <span className="text-[#718A50]">partnership.</span>
            </h2>
            <p className="mt-4 text-[13px] leading-7 text-[#777D74] sm:text-sm">
              Our principles shape how we work with producers, customers, and partners across the global supply chain.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ number, title, description, icon: Icon }, index) => (
              <motion.article
                key={number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group flex min-h-[300px] flex-col rounded-[1.15rem] border border-[#E3E6DE] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF2E7] text-[#718A50] transition group-hover:bg-[#A8BD63] group-hover:text-[#263206]">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>
                  <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#A5AA9F]">{number}</span>
                </div>
                <h3 className="mt-6 text-lg font-extrabold leading-snug tracking-[-0.025em] text-[#292E28]">{title}</h3>
                <p className="mt-3 flex-1 text-[12px] leading-[1.85] text-[#747B72] sm:text-[13px]">{description}</p>
                <div className="mt-6 h-1 w-9 rounded-full bg-[#A8BD63] transition-all group-hover:w-14" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — repeat the homepage green gradient and contact-card language */}
      <section className="bg-white px-5 py-14 sm:py-16 lg:py-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.4rem] bg-gradient-to-r from-[#354A25] via-[#536A3B] to-[#718A50] px-6 py-9 shadow-xl shadow-[#1E2805]/15 sm:rounded-[1.6rem] sm:px-10 sm:py-12 lg:px-12">
          <OutlinePattern light />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Eyebrow light>Let&apos;s Work Together</Eyebrow>
              <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-[1.13] tracking-[-0.045em] text-white sm:text-4xl">
                Building stronger connections across global markets.
              </h2>
              <p className="mt-4 max-w-lg text-[13px] leading-7 text-white/80 sm:text-sm">
                Speak with our team about your sourcing and export requirements. We&apos;re ready to help you move forward.
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-extrabold text-[#263206] transition hover:-translate-y-0.5 hover:bg-[#EFF3E7]"
              >
                Contact Us <ArrowRight size={15} />
              </Link>
            </div>

            <div className="rounded-xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur-md sm:p-6">
              <div className="flex items-center gap-3 border-b border-white/20 pb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 text-white"><Mail size={18} /></span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/65">Email</p>
                  <a href="mailto:info@canadianaexports.ca" className="mt-1 block text-sm font-bold text-white">info@canadianaexports.ca</a>
                </div>
              </div>
              <div className="flex items-center gap-3 border-b border-white/20 py-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 text-white"><Phone size={18} /></span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/65">Phone</p>
                  <a href="tel:+18676690242" className="mt-1 block text-sm font-bold text-white">+1 867-669-0242</a>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white"><MapPin size={18} /></span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/65">Address</p>
                  <p className="mt-1 text-sm font-bold leading-6 text-white">PO Box 20072, 4910-50th Street, Yellowknife, NT X1A 3X8, Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER — same dark olive footer as homepage */}
      <footer className="bg-[#1E2805] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_0.9fr] lg:px-8">
          <div>
            <Link href="/" className="inline-flex items-center">
              <img src="/logo/logo.jpg" alt="Canadiana Exports" className="h-14 w-auto rounded-lg bg-white p-1 object-contain" />
            </Link>
            <p className="mt-5 max-w-sm text-[12px] leading-6 text-white/65">
              Connecting Canadian quality with international opportunities through sourcing, trade coordination and export solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-extrabold text-[#C1D38D]">Quick Links</h3>
            <div className="mt-4 flex flex-col gap-2.5">
              {quickLinks.map((item) => (
                <Link key={item.label} href={item.href} className="text-[12px] text-white/70 transition hover:text-[#C1D38D]">{item.label}</Link>
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

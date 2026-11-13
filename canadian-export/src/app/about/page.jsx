"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
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
import ContactFooter from "@/components/ContactFooter";

const images = {
  hero: "/images/about/about-hero.png",
  company: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
  mission: "/images/about/aboutmission.jpg",
};

const values = [
  {
    number: "01",
    title: "Continuous Improvement",
    description:
      "We are dedicated to innovation and sustainability, fostering a culture of excellence that addresses environmental, social, and economic challenges. Through responsible practices and partnerships, we aim to continuously enhance our services while contributing to a more sustainable and equitable global food system.",
    icon: Package,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "02",
    title: "Sustainability and Environmental Respect",
    description:
      "We prioritize sustainable practices in food sourcing and logistics, minimizing environmental impact while maximizing efficiency. By embracing renewable resources, reducing waste, and adopting eco-friendly technologies, we ensure that our operations respect the natural world and support a healthy, thriving planet for future generations.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    title: "Innovation and Technological Advancement",
    description:
      "We are committed to leveraging cutting-edge technologies to redefine global food ingredient distribution. By continuously exploring innovative logistics solutions and embracing advancements in automation, data-driven optimization, and sustainable practices, we aim to set new standards of efficiency and reliability in the industry.",
    icon: Handshake,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "04",
    title: "Global Engagement",
    description:
      "Recognizing the interconnected nature of global markets, we embrace cultural diversity and collaboration. Our mission is to build bridges between communities, facilitating mutual respect and understanding while delivering exceptional natural food solutions to the world.",
    icon: Globe2,
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=900&q=85",
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
      className={`inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] sm:text-sm ${
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
  const valuesTrackRef = useRef(null);

  const scrollValues = (direction) => {
    const track = valuesTrackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-value-card]");
    if (!card) return;

    track.scrollBy({
      left: direction * (card.getBoundingClientRect().width + 20),
      behavior: "smooth",
    });
  };

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
            <h1 className="mt-5 text-[2.75rem] font-extrabold leading-[1.08] tracking-[-0.05em] text-white sm:text-[3.5rem] lg:text-[4rem]">
              About <span className="text-[#C1D38D]">Us.</span>
            </h1>
            {/* <p className="mt-6 max-w-lg text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
              Canadiana Exports is a Canada-based international trading company specializing in the export of Potash (MOP) and high-quality agricultural pulses. Rooted in Canada’s globally respected agri-commodity and mineral supply base, we connect reliable Canadian producers with buyers across international markets.
            </p> */}
            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#B5CC68] px-6 py-3.5 text-sm font-extrabold text-[#263206] shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:bg-[#C5D98A]"
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
  <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-6 px-5 py-7 sm:grid-cols-4 sm:gap-5 sm:py-8 lg:px-8">
    {trustItems.map(({ label, icon: Icon }) => (
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

      {/* WHO WE ARE — homepage white two-column treatment */}
      <section className="bg-white py-14 sm:py-10 lg:py-14">
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

  <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-[-0.04em] text-[#252925] sm:text-[2.5rem] lg:text-[2.75rem]">
    Canadian exports.{" "}
    <span className="text-[#718A50]">Global connections.</span>
  </h2>

  <div className="mt-6 space-y-5 text-base leading-[1.8] text-[#454D43] sm:text-lg">
    <p>
      <strong className="font-extrabold text-[#252925]">
        Canadiana Exports
      </strong>{" "}
      is a Canada-based international trading company specializing in the
      export of{" "}
      <strong className="font-bold text-[#252925]">Potash (MOP)</strong> and{" "}
      <strong className="font-bold text-[#252925]">
        high-quality agricultural pulses.
      </strong>{" "}
      Rooted in Canada&apos;s globally respected agri-commodity and mineral
      supply base, we connect reliable Canadian producers with buyers across
      international markets.
    </p>

    <p>
      Our business is built on{" "}
      <strong className="font-bold text-[#252925]">
        consistency, compliance, and long-term partnerships.
      </strong>{" "}
      We work closely with fertilizer distributors, agri-input companies,
      food processors, wholesalers, and government buyers to deliver products
      that meet strict quality, regulatory, and logistical requirements.
    </p>

    <p>
      Canada&apos;s reputation for{" "}
      <strong className="font-bold text-[#252925]">
        ethical sourcing, advanced infrastructure, and transparent trade
        practices
      </strong>{" "}
      underpins every shipment we deliver.
    </p>
  </div>

  <Link
    href="/#contact"
    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#A8BD63] px-7 py-3.5 text-sm font-extrabold text-[#263206] sm:text-base transition hover:-translate-y-0.5 hover:bg-[#BBD17B]"
  >
    Learn More About Us <ArrowUpRight size={18} />
  </Link>
</motion.div>
        </div>
      </section>

      {/* MISSION & VISION — same charcoal section treatment as homepage services */}
      <section className="relative overflow-hidden bg-[#242424] py-14 text-white sm:py-10 lg:py-14">
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

  <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-[2.5rem]">
    Our Mission
  </h2>

  <p className="mt-5 text-base leading-[1.8] text-white/90 sm:text-lg">
    To efficiently connect the finest natural food ingredients from Canada
    to global markets through advanced logistics solutions. Guided by
    sustainability and Indigenous values of respect for the environment,
    reciprocity, and community, we aim to provide seamless delivery while
    upholding a deep commitment to cultural and ecological stewardship.
  </p>
</div>
            <div className="h-px w-full bg-white/15" />
            <div>
              <Eyebrow light>Our Direction</Eyebrow>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-[2.5rem]">
  Our Vision
</h2>

<p className="mt-5 text-base leading-[1.8] text-white/90 sm:text-lg">
  To be the global leader in sustainable food ingredient logistics,
  recognized for our respect for the natural world, innovative solutions,
  and commitment to bridging cultures and communities. We envision a future
  where every shipment reflects our dedication to excellence, environmental
  preservation, and the principles of mutual respect and reciprocity.
</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUES — clean light background and cards styled like homepage content */}
      <section className="bg-[#F1F2EF] py-14 sm:py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
    <div className="mx-auto mb-3 max-w-3xl text-center sm:mb-12">
  <Eyebrow>What Guides Us</Eyebrow>

  <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-[-0.04em] text-[#252925] sm:text-[2.5rem] lg:text-[2.75rem]">
    The values behind every{" "}
    <span className="text-[#718A50]">partnership.</span>
  </h2>

  <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.8] text-[#454D43] sm:text-lg">
    Our principles shape how we work with producers, customers, and partners
    across the global supply chain.
  </p>
</div>

          <div className="mb-6 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => scrollValues(-1)}
              aria-label="Previous values"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DDE4D3] bg-white text-[#536A3B] shadow-sm transition hover:border-[#A8BD63] hover:bg-[#A8BD63] hover:text-[#263206] focus:outline-none focus:ring-2 focus:ring-[#A8BD63] focus:ring-offset-2"
            >
              <ChevronLeft size={21} />
            </button>
            <button
              type="button"
              onClick={() => scrollValues(1)}
              aria-label="Next values"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DDE4D3] bg-white text-[#536A3B] shadow-sm transition hover:border-[#A8BD63] hover:bg-[#A8BD63] hover:text-[#263206] focus:outline-none focus:ring-2 focus:ring-[#A8BD63] focus:ring-offset-2"
            >
              <ChevronRight size={21} />
            </button>
          </div>

         <div
  ref={valuesTrackRef}
  className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5"
  style={{ scrollbarWidth: "none" }}
>
  {values.map(({ number, title, description, icon: Icon, image }, index) => (
    <motion.article
      key={number}
      data-value-card
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group flex min-h-[490px] w-full shrink-0 snap-start flex-col overflow-hidden rounded-[1.15rem] border border-[#E3E6DE] bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:w-[calc(50%-10px)] xl:w-[calc(33.333%-13.34px)]"
    >
      <div className="relative h-[190px] shrink-0 overflow-hidden sm:h-[210px]">
        <img
          src={image}
          alt={`${title} - Canadiana Exports`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#172219]/55 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#EEF2E7] text-[#718A50] transition group-hover:bg-[#A8BD63] group-hover:text-[#263206]">
            <Icon size={25} strokeWidth={1.8} />
          </div>

          <span className="text-sm font-extrabold tracking-[0.16em] text-[#555D53]">
            {number}
          </span>
        </div>

        <h3 className="mt-6 text-xl font-extrabold leading-snug tracking-[-0.025em] text-[#252925] sm:text-2xl">
          {title}
        </h3>

        <p className="mt-4 flex-1 text-base leading-[1.8] text-[#454D43]">
          {description}
        </p>

        <div className="mt-7 h-1 w-10 rounded-full bg-[#A8BD63] transition-all group-hover:w-16" />
      </div>
    </motion.article>
  ))}
</div>
        </div>
      </section>

<ContactFooter/>
    </main>
  );
}

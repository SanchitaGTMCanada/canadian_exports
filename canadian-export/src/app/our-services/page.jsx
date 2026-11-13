"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  ChartNoAxesCombined,
  CheckCircle2,
  Compass,
  FileCheck,
  Globe2,
  Headset,
  Mail,
  MapPin,
  Package,
  Phone,
  ShieldCheck,
  Ship,
  Truck,
  Wheat,
  Handshake,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import ContactFooter from "@/components/ContactFooter";

const services = [
  {
    number: "01",
    title: "Procurement and Sourcing",
    subtitle: "Reliable sourcing from trusted Canadian suppliers.",
    bullets: [
      "Supplier Management",
      "Sourcing of Raw Materials",
      "Quality Control"
    ],
    paragraphs: [
      "At Canadiana Exports, we are committed to connecting international buyers with trusted Canadian suppliers and producers.",
      "We work closely with farmers, manufacturers, and suppliers to source high-quality grains, agricultural products, and other commodities. From supplier identification and evaluation to price negotiation and procurement coordination, we manage every stage with care.",
      "Our quality control process ensures that products meet the required specifications and international standards, helping our clients receive dependable supplies ready for global markets."
    ],
    images: [
      "/images/services/procure.jpg"
    ],
    imageAlt: "Canadian grain production, agricultural sourcing and fresh produce",
    icon: "Wheat",
    tone: "light"
  },
  {
    number: "02",
    title: "Logistics and Transportation",
    subtitle: "Efficient coordination from origin to final destination.",
    bullets: [
      "Freight Management",
      "Containerization & Packaging",
      "Multimodal Transport",
      "Bulk Shipping",
      "Warehousing and Distribution"
    ],
    paragraphs: [
      "Our logistics and transportation services ensure the smooth and reliable movement of goods from Canada to international destinations.",
      "We coordinate freight management and select suitable transportation methods, including road, rail, sea, and air, based on shipment requirements. Our containerization and packaging solutions help protect products during handling and transit.",
      "Through integrated multimodal transportation, we provide flexible and cost-effective shipping arrangements while maintaining reliable delivery schedules.",
      "From bulk cargo shipments to warehousing and distribution, we coordinate the movement of goods at every stage, helping reduce delays and maintain supply chain efficiency."
    ],
    images: [
      "/images/services/logistics.jpg"
    ],
    imageAlt: "Cargo transportation and international shipping logistics",
    icon: "Ship",
    tone: "dark"
  },
  {
    number: "03",
    title: "Customs and Documentation",
    subtitle: "Simplifying export procedures and trade documentation.",
    bullets: [
      "Customs Clearance",
      "Export Documentation",
      "Compliance with International Trade Regulations"
    ],
    paragraphs: [
      "Our customs and documentation services help simplify international trade procedures and ensure shipments meet the requirements of their destination markets.",
      "We assist with essential export documentation, including commercial invoices, packing lists, bills of lading, certificates of origin, and other relevant shipping documents.",
      "By coordinating customs clearance and reviewing documentation requirements, we help minimize administrative delays and support a smoother shipping process.",
      "Our focus on trade compliance helps ensure that shipments follow applicable customs procedures and international regulations."
    ],
    images: [
      "/images/services/customs.jpg"
    ],
    imageAlt: "Customs clearance and international export documentation",
    icon: "FileCheck",
    tone: "light"
  },
  {
    number: "04",
    title: "Market Intelligence and Export Strategy",
    subtitle: "Market insights to support smarter export decisions.",
    bullets: [
      "Market Research",
      "Price Forecasting",
      "Trade Risk Assessment"
    ],
    paragraphs: [
      "Our market intelligence and export strategy services provide businesses with valuable insights into international markets and emerging trade opportunities.",
      "Through market research, we assess industry trends, buyer demand, competitive conditions, and potential opportunities across global markets. This helps businesses identify suitable destinations and make informed decisions about their export activities.",
      "We also provide commodity price insights and forecasting to help clients understand market movements and plan their purchasing and sales strategies.",
      "By evaluating potential trade risks, market conditions, and changing requirements, we help businesses develop practical export strategies for sustainable international growth."
    ],
    images: [
      "images/services/side.jpg"
    ],
    imageAlt: "Global market research and export strategy planning",
    icon: "ChartNoAxesCombined",
    tone: "dark"
  },
  {
    number: "05",
    title: "Supply Chain Optimization",
    subtitle: "Creating a more efficient and connected supply chain.",
    bullets: [
      "Inventory Management",
      "Demand Forecasting",
      "Order Fulfillment",
      "Supply Chain Visibility"
    ],
    paragraphs: [
      "Our Supply Chain Optimization services are designed to improve the movement, management, and coordination of goods throughout the supply chain.",
      "We help businesses manage inventory levels, forecast demand, and coordinate orders to maintain a consistent flow of products while reducing unnecessary delays and operational costs.",
      "Our order fulfillment solutions support efficient coordination between suppliers, logistics partners, and customers, helping ensure that shipments move according to planned schedules.",
      "With improved shipment tracking and supply chain visibility, businesses can monitor their goods, manage potential disruptions, and make better-informed operational decisions."
    ],
    images: [
      "images/services/supplychain.jpg"
    ],
    imageAlt: "Fresh produce, agricultural inventory and supply chain transportation",
    icon: "Boxes",
    tone: "light"
  },
  {
    number: "06",
    title: "Customer Service and Support",
    subtitle: "Dedicated assistance throughout your trading journey.",
    bullets: [
      "24/7 Support",
      "Client Education"
    ],
    paragraphs: [
      "Our customer service team is committed to providing reliable assistance and maintaining clear communication throughout the export process.",
      "We provide responsive support to help clients follow shipment progress, address concerns, and receive timely assistance whenever required.",
      "We also guide clients through important aspects of international trade, including export procedures, documentation, shipping coordination, and other requirements.",
      "By prioritizing communication and client satisfaction, we aim to build lasting business relationships based on trust and dependable service."
    ],
    images: [
      "images/services/customer.jpg"
    ],
    imageAlt: "Customer assistance and international trade support",
    icon: "Headset",
    tone: "dark"
  },
  {
    number: "07",
    title: "Consulting and Advisory Services",
    subtitle: "Expert guidance for better international trade planning.",
    bullets: [
      "Trade Advisory",
      "Logistics Optimization"
    ],
    paragraphs: [
      "Our consulting and advisory services help businesses navigate international trade with practical guidance and informed decision-making.",
      "We work with clients to understand their business objectives, identify export opportunities, and develop strategies that support their international expansion.",
      "Our trade advisory services cover areas such as market entry, supplier coordination, trade planning, and risk assessment, helping businesses approach new markets with greater confidence.",
      "We also identify opportunities to optimize logistics operations, improve transportation planning, and streamline supply chain processes to support cost efficiency and long-term business growth."
    ],
    images: [
      "images/services/consulting.jpg"
    ],
    imageAlt: "International trade consulting and agricultural advisory services",
    icon: "Compass",
    tone: "light"
  }
];
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/our-services" },
  { label: "Our Team", href: "/our-team" },
  { label: "Contact Us", href: "/contact-us" },
];

const iconMap = {
  Wheat,
  Ship,
  FileCheck,
  ChartNoAxesCombined,
  Boxes,
  Headset,
  Compass,
};

function Eyebrow({ children, light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] sm:text-sm ${
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
        light ? "text-white/[0.075]" : "text-[#354A25]/[0.20]"
      }`}
    >
      <Globe2 className="absolute -left-8 top-2 h-32 w-32 stroke-[0.7]" />
      <Truck className="absolute right-[24%] top-5 h-20 w-20 stroke-[0.7]" />
      <Package className="absolute bottom-5 right-8 h-24 w-24 stroke-[0.7]" />
      <Ship className="absolute bottom-6 left-[35%] h-20 w-20 stroke-[0.7]" />
    </div>
  );
}

function ServiceVisual({ service }) {
  const Icon = iconMap[service.icon] || Package;

  if (service.images.length === 1) {
    return (
      <div className="relative h-full min-h-[320px] overflow-hidden rounded-[1.6rem] border border-[#E5EBDD] shadow-2xl shadow-[#1E2805]/15 sm:min-h-[380px] lg:min-h-[420px]">
        <img
          src={service.images[0]}
          alt={service.imageAlt}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-[1.035]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#172219]/55 via-transparent to-transparent" />
        <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-[#1E2805]/75 text-[#C1D38D] backdrop-blur-md">
          <Icon size={23} />
        </div>
      </div>
    );
  }

  if (service.images.length === 2) {
    return (
      <div className="grid h-full min-h-[320px] grid-cols-1 grid-rows-2 gap-2 overflow-hidden rounded-[1.6rem] border border-[#E5EBDD] shadow-2xl shadow-[#1E2805]/10 sm:min-h-[380px] lg:min-h-[420px]">
        {service.images.map((image, imageIndex) => (
          <div key={image} className="relative min-h-0 overflow-hidden rounded-xl">
            <img
              src={image}
              alt={`${service.imageAlt} ${imageIndex + 1}`}
              className="h-full w-full object-cover transition duration-700 hover:scale-[1.04]"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid h-full min-h-[320px] grid-cols-2 grid-rows-[1.15fr_0.85fr] gap-2.5 overflow-hidden rounded-[1.6rem] border border-white/10 shadow-2xl shadow-black/20 sm:min-h-[380px] lg:min-h-[420px]">
      <div className="relative col-span-2 min-h-0 overflow-hidden rounded-xl">
        <img src={service.images[0]} alt={service.imageAlt} className="h-full w-full object-cover transition duration-700 hover:scale-[1.04]" />
      </div>
      <div className="relative min-h-0 overflow-hidden rounded-xl">
        <img src={service.images[1]} alt={`${service.imageAlt} 2`} className="h-full w-full object-cover transition duration-700 hover:scale-[1.04]" />
      </div>
      <div className="relative min-h-0 overflow-hidden rounded-xl">
        <img src={service.images[2]} alt={`${service.imageAlt} 3`} className="h-full w-full object-cover transition duration-700 hover:scale-[1.04]" />
      </div>
    </div>
  );
}

export default function OurServicesPage() {
  return (
    <main className="overflow-hidden bg-white text-[#252925]" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Header />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-[#E7EEDC] via-[#DFE8D2] to-[#D6E2C9]">
        <BackgroundIcons />
        <div className="relative mx-auto grid min-h-[440px] max-w-7xl items-center gap-10 px-5 pb-16 pt-32 sm:min-h-[490px] sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 max-w-2xl">
            <Eyebrow>What we do</Eyebrow>
            <h1 className="mt-5 text-[44px] font-extrabold leading-[1.08] tracking-[-0.045em] text-[#263206] sm:text-[56px] lg:text-[64px]">
              Our Services.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-[1.8] text-[#354A25]/90 sm:text-lg sm:leading-[1.8]">
              From sourcing and procurement to logistics, compliance and market strategy, we help coordinate the key parts of your export journey.
            </p>
            <Link href="/contact-us" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#A8BD63] px-6 py-3.5 text-sm font-extrabold sm:text-base text-[#263206] shadow-lg shadow-[#536A3B]/15 transition hover:-translate-y-1 hover:bg-[#B8CC7A]">
              Discuss Your Requirements <ArrowRight size={15} />
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.08 }} className="relative z-10">
            <div className="absolute -right-3 -top-3 h-28 w-28 rounded-tr-[2rem] border-r border-t border-[#536A3B]/25 sm:-right-4 sm:-top-4 sm:h-36 sm:w-36" />
            <div className="relative overflow-hidden rounded-[1.4rem] border border-white/20 shadow-2xl shadow-[#1E2805]/25 sm:rounded-[1.8rem]">
              <img src="/images/services/services.jpg" alt="International cargo and logistics" className="h-[260px] w-full object-cover sm:h-[330px] lg:h-[350px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172219]/45 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl border border-white/20 bg-[#1E2805]/70 px-4 py-3 text-white backdrop-blur-md">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#B5CC68] text-[#263206]"><Globe2 size={18} /></span>
                <span><span className="block text-xs font-extrabold">End-to-end export support</span><span className="mt-0.5 block text-xs text-white/80 sm:text-sm">From Canada to global markets</span></span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-[#EDEFE9] bg-white">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-5 px-5 py-6 sm:grid-cols-4 sm:py-7 lg:px-8">
          {[
            { label: "Quality Focused", icon: ShieldCheck },
            { label: "Global Network", icon: Globe2 },
            { label: "Trusted Partnerships", icon: Handshake },
            { label: "Export Solutions", icon: Truck },
          ].map(({ label, icon: Icon }) => (
            <div key={label} className="flex items-center justify-center gap-2.5 text-sm font-extrabold text-[#343A31] sm:text-base">
              <Icon size={19} className="text-[#8FA94C]" strokeWidth={1.8} />
              {label}
            </div>
          ))}
        </div>
      </section>

  

      {/* EACH SERVICE HAS ITS OWN FULL-WIDTH SECTION */}
      <div>
        {services.map((service, index) => {
          const isDark = index % 2 === 1;
          const Icon = iconMap[service.icon] || Package;

          return (
            <section
              key={service.number}
              id={`service-${service.number}`}
              className={`relative isolate overflow-hidden py-10 sm:py-14 lg:py-18 ${
                isDark ? "bg-[#242424] text-white" : "bg-[#F7F8F5] text-[#252925]"
              }`}
            >
              {isDark && <BackgroundIcons light />}
              <div className="relative mx-auto grid max-w-[1320px] items-stretch gap-8 px-5 sm:px-7 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-10">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? 28 : -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6 }}
                  className={`relative z-10 flex flex-col justify-center ${
                    index % 2 === 1 ? "order-2 lg:order-2" : "order-1 lg:order-1"
                  }`}
                >
                  <div className={`mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] sm:text-sm ${
                    isDark ? "text-[#C1D38D]" : "text-[#829B48]"
                  }`}>
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#A8BD63]/20 text-sm">
                      {service.number}
                    </span>
                    <span className={`h-px w-10 ${isDark ? "bg-[#A8BD63]/60" : "bg-[#A8BD63]"}`} />
                    <span>Canadiana Export Services</span>
                  </div>

                  <h2 className={`max-w-3xl text-[32px] font-extrabold leading-[1.15] tracking-[-0.04em] sm:text-[40px] lg:text-[44px] ${
                    isDark ? "text-white" : "text-[#252925]"
                  }`}>
                    {service.title}
                  </h2>

                  <p className={`mt-5 max-w-xl text-base font-semibold leading-[1.7] sm:text-lg ${
                    isDark ? "text-[#C1D38D]" : "text-[#536A3B]"
                  }`}>
                    {service.subtitle}
                  </p>

                  <div className="mt-7">
                    <p className={`mb-4 text-xs font-extrabold uppercase tracking-[0.16em] sm:text-sm ${
                      isDark ? "text-white/55" : "text-[#8A9284]"
                    }`}>
                      What we provide
                    </p>
                    <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className={`flex items-start gap-3 text-base font-semibold leading-[1.7] ${
                          isDark ? "text-white/85" : "text-[#4D554A]"
                        }`}>
                          <CheckCircle2 size={19} className="mt-1 shrink-0 text-[#A8BD63]" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`mt-8 space-y-5 text-base leading-[1.8] ${
                    isDark ? "text-white/75" : "text-[#697166]"
                  }`}>
                    {service.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))}
                  </div>

                  <Link
                    href="/contact-us"
                    className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#A8BD63] px-7 py-4 text-sm font-extrabold text-[#263206] shadow-md shadow-[#1E2805]/10 transition hover:-translate-y-1 hover:bg-[#C1D38D]"
                  >
                    Discuss Your Requirements <ArrowRight size={16} />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? -28 : 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: 0.08 }}
                  className={`relative ${
                    index % 2 === 1 ? "order-1 lg:order-1" : "order-2 lg:order-2"
                  }`}
                >
                  <div className={`absolute -inset-3 rounded-[1.8rem] border ${
                    isDark ? "border-white/10" : "border-[#DCE5CF]"
                  }`} />
                  <div className="relative h-full">
                    <ServiceVisual service={service} />
                    <div className={`absolute -bottom-5 ${index % 2 === 1 ? "right-5" : "left-5"} flex items-center gap-3 rounded-xl border px-4 py-3 shadow-xl backdrop-blur-md ${
                      isDark
                        ? "border-white/15 bg-[#1E2805]/85 text-white"
                        : "border-[#E4E9DC] bg-white/95 text-[#293126]"
                    }`}>
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#A8BD63] text-[#263206]">
                        <Icon size={20} />
                      </span>
                      <span>
                        <span className="block text-sm font-extrabold">{service.title}</span>
                        <span className={`mt-0.5 block text-xs ${isDark ? "text-white/65" : "text-[#778071]"}`}>
                          Canadiana Export Solutions
                        </span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          );
        })}
      </div>

     

     <ContactFooter/>
    </main>
  );
}

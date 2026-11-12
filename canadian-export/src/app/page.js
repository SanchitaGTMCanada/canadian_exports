"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Globe2,
  Truck,
  FileCheck,
  Search,
  TrendingUp,
  Headphones,
  Package,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Wheat,
  ShieldCheck,
  Ship,
  Leaf,
  Handshake,
} from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/Header";

const images = {
  hero: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1400&q=85",
  about:
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=85",
  shipping:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85",
};

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "#services" },
  { label: "Our Team", href: "#team" },
  { label: "Contact Us", href: "#contact" },
];

const services = [
  { number: "01", icon: Search, image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85", imageAlt: "Warehouse inventory and product sourcing", title: "Procurement and Sourcing", description: "Vendor discovery, material procurement, and supplier management." },
  { number: "02", icon: Truck, image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=900&q=85", imageAlt: "Cargo containers ready for transportation", title: "Logistics and Transportation", description: "Multi-modal freight management with inventory transparency." },
  { number: "03", icon: FileCheck, image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=85", imageAlt: "Export paperwork and documentation", title: "Customs and Documentation", description: "HS code validation, shipping documents, port clearances, and DGFT coordination." },
  { number: "04", icon: TrendingUp, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=900&q=85", imageAlt: "International trade and global market strategy", title: "Export Strategy and Market Integration", description: "Market entry research, trade compliance, and pricing strategy." },
  { number: "05", icon: Package, image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=900&q=85", imageAlt: "Packages moving through a supply chain", title: "Supply Chain Optimization", description: "Demand forecasting, route optimization, and stock minimization." },
  { number: "06", icon: Headphones, image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85", imageAlt: "Customer support team collaborating", title: "Customer Service and Support", description: "We provide 24/7 support, enabling you to track your orders." },
  { number: "07", icon: Handshake, image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85", imageAlt: "Business consultants planning export strategy", title: "Consulting and Advisory Services", description: "We collaborate closely with you to develop tailored export strategies." },
];

const faqs = [
  {
    question: "What services does Canadiana Exports offer?",
    answer:
      "Canadiana Exports specializes in facilitating the export of Canadian goods and products worldwide. Our services include product sourcing, logistics coordination, export documentation, and compliance management.",
  },
  {
    question: "Which countries do Canadiana Exports ship to?",
    answer:
      "We export to a wide range of countries across North America, Europe, Asia, and beyond. If you have specific destinations in mind, contact us for details.",
  },
  {
    question: "How can I get started with Canadiana Exports?",
    answer:
      "Visit our Contact Us page, fill out the inquiry form, and one of our representatives will contact you to discuss your export needs.",
  },
  {
    question: "What types of products can I export through Canadiana Exports?",
    answer:
      "We handle a diverse array of products, including agricultural goods, industrial equipment, consumer products, and natural resources. If you need assistance with specific products, we're happy to help.",
  },
  {
    question: "How are shipping logistics managed?",
    answer:
      "We coordinate the entire shipping process, from pickup to delivery. This includes freight forwarding, customs clearance, and ensuring compliance with international trade regulations.",
  },
  {
    question: "How long does shipping typically take?",
    answer:
      "Shipping times vary depending on the destination and the nature of the products. Once your order is confirmed, we provide estimated delivery timelines.",
  },
  {
    question: "Do you handle export documentation?",
    answer:
      "Absolutely. We manage all necessary export documentation, including certificates of origin, shipping invoices, and customs declarations.",
  },
  {
    question: "How do you ensure compliance with international regulations?",
    answer:
      "Our team stays current with export laws and international trade regulations to ensure that all shipments meet the necessary compliance standards.",
  },
  {
    question: "How is pricing determined for export services?",
    answer:
      "Pricing is based on the nature of the goods, shipping methods, and destination. Contact us for a personalized quote.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit card payments and other secure methods. Full payment details will be provided during the consultation process.",
  },
];

const buttonClass =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#A8BD63] px-6 py-3 text-sm font-semibold text-[#242424] transition duration-300 hover:bg-[#C1D38D]";

function SectionLabel({ children, light = false }) {
  return (
    <span
      className={`mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${
        light ? "text-[#C1D38D]" : "text-[#A8BD63]"
      }`}
    >
      <span className="h-2 w-2 rounded-full bg-current" />
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="max-w-2xl">
      <SectionLabel light={light}>{eyebrow}</SectionLabel>
      <h2
        className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-[#242424]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-8 ${
            light ? "text-white/70" : "text-[#555555]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [expandedQuestions, setExpandedQuestions] = useState({});
  const servicesCarouselRef = useRef(null);
  const QUESTION_LIMIT = 65;

  const scrollServices = (direction) => {
    const container = servicesCarouselRef.current;
    if (!container) return;

    const card = container.querySelector("[data-service-card]");
    if (!card) return;

    const gap = 24;
    const cardWidth = card.getBoundingClientRect().width + gap;
    container.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };



  return (
    <main className="overflow-hidden bg-white">
      {/* HEADER */}
     <Header/>

      {/* HERO */}
   


<section
  id="home"
  className="relative flex min-h-[760px] items-center overflow-hidden bg-[#536A3B] pt-24 text-white"
>
  {/* SOFT GREEN GRADIENT */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-r from-[#354A25] via-[#536A3B] to-[#718A50]" />
    
    {/* SOFT LIGHT EFFECTS */}
    <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#A8BD63]/10 blur-[100px]" />
    <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-white/[0.06] blur-[100px]" />
  </div>

  {/* LARGE DECORATIVE BACKGROUND ICONS */}
  <div
    className="pointer-events-none absolute inset-0 overflow-hidden"
    aria-hidden="true"
  >
    <Globe2
      className="absolute -left-12 top-20 text-white/[0.07]"
      size={210}
      strokeWidth={0.8}
    />

    <Ship
      className="absolute left-[38%] bottom-8 text-white/[0.06]"
      size={170}
      strokeWidth={0.8}
    />

    <Truck
      className="absolute right-[34%] top-16 text-white/[0.06]"
      size={150}
      strokeWidth={0.8}
    />

    <Package
      className="absolute right-10 bottom-8 text-white/[0.07]"
      size={180}
      strokeWidth={0.8}
    />

    <Leaf
      className="absolute left-[18%] bottom-12 text-white/[0.05]"
      size={125}
      strokeWidth={0.8}
    />
  </div>

  {/* MAIN CONTENT */}
  <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <SectionLabel light>Welcome to</SectionLabel>

      <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
        Canadiana
        <br />
        <span>Exports</span>
      </h1>

      <p className="mt-7 max-w-xl text-base leading-8 text-white/95 sm:text-lg">
        Global solutions for providing natural ingredients through advanced
        logistics. As a trusted export solutions provider, we specialize in
        sourcing and delivering high-quality Canadian goods to global markets.
      </p>

      <div className="mt-9 flex flex-wrap gap-4">
        <Link href="#services" className={buttonClass}>
          Explore Our Services <ArrowRight size={17} />
        </Link>
      </div>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative hidden lg:block"
    >
      <div className="absolute -right-5 -top-5 h-36 w-36 rounded-full border border-white/40" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/40 shadow-2xl">
        <img
          src={images.shipping}
          alt="Cargo containers ready for export"
          className="h-[490px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#263206]/30 via-transparent to-transparent" />

        {/* GLOBE ICON */}
        <div className="absolute bottom-7 left-7">
          <div className="flex w-fit items-center justify-center rounded-xl border border-white/30 bg-white/20 p-4 text-white shadow-lg backdrop-blur-md">
            <Globe2 size={28} />
          </div>
        </div>
      </div>
    </motion.div>

  </div>
</section>





      {/* TRUST STRIP - WHITE */}
      <section className="border-b border-[#E5E5E5] bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-7 px-5 py-9 sm:grid-cols-4 lg:px-8">
          {[
            { icon: ShieldCheck, label: "Quality Focused" },
            { icon: Globe2, label: "Global Network" },
            { icon: Handshake, label: "Trusted Partnerships" },
            { icon: Ship, label: "Export Solutions" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-3"
            >
              <item.icon className="shrink-0 text-[#A8BD63]" size={23} />
              <span className="text-xs font-bold text-[#242424] sm:text-sm">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT - WHITE */}
      <section id="about" className="bg-white py-10 lg:py-12">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-28 w-28 rounded-tl-[2rem] border-l-4 border-t-4 border-[#A8BD63]" />
            <img
              src={images.about}
              alt="Shipping and international trade operations"
              className="relative h-[430px] w-full rounded-[1.7rem] object-cover shadow-xl sm:h-[520px]"
            />
            <div className="absolute -bottom-7 right-5 max-w-[250px] rounded-2xl bg-[#242424] p-3 text-white shadow-xl sm:right-[-20px]">
              <Wheat className="mb-3 text-[#C1D38D]" size={28} />
              {/* <p className="text-lg font-bold">Rooted in Canada</p> */}
              {/* <p className="mt-2 text-sm leading-6 text-white/70">
                Connecting Canadian products with opportunities around the
                world.
              </p> */}
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="About Canadiana Exports"
              title="Canadian Exports"
           
            />

            <p className="mt-5 text-sm leading-8 text-[#555555]">
              Canadiana Exports is a Canada-based international trading company specializing in the export of Potash (MOP) and high-quality agricultural pulses. Rooted in Canada’s globally respected agri-commodity and mineral supply base, we connect reliable Canadian producers with buyers across international markets.
            </p>

            <p className="mt-4 text-sm leading-8 text-[#555555]">
              Our business is built on consistency, compliance, and long-term partnerships. We work closely with fertilizer distributors, agri-input companies, food processors, wholesalers, and government buyers to deliver products that meet strict quality, regulatory, and logistical requirements.
              <br/>
              Canada’s reputation for ethical sourcing, advanced infrastructure, and transparent trade practices underpins every shipment we deliver.
            </p>

            {/* <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { value: "Canadian", label: "Product Focus" },
                { value: "International", label: "Trade Perspective" },
                { value: "Reliable", label: "Coordination" },
                { value: "Quality", label: "Commitment" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-[#D9D9D9] bg-[#F0F0F0] p-4"
                >
                  <p className="font-bold text-[#242424]">{item.value}</p>
                  <p className="mt-1 text-xs text-[#555555]">{item.label}</p>
                </div>
              ))}
            </div> */}

            <Link href="#contact" className={`${buttonClass} mt-9`}>
              Learn More About Us <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

     
{/* SERVICES CAROUSEL */}
      <section id="services" className="relative overflow-hidden bg-[#242424] py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#647B58]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#365744]/[0.18] blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
            <div>
              <SectionLabel>What We Do</SectionLabel>
              <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Our Services
                <br/>
                Built Around Your Export Needs
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-white/70 sm:text-base">
                From sourcing and documentation to logistics and market strategy, we help coordinate the key parts of your export journey.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <button type="button" onClick={() => scrollServices(-1)} aria-label="Scroll services left" className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D9D9D9] bg-white text-[#242424] shadow-md transition hover:-translate-y-0.5 hover:border-[#A8BD63] hover:bg-[#F0F0F0]">
                <ArrowRight className="rotate-180" size={20} />
              </button>
              <button type="button" onClick={() => scrollServices(1)} aria-label="Scroll services right" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#242424] text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#A8BD63]">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          <div ref={servicesCarouselRef} className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {services.map((service) => (
              <motion.article
                key={service.number}
                data-service-card
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4 }}
                className="group relative flex w-[85%] min-w-[85%] snap-start flex-col overflow-hidden rounded-[1.7rem] border border-[#D8D8D8] bg-white shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#A8BD63] hover:shadow-[0_22px_50px_rgba(0,0,0,0.16)] sm:w-[calc((100%-1.5rem)/2)] sm:min-w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] lg:min-w-[calc((100%-3rem)/3)]"
              >
                <div className="relative h-52 overflow-hidden sm:h-56">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242424]/75 via-[#242424]/10 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-xs font-bold tracking-[0.16em] text-white shadow-lg backdrop-blur-md">
                    SERVICE {service.number}
                  </span>
                  <div className="absolute bottom-4 right-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/90 text-[#A8BD63] shadow-lg backdrop-blur-md transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#A8BD63] group-hover:text-[#242424]">
                    <service.icon size={23} strokeWidth={1.8} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="min-h-[58px] text-xl font-bold leading-snug text-[#242424] sm:text-[1.35rem]">
                    {service.title}
                  </h3>
                  <p className="mt-3 min-h-[76px] text-sm leading-7 text-[#626262]">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-[#E0E0E0] pt-5">
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#A8BD63] transition-all duration-300 group-hover:gap-3 group-hover:text-[#242424]"
                    >
                      Discuss your needs <ArrowUpRight size={16} />
                    </Link>
                    <span className="text-xs font-semibold tracking-widest text-[#A0A0A0]">{service.number}</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#A8BD63] transition-all duration-500 group-hover:w-full" />
              </motion.article>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between gap-4">
            <p className="text-xs text-white/60">Swipe or use the arrows to explore all services.</p>
            <Link href="#contact" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#C1D38D] transition hover:text-white">
              Talk to our team <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
<section className="relative overflow-hidden bg-[#ECECEC] py-20 lg:py-24">
  {/* Decorative background */}
  <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#A8BD63]/20" />
  <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#A8BD63]/20" />

  <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

    <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

      {/* LEFT CONTENT */}
      <div className="lg:sticky lg:top-28">

        <SectionLabel>Frequently Asked Questions</SectionLabel>

        <h2 className="max-w-lg text-4xl font-bold leading-[1.15] tracking-tight text-[#242424] sm:text-5xl">
          Everything You
        <br/>
          Need to Know.
        </h2>

        <p className="mt-6 max-w-md text-sm leading-8 text-[#555555] sm:text-base">
          Explore answers to common questions about our export services,
          international shipping, documentation, products and business
          processes.
        </p>

        {/* Contact Card */}
        <div className="relative mt-10 overflow-hidden rounded-[1.7rem] bg-[#242424] p-7 text-white shadow-xl sm:p-9">

          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10" />
          <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full border border-white/10" />

          <div className="relative">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#A8BD63] text-[#242424]">
              <Headphones size={24} />
            </div>

            <h3 className="text-2xl font-bold">
              Still have questions?
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/65">
              Our team is ready to help you with your export requirements
              and international trade enquiries.
            </p>

            <Link
              href="#contact"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#A8BD63] px-6 py-3 text-sm font-bold text-[#242424] transition-all duration-300 hover:bg-[#C1D38D] hover:gap-4"
            >
              Contact Our Team
              <ArrowUpRight size={17} />
            </Link>

            <div className="mt-8 flex items-center gap-3 border-t border-white/15 pt-6">
              <Mail size={17} className="shrink-0 text-[#C1D38D]" />
              <a
                href="mailto:info@canadianaexports.ca"
                className="break-all text-sm text-white/75 transition hover:text-[#C1D38D]"
              >
                info@canadianaexports.ca
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* RIGHT FAQ ACCORDION */}
      <div className="space-y-3">

        {(showAllFaqs ? faqs : faqs.slice(0, 4)).map((faq, index) => {
          const isActive = activeFaq === index;

          return (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: index * 0.04,
              }}
              className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                isActive
                  ? "border-[#A8BD63] bg-white shadow-lg shadow-[#242424]/[0.06]"
                  : "border-[#D9D9D9] bg-white/70 hover:border-[#A8BD63]/70 hover:bg-white"
              }`}
            >
              <div className="flex items-center gap-2 px-5 py-5 sm:px-6 sm:py-6">
                {/* Main question button */}
                <button
                  type="button"
                  aria-expanded={isActive}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setActiveFaq(isActive ? -1 : index)}
                  className="flex min-w-0 flex-1 items-center gap-4 text-left"
                >
                  {/* Number */}
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold transition-colors duration-300 ${
                      isActive
                        ? "bg-[#242424] text-[#C1D38D]"
                        : "bg-[#F0F0F0] text-[#A8BD63]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Question */}
                  <span className="min-w-0 flex-1 text-sm font-bold leading-6 text-[#242424] sm:text-base">
                    {expandedQuestions[index] ||
                    faq.question.length <= QUESTION_LIMIT
                      ? faq.question
                      : `${faq.question.slice(0, QUESTION_LIMIT).trim()}...`}
                  </span>

                  {/* Toggle Icon */}
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isActive
                        ? "rotate-180 bg-[#A8BD63] text-[#242424]"
                        : "bg-[#F0F0F0] text-[#A8BD63]"
                    }`}
                  >
                    <ChevronDown size={19} />
                  </span>
                </button>

                {/* Read more / Read less */}
                {faq.question.length > QUESTION_LIMIT && (
                  <button
                    type="button"
                    aria-label={
                      expandedQuestions[index]
                        ? "Show shorter question"
                        : "Show full question"
                    }
                    onClick={() =>
                      setExpandedQuestions((previous) => ({
                        ...previous,
                        [index]: !previous[index],
                      }))
                    }
                    className="shrink-0 text-xs font-bold text-[#A8BD63] underline decoration-[#A8BD63] underline-offset-4 transition hover:text-[#242424] sm:text-sm"
                  >
                    {expandedQuestions[index] ? "Read less" : "Read more"}
                  </button>
                )}
              </div>

              {/* Answer */}
              <div
                id={`faq-answer-${index}`}
                className={`grid transition-all duration-300 ease-in-out ${
                  isActive
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="ml-[3.75rem] border-t border-[#DDDDDD] px-4 pb-6 pt-4 sm:ml-[4.5rem] sm:mr-6 sm:px-0">
                    <p className="text-sm leading-7 text-[#555555]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          );
        })}

        {/* Show more / show less FAQs */}
        {faqs.length > 4 && (
          <div className="flex justify-center pt-4">
            <button
              type="button"
              onClick={() => {
                setShowAllFaqs((previous) => !previous);
                setActiveFaq(-1);
              }}
              aria-expanded={showAllFaqs}
              className="inline-flex items-center gap-2 rounded-full bg-[#242424] px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-[#A8BD63]"
            >
              {showAllFaqs ? "Show Less" : "View All FAQs"}
              <ChevronDown
                size={17}
                className={`transition-transform duration-300 ${
                  showAllFaqs ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}

        {/* Bottom note */}
        <div className="flex items-center gap-3 px-2 pt-5">
          <ShieldCheck
            size={19}
            className="shrink-0 text-[#A8BD63]"
          />
          <p className="text-xs leading-6 text-[#777777]">
            Need specific information? Get in touch with our team
            for assistance with your requirements.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>


      {/* CONTACT - LIGHT OLIVE */}
  


<section id="contact" className="bg-white py-20 lg:py-24">
  <div className="mx-auto max-w-7xl px-5 lg:px-8">

    <div className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#354A25] via-[#536A3B] to-[#718A50] p-8 text-white shadow-xl sm:p-12 lg:p-16">

      {/* SOFT BACKGROUND LIGHT EFFECTS */}
      <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-[#A8BD63]/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-[#263206]/15 blur-[100px]" />

      {/* LARGE DECORATIVE BACKGROUND ICONS */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <Globe2
          className="absolute -left-10 top-5 text-white/[0.07]"
          size={190}
          strokeWidth={0.8}
        />

        <Ship
          className="absolute left-[38%] bottom-0 text-white/[0.07]"
          size={155}
          strokeWidth={0.8}
        />

        <Truck
          className="absolute right-[30%] -top-8 text-white/[0.06]"
          size={145}
          strokeWidth={0.8}
        />

        <Package
          className="absolute -right-8 bottom-0 text-white/[0.07]"
          size={175}
          strokeWidth={0.8}
        />

        <Leaf
          className="absolute right-[12%] top-1/2 -translate-y-1/2 text-white/[0.05]"
          size={115}
          strokeWidth={0.8}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">

        {/* LEFT CONTENT */}
        <div>
          <SectionLabel light>Get In Touch</SectionLabel>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-5xl">
            Need reliable logistics solutions?
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-8 text-white/90 sm:text-base">
            Reach out for a free logistics consultation today.
          </p>

          <a
            href="mailto:info@canadianaexports.ca"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#263206] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#F2F2F2] hover:shadow-xl"
          >
            Get Quote
            <ArrowRight size={17} />
          </a>
        </div>

        {/* RIGHT CONTACT DETAILS */}
        <div className="space-y-6 rounded-2xl border border-white/25 bg-white/10 p-6 shadow-lg backdrop-blur-md sm:p-8">

          {/* EMAIL */}
          <a
            href="mailto:info@canadianaexports.ca"
            className="group flex items-start gap-4"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white transition duration-300 group-hover:bg-white group-hover:text-[#536A3B]">
              <Mail size={21} />
            </div>

            <div className="min-w-0">
              <p className="text-sm font-medium text-white/85">
                Email
              </p>
              <p className="mt-1 break-all text-sm font-bold text-white sm:text-base">
                info@canadianaexports.ca
              </p>
            </div>
          </a>

          <div className="border-t border-white/25" />

          {/* PHONE */}
          <a
            href="tel:+18676690242"
            className="group flex items-start gap-4"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white transition duration-300 group-hover:bg-white group-hover:text-[#536A3B]">
              <Phone size={21} />
            </div>

            <div>
              <p className="text-sm font-medium text-white/85">
                Phone
              </p>
              <p className="mt-1 text-sm font-bold text-white sm:text-base">
                +1 867-669-0242
              </p>
            </div>
          </a>

          <div className="border-t border-white/25" />

          {/* ADDRESS */}
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white">
              <MapPin size={21} />
            </div>

            <div>
              <p className="text-sm font-medium text-white/85">
                Address
              </p>
              <p className="mt-1 text-sm font-bold leading-7 text-white sm:text-base">
                PO Box 20072, 4910-50th Street,
                <br />
                Yellowknife, NT X1A 3X8, Canada
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>




      {/* FOOTER - DEEP OLIVE */}
      <footer className="bg-[#1E2805] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div className="sm:col-span-2">
            <Link href="#home" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#A8BD63] text-[#242424]">
                <Leaf size={23} />
              </div>
              <div>
                <p className="text-sm font-extrabold tracking-[0.12em]">
                  CANADIANA
                </p>
                <p className="text-[10px] font-semibold tracking-[0.28em] text-[#C1D38D]">
                  EXPORTS
                </p>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              Connecting Canadian quality with international opportunities
              through sourcing, trade coordination and export solutions.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#C1D38D]">Quick Links</h3>
            <div className="mt-5 flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white/65 transition hover:text-[#C1D38D]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#C1D38D]">Contact</h3>
            <div className="mt-5 space-y-4 text-sm text-white/65">
              <p>info@canadianaexports.ca</p>
              <p>+1 867-669-0242</p>
              <p>Yellowknife, NT, Canada</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-6 text-xs text-white/45 sm:flex-row lg:px-8">
            <p>
              © {new Date().getFullYear()} Canadiana Exports. All rights
              reserved.
            </p>
            <p>Connecting Canadian Quality to Global Markets.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
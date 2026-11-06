
"use client";

import { useState } from "react";
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

const images = {
  hero: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1400&q=85",
  about:
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=85",
  shipping:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85",
};

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Our Team", href: "#team" },
  { label: "Contact Us", href: "#contact" },
];

const services = [
  {
    icon: Search,
    title: "Procurement & Sourcing",
    description:
      "We connect buyers with reliable Canadian suppliers and help source quality products to meet international requirements.",
  },
  {
    icon: Truck,
    title: "Logistics & Transportation",
    description:
      "We coordinate transportation and shipping solutions to support efficient movement of goods across international markets.",
  },
  {
    icon: FileCheck,
    title: "Customs & Documentation",
    description:
      "We support export documentation and coordination to help make international trade processes smoother.",
  },
  {
    icon: TrendingUp,
    title: "Export Strategy",
    description:
      "We help businesses identify opportunities and develop practical approaches to entering global markets.",
  },
  {
    icon: Package,
    title: "Supply Chain Solutions",
    description:
      "We coordinate sourcing, suppliers and logistics to support dependable supply chain operations.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "We maintain clear communication and coordination throughout the sourcing and export process.",
  },
];

const faqs = [
  {
    question: "What products does Canadiana Exports specialize in?",
    answer:
      "Our focus includes Canadian potash (MOP) and high-quality agricultural pulses. Contact our team to discuss product specifications and availability.",
  },
  {
    question: "Which markets do you serve?",
    answer:
      "We work to connect Canadian suppliers with international buyers. Contact us with your destination market so we can discuss your requirements.",
  },
  {
    question: "How can I start working with Canadiana Exports?",
    answer:
      "Send us your product requirements, estimated quantities and destination market through our contact section. Our team can then discuss the next steps.",
  },
  {
    question: "Can you help with logistics and export documentation?",
    answer:
      "We provide logistics coordination and export documentation support as part of our trade and sourcing solutions.",
  },
];

const buttonClass =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#A8BD63] px-6 py-3 text-sm font-semibold text-[#263206] transition duration-300 hover:bg-[#C1D38D]";

function SectionLabel({ children, light = false }) {
  return (
    <span
      className={`mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${
        light ? "text-[#C1D38D]" : "text-[#536A0D]"
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
          light ? "text-white" : "text-[#3A4A09]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-8 ${
            light ? "text-white/70" : "text-[#626A51]"
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

  return (
    <main className="overflow-hidden bg-white">
      {/* HEADER */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#263206]/95 text-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#A8BD63] text-[#263206]">
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

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white/75 transition hover:text-[#C1D38D]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="#contact" className={`${buttonClass} hidden lg:inline-flex`}>
            Let's Talk <ArrowUpRight size={17} />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg border border-white/20 p-2 text-white lg:hidden"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-[#263206] px-5 py-5 lg:hidden">
            <nav className="flex flex-col gap-5">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-white/85"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className={buttonClass}
              >
                Let's Talk <ArrowUpRight size={17} />
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-[760px] items-center bg-[#3A4A09] pt-24 text-white"
      >
        <div className="absolute inset-0">
          <img
            src={images.hero}
            alt="International cargo shipping"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#263206] via-[#3A4A09]/95 to-[#3A4A09]/65" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel light>Canadian Trade. Global Reach.</SectionLabel>

            <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
              Connecting Canadian Quality to{" "}
              <span className="text-[#C1D38D]">Global Markets.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
              Building international trade connections through dependable
              sourcing, quality Canadian products and coordinated export
              solutions.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="#services" className={buttonClass}>
                Explore Our Services <ArrowRight size={17} />
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#3A4A09]"
              >
                Discover Our Company
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap gap-8 border-t border-white/20 pt-7">
              <div>
                <p className="text-2xl font-bold text-[#C1D38D]">Canada</p>
                <p className="mt-1 text-xs text-white/65">Our Foundation</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#C1D38D]">Global</p>
                <p className="mt-1 text-xs text-white/65">Our Reach</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#C1D38D]">Quality</p>
                <p className="mt-1 text-xs text-white/65">Our Commitment</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -right-5 -top-5 h-36 w-36 rounded-full border border-[#C1D38D]/40" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl">
              <img
                src={images.shipping}
                alt="Cargo containers ready for export"
                className="h-[490px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#263206]/80 via-transparent to-transparent" />
              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/20 bg-[#263206]/75 p-6 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-[#A8BD63] p-3 text-[#263206]">
                    <Globe2 size={23} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      Connecting Markets
                    </p>
                    <p className="mt-1 text-xs text-white/65">
                      Canadian products. International opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST STRIP - WHITE */}
      <section className="border-b border-[#E8EBDD] bg-white">
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
              <item.icon className="shrink-0 text-[#536A0D]" size={23} />
              <span className="text-xs font-bold text-[#3A4A09] sm:text-sm">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT - WHITE */}
      <section id="about" className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-28 w-28 rounded-tl-[2rem] border-l-4 border-t-4 border-[#A8BD63]" />
            <img
              src={images.about}
              alt="Shipping and international trade operations"
              className="relative h-[430px] w-full rounded-[1.7rem] object-cover shadow-xl sm:h-[520px]"
            />
            <div className="absolute -bottom-7 right-5 max-w-[250px] rounded-2xl bg-[#3A4A09] p-6 text-white shadow-xl sm:right-[-20px]">
              <Wheat className="mb-3 text-[#C1D38D]" size={28} />
              <p className="text-lg font-bold">Rooted in Canada</p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Connecting Canadian products with opportunities around the
                world.
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="About Canadiana Exports"
              title="Your Partner in Canadian Export Solutions"
              description="Canadiana Exports is a Canada-based international trading company focused on connecting quality Canadian products with buyers around the world."
            />

            <p className="mt-5 text-sm leading-8 text-[#626A51]">
              We specialize in potash (MOP) and high-quality agricultural
              pulses, working to connect Canadian producers and suppliers with
              international buyers, distributors, food processors and
              wholesalers.
            </p>

            <p className="mt-4 text-sm leading-8 text-[#626A51]">
              Our approach focuses on dependable sourcing, clear
              communication and practical coordination throughout the export
              process.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { value: "Canadian", label: "Product Focus" },
                { value: "International", label: "Trade Perspective" },
                { value: "Reliable", label: "Coordination" },
                { value: "Quality", label: "Commitment" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-[#E2E8D4] bg-[#EEF1E5] p-4"
                >
                  <p className="font-bold text-[#3A4A09]">{item.value}</p>
                  <p className="mt-1 text-xs text-[#626A51]">{item.label}</p>
                </div>
              ))}
            </div>

            <Link href="#contact" className={`${buttonClass} mt-9`}>
              Learn More About Us <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* STATISTICS - LIGHT OLIVE */}
      <section className="bg-[#EEF1E5] py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 text-center lg:grid-cols-4 lg:px-8">
          {[
            { value: "100+", label: "Business Connections" },
            { value: "10+", label: "Product Categories" },
            { value: "30+", label: "Global Markets" },
            { value: "24/7", label: "Communication Focus" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-3xl font-extrabold tracking-tight text-[#3A4A09] sm:text-4xl">
                {item.value}
              </p>
              <p className="mt-2 text-xs font-medium text-[#626A51] sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES - DARK OLIVE */}
      <section id="services" className="bg-[#3A4A09] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="What We Do"
              title="Trade Solutions Built Around Your Business"
              description="From sourcing to shipment coordination, we support the different stages of international trade."
              light
            />
            <Link href="#contact" className={`${buttonClass} shrink-0`}>
              Discuss Your Requirements <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="group rounded-2xl border border-white/10 bg-[#465B0B] p-7 transition duration-300 hover:-translate-y-1 hover:bg-[#536A0D]"
              >
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#A8BD63] text-[#263206] transition group-hover:bg-[#C1D38D]">
                  <service.icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  {service.description}
                </p>
                <Link
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#C1D38D] transition group-hover:gap-3"
                >
                  Discuss service <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LOGISTICS - WHITE */}
      <section className="bg-white py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Our Approach"
              title="Moving Products. Building Connections."
              description="International trade involves more than moving goods. It takes coordination, communication and an understanding of the requirements at every stage."
            />

            <div className="mt-9 space-y-6">
              {[
                {
                  icon: Search,
                  title: "Understand Your Requirements",
                  text: "We begin by understanding your products, quantities and destination market.",
                },
                {
                  icon: Handshake,
                  title: "Coordinate the Right Connections",
                  text: "We work to connect buyers, suppliers and relevant trade partners.",
                },
                {
                  icon: Ship,
                  title: "Support the Export Process",
                  text: "We coordinate logistics and documentation requirements throughout the process.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EEF1E5] text-[#536A0D]">
                    <item.icon size={23} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#3A4A09]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#626A51]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="#contact" className={`${buttonClass} mt-9`}>
              Start a Conversation <ArrowRight size={17} />
            </Link>
          </div>

          <div className="relative">
            <img
              src={images.shipping}
              alt="International logistics and shipping"
              className="h-[460px] w-full rounded-[1.7rem] object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-[#EEF1E5] p-3 text-[#536A0D]">
                  <Globe2 size={25} />
                </div>
                <div>
                  <p className="font-bold text-[#3A4A09]">
                    International Trade Coordination
                  </p>
                  <p className="mt-1 text-xs text-[#626A51]">
                    Connecting businesses across borders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM - DARK OLIVE */}
      <section id="team" className="bg-[#263206] py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Our Commitment"
              title="A Partnership Approach to Global Trade"
              description="We believe strong business relationships are built through communication, transparency and a shared commitment to quality."
              light
            />
            <div className="mt-8 flex items-start gap-4">
              <div className="rounded-xl bg-[#A8BD63] p-3 text-[#263206]">
                <Handshake size={25} />
              </div>
              <div>
                <h3 className="font-bold text-white">
                  Relationships That Matter
                </h3>
                <p className="mt-2 text-sm leading-7 text-white/65">
                  We value long-term relationships with suppliers, buyers and
                  business partners.
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-4">
              <div className="rounded-xl bg-[#A8BD63] p-3 text-[#263206]">
                <ShieldCheck size={25} />
              </div>
              <div>
                <h3 className="font-bold text-white">
                  Focused on Dependability
                </h3>
                <p className="mt-2 text-sm leading-7 text-white/65">
                  We aim to provide clear communication and dependable
                  coordination throughout the trade process.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#3A4A09] p-8 sm:p-10">
            <SectionLabel light>Let's Work Together</SectionLabel>
            <h3 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Have a product or market opportunity in mind?
            </h3>
            <p className="mt-5 text-sm leading-7 text-white/70">
              Tell us about your business and requirements. We would be glad to
              explore how we can support your international trade goals.
            </p>
            <Link href="#contact" className={`${buttonClass} mt-8`}>
              Connect With Our Team <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ - WHITE */}
      <section className="bg-white py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Questions About Working With Us?"
            description="Find answers to common questions about our products, services and export coordination. Contact us if you need more information."
          />

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isActive = activeFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-xl border transition ${
                    isActive
                      ? "border-[#A8BD63] bg-[#EEF1E5]"
                      : "border-[#E6E9DF] bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isActive ? -1 : index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                  >
                    <span className="text-sm font-bold text-[#3A4A09]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={19}
                      className={`shrink-0 text-[#536A0D] transition ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isActive && (
                    <div className="px-5 pb-5">
                      <p className="text-sm leading-7 text-[#626A51]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT - LIGHT OLIVE */}
      <section id="contact" className="bg-[#EEF1E5] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-[#536A0D] p-8 text-white sm:p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <SectionLabel light>Get In Touch</SectionLabel>
                <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
                  Let's Build Your Next Trade Opportunity.
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-8 text-white/75">
                  Whether you are looking for Canadian products or exploring
                  international trade opportunities, our team is ready to hear
                  from you.
                </p>
                <a
                  href="mailto:info@canadianaexports.ca"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#A8BD63] px-7 py-3.5 text-sm font-bold text-[#263206] transition hover:bg-[#C1D38D]"
                >
                  Contact Our Team <ArrowRight size={17} />
                </a>
              </div>

              <div className="space-y-5 rounded-2xl border border-white/15 bg-[#3A4A09]/70 p-6 sm:p-8">
                <a
                  href="mailto:info@canadianaexports.ca"
                  className="flex items-start gap-4"
                >
                  <Mail className="mt-1 shrink-0 text-[#C1D38D]" size={21} />
                  <div>
                    <p className="text-xs text-white/60">Email</p>
                    <p className="mt-1 break-all text-sm font-semibold">
                      info@canadianaexports.ca
                    </p>
                  </div>
                </a>

                <a href="tel:+18676690242" className="flex items-start gap-4">
                  <Phone className="mt-1 shrink-0 text-[#C1D38D]" size={21} />
                  <div>
                    <p className="text-xs text-white/60">Phone</p>
                    <p className="mt-1 text-sm font-semibold">
                      +1 867-669-0242
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 shrink-0 text-[#C1D38D]" size={21} />
                  <div>
                    <p className="text-xs text-white/60">Address</p>
                    <p className="mt-1 text-sm font-semibold leading-6">
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
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#A8BD63] text-[#263206]">
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

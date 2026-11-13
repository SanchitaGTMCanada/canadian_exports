"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Handshake,
  Truck,
  Users,
  Linkedin,
  Package,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import ContactFooter from "@/components/ContactFooter";

const team = [
  {
    name: "Mohamed Hachim Elazhari",
    qualification: "CCLP, Masters in Logistics",
    role: "Head of Canada and Morocco Region",
    region: "Canada & Morocco",
    image:
      "images/team/Mohamed.webp",
    imagePosition: "center 28%",
    description:
      "Logistics professional with over 3 years of experience in port operations and supply chain management. Skilled in coordinating complex shipping activities, optimizing workflows, and ensuring smooth communication between stakeholders.",
    initials: "MH",
  },
  {
    name: "Julia Solorio",
    qualification: "Marketing Graduate",
    role: "Head of Mexico Region",
    region: "Mexico",
    image:
      "images/team/Julia.webp",
    imagePosition: "center 30%",
    description:
      "Marketing graduate with over 20 years of experience in sales and business development across the furniture, art, and home décor industries. Throughout her career, she has built strong skills in team leadership, strategic planning, and revenue growth.",
    initials: "JS",
  },
];

const trustItems = [
  { label: "Regional Expertise", icon: Globe2 },
  { label: "Global Network", icon: Users },
  { label: "Trusted Partnerships", icon: Handshake },
  { label: "Export Solutions", icon: Truck },
];

function Eyebrow({ children, light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.16em] sm:text-sm ${
        light ? "text-[#C1D38D]" : "text-[#8FA94C]"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          light ? "bg-[#B5CC68]" : "bg-[#A8BD63]"
        }`}
      />
      {children}
    </span>
  );
}

function BackgroundIcons({ light = false }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${
        light ? "text-white/[0.075]" : "text-[#354A25]/[0.16]"
      }`}
    >
      <Globe2 className="absolute -left-8 top-2 h-32 w-32 stroke-[0.9]" />
      <Truck className="absolute right-[24%] top-5 h-20 w-20 stroke-[0.9]" />
      <Package className="absolute bottom-5 right-8 h-24 w-24 stroke-[0.9]" />
      <Users className="absolute bottom-8 left-[35%] h-20 w-20 stroke-[0.9]" />
    </div>
  );
}

export default function OurTeamPage() {
  return (
    <main
      className="overflow-hidden bg-white text-[#252925]"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <Header />

      {/* HERO — matching the About page's light sage-green background */}
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-[#E7EEDC] via-[#DFE8D2] to-[#D6E2C9]">
        <BackgroundIcons />

        <div className="relative mx-auto grid min-h-[440px] max-w-7xl items-center gap-10 px-5 pb-16 pt-32 sm:min-h-[490px] sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-2xl"
          >
            <Eyebrow>Meet the people behind our work</Eyebrow>

            <h1 className="mt-5 text-[2.75rem] font-extrabold leading-[1.08] tracking-[-0.05em] text-[#354A0C] sm:text-[3.5rem] lg:text-[4rem]">
              Our &nbsp;Team.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-[1.8] text-[#354A25]/90 sm:text-lg">
              Meet the regional leaders bringing logistics, marketing and
              international trade experience together to support Canadiana
              Exports&apos; global connections.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#A8BD63] px-6 py-3.5 text-sm font-extrabold text-[#263206] shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:bg-[#C1D38D] sm:text-base"
            >
              Connect With Our Team <ArrowRight size={15} />
            </Link>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="relative z-10"
          >
            <div className="absolute -right-3 -top-3 h-28 w-28 rounded-tr-[2rem] border-r border-t border-[#718A50]/30 sm:-right-4 sm:-top-4 sm:h-36 sm:w-36" />

            <div className="relative overflow-hidden rounded-[1.4rem] border border-white/60 shadow-2xl shadow-[#1E2805]/15 sm:rounded-[1.8rem]">
              <img
                src="/images/team/team.jpg"
                alt="Colleagues working together"
                className="h-[260px] w-full object-cover sm:h-[330px] lg:h-[350px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#172219]/45 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl border border-white/30 bg-[#354A25]/75 px-4 py-3 text-white backdrop-blur-md">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#A8BD63] text-[#263206]">
                  <Globe2 size={19} />
                </span>
                <span>
                  <span className="block text-sm font-extrabold">
                    Connected globally
                  </span>
                  <span className="mt-0.5 block text-xs text-white/80">
                    Regional leadership
                  </span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-[#EDEFE9] bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-5 px-5 py-6 sm:grid-cols-4 sm:py-7 lg:px-8">
          {trustItems.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-2.5 text-sm font-bold text-[#343A31] sm:text-base"
            >
              <Icon size={19} className="text-[#8FA94C]" strokeWidth={1.8} />
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* TEAM CARDS */}
      <section className="bg-[#F1F2EF] pb-16 pt-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {team.map((person, index) => (
              <motion.article
                key={person.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[1.35rem] border border-[#E3E6DE] bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="relative h-[300px] overflow-hidden bg-gradient-to-br from-[#354A25] via-[#536A3B] to-[#718A50] sm:h-[340px]">
                  {person.image ? (
                    <img
                      src={person.image}
                      alt={person.name}
                      style={{ objectPosition: person.imagePosition }}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center text-white">
                      <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/30 bg-white/10 text-4xl font-extrabold tracking-tight text-[#D5E4A5] shadow-xl backdrop-blur-sm">
                        {person.initials}
                      </div>
                      <span className="mt-4 text-xs font-extrabold uppercase tracking-[0.16em] text-white/85">
                        Canadiana Exports
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#172219]/65 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-[#1E2805]/65 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                    {person.region}
                  </span>

                  <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/90 text-[#536A3B] shadow-lg">
                    <Users size={18} />
                  </span>
                </div>

                <div className="p-6 sm:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#718A50]">
                    {person.qualification}
                  </p>

                  <h3 className="mt-3 text-xl font-extrabold leading-snug tracking-[-0.03em] text-[#252925] sm:text-2xl">
                    {person.name}
                  </h3>

                  <p className="mt-2 text-sm font-extrabold leading-5 text-[#536A3B]">
                    {person.role}
                  </p>

                  <div className="my-5 h-px bg-[#E8EBE4]" />

                  <p className="text-base leading-[1.8] text-[#555D53]">
                    {person.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ContactFooter />
    </main>
  );
}

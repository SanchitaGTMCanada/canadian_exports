
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Search,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

const navigation = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/#services" },
  { label: "Our Team", href: "/#team" },
  { label: "Contact Us", href: "/#contact" },
];

// Website search references
const searchReferences = [
  {
    title: "Home",
    description: "Welcome to Canadiana Exports",
    href: "/#home",
    keywords: "home canada exports global markets",
  },
  {
    title: "About Us",
    description: "Learn about our company and export expertise",
    href: "/#about",
    keywords: "about company canadian trading international",
  },
  {
    title: "Our Services",
    description: "Explore our export and logistics services",
    href: "/#services",
    keywords: "services export solutions",
  },
  {
    title: "Procurement & Sourcing",
    description: "Product sourcing and procurement solutions",
    href: "/#services",
    keywords: "procurement sourcing products suppliers",
  },
  {
    title: "Logistics & Transportation",
    description: "Shipping and transportation solutions",
    href: "/#services",
    keywords: "logistics shipping transportation delivery",
  },
  {
    title: "Customs & Documentation",
    description: "Export documentation and customs support",
    href: "/#services",
    keywords: "customs documentation export paperwork",
  },
  {
    title: "Export Strategy",
    description: "Strategic support for international exports",
    href: "/#services",
    keywords: "export strategy international markets",
  },
  {
    title: "Supply Chain Solutions",
    description: "Reliable supply chain management solutions",
    href: "/#services",
    keywords: "supply chain management distribution",
  },
  {
    title: "Customer Support",
    description: "Support and communication for our clients",
    href: "/#services",
    keywords: "customer support help assistance",
  },
  {
    title: "Our Team",
    description: "Meet the people behind Canadiana Exports",
    href: "/#team",
    keywords: "team people members professionals",
  },
  {
    title: "Contact Us",
    description: "Get in touch with Canadiana Exports",
    href: "/#contact",
    keywords: "contact email phone address location",
  },
];

const buttonClass =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#A8BD63] px-6 py-3 text-sm font-semibold text-[#263206] transition duration-300 hover:bg-[#C1D38D]";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter website references
  const filteredReferences = searchQuery.trim()
    ? searchReferences.filter((item) => {
        const searchText = (
          item.title +
          " " +
          item.description +
          " " +
          item.keywords
        ).toLowerCase();

        return searchText.includes(searchQuery.trim().toLowerCase());
      })
    : [];

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#263206]/95 text-white backdrop-blur-xl">

      {/* Header Main Row */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">

        {/* Logo */}
        <Link
          href="/#home"
          className="flex shrink-0 items-center gap-3"
          onClick={closeSearch}
        >
          <img
            src="/logo/logo.jpg"
            alt="Canadiana Exports"
            className="h-20 w-20 rounded-2xl object-contain"
          />

          <div>
            <p className="text-sm font-extrabold tracking-[0.12em]">
              CANADIANA
            </p>
            <p className="text-[10px] font-semibold tracking-[0.28em] text-[#C1D38D]">
              EXPORTS
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
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

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">

          {/* Search Button */}
          <button
            type="button"
            onClick={() => {
              setSearchOpen(!searchOpen);
              setSearchQuery("");
            }}
            aria-label="Search website"
            aria-expanded={searchOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#A8BD63] hover:bg-white/10"
          >
            {searchOpen ? (
              <X size={20} />
            ) : (
              <Search size={20} />
            )}
          </button>

          {/* Linkstart Global Button */}
          <Link
            href="https://linkstratglobal.com/"
            className={buttonClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkstart Global
            <ArrowUpRight size={17} />
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">

          {/* Mobile Search */}
          <button
            type="button"
            onClick={() => {
              setSearchOpen(!searchOpen);
              setMobileMenuOpen(false);
              setSearchQuery("");
            }}
            aria-label="Search website"
            aria-expanded={searchOpen}
            className="rounded-lg border border-white/20 p-2 text-white transition hover:bg-white/10"
          >
            {searchOpen ? (
              <X size={21} />
            ) : (
              <Search size={21} />
            )}
          </button>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setSearchOpen(false);
            }}
            className="rounded-lg border border-white/20 p-2 text-white transition hover:bg-white/10"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X size={23} />
            ) : (
              <Menu size={23} />
            )}
          </button>
        </div>

        {/* Desktop Search Dropdown */}
        {searchOpen && (
          <div className="absolute right-5 top-full z-50 mt-3 hidden w-96 rounded-2xl border border-white/10 bg-[#263206] p-4 shadow-2xl lg:block lg:right-8">

            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50"
              />

              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search anything..."
                autoFocus
                className="w-full rounded-xl border border-white/15 bg-white/10 py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-white/50 focus:border-[#A8BD63]"
              />
            </div>

            {/* Search Results */}
            {searchQuery.trim() && (
              <div className="mt-3 max-h-80 overflow-y-auto">

                <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#C1D38D]">
                  Search References
                </p>

                {filteredReferences.length > 0 ? (
                  filteredReferences.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={closeSearch}
                      className="group flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-white/10"
                    >
                      <div>
                        <p className="text-sm font-semibold text-white transition group-hover:text-[#C1D38D]">
                          {item.title}
                        </p>

                        <p className="mt-1 text-xs text-white/55">
                          {item.description}
                        </p>
                      </div>

                      <ChevronRight
                        size={17}
                        className="shrink-0 text-white/40 transition group-hover:translate-x-1 group-hover:text-[#C1D38D]"
                      />
                    </Link>
                  ))
                ) : (
                  <p className="px-3 py-5 text-center text-sm text-white/60">
                    No matching references found.
                  </p>
                )}
              </div>
            )}

            {!searchQuery.trim() && (
              <p className="px-2 py-4 text-xs text-white/50">
                Search for services, company information, logistics and more.
              </p>
            )}
          </div>
        )}
      </div>

      {/* Mobile Search Dropdown */}
      {searchOpen && (
        <div className="border-t border-white/10 bg-[#263206] px-5 py-4 lg:hidden">

          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50"
            />

            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search anything..."
              autoFocus
              className="w-full rounded-xl border border-white/15 bg-white/10 py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-white/50 focus:border-[#A8BD63]"
            />
          </div>

          {searchQuery.trim() && (
            <div className="mt-3 max-h-64 overflow-y-auto">

              <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#C1D38D]">
                Search References
              </p>

              {filteredReferences.length > 0 ? (
                filteredReferences.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={closeSearch}
                    className="group flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-white/10"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {item.title}
                      </p>

                      <p className="mt-1 text-xs text-white/55">
                        {item.description}
                      </p>
                    </div>

                    <ChevronRight
                      size={17}
                      className="shrink-0 text-white/40"
                    />
                  </Link>
                ))
              ) : (
                <p className="px-3 py-5 text-center text-sm text-white/60">
                  No matching references found.
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#263206] px-5 py-5 lg:hidden">

          <nav className="flex flex-col gap-5">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white/85 transition hover:text-[#C1D38D]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={buttonClass}
            >
              Linkstart Global
              <ArrowUpRight size={17} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

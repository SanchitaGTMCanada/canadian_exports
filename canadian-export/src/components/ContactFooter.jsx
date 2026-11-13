
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactFooter() {
  return (
    <footer className="bg-[#172000] text-white" id="contact">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* MAIN FOOTER */}
        <div className="flex flex-col justify-between gap-8 py-9 sm:flex-row sm:items-center">

          {/* COMPANY LOGO & BRAND */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-white p-1.5 shadow-md">
  <Image
    src="/logo/logo.jpg"
    alt="Canadiana Exports Logo"
    width={140}
    height={140}
    className="h-full w-full object-contain"
  />
</div>

              <div>
                <p className="text-base font-bold tracking-[0.12em] text-white">
                  CANADIANA
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C1D38D]">
                  Exports
                </p>
              </div>
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-6 text-white/75">
              Connecting Canadian quality with global markets.
            </p>
          </div>

          {/* CONTACT INFORMATION */}
          <div className="flex flex-col gap-4 text-sm text-white/85 sm:items-end">

            <a
              href="mailto:info@canadianaexports.ca"
              className="flex items-center gap-3 transition hover:text-[#C1D38D]"
            >
              <Mail size={17} className="shrink-0 text-[#C1D38D]" />
              <span>info@canadianaexports.ca</span>
            </a>

            <a
              href="tel:+18676690242"
              className="flex items-center gap-3 transition hover:text-[#C1D38D]"
            >
              <Phone size={17} className="shrink-0 text-[#C1D38D]" />
              <span>+1 867-669-0242</span>
            </a>

            <div className="flex items-center gap-3">
              <MapPin size={17} className="shrink-0 text-[#C1D38D]" />
              <span>Yellowknife, NT X1A 3X8, Canada</span>
            </div>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="flex flex-col justify-between gap-2 border-t border-white/15 py-5 text-xs text-white/60 sm:flex-row">

          <p>
            © COPYRIGHT {new Date().getFullYear()} All Rights Reserved..
          </p>

          <p>
          Web design by GTM CANADA
          </p>

        </div>

      </div>
    </footer>
  );
}

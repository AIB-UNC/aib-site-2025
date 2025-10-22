import Link from "next/link"
import Image from "next/image"
import { Mail, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-[#13294B] text-white">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left: Logo and Name */}
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Athletes in Business at Carolina" width={28} height={28} className="h-7 w-7" />
            <span className="font-semibold text-white">Athletes in Business at Carolina</span>
          </div>

          {/* Right: Quick Links */}
          <nav className="flex flex-wrap gap-6">
            <Link href="/about" className="text-sm text-white/80 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/resources" className="text-sm text-white/80 hover:text-white transition-colors">
              Resources
            </Link>
            <Link href="/calendar" className="text-sm text-white/80 hover:text-white transition-colors">
              Calendar
            </Link>
            <Link href="/about#alumni" className="text-sm text-white/80 hover:text-white transition-colors">
              Alumni Directory
            </Link>
            <Link href="/get-involved#contact" className="text-sm text-white/80 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-white/90">
            <a
              href="mailto:aib-unc@outlook.com"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              <span className="leading-none">aib-unc@outlook.com</span>
            </a>
            <span className="hidden sm:block h-5 w-px bg-white/50"></span>
            <a
              href="https://instagram.com/aib_unc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
              <span className="leading-none">@aib_unc</span>
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 text-center text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} AIB at UNC</p>
        </div>
      </div>
    </footer>
  )
}

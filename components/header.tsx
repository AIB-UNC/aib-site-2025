import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 md:gap-4">
          <Image
            src="/logo.png"
            alt="Athletes in Business at Carolina"
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 rounded-full object-contain"
          />
          <span className="md:text-[18px] font-semibold leading-none text-[#13294B] font-serif text-xs">
            Athletes in Business
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm hover:text-[#7BAFD4] transition-colors font-semibold font-serif">
            Home
          </Link>
          <Link href="/about" className="text-sm hover:text-[#7BAFD4] transition-colors font-semibold font-serif">
            About
          </Link>
          <Link href="/resources" className="text-sm hover:text-[#7BAFD4] transition-colors font-semibold font-serif">
            Resources
          </Link>
          <Link href="/community" className="text-sm hover:text-[#7BAFD4] transition-colors font-semibold font-serif">
            Community
          </Link>
          <Link href="/calendar" className="text-sm hover:text-[#7BAFD4] transition-colors font-semibold font-serif">
            Calendar
          </Link>
          <Link href="/get-involved" className="text-sm hover:text-[#7BAFD4] transition-colors font-semibold font-serif">
            Get Involved
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="secondary" className="bg-[#7BAFD4] hover:bg-[#6A9FC4] text-white font-bold font-serif" asChild>
            <Link href="/get-involved">Join AIB</Link>
          </Button>
          <Button variant="outline" className="hidden md:inline-flex font-bold text-secondary font-serif" asChild>
            <Link href="/get-involved#contact">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

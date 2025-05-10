"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2 md:py-4">
        {/* Logo + Full Title */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-tr.png"
            alt="ISTE Logo"
            width={48}
            height={48}
            className="rounded object-contain"
          />
          <span className="text-sm sm:text-base md:text-lg font-semibold text-blue-800 leading-tight">
            Indian Society for{' '}
            <span className="block sm:inline text-blue-600">
              Technical Education, NITK
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-blue-50 data-[state=open]:bg-blue-50">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-blue-50 data-[state=open]:bg-blue-50">
                Events
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/events"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700"
                      >
                        <div className="text-sm font-medium">All Events</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                          View all our upcoming and past events
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/events/workshops"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700"
                      >
                        <div className="text-sm font-medium">Workshops</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">Hands-on learning experiences</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/events/hackathons"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700"
                      >
                        <div className="text-sm font-medium">Hackathons</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                          Competitive coding and building events
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/team" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-blue-50 data-[state=open]:bg-blue-50">
                  Team
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-blue-50 data-[state=open]:bg-blue-50">
                Projects
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/projects"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700"
                      >
                        <div className="text-sm font-medium">All Projects</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">Browse our project showcase</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/projects/featured"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700"
                      >
                        <div className="text-sm font-medium">Featured Projects</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">Our most impactful work</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blogs" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-blue-50 data-[state=open]:bg-blue-50">
                  Blogs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/she" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-pink-50 px-4 py-2 text-sm font-medium text-pink-700 transition-colors hover:bg-pink-100 hover:text-pink-800 focus:bg-pink-100 focus:text-pink-800 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-pink-100 data-[state=open]:bg-pink-100">
                  SHE
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/gallery" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-blue-50 data-[state=open]:bg-blue-50">
                  Gallery
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>


        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex items-center justify-between px-4 h-16 border-b">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-tr.png"
              alt="ISTE Logo"
              width={48}
              height={48}
              className="rounded object-contain"
            />
            <span className="text-base font-semibold text-blue-800 leading-tight">
              Indian Society for{' '}
              <span className="block sm:inline text-blue-600">
                Technical Education, NITK
              </span>
            </span>
          </Link>
          <button onClick={toggleMenu} className="p-2">
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        <nav className="px-4 py-6">
          <ul className="space-y-4">
            <li>
              <Link href="/" onClick={toggleMenu} className="block text-lg text-blue-700">
                Home
              </Link>
            </li>
            <li>
              <details className="group">
                <summary className="flex justify-between items-center text-lg text-blue-700 cursor-pointer">
                  Events <ChevronDown className="w-5 h-5" />
                </summary>
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <Link href="/events" onClick={toggleMenu} className="block text-gray-700">
                      All Events
                    </Link>
                  </li>
                  <li>
                    <Link href="/events/workshops" onClick={toggleMenu} className="block text-gray-700">
                      Workshops
                    </Link>
                  </li>
                  <li>
                    <Link href="/events/hackathons" onClick={toggleMenu} className="block text-gray-700">
                      Hackathons
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/team" onClick={toggleMenu} className="block text-lg text-blue-700">
                Team
              </Link>
            </li>
            <li>
              <details className="group">
                <summary className="flex justify-between items-center text-lg text-blue-700 cursor-pointer">
                  Projects <ChevronDown className="w-5 h-5" />
                </summary>
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <Link href="/projects" onClick={toggleMenu} className="block text-gray-700">
                      All Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects/featured" onClick={toggleMenu} className="block text-gray-700">
                      Featured Projects
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/blogs" onClick={toggleMenu} className="block text-lg text-blue-700">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/she" onClick={toggleMenu} className="block text-lg text-pink-600">
                SHE
              </Link>
            </li>
            <li>
              <Link href="/gallery" onClick={toggleMenu} className="block text-lg text-blue-700">
                Gallery
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

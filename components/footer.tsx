import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-tr.png"
              alt="ISTE"
              width={80}
              height={80}
              className="rounded"
            />
            <span className="text-6xl font-bold text-blue-50">ISTE</span>
          </Link>
            <p className="text-blue-200 mb-4">
              Fostering innovation, creativity, and technical excellence among students at NITK.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/istenitk/" className="text-blue-200 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="text-blue-200 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://www.instagram.com/istenitk/" className="text-blue-200 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.linkedin.com/company/istenitk/posts/?feedView=all" className="text-blue-200 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-blue-200 hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-blue-200 hover:text-white">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-blue-200 hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-blue-200 hover:text-white">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/she" className="text-blue-200 hover:text-white">
                  SHE
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-blue-200 hover:text-white">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Special Interest Groups</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/groups/web-development" className="text-blue-200 hover:text-white">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/groups/machine-learning" className="text-blue-200 hover:text-white">
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/groups/robotics" className="text-blue-200 hover:text-white">
                  Robotics
                </Link>
              </li>
              <li>
                <Link href="/groups/cybersecurity" className="text-blue-200 hover:text-white">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/groups" className="text-blue-200 hover:text-white">
                  View All Groups
                </Link>
              </li>
            </ul>
          </div> */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-blue-200 shrink-0 mt-0.5" />
                <span className="text-blue-200">
                  National Institute of Technology Karnataka, Surathkal, Mangalore - 575025
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-200" />
                <Link href="mailto:iste@nitk.edu.in" className="text-blue-200 hover:text-white">
                  iste@nitk.edu.in
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-blue-800 pt-8 text-center text-blue-200">
          <p>© {new Date().getFullYear()} NITK Technical Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

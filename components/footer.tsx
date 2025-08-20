"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Heart, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/SH-Sajid",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/sajjad-hossain",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:shsajid3012@gmail.com",
      label: "Email",
    },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-t from-muted/20 to-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2 space-y-4">
              <div>
                <h3 className="text-2xl font-serif font-bold text-foreground">MD. Sajjad Hossain</h3>
                <p className="text-muted-foreground">AI/ML Developer & Computer Vision Specialist</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                Passionate about building intelligent systems that make a difference. Specializing in machine learning,
                computer vision, and AI development for environmental and agricultural applications.
              </p>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-accent text-accent-foreground">Available for opportunities</Badge>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Connect</h4>
              <div className="flex flex-col space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <social.icon className="h-4 w-4" />
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
              <div className="pt-4">
                <Button
                  onClick={scrollToTop}
                  variant="outline"
                  size="sm"
                  className="glass hover:glass-strong transition-all duration-300 bg-transparent"
                >
                  Back to Top
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border/30 glass-strong">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {currentYear} MD. Sajjad Hossain</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <span>Built with care</span>
                <Heart className="h-3 w-3 text-red-500" />
                <span>— Dhaka</span>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="glass hover:glass-strong transition-all duration-300 h-8 w-8"
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

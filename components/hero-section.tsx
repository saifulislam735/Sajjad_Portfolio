"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Download, MessageCircle } from "lucide-react"
export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/neural-network-pattern.png')] bg-repeat opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="space-y-4">
              <Badge variant="secondary" className="glass px-4 py-2 text-sm font-medium">
                Available for opportunities
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                Building intelligent systems that <span className="text-primary">make a difference</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Highly motivated Computer Science Engineering graduate with specialized expertise in{" "}
                <span className="text-accent font-semibold">machine learning</span>,{" "}
                <span className="text-accent font-semibold">computer vision</span>, and{" "}
                <span className="text-accent font-semibold">AI development</span>. Passionate about leveraging AI and
                data science to solve complex problems in environmental monitoring and agricultural technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="glass-strong hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              >
                View Projects
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <a
                href="/MD. Sajjad Hossain Resume.pdf"          // put your PDF file inside /public folder
                target="_blank"             // opens in new tab
                rel="noopener noreferrer"  // security best practice
                download                   // forces download if browser supports it
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="glass hover:glass-strong transition-all duration-300 bg-transparent"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </a>

              <Button
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="glass hover:glass-strong transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Specialized in</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Machine Learning",
                  "Computer Vision",
                  "Deep Learning",
                  "Python",
                  "TensorFlow",
                  "PyTorch",
                  "OpenCV",
                  "YOLO",
                ].map((tech) => (
                  <Badge key={tech} variant="outline" className="glass hover:glass-strong transition-all duration-200">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="glass-strong rounded-2xl p-8 space-y-6 hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <img
                    src="/shajid.jpg"
                    alt="MD. Sajjad Hossain"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2">
                  <Badge className="bg-accent text-accent-foreground shadow-lg">AI/ML Expert</Badge>
                </div>
              </div>

              <div className="text-center space-y-2">
                <h3 className="text-xl font-serif font-bold text-foreground">MD. Sajjad Hossain</h3>
                <p className="text-muted-foreground">Computer Science Engineering Graduate</p>
                <p className="text-sm text-muted-foreground">East West University • Dhaka, Bangladesh</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-primary">5+</p>
                  <p className="text-xs text-muted-foreground">AI Projects</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-accent">3.8</p>
                  <p className="text-xs text-muted-foreground">CGPA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
